from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from app.db.postgres import User
from app.services.auth_service import get_password_hash, verify_password, create_access_token
from app.services.dependencies import get_db

router = APIRouter()

class AuthRequest(BaseModel):
    email: str
    password: str
    role: str = "analyst"

@router.post("/register")
def register(req: AuthRequest, db: Session = Depends(get_db)):
    if db.query(User).filter(User.email == req.email).first():
        raise HTTPException(status_code=400, detail="Email already registered")
    
    new_user = User(email=req.email, hashed_password=get_password_hash(req.password), role=req.role)
    db.add(new_user)
    db.commit()
    return {"message": "User registered successfully"}

@router.post("/login")
def login(req: AuthRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == req.email).first()
    if not user or not verify_password(req.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    token = create_access_token(data={"sub": user.email, "role": user.role})
    return {"access_token": token, "token_type": "bearer"}
