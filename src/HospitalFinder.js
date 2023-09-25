// HospitalFinder.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './HospitalFinder.css';
import hospitalData from './hospitals_combined.json'; // Import the combined JSON data
import DoctorList from './DoctorList';

function HospitalFinder() {
  const [location, setLocation] = useState('');
  const [hospitals, setHospitals] = useState([]);
  const [error, setError] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const findHospitals = () => {
    const locationData = hospitalData.find((data) => data.location === location);

    if (locationData) {
      setHospitals(locationData.hospitals);
      setError('');
    } else {
      setHospitals([]);
      setError('No location found.');
    }
  };

  return (
    <Router>
      <div className="hospital-finder">
        <h1>Hospital Finder</h1>
        <input
          type="text"
          placeholder="Enter location (Shimla, Khajjiar, Dalhousie)"
          value={location}
          onChange={handleLocationChange}
        />
        <button onClick={findHospitals}>Find Hospitals</button>
        {error && <p className="error">{error}</p>}
        <div className="hospital-list">
          <h2>Nearby Hospitals</h2>
          <ul>
            {hospitals.map((hospital, index) => (
              <li key={index}>
                <Link to={`/doctors/${hospital.name}`}>{hospital.name}</Link>
                <br />
                {hospital.address}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Switch>
        <Route path="/doctors/:hospitalName" component={DoctorList}>
        </Route>
      </Switch>
    </Router>
  );
}

export default HospitalFinder;
