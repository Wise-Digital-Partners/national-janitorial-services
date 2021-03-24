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

const Hero = ({
   className,
   headingLevel,
   heading,
   subtext,
   subtextSize,
   textAlignment,
   textMaxWidth,
   textMargin,
   image,
   backgroundFixed,
   imageMaxHeight,
   backgroundSize,
   backgroundPosition,
   backgroundRepeat,
}) => (
   <section className={`${className || "pt-6 md:pt-14"}`}>
      <div className="container">
         <Header
            headingLevel={headingLevel || "h1"}
            heading={heading}
            subtext={subtext}
            subtextSize={subtextSize || "text-2xl-mobile md:text-2xl"}
            textAlignment={textAlignment || "text-left"}
            textMaxWidth={textMaxWidth || ""}
            textMargin={textMargin || "mb-8"}
         />
      </div>
      <StyledBackgroundImage
         className="h-50vw"
         image={image}
         backgroundFixed={backgroundFixed}
         imageMaxHeight={imageMaxHeight}
         style={{
            backgroundSize: backgroundSize || "cover",
            backgroundPosition: backgroundPosition || "center",
            backgroundRepeat: backgroundRepeat || "no-repeat",
         }}
      ></StyledBackgroundImage>
   </section>
);

export default Hero;
