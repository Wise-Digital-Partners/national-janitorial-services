import React from "react";
import { BgImage } from "gbimage-bridge";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Header from "../Header/Header";

const StyledBackgroundImage = styled(BgImage)`
   max-height: ${({ imageMaxHeight }) => {
      return imageMaxHeight;
   }};
   @media (min-width: 1024px) {
      &:before,
      &:after {
         ${({ backgroundFixed }) => backgroundFixed && tw`bg-fixed`};
      }
   }
`;

const Hero = ({ ...props }) => (
   <section className={`${props.className} ${props.padding}`}>
      <div className="container">
         <Header
            headingLevel={props.headingLevel}
            headingClassName={props.headingClassName}
            heading={props.heading}
            subtext={props.subtext}
            subtextSize={props.subtextSize}
            textAlignment={props.textAlignment}
            maxWidth={props.maxWidth}
            margin={props.margin}
         />
      </div>
      <StyledBackgroundImage
         className="h-50vw"
         image={props.image}
         backgroundFixed={props.backgroundFixed}
         imageMaxHeight={props.imageMaxHeight}
         style={{
            backgroundSize: props.backgroundSize ? props.backgroundSize : "cover",
            backgroundPosition: props.backgroundPosition ? props.backgroundPosition : "center",
            backgroundRepeat: props.backgroundRepeat ? props.backgroundRepeat : "no-repeat",
         }}
      ></StyledBackgroundImage>
   </section>
);

export default Hero;
