import React, { useState } from 'react';
import NearbyHospitals from './NearbyHospitals';

const DoctorAppointmentWebsite = () => {
  const [isNearbyHospitalsOpen, setIsNearbyHospitalsOpen] = useState(false);

  const openNearbyHospitals = () => {
    setIsNearbyHospitalsOpen(true);
  };

  return (
    <div>
      <h1>Doctor Appointment Website</h1>
      <button onClick={openNearbyHospitals}>Nearby Hospitals</button>
      {isNearbyHospitalsOpen && <NearbyHospitals />}
    </div>
  );
};

export default DoctorAppointmentWebsite;
