import React from "react";
import styled from '@emotion/styled';
import tw from 'twin.macro'

import Slider from "../Slider/SliderTestimonials"

const StyledSlider = styled.div`
	.slick-slide {
		${tw`text-center`}
	}
	.slick-prev,
	.slick-next {
		${tw`h-12 w-12 bg-transparent border border-solid border-gray-900 rounded-full transform top-0`}
		i {
			${tw`text-gray-900 text-base`}
		}    
		&:hover{
			${tw`bg-gray-900`}
			i {
				${tw`text-white`}
			}
		}
	}
	.slick-prev {
		${tw`left-0`}
	}
	.slick-next {
		${tw`right-0`}
	}
	blockquote {
		${tw`max-w-2xl mx-auto`}
	}  
	q {
		${tw`text-lg leading-8 text-gray-900 mb-16`}
	}
	footer {
		${tw`text-lg font-heading text-gray-900`}
	}
` 

const StyledTestimonial = styled.section`
	${tw`bg-gray-100 py-24 md:py-32`}
	background: linear-gradient(120deg, rgba(255,227,236,1) 0%, rgba(225,252,248,1) 100%);
`  

const Testimonial = ({className}) => {

    return (
        <StyledTestimonial className={`${className}`}>
            <div className="container">
                <header className="text-center mb-12">
                    <h2>Lorem Ipsum Dolor Site Amet</h2>
                </header>

                <StyledSlider>
                    <Slider>      
                        <div>
                            <blockquote>
                                <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.</q>
                                <footer>Lorem Ipsum</footer>
                            </blockquote>
                        </div>
            
                        <div>
                            <blockquote>
                                <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</q>
                                <footer>Lorem Ipsum</footer>
                            </blockquote>
                        </div>
            
                        <div>
                            <blockquote>
                                <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</q>
                                <footer>Lorem Ipsum</footer>
                            </blockquote>
                        </div> 
                    </Slider>
                </StyledSlider>
            </div>
        </StyledTestimonial>
    )
}

export default Testimonial;