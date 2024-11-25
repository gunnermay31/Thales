# **Thales Hackathon**

## **Byte Busters**

This project is a comprehensive web application tailored for the aviation industry. It facilitates secure account creation for pilots and administrators (airline operations heads or fleet managers) using **JWT tokens** and **OTP verification via email**. The system verifies critical details such as pilot licenses and expiry dates by cross-referencing with an international database.

The platform empowers airlines to manage their fleet effectively by providing endpoints and tools for:

- **Aircraft Health Monitoring** (refer to the Health and Detection feature)
- **Aircraft Fuel Consumption Analysis** (refer to the Health and Detection feature)
- **Optimal Path Detection** for flights (refer to the Health and Detection feature)
- **Airport-to-Airport Optimal Route Identification** (refer to the Health and Detection feature)
- **Aircraft Airworthiness Assessment** (refer to the Damage Detection feature)
- **Aircraft Wiring Fault Detection** (refer to the Damage Detection feature)
- **Real-Time Damage Detection** (refer to the Damage Detection feature) via live CCTV feed integrated with YOLO models.

---

## **Features**

### **Feature 1: Damage Detection**

This feature identifies damage to aircraft systems, including structural and wiring issues. 

#### **Installation**

1. Use a split terminal in VS Code and navigate to both `frontend` and `backend` directories in separate terminals.
2. **Backend Setup:**
   - Create a virtual environment:
     ```bash
     python -m venv venv
     ```
   - Activate the virtual environment:
     ```bash
     venv\Scripts\activate  # For Windows
     source venv/bin/activate  # For Linux/Mac
     ```
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Start the server:
     ```bash
     python app.py
     ```
3. **Frontend Setup:**
   - Install dependencies:
     ```bash
     npm i
     ```
   - Start the frontend:
     ```bash
     npm start
     ```
4. Ensure the backend server is running before starting the frontend.

---

### **Feature 2: Health and Path Detection**

This feature provides real-time insights into flight health and calculates optimal routes between airports.

#### **Installation**

Follow the same steps as **Feature 1** for both frontend and backend setup.

#### **API Endpoints**:
Test the backend API using tools like **Postman**:
- **Get Aircraft Details**:
  - Endpoint: `http://0.0.0.0:8000/aircraft`
  - Body:
    ```json
    {
      "flight_number": "AI840",
      "aircraft_model": "A359"
    }
    ```
- **Get Optimal Paths**:
  - Endpoint: `http://0.0.0.0:8000/get_paths`
  - Body:
    ```json
    {
      "src": [28.556555, 77.10079],
      "des": [12.982267, 80.16378],
      "on_air": false
    }
    ```

---

### **Feature 3: Real-Time Damage Detection**

This feature integrates live CCTV feeds into YOLO-based models for real-time aircraft damage detection.

#### **Installation**
- Simply run:
  ```bash
  npm i
  npm run dev
  ```
- Ensure `.env` files for both frontend and backend are correctly configured.

---

## **Project Structure**

This project uses **FastAPI** for the backend and React with Leaflet for the frontend.

### **Backend: Shortest Path Detection**

#### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/gunnermay31/Thales.git
   ```
2. Navigate to the project directory:
   ```bash
   cd health-and-path-detection/backend
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

#### **Usage**
- Start the server:
  ```bash
  uvicorn main:app --reload
  ```
- The API will run on `http://localhost:8000`.

#### **Endpoints**
- `/health`: Check API health.
- `/aircraft`: Retrieve aircraft information.
- `/get_paths`: Calculate optimal routes.
- `/nearest_airport`: Identify the nearest airport based on coordinates.

---

### **Frontend: Real-Time Visualization and Health Dashboard**

This part of the project visualizes flight paths and provides a detailed dashboard for monitoring aircraft health.

#### **Features**
- **Flight Path Visualization**: Real-time domestic and international flight data with optimized routes.
- **Health Dashboard**: Comprehensive details on emissions, maintenance history, and aircraft status.
- **Interactive Map**: Click on markers for flight details and route calculations.

#### **Installation**
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

#### **Usage**
1. View domestic and international flights on the map with different markers.
2. Click a marker to see flight details.
3. Calculate optimal paths and monitor aircraft health via the dashboard.

---

## **Example API Requests**

### **Optimal Path**
**Request**:
```json
{
  "src": [latitude, longitude],
  "des": [latitude, longitude],
  "on_air": true
}
```

**Response**:
```json
{
  "fly_status": "Can Fly",
  "paths": [
    [[lat1, lng1], [lat2, lng2], ...],
    ...
  ]
}
```

---

## **Dependencies**

### **Backend**
- **FastAPI**: API framework
- **Uvicorn**: ASGI server
- **NumPy**: Numerical operations
- **Traffic**: Aviation data
- **OpenAP**: Aircraft property management

### **Frontend**
- **React**: UI framework
- **Leaflet**: Map rendering
- **Axios**: HTTP requests

---

## **Video Demonstrations**
1. **Real-Time Damage Detection**: [Watch here](https://drive.google.com/file/d/14CRltw8-AeaxWN_gQfE6ZSmMS6zWOmgK/view?usp=sharing)
2. **Shortest Path Detection**: [Watch here](https://drive.google.com/file/d/1BnRD0wx_UGHR1b_dem75wRMOJEiKv4yC/view?usp=sharing)
3. **Account Management**: [Watch here](https://drive.google.com/file/d/1vprL9PT3DnytM9fLvxdxOduSVUP31Foi/view?usp=sharing)
   

