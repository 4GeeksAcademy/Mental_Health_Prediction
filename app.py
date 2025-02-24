from flask import Flask, render_template, request, jsonify
import numpy as np
import tensorflow as tf
import joblib
import pandas as pd

app = Flask(__name__)

# Load Trained Model and Scaler
model = tf.keras.models.load_model("models/model.h5")
scaler = joblib.load("models/scaler.pkl")

# Features Used in Training
FEATURES = ["gender", "days_indoors", "growing_stress", "mood_swings", "coping_struggles", "social_weakness"]

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get Form Data
        data = [float(request.form[feature]) for feature in FEATURES]
        
        # Convert to Numpy Array and Scale
        input_data = np.array([data]).reshape(1, -1)
        input_data_scaled = scaler.transform(input_data)

        # Make Prediction
        prediction_prob = model.predict(input_data_scaled)
        prediction = (prediction_prob > 0.5).astype(int)[0][0]

        # Convert Prediction to Meaningful Label
        result = "High Risk" if prediction == 1 else "Low Risk"

        return jsonify({"prediction": result, "probability": float(prediction_prob[0][0])})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
