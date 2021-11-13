import React from 'react';
import { Button, Container, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar bg="light"  sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand to="/home"><img src="https://ld-prestashop.template-help.com/prestashop_eze_255/img/factory-ave-logo-1594044132.jpg" alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link className="link" to="/home">Home</Link>
                        <Link className="link" to="/products">AllProducts</Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button>:
                            <Link className="link" to="/login">Login</Link>}
                        <Navbar.Text>
                            <span className="hi">Hello</span> <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default Header;