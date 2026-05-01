from fastapi import APIRouter, Depends
from app.db.neo4j_client import neo4j_client
from app.services.dependencies import get_current_user

router = APIRouter()

@router.get("/{account_id}")
def get_graph(account_id: str, current_user=Depends(get_current_user)):
    return neo4j_client.get_account_graph(account_id)
