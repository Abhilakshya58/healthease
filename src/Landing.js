import React, { useEffect, useState } from 'react';
import {auth,provider} from './config'
import { signInWithPopup } from 'firebase/auth';
import Main from './Main';
import './Landing.css'
import NearbyHospitals from './NearbyHospitals';
import DoctorAppointmentWebsite from './DoctorAppointmentWebsite';

const Landing = () => {
    const [value,setValue] = useState('')
  const handleSignInWithGoogle = async () => {
    signInWithPopup(auth, provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email)
    })

    
  };
  useEffect(()=>{
    setValue(localStorage.getItem('email'))
})

  return (
    <div className="landing">

        {value?<Main/>:<>
        <img src='https://www.drupal.org/files/styles/grid-3-2x/public/project-images/medical.png?itok=rLaTqW4z' alt="Health Logo" />
      <h2>HealthEase</h2>
      <div className="grp_btn">    
        <button onClick={handleSignInWithGoogle} className="btn btn-primary btn-lg">Sign In with Google</button>
      </div>
            
        </>}

       
    </div>


      
  )
}

export default Landing;
