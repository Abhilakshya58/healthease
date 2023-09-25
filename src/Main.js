import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Main.css'
import { NavTop } from './NavTop';
import Slider from './Slider';
import Card from './Card';
import CardData from './CardData.json'
import './Card.css'
import './DoctorCard.css'
import DoctorCard from './DoctorCard';


const Main = () => {
    const logout =()=>{
        localStorage.clear();
        window.location.reload()
    }

    
const DoctorData = [
  { imageUrl: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg', heading: 'Doctor 1', subheading: 'Subheading 1' },
  { imageUrl: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg', heading: 'Doctor 2', subheading: 'Subheading 2' },
  { imageUrl: 'https://media.istockphoto.com/id/1200980392/photo/medical-concept-of-asian-beautiful-female-doctor-in-white-coat-with-stethoscope-waist-up.jpg?s=612x612&w=0&k=20&c=nD_1Tn11kWcMZwZfnyA-lYAvNKcBeoEK_KLObBnN6Jg=', heading: 'Doctor 3', subheading: 'Subheading 3' },
  { imageUrl: 'https://media.istockphoto.com/id/1200980392/photo/medical-concept-of-asian-beautiful-female-doctor-in-white-coat-with-stethoscope-waist-up.jpg?s=612x612&w=0&k=20&c=nD_1Tn11kWcMZwZfnyA-lYAvNKcBeoEK_KLObBnN6Jg=', heading: 'Doctor 3', subheading: 'Subheading 3' },
  { imageUrl: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg', heading: 'Doctor 3', subheading: 'Subheading 3' },
  { imageUrl: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg', heading: 'Doctor 3', subheading: 'Subheading 3' },
  { imageUrl: 'https://example.com/image3.jpg', heading: 'Doctor 3', subheading: 'Subheading 3' },
  { imageUrl: 'https://example.com/image3.jpg', heading: 'Doctor 3', subheading: 'Subheading 3' },
  { imageUrl: 'https://example.com/image3.jpg', heading: 'Doctor 3', subheading: 'Subheading 3' },
  
  // ...
];

return (

  <div className="main">
    <>      

      <NavTop/>
      {/* <button>Search</button> */}
      <div className="hero">
        <div className="hero_info">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quo!
          </h3>
          <h4>Lorem ipsum dolor sit, amet consectetur adipisicing eli
          </h4>
        </div>
        <img  src='https://img.freepik.com/premium-vector/team-doctors_352318-134.jpg?w=2000'/>
      </div>

      <div className="card-container">
        {CardData.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} heading={card.heading} />
        ))}
      </div>

      <h2>Top Doctors</h2>

      <div className="doctor-card-list">
  {DoctorData.map((Doctor, index) => (
    <DoctorCard
      key={index}
      imageUrl={Doctor.imageUrl}
      heading={Doctor.heading}
      subheading={Doctor.subheading}
      className="DoctorCard cards"
    />
  ))}
</div>


    </>
  </div>





   
  );
}

export default Main;



