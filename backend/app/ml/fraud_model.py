import pandas as pd
from sklearn.ensemble import IsolationForest
import joblib
import os

MODEL_PATH = "isolation_forest_v2.pkl"

def train_dummy_model():
    # UPGRADED: Added advanced ML features (frequency, account age, avg size)
    df = pd.DataFrame({
        "amount": [10, 50, 100, 500, 800, 10000, 50000, 20],
        "frequency": [1, 2, 1, 5, 2, 15, 20, 1],       # Tx per day
        "account_age_days": [300, 150, 200, 30, 100, 2, 1, 400],
        "avg_tx_size": [15, 40, 90, 450, 600, 8000, 45000, 25]
    })
    model = IsolationForest(contamination=0.15, random_state=42)
    model.fit(df[["amount", "frequency", "account_age_days", "avg_tx_size"]])
    joblib.dump(model, MODEL_PATH)

def predict_fraud(features: dict) -> dict:
    if not os.path.exists(MODEL_PATH):
        train_dummy_model()
    model = joblib.load(MODEL_PATH)
    
    input_data = [[
        features.get("amount", 0), 
        features.get("frequency", 1), 
        features.get("account_age_days", 30), 
        features.get("avg_tx_size", features.get("amount", 0))
    ]]
    
    prediction = model.predict(input_data)
    score = model.decision_function(input_data)[0]
    
    return {
        "is_fraud": bool(prediction[0] == -1),
        "fraud_score": float(score)
    }
