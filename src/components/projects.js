import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './projects.css';
import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap'



function Projects() {

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
        <Container className="container-fluid px-0" >
            <div className="subHead"></div>
            <Row className="carouselRow">
                <Carousel >
                    <Carousel.Item>
                       <a href ="https://petplacer2.herokuapp.com/"><img
                            className="d-block w-100 carouselImage "
                            src="https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg"
                            alt="First slide"
                        /></a>
                        <Carousel.Caption>
                            <h3 className='captionText'>Pet Placer</h3>
                            <p className='captionText'>Adopt a Pet, Tinder Style.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <a href ="https://mike-book-engine.herokuapp.com/"><img
                            className="d-block w-100 carouselImage"
                            src="https://cdn.pixabay.com/photo/2020/02/02/05/10/books-4812032_1280.jpg"
                            alt="Second slide"
                        /></a>

                        <Carousel.Caption>
                            <h3 className='captionText'>Book Finder</h3>
                            <p className='captionText'>Search for Books.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <a href ="https://michaelzadra27.github.io/activityselector/ "><img
                            className="d-block w-100 carouselImage"
                            src="https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989_1280.jpg"
                            alt="Third slide"
                        /></a>

                        <Carousel.Caption>
                            <h3 className='captionText'>Activity Selector</h3>
                            <p className='captionText'>Bored? Let's fix that.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    );
}
export default Projects;