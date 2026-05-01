from fastapi import APIRouter
from app.ml.fraud_model import predict_fraud
from pydantic import BaseModel

router = APIRouter()

class FraudCheckRequest(BaseModel):
    amount: float
    frequency: int = 1
    account_age_days: int = 30
    avg_tx_size: float = 0.0

@router.post("/detect")
def detect_fraud(req: FraudCheckRequest):
    features = {
        "amount": req.amount,
        "frequency": req.frequency,
        "account_age_days": req.account_age_days,
        "avg_tx_size": req.avg_tx_size if req.avg_tx_size else req.amount
    }
    result = predict_fraud(features)
    return {
        "amount": req.amount,
        "is_fraud": result["is_fraud"],
        "fraud_score": result["fraud_score"]
    }
