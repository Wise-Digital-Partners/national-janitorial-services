import React from "react";
import { BgImage } from "gbimage-bridge";
// import styled from "@emotion/styled";
// import tw from "twin.macro";

// const StyledHero = styled.section`

// `;

const Hero = ({ ...props }) => (
   <BgImage
      className={`${props.padding} ${props.className}`}
      image={props.backgroundImages}
      style={{
         backgroundSize: props.backgroundSize ? props.backgroundSize : "cover",
         backgroundPosition: props.backgroundPosition ? props.backgroundPosition : "center",
         backgroundRepeat: props.backgroundRepeat ? props.backgroundRepeat : "no-repeat",
      }}
   >
      <div className="container">
         <header className={`${props.textAlignment} ${props.textMaxWidth}`}>{props.children}</header>
      </div>
   </BgImage>
);

export default Hero;
