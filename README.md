# **🧠 Mental Health Risk Prediction - ML Flask App**  

This project aims to **predict mental health risk** based on user inputs, leveraging **machine learning models** and a **Flask-based web interface**. The trained model processes user data and provides predictions, along with **interactive visualizations** to enhance insights.  

---

## **📌 Project Overview**  

This project involves:  
✅ **Data Collection & Preprocessing**: Cleaning and preparing a dataset with **17 features**.  
✅ **Model Training & Selection**: Evaluating **Decision Tree, Random Forest, SVM, and Neural Networks**.  
✅ **Web Application**: A Flask-based **interactive UI** to take user input and predict mental health risks.  
✅ **Visualization**: Using **Bootstrap themes, dropdowns, and line graphs** for predictions.  

---

## **📂 Project Structure**  



📂 **MENTAL_HEALTH_PREDICTION/** *(Main Project Folder)*  
│── 📜 **app.py** → Main Flask backend for model inference  
│── 📜 **requirements.txt** → List of dependencies for the project  
│── 📜 **README.md** → Project documentation and setup instructions  
│── 📁 **models/** → Trained machine learning models & scalers  
│   │── 📜 **model.h5** → Trained deep learning model  
│   │── 📜 **scaler.pkl** → Scaler for preprocessing input data  
│── 📁 **static/** → Frontend assets (CSS & JavaScript)  
│   │── 📜 **style.css** → Custom styling for the user interface  
│   │── 📜 **script.js** → JavaScript for interactive UI elements  
│── 📁 **templates/** → HTML files for rendering the frontend  
│   │── 📜 **index.html** → Main interface for user predictions  
│   │── 📜 **eda.html** → Exploratory Data Analysis (EDA) visualization page  
│── 📜 **DecisionTreeClassifier.pkl** → Trained Decision Tree model  
│── 📜 **GaussianNB.pkl** → Trained Naive Bayes model  
│── 📜 **KNeighborsClassifier.pkl** → Trained K-Nearest Neighbors (KNN) model  
│── 📜 **LogisticRegression.pkl** → Trained Logistic Regression model  
│── 📜 **RandomForestClassifier.pkl** → Trained Random Forest model  
│── 📜 **Mental Health Dataset.csv** → Original dataset used for training  
│── 📜 **mental-health-dataset-updated.ipynb** → Data preprocessing & EDA notebook  







## **🛠 Features**  

✔️ **ML Model Selection:** Choose from **multiple models** (Decision Tree, Random Forest, SVM, etc.).  
✔️ **User-Friendly Interface:** **Dropdown menus, Bootstrap themes, and an intuitive UI.**  
✔️ **Live Visualization:** Line graph shows prediction trends in **real-time**.  
✔️ **Interactive Data Analysis:** Button to **view analysis & insights.**  

---

## **📊 Data Used**  

The dataset consists of **292,364 entries** and **17 features**, including:  

- **Age, Gender, Sleep Duration, Stress Level, Physical Activity**  
- **Family History, Mental Health History, Work Interest, Social Weakness**  
- **Self-employed, Care Options, Treatment, Growing Stress**  

**Target Variable** → `mental_health_risk` (0 = Low, 1 = High)  

---

## **🚀 Installation Guide**  

### **1️⃣ Install Dependencies**  
```bash
pip install -r requirements.txt
```

### **2️⃣ Start the Flask Web App**  
```bash
python app.py
```
Open in browser: **`http://127.0.0.1:5000`** 🎯  



## **🛠 Technologies Used**  

- **Python** (Flask, Pandas, NumPy, Scikit-Learn, TensorFlow, Keras)  
- **Machine Learning** (Decision Tree, Random Forest, SVM, Neural Networks)  
- **Bootstrap, Chart.js** (For Styling & Graphs)  
- **Matplotlib, Seaborn, Plotly** (For Data Visualization)  
- **Gunicorn** (For Deployment)  

---

## **📈 Future Improvements**  

🚀 **Better Feature Engineering** – More psychological variables for accurate predictions.  
📊 **More AI Models** – Deploy **Deep Learning-based models** for better insights.  
🌐 **Cloud Deployment** – Host on **AWS/GCP/Heroku** for live access.  



🎯 **Ready to Predict Mental Health Risks?** Run the project and get started! 🚀