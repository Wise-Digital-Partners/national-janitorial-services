import React, { useRef } from 'react'
import Slick from "react-slick";
import styled from '@emotion/styled';
import tw from 'twin.macro'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
	@media (min-width: 1024px) {
		${tw`h-full absolute right-0 top-0 w-50vw!`}
	}
	.slick-dots {
		${tw`mt-6`}
	}
	.slick-list {
		@media (min-width: 768px){
			${tw`overflow-visible relative`}
			/* &:before {
				content: '';
				${tw`absolute left-0 h-full w-full bg-gray-100 transform -translate-x-full z-10`}
			} */
		}
	}
	.slick-track {
		@media (min-width: 768px){
			${tw`flex items-center`}
		}
	}
	.slick-slide {
		@media (min-width: 1024px) {
			${tw`p-0 h-full absolute right-0 top-0 w-50vw!`}
		}
	}
	.slick-dots {
    ${tw`relative bottom-0 mt-6 flex! flex-col -mt-28 -ml-12`}
    li {
      ${tw`w-auto h-auto mx-2`}
      &.slick-active {
        button {
          ${tw`bg-primary w-3 h-3`}
        }
      }
    }
    button {
      ${tw`w-2 h-2 bg-primary bg-opacity-20 rounded-full mb-3 transition ease-in duration-300`}
      &:before {
        ${tw`hidden`}
      }
    }
  }
	.slick-prev,
	.slick-next {
		${tw`w-16 h-16 border border-solid border-gray-200 rounded-full transition-all duration-300 ease-linear z-10`}
		&:before {
			${tw`hidden`}
		}
		i {
			${tw`text-primary text-sm transition-all duration-300 ease-linear`}
		}    
		&:hover {
			${tw`bg-primary border-primary`}
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
`
const Slider = ({children}) => {
	
	const slider = useRef();
	
	const sliderSettings = {
		dots: true,
		arrows: false,
		fade: true,
		infinite: true,
		speed: 750,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1023,
			  settings: {
				dots: false
			  }
			},
		]		
	};	
 
	return (
		<StyledSlider>
			<Slick {...sliderSettings} ref={slider}>
				{children}
			</Slick>
		</StyledSlider>
	);
}

export default Slider;