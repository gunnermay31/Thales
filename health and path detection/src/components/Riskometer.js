// // Riskometer.js
// import React from 'react';
// import ReactSpeedometer from 'react-d3-speedometer';
// import { generateFlightHealthConditions } from './MaintanaceData';

// const Riskometer = () => {
//   // Generate sample flight health conditions
//   const flightHealth = generateFlightHealthConditions(1); // Provide a flight ID

//   // Map engine health to a numeric value for the speedometer
//   let riskLevel;
//   switch (flightHealth.engineHealth) {
//     case 'Good':
//       riskLevel = 33;
//       break;
//     case 'Fair':
//       riskLevel = 66;
//       break;
//     case 'Poor':
//       riskLevel = 100;
//       break;
//     default:
//       riskLevel = 0;
//   }

//   return (
//     <div>
//       <h2>Riskometer</h2>
//       <ReactSpeedometer
//         value={riskLevel}
//         minValue={0}
//         maxValue={100}
//         segments={3}
//         segmentColors={['green', 'orange', 'red']}
//         needleColor="steelblue"
//         textColor="black"
//       />
//       <p style={{marginTop:'-6rem'}}> Engine Health: {flightHealth.engineHealth}</p>
//       <p>System Checks: {flightHealth.systemChecks}</p>
//       <p>Sensor Readings: {flightHealth.sensorReadings}</p>
//     </div>
//   );
// };

// export default Riskometer;

// Riskometer.js
import React, { useEffect, useState } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import { generateMaintenanceHistory } from './MaintanaceData';

const Riskometer = ({ flightID }) => {
  const [riskLevel, setRiskLevel] = useState(0);
  const [flightHealth, setFlightHealth] = useState({});

  useEffect(() => {
    // Generate sample flight health conditions
    const flightData = generateMaintenanceHistory(flightID); // Provide a flight ID
    setRiskLevel(flightData.riskLevel);
    setFlightHealth(flightData);
  }, [flightID]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Riskometer</h2>
      <ReactSpeedometer
        value={riskLevel}
        minValue={0}
        maxValue={100}
        segments={3}
        segmentColors={['#64ffda', '#ffcc00', '#ff6666']} // Green, Yellow, Red for risk levels
        needleColor="#40c9a2" // Bright green needle resembling cockpit HUD
        textColor="#e0eafc" // Soft blue/white text
      />
      <p style={styles.riskLevelText}>Risk Level: {riskLevel.toFixed(2)}</p>
      <p style={styles.infoText}>Maintenance Type: {flightHealth.maintenanceType}</p>
      <p style={styles.infoText}>Parts Replaced: {flightHealth.partsReplaced}</p>
      <p style={styles.infoText}>
        Next Scheduled Maintenance: {new Date(flightHealth.nextScheduledMaintenance).toLocaleDateString()}
      </p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#0a1327', // Cockpit-inspired dark navy background
    color: '#e0eafc', // Soft blue/white text
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Subtle shadow for depth
    textAlign: 'center',
  },
  heading: {
    fontSize: '1.8rem',
    fontFamily: "'Orbitron', sans-serif", // Futuristic font for aviation theme
    color: '#64ffda', // Bright green, similar to HUD
    marginBottom: '20px',
  },
  riskLevelText: {
    marginTop: '-1.5rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#64ffda', // Green for risk level
  },
  infoText: {
    fontSize: '1rem',
    color: '#e0eafc', // Soft blue/white
    marginTop: '10px',
  },
};

export default Riskometer;
