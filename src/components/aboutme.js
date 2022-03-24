import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './aboutme.css';
import { Link } from "react-router-dom";
import { FaJsSquare, FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { DiMongodb, DiMysql } from 'react-icons/di'

function AboutMe() {
    const meStyle = {
        textDecoration: 'none',
        color:'black',
        fontSize:'larger',
        fontFamily: "'Lato', sansSerif",
        display: 'flex',
        alignItems: 'center',
        height: '3rem'
    }

    const fontStyles = {
        color: 'black',
        fontSize: '4rem'
    };

    const btnStyle = {
        textDecoration:'none',
        color: 'black',
        fontSize: 'larger',
        fontFamily: "'Lato', sansSerif",
    
        "&:hover": {
            background: "#efefef"
          },
    }

    return (
        <div>
            <Container className="container-fluid px-0" >
            <div className="spacer"></div>
                <Row className="aboutMeRows">
                    <Col className="columns col-5">
                        <div className="leftCol">
                            <img src="https://res.cloudinary.com/dcteqhlcf/image/upload/v1648093217/croppedwithlylah_aqcoa6.jpg" className="aboutMeImg" alt="sacramento"/>
                        </div>
                    </Col>
                    <Col className="columns col-7">
                        <div className="aside">
                            <h2 className ="bigFont">Working, understandable Code.</h2>
                            <h6 className ="smallFont">That's what I strive for when building any application.</h6>
                            <p>My background doesn't start with a computer science degree, but what it does contain is strong technical aptitude and a willingness to learn. I've spent years working in internal IT and as a process analyst which instilled analytical thinking that's greatly aided my development journey.</p>
                            <p className ="subHeading">Areas of Focus</p>
                            <div className ="iconRow">
                            <FaHtml5 style={fontStyles}/>
                            <FaReact style={fontStyles}/>
                            <FaJsSquare style={fontStyles}/>
                            <DiMysql style={fontStyles}/>
                            <FaNodeJs style={fontStyles}/>
                            <FaCss3Alt style={fontStyles}/>
                            <DiMongodb style={fontStyles}/>
                            
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;