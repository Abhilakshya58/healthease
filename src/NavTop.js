import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavTop.css'
import { Link } from 'react-router-dom';




export const NavTop = () => {
    const logout=()=>{
        localStorage.clear()
        window.location.reload()
    }

  return (
    <div className='navtop'>
         <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">HealthEase</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-auto">
          <Nav.Link as={Link} to="/test">Doctors</Nav.Link>
            <Nav.Link as={Link} to="/hospsital">Hospitals</Nav.Link>
            <Nav.Link >About Us</Nav.Link>
            <Nav.Link >Medicine</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link onClick={logout}>Logout</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}
