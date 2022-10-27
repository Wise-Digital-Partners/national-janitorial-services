import React, { Component } from "react";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-list {
    ${tw`overflow-visible`}
  }
  .slick-track {
    ${tw`!flex !items-center`}
  }
  .slick-slide {
    ${tw`!mx-10`}
  }
`;

export default class Slider extends Component {
  render() {
    const sliderSettings = {
      speed: 3000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      dots: false,
      arrows: false,
      infinite: true,
    };

    return (
      <StyledSlider>
        <Slick {...sliderSettings}>{this.props.children}</Slick>
      </StyledSlider>
    );
  }
}

// import React, { Component } from "react";
// import Slick from "react-slick";
// import styled from "@emotion/styled";
// import tw from "twin.macro";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const StyledSlider = styled.div`
//    .slick-dots {
//       ${tw`relative! mt-10`}
//       li {
//          ${tw`mx-2 w-2 h-2`}
//          button {
//             ${tw`w-2 h-2 bg-white bg-opacity-30`}
//          }
//          &.slick-active {
//             button {
//                ${tw`bg-opacity-100`}
//             }
//          }
//       }
//       @media (min-width: 960px) {
//          ${tw`mt-16`}
//       }
//    }
//    .gatsby-image-wrapper {
//       ${tw`mx-auto`}
//    }
// `;
// export default class Slider extends Component {
//    render() {
//       // function PrevArrow(props) {
//       //   const {onClick} = props;
//       //   return (
//       //     <button onClick={onClick} className="slick-prev" aria-label="Previous Slide"><i className="far fa-chevron-left"></i></button>
//       //   );
//       // }

//       // function NextArrow(props) {
//       //   const {onClick} = props;
//       //   return (
//       //     <button onClick={onClick} className="slick-next" aria-label="Next Slide"><i className="far fa-chevron-right"></i></button>
//       //   );
//       // }

//       const sliderSettings = {
//          dots: true,
//          arrows: false,
//          //   prevArrow: <PrevArrow />,
//          //   nextArrow: <NextArrow />,
//          speed: 1000,
//          autoplay: true,
//          autoplaySpeed: 5000,
//          slidesToShow: 5,
//          slidesToScroll: 5,
//          slidesPerRow: 5,
//          infinite: true,
//          fade: true,
//          responsive: [
//             {
//                breakpoint: 1023,
//                settings: {
//                   slidesToShow: 3,
//                   slidesToScroll: 3,
//                   slidesPerRow: 3,
//                },
//             },
//          ],
//       };

//       return (
//          <StyledSlider>
//             <Slick {...sliderSettings}>{this.props.children}</Slick>
//          </StyledSlider>
//       );
//    }
// }
