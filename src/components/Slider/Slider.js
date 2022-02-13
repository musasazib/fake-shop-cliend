import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {
    return (
        <div className='bg-info'>
            <Carousel>
                <Carousel.Item>
                    <div className='good-boy'>
                        <div>
                            <img
                                className=""
                                src="https://i.ibb.co/fMLr3JN/images.jpg"
                                alt="First slide"
                            />
                        </div>
                        <div>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;