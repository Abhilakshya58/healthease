import React from 'react';


const DoctorCard = ({ imageUrl, heading, subheading }) => {
  return (
    <div className="doctor-card">
      <img src={imageUrl} alt={heading} />
      <h3>{heading}</h3>
      <p>{subheading}</p>
    </div>
  );
};

export default DoctorCard;