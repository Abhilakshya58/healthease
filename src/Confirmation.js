// Confirmation.js
import React from 'react';
import './Confirmation.css'; // Import the CSS file for Confirmation

function Confirmation() {
  return (
    <div className="confirmation-container">
      <h2>Appointment Booked</h2>
      <p>Your appointment has been successfully booked!</p>
      {/* Add a link to return to the doctor list */}
    </div>
  );
}

export default Confirmation;
