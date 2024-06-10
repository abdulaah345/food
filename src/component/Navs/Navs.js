import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navs.css';
const Navs = () => {
  return (
         <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Explore Food</Nav.Link>
            <Nav.Link href="#link">Reviews</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>


           
          </Nav>
          <Nav>
            <Nav.Link >01025242523</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navs
