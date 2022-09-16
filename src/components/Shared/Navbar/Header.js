import React from 'react';
import styles from './Header.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';


const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Raiyan's Reservation</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">List Property</Nav.Link>
                        <Nav.Link href="#link">Location</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                        <Nav.Link href="#link">Privacy & Legal</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <NavDropdown title="Booking" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Room Booking</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Flight booking
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Car Booking</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <Button href="#action/3.4">
                                Separated link
                            </Button>
                            <Button>Login</Button>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;