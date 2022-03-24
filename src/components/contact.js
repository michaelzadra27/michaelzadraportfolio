import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './contact.css';
import { Link } from "react"



function Contact() {
    return (
        <div>
            <div className="spacer"></div>
            <Container className="container-fluid px-0 contactPage" >
                <Row className= "gitRow">
                    <Col className="columns col-5 leftContactCol">
                    </Col>
                    <Col className="columns col-7 rightContactCol">
                    </Col>
                </Row>
                <div className='colSpacer'></div>
                <Row className= "linkedinRow">
                    <Col className="columns col-5 leftContactCol">
                    </Col>
                    <Col className="columns col-7 rightContactCol">
                    </Col>
                </Row>
                <div className='colSpacer'></div>
                <Row className= "resumeRow">
                    <Col className="columns col-5 leftContactCol">
                    </Col>
                    <Col className="columns col-7 rightContactCol">
                    </Col>
                </Row>

            </Container>
            
        </div>
    );
}

export default Contact;