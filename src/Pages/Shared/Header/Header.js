import React from 'react';
import { Button, Container, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
const Header = () => {

    const loginImg = "https://i.ibb.co/0jz6gHX/avatar.png";

    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar bg="light"  sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand to="/home"><img src="https://ld-prestashop.template-help.com/prestashop_eze_255/img/factory-ave-logo-1594044132.jpg" alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link className="link" to="/home">Home</Link>
                        <Link className="link" to="/services">Services</Link>
                
                        <Navbar.Text>
                            <span className="hi">Hello</span> <a href="#login" style={{textDecoration: 'none', color: 'gray'}}>{user?.displayName}</a>
                        </Navbar.Text>
                        <h1>
                            {user?.email && <img className="user-photo" src={user?.photoURL || loginImg} alt="" />}
                        </h1>
                        {user?.email &&
                            <Link className="link" to="/dashboard">Dashboard</Link>
                        }
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button>:
                            <Link className="link" to="/login">Login</Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default Header;