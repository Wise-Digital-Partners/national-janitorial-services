import React, { useRef, useEffect } from "react";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
   .slick-list,
   .slick-slider {
      position: inherit;
   }
   .slick-prev,
   .slick-next {
      ${tw`h-20 w-20 bg-transparent border border-solid border-white border-opacity-40 rounded-full`}
      i {
         ${tw`text-base`}
      }
      &:hover {
         ${tw`border-opacity-100`}
      }
   }
   .slick-prev {
      ${tw`left-0`}
   }
   .slick-next {
      ${tw`right-0`}
   }
   .slick-dots {
      li {
         ${tw`w-2 h-2 mx-2`}
      }
      button {
         ${tw`w-2 h-2`}
      }
   }
`;

const Slider = ({ slideIndex, children }) => {
   const slider = useRef();

   useEffect(() => {
      slider.current.slickGoTo(slideIndex);
   }, [slideIndex]);

   const sliderSettings = {
      dots: true,
      arrows: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      speed: 750,
      autoplay: true,
      autoplaySpeed: 7500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      responsive: [
         {
            breakpoint: 1023,
            settings: {
               arrows: false,
            },
         },
      ],
   };

   // Previous Arrow
   function PrevArrow(props) {
      const { onClick } = props;
      return (
         <button onClick={onClick} className="slick-prev" aria-label="Previous Slide">
            <i className="far fa-chevron-left"></i>
         </button>
      );
   }

   // Next Arrow
   function NextArrow(props) {
      const { onClick } = props;
      return (
         <button onClick={onClick} className="slick-next" aria-label="Next Slide">
            <i className="far fa-chevron-right"></i>
         </button>
      );
   }

   return (
      <StyledSlider>
         <Slick {...sliderSettings} ref={slider} className="h-full">
            {children}
         </Slick>
      </StyledSlider>
   );
};

export default Slider;
