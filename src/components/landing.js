import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './landing.css';
import { Link } from "react-router-dom";
import { FaCode } from 'react-icons/fa'

function Landing() {
    const styleObj = {
        color: "#4a54f1",
    }

    const fontStyles = {
        color: '#4a54f1', 
        fontSize: '2.5rem'
    };
    
    return (
        <div className="container-fluid px-0 rowHeight">
            <div className="spacer"></div>
            <Container className="container-fluid px-0 main-container" >
                <Row className="rows">
                    <Col className="columns col-7">
                        <div>< FaCode style={fontStyles}/>
                        </div>
                        <div className="landing-container">
                            <p className="bigFont">Full Stack Software Developer based out of Sacramento, <span style={styleObj}>California.</span></p>
                            <p className="smallFont">I want to help you build the next project that will change your business forever.{'\n'}Whether that requires front-end or back-end development, I've got you covered.</p>
                            <Button className="learnMoreBtn"><Link to = "/about-me" style={{ textDecoration: 'none', color: "white" }} >Learn More</Link>
                            </Button>
                        </div>
                    </Col>
                    <Col className="columns col-5">
                        <div className="imgContainer">
                            <img src="https://media.istockphoto.com/photos/sacramento-at-night-picture-id91506347?b=1&k=20&m=91506347&s=170667a&w=0&h=SY7BIFMRhyO9IuANnMG1FHEzgCGu_JudqfGoSKfy04M=" className="landingImg" alt="sacramento"/>
                        </div>
                        {/* <div className="selectorsContainer">
                        Testing


                        </div> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Landing;