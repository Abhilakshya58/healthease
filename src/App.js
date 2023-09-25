import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import NearbyHospitals from './NearbyHospitals'; // Import the NearbyHospitals component
import HospitalSearch from './HospitalSearch.js';
import Test from './Test';
import Appointment from './Appointment';
import Confirmation from './Confirmation';
import HospitalFinder from './HospitalFinder';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/test"  component={Test} />
          <Route path="/appointment/:id" component={Appointment} />
        <Route path="/confirmation" element={<Confirmation/>} />
        <Route path="/hospsital" component={HospitalFinder} />
        <ToastContainer position="bottom-right" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
