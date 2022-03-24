import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    const nameStyle = {
        textDecoration: 'none',
        color: 'black',
        fontSize: 'larger',
        fontFamily: "'Lato', sansSerif",
        display: 'flex',
        alignItems: 'center',
        height: '3rem'
    }

    return (
        <div className="container-fluid px-0 navBar">
            <Container className="container-fluid px-0" >
                <Row className="navRows">
                    <Col className="nameCol col-6"><Link to="/" style={{ textDecoration: 'none', color: "black" }} >Michael Zadra</Link></Col>
                    <Col className="navCol col-3 test"><Link to="/about-me" style={{ textDecoration: 'none', color: "black" }} >About Me</Link></Col>
                    <Col className="navCol col-3"><Link to="/projects" style={{ textDecoration: 'none', color: "black" }} >Projects</Link></Col>
                    {/* <Col className="navCol col-2"><Link to="/contact" style={{ textDecoration: 'none', color: "black" }} >Contact</Link></Col> */}
                </Row>
            </Container>
        </div>
    );
}

export default Navbar;
