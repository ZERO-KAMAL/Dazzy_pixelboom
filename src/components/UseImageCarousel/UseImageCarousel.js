import React, { useState, useRef } from 'react';
import { Carousel, Card, Stack } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import "./UseImageCarousel.scss"
import { images } from '../../constants';

/**
* Component to preview new upload images in carousal
* @component 
* @UseImageCarousal having upload images in form of card
* @return  {Jsx}  It returns jsx to render upload image carousal,
*
* )
*/

const UseImageCarousel = () => {
    const ref = useRef()
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const handleNext = () => {
        ref.current.next()
    }
    const handlePrevious = () => {
        ref.current.prev()
    }



    return (
        <div className='carousel-warpper'>
            <p className='next' onClick={handleNext}><FaAngleRight /></p>
            <p className='previous' onClick={handlePrevious}><FaAngleLeft /></p>
            <Carousel ref={ref} activeIndex={index} controls={false} indicators={false} onSelect={handleSelect} >
                {
                    [1, 2, 3, 4].map(() => {
                        return (
                            <Carousel.Item>
                                <Stack
                                    direction="horizontal"
                                    className="h-100 justify-content-center align-items-center"
                                    gap={3}
                                >
                                    <Card>
                                        <img
                                            className=" carousel-card-img"
                                            src={images.useImageSlider1}
                                            alt="First slide"
                                        />
                                        <button className="carousel-card-close-icon" type="button" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </Card>
                                    <Card>
                                        <img
                                            className=" carousel-card-img"
                                            src={images.useImageSlider2}
                                            alt="First slide"
                                        />
                                        <button className="carousel-card-close-icon" type="button" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </Card>
                                    <Card>
                                        <img
                                            className=" carousel-card-img"
                                            src={images.useImageSlider3}
                                            alt="First slide"
                                        />
                                        <button className="carousel-card-close-icon" type="button" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </Card>

                                    <Card className='card-visibility4'>
                                        <img
                                            className=" carousel-card-img"
                                            src={images.useImageSlider4}
                                            alt="First slide"
                                        />
                                        <button className="carousel-card-close-icon" type="button" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </Card>

                                    <Card className='card-visibility5'>
                                        <img
                                            className=" carousel-card-img"
                                            src={images.useImageSlider5}
                                            alt="First slide"
                                        />
                                        <button className="carousel-card-close-icon" type="button" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </Card>
                                </Stack>
                            </Carousel.Item>
                        )
                    })
                }



            </Carousel>
        </div>
    );
}

export default UseImageCarousel;
