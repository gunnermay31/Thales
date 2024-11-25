# Thales hackathon
# Byte Busters

This project is a web application which can be used in Aviation that helps in creating a secure account using JWT tokens OTP verification through mail of the pilot or admin (where admin can be airline operations head or fleet manager) for the pilot by verifying the detils such as type of Liscenseits Expirydate by cross referencing to the international database. 
The airline can manage there flight by fetching the details like where and how the fleet is performing, provides endpoints for various functionalities related to Aircraft health (Refer to Health and detection Feature)
Aircraft fuel consumption (Refer to Health and detection Feature)
Optimal path followed by aircraft (Refer to Health and detection Feature)
Optimal path can be even findout from one airport to another (Refer to Health and detection Feature)
Aircrafts Airworthiness (Damage Detection)
Aircrafts wiring fault (Damage Detection)
Real time damage detection (live feed from CCTV camera can be fed to the yolo model)

Feature 1:

Damage Detection:
installation:
1. use split termial in vs code .
2. bring the driectory to frontend and backend in each of the terminal.
3. backend terminal type the following commands:
   python -m venv venv (create the environment)
   venv\Scripts\activate (activate the environment scripts)
   pip install -r requirements.txt (install the libraries of python)
   python app.py (to run the server)
4. frontend terminal type the below commands:
   npm i (install the node modules)
   npm start (start the frontend)

   caution make sure you run the server before the running the frontend.
   
Feature 2:

health and path detection:
installation:
1. use split termial in vs code .
2. bring the driectory to frontend and backend in each of the terminal.
3. backend terminal type the following commands:
   python -m venv venv (create the environment)
   venv\Scripts\activate (activate the environment scripts)
   pip install -r requirements.txt (install the libraries of python)
   python app.py (to run the server)
4. frontend terminal type the below commands:
   npm i (install the node modules)
   npm start (start the frontend)

   caution make sure you run the server before the running the frontend.
   Also check if the calls are going to backend by using postman.
   eg:

   http://0.0.0.0:8000/aircraft
   body:
   {
  "flight_number": "AI840",
  "aircraft_model": "A359"
   }


   http://0.0.0.0:8000/get_paths
   body:
   {
  "src": [28.556555, 77.10079],
  "des": [12.982267, 80.16378],
  "on_air": false
   }


   Feature 3:
   
Damage Detection:
installation: simply type npm i and npm run dev
caution please make sure the env file is filled for both src and server.



It is built using FastAPI and serves as the backend for a dashboard application.

# Video Demonstration 
https://drive.google.com/file/d/1BnRD0wx_UGHR1b_dem75wRMOJEiKv4yC/view?usp=sharing (shortest Path detection)
https://drive.google.com/file/d/1vprL9PT3DnytM9fLvxdxOduSVUP31Foi/view?usp=sharing (Account managment)

# Backend for shortest Path detection.
## Installation

1. Clone the repository: `git clone https://github.com/gunnermay31/Thales.git`
2. Navigate to the project directory: `cd dashboard-project`
3. Install dependencies: `pip install -r requirements.txt`
   
# Backend for shortest Path detection.
## Installation

1. Clone the repository: `git clone https://github.com/gunnermay31/Thales.git`
2. Navigate to the project directory: `cd dashboard-project`
3. Install dependencies: `npm i`

## Usage

1. Start the server: `uvicorn main:app --reload` or  `python -m api_code.app`
2. The API will be running on `http://localhost:8000`

## Endpoints

- `/health`: Returns a dictionary indicating the health of the application.
- `/aircraft`: Endpoint to get information about an aircraft.
- `/get_paths`: Endpoint to retrieve optimal routes from a source to a destination.
- `/nearest_airport`: Endpoint to identify the nearest airport to a provided airplane's current position.

## Understand the endpoints
https://drive.google.com/file/d/1vIQNWAlIqkTXcRujP5Vcz8oooG5KDR8I/view?usp=sharing

## Dependencies

