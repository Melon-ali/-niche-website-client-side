import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand to="/home"><img src="https://ld-prestashop.template-help.com/prestashop_eze_255/img/factory-ave-logo-1594044132.jpg" alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#products">Products</Nav.Link>
                        <Nav.Link href="#reviews">Reviews</Nav.Link>
                        <Nav.Link href="#featured">Featured Posts</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default Header;