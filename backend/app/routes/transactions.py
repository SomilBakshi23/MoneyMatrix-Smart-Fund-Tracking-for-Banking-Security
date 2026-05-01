import uuid
import logging
import datetime
from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from pydantic import BaseModel
from app.db.postgres import Transaction, Account
from app.db.neo4j_client import neo4j_client
from app.ml.fraud_model import predict_fraud
from app.services.dependencies import get_db, get_current_user
from app.ws import manager

# Setup Rate Limiter & Logger
from slowapi import Limiter
from slowapi.util import get_remote_address
limiter = Limiter(key_func=get_remote_address)
logger = logging.getLogger(__name__)

router = APIRouter()

class TxRequest(BaseModel):
    sender_id: str
    receiver_id: str
    amount: float
    frequency: int = 1
    account_age_days: int = 30
    avg_tx_size: float = 0.0

@router.post("/")
@limiter.limit("10/minute") # Protect from spam
async def create_transaction(request: Request, tx: TxRequest, db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    
    # 1. ACCOUNT VALIDATION
    sender = db.query(Account).filter(Account.id == tx.sender_id).first()
    receiver = db.query(Account).filter(Account.id == tx.receiver_id).first()

    if not sender or not receiver:
        raise HTTPException(status_code=404, detail="Sender or receiver account not found")
    if sender.balance < tx.amount:
        raise HTTPException(status_code=400, detail="Insufficient funds")

    # 2. FRAUD DETECTION
    features = {
        "amount": tx.amount,
        "frequency": tx.frequency,
        "account_age_days": tx.account_age_days,
        "avg_tx_size": tx.avg_tx_size if tx.avg_tx_size else tx.amount
    }
    ml_result = predict_fraud(features)
    is_fraud_rule = tx.amount > 10000 
    is_fraud_final = 1 if (ml_result["is_fraud"] or is_fraud_rule) else 0

    tx_id = str(uuid.uuid4())
    
    # 3. UPDATE POSTGRES
    sender.balance -= tx.amount
    receiver.balance += tx.amount
    new_tx = Transaction(id=tx_id, sender_id=tx.sender_id, receiver_id=tx.receiver_id, amount=tx.amount, is_fraud=is_fraud_final)
    db.add(new_tx)
    db.commit()

    # 4. UPDATE NEO4J
    neo4j_client.create_transfer(tx.sender_id, tx.receiver_id, tx.amount, tx_id)
    
    db.refresh(new_tx)

    # 5. WEBSOCKET BROADCAST
    await manager.broadcast({
        "type": "NEW_TRANSACTION",
        "data": {
            "id": tx_id,
            "sender_id": tx.sender_id,
            "receiver_id": tx.receiver_id,
            "amount": tx.amount,
            "is_fraud": is_fraud_final,
            "timestamp": new_tx.timestamp.isoformat() if new_tx.timestamp else datetime.datetime.utcnow().isoformat()
        }
    })

    # 6. AUDIT LOGGING
    if is_fraud_final:
        logger.warning(f"🚨 FRAUD ALERT: Tx {tx_id} flagged. Sender: {tx.sender_id}, Amount: ${tx.amount}")
    else:
        logger.info(f"✅ Tx {tx_id} processed cleanly. {tx.sender_id} -> {tx.receiver_id} (${tx.amount})")

    return {
        "tx_id": tx_id, 
        "fraud_detected": bool(is_fraud_final), 
        "fraud_score": ml_result["fraud_score"],
        "message": "Transaction processed successfully"
    }

@router.get("/")
def get_transactions(db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    # Simple Role Check example
    if current_user.role not in ["admin", "investigator"]:
        logger.warning(f"Unauthorized access attempt by {current_user.email}")
        raise HTTPException(status_code=403, detail="Not authorized to view all transactions")
    
    return db.query(Transaction).order_by(Transaction.timestamp.desc()).limit(50).all()
