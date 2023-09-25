// DoctorsList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Test.css'
import doctorsData from './doctorsData.json'

function DoctorsList() {
  return (
    <div className="doctors-container">
      {doctorsData.map((doctor) => (
        <div key={doctor.id} className="doctor-card">
          <img src={doctor.image} alt={doctor.name} />
          <h2>{doctor.name}</h2>
          <p>{doctor.specialty}</p>
          <Link to={`/appointment/${doctor.id}`}>Book Appointment</Link>
        </div>
      ))}
    </div>
  );
}

export default DoctorsList;

