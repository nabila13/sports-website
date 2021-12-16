import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import img from "../../image/logo.png";
const Header = () => {
  let nav={
    position: "sticky",
    zIndex:"3",
    width:"100%",
  }
    return (
        <div>
            <Navbar style={nav} collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand >
    <div className='d-flex flex-direction-row justify-content-center align-items-center'>
      <img width="90px" height="60px" src={img} alt="logo" />
    <h3 className='text-danger fw-bolder ms-1'>Sports Club</h3>
    </div>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} className='text-danger fw-bolder' to="/home">Home</Nav.Link>
      <Nav.Link as={Link} className='text-danger fw-bolder' to="/about">About Us</Nav.Link>
      <Nav.Link as={Link} className='text-danger fw-bolder' to="/courses">Courses</Nav.Link>
      <Nav.Link as={Link} className='text-danger fw-bolder' to="/reviews">Reviews</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    );
};

export default Header;