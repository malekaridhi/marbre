
//create slides with react bootstrap Carousel 
import React from 'react'

import { Carousel } from 'react-bootstrap';
import image1 from "./images/img2.jpg"
import image2 from "./images/pic1.jpg"
import image4 from "./images/pic2.jpg"
import {
    Container,
    Card,
    Button,
    Form,
    FormGroup,
    FormLabel,
    FormControl,
    Image 
    
  } from "react-bootstrap";

const Slide = () => {
    return ( <>
    <div className="ddd">
    <Carousel>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <Container className="bottom-left">
                </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                   
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
            </div>
    </> );
}
 
export default Slide;