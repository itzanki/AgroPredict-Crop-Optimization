# AgroPredict: Crop Yield Prediction and Optimization

Developing an AI-based platform to predict crop yields using historical agricultural data, weather patterns, and soil health metrics. The system provides actionable recommendations for farmers to optimize irrigation, fertilization, and pest control, tailored to specific crops and regional conditions.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

AgroPredict uses machine learning to help farmers make informed decisions, improve yield, and optimize resource usage. By analyzing environmental factors, it provides data-driven insights for smarter farming.

---

## Tech Stack

- **Frontend:** React (running on `localhost:5000`)
- **Backend:** Spring Boot (running on `localhost:8080`)
- **ML Model:** Scikit-Learn, Pandas, Numpy, Joblib (running on `localhost:8000`)
- **ML Model API:** FastAPI (integrated with backend)
- **Database:** MySQL (port `3306`)
- **UI/UX Design:** Figma

---

## System Architecture

```
Frontend (React) <--> Backend (Spring Boot) <--> ML Model (FastAPI)
                                   |
                              MySQL Database
```

- The frontend communicates with the backend via REST APIs.
- The backend is responsible for business logic, API endpoints, and connecting to the ML model (exposed via FastAPI).
- MySQL is used for persistent storage.

---

## Getting Started

### Prerequisites

- Node.js & npm
- Java & Maven (for Spring Boot)
- Python 3.x (for FastAPI ML Model)
- MySQL

### Local Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/AgroPredict-Crop-Optimization.git
cd AgroPredict-Crop-Optimization
```

#### 2. Setup MySQL Database
- Ensure MySQL is running on port 3306.
- Create the necessary schema and update credentials in the Spring Boot configuration.

#### 3. Start the Backend (Spring Boot)
```bash
cd Backend
# Configure database settings in application.properties
mvn spring-boot:run
# The backend will run on http://localhost:8080
```

#### 4. Start the ML Model API (FastAPI)
```bash
cd "Random Forest"
# (Set up your Python environment and install dependencies)
python -m uvicorn api:app --reload
```

#### 5. Start the Frontend (React)
```bash
cd Frontend
npm run dev
# The frontend will run on http://localhost:5000
```

---

## Usage

- Access the web application at https://agro-predict-crop-optimization.vercel.app/.
- Input crop, region, and other required data.
- View yield predictions and optimization recommendations.

---

## Developers

- **Ankit Kumar** - Full Stack & ML Developer

---

## Contact

For any queries, suggestions, or contributions, please contact:

- Ankit Kumar
- Or open an issue in this repository.

---
