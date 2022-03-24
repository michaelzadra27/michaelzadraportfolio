import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './footer.css';
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs"
import { DiGithubBadge } from "react-icons/di"

function Footer() {

    const btnStyle = {
        textDecoration: 'none',
        color: 'black',
        fontSize: 'larger',
        fontFamily: "'Lato', sansSerif",

        "&:hover": {
            background: "#efefef"
        },
    }

    const linkStyles = {
        color: '#4a54f1',
        fontSize: '4vh'
    };

    const textDec = {
        textDecoration: 'none'
    }

    return (
        <div>
            <Container className="container-fluid px-0" >
                <Row className="footer">
                    <Col className="footerBar col-12">
                        <div className="footerLinks">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/michael-zadra-870165154/">
                                < BsLinkedin style={linkStyles} />
                            </a>
                        </div>
                        <div className="footerLinks"><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1udp7jQVZ5gc4n5_Mr23MnEVWSIj4xYBOdhxpUJr7fIM/edit?usp=sharing" style={textDec}>Resume Download</a></div>

                        <div className="footerLinks">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/michaelzadra27" >
                                < DiGithubBadge style={linkStyles}/>
                            </a>
                        </div>
                        <div className="footerLinks">michaelzadra27@gmail.com</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;