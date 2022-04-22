import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import pic from "../components/logo.jpg";
import './Header.css'
function header() {
  return (
   <>
    <img
        src={pic}
        width="90"
        height="90"
        className="logo"
        alt="React Bootstrap logo"
      />
      <div className='ktm'></div>
      <div className='ktm1'></div>
      <h1 className='heading1'>
    E-challan System
  </h1>
      <h1 className='heading'>
    Kathmandu Traffic police
  </h1>
  <Navbar  expand="xxl" fixed='Top' className='mainav'> 
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    
      <Nav className="nav1">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        <NavDropdown title="Gallary" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/1.1">Traffic police</NavDropdown.Item>
          <NavDropdown.Item href="#action/1.2">Ranks</NavDropdown.Item>
          <NavDropdown.Item href="#action/1.3">Vechile</NavDropdown.Item>
          <NavDropdown.Item href="#action/1.4">Branches</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#contact">AboutUs</Nav.Link>
      </Nav>
      <Nav className='nav2'>
      <Nav.Link href="#register">Register</Nav.Link>
        <Nav.Link href="#login">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
  )
}

export default header