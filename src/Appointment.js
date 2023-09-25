// AppointmentPage.js
import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Appointment.css'

function Appointment() {
  const { doctorId } = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState({ name: '', date: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can perform additional logic here, e.g., sending data to a server

    // Redirect to the main page
    history.push('/');

    // Show a toast notification
    toast.success('Appointment booked successfully!');
  };

  return (
    <div>
      <h1>Book an Appointment</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </label>
        </div>
        <div>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </label>
        </div>
        <button type="submit">Book Appointment</button>
      </form>
      <Link to="/">Back to Doctors List</Link>
    </div>
  );
}

export default Appointment;