- `fastapi`: FastAPI framework for building APIs.
- `numpy`: Numerical computing library.
- `uvicorn`: ASGI server for FastAPI.
- `openap`: Library for calculating aircraft emissions.
- `traffic`: Library for working with airport data.
- `json`: Library for working with JSON data.

## Code Structure

- `main.py`: Entry point for the application.
- `api_code/algorithms/`: Implementation of a graph data structure and path algorithm.
-  `api_code/utils/`: Implementation of all util helpers.

# Frontend
This project visualizes flight paths on a map using React and Leaflet. It fetches real-time flight data, displays it on the map, and provides an optimal path for the selected flight. Additionally, it includes a comprehensive Health Dashboard to monitor the status and health of specific flights.

## Features

- **Real-time Flight Data Visualization**: Displays domestic and international flights on a map with distinct icons.
- **Flight Details**: View details such as flight ID, number, altitude, velocity, aircraft model, departure, and arrival airports.
- **Optimal Path Calculation**: Calculate and display the optimal path for a selected flight.
- **Health Dashboard**: A separate dashboard to view the health status of different flights, including maintenance history, emissions data, and nearby assistance information.

## Installation

### Prerequisites

Ensure you have the following installed on your system:
- Node.js (v12 or later)
- npm (v6 or later)

### Steps

1. Clone the repository:

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

This will launch the application and open it in your default browser at `http://localhost:3000`.

## Usage

### Viewing Flights

1. **View Domestic and International Flights**:
   - Domestic flights are marked with a specific icon.
   - International flights have a different icon.
   - Click on any flight marker to see flight details in a popup.

2. **Finding Optimal Path**:
   - In the popup, click the "Find Optimal Path" button.
   - A loading spinner will indicate the processing of the request.
   - Once the optimal path is fetched, it will be displayed on the map.

3. **Searched Flight**:
   - If you search for a specific flight, its details and position will be highlighted on the map.
   - You can also find the optimal path for a searched flight if it's a domestic flight.

### Health Dashboard

1. **Navigate to Health Dashboard**:
   - Go to the Health Dashboard page from the main navigation menu.

2. **Search for Flight Health Information**:
   - Enter a flight number in the search input and press Enter.
   - The dashboard will display the health status and other relevant details of the flight.

3. **Flight Health Information**:
   - The Health Dashboard provides information such as:
     - The dashboard also provides details about the nearest airport to the flight's current position, including the airport's name, latitude, longitude, elevation, GPS code, IATA code, city, and website link.   
     - Detailed emissions data for the flight, including CO2, H2O, SOx, and NOx emissions, is displayed along with corresponding graphs.
     - The maintenance history of the flight is displayed in a table, showing past maintenance events and their details.


### Example Usage of Health Dashboard

- Go to the Health Dashboard page from the main navigation menu.
- Enter a flight number (e.g., "AA123") in the search input and press Enter.
- The dashboard will display the health status and other relevant details of the flight.



## Code Overview

### Main Components

- **MapComponent.jsx**:
  - Handles the rendering of the map using `react-leaflet`.
  - Displays flight markers and paths.
  - Fetches and displays the optimal path for selected flights.

- **HealthDashboard.js**:
  - Manages the state and rendering of the Health Dashboard.
  - Fetches health data for a specific flight and displays it.
  - Displays information such as emissions data, nearby assistance, and maintenance history.

- **App.js**:
  - Main application component that integrates `MapComponent`, `HealthDashboard`, and manages state.


### Example Request for Optimal Path

```json
{
  "src": [latitude, longitude],
  "des": [latitude, longitude],
  "on_air": true
}
```

### Example Response for Optimal Path

```json
{
  "fly_status": "Can Fly",
  "paths": [
    [[lat1, lng1], [lat2, lng2], ...],
    ...
  ]
}
```

## Dependencies

- React
- Leaflet
- Axios
- react-icons


## Understand the UI
https://drive.google.com/file/d/1BnRD0wx_UGHR1b_dem75wRMOJEiKv4yC/view?usp=sharing (shortest Path detection)
https://drive.google.com/file/d/1vprL9PT3DnytM9fLvxdxOduSVUP31Foi/view?usp=sharing (Account managment)

