import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledBackground = styled.div`
   ${tw`relative`}
   padding-top: ${({ paddingTopMobile }) => {
      return paddingTopMobile;
   }};
   padding-bottom: ${({ paddingBottomMobile }) => {
      return paddingBottomMobile;
   }};
   ${({ textAlignmentMobile }) => (textAlignmentMobile === "left" ? tw`text-left` : null)};
   ${({ textAlignmentMobile }) => (textAlignmentMobile === "center" ? tw`text-center` : null)};
   ${({ textAlignmentMobile }) => (textAlignmentMobile === "right" ? tw`text-right` : null)};
   @media (min-width: 768px) {
      padding-top: ${({ paddingTopDesktop }) => {
         return paddingTopDesktop;
      }};
      padding-bottom: ${({ paddingBottomDesktop }) => {
         return paddingBottomDesktop;
      }};
      ${({ textAlignmentDesktop }) => (textAlignmentDesktop === "left" ? tw`text-left` : null)};
      ${({ textAlignmentDesktop }) => (textAlignmentDesktop === "center" ? tw`text-center` : null)};
      ${({ textAlignmentDesktop }) => (textAlignmentDesktop === "right" ? tw`text-right` : null)};
   }
   .gatsby-image-wrapper {
      ${tw`absolute!`}
   }
`;

const BackgroundImageComponent = ({
   children,
   className,
   backgroundImages,
   backgroundSize,
   backgroundPosition,
   paddingTopDesktop,
   paddingTopMobile,
   paddingBottomDesktop,
   paddingBottomMobile,
   textAlignmentDesktop,
   textAlignmentMobile,
}) => (
   <StyledBackground
      className={className}
      paddingTopDesktop={paddingTopDesktop}
      paddingTopMobile={paddingTopMobile}
      paddingBottomDesktop={paddingBottomDesktop}
      paddingBottomMobile={paddingBottomMobile}
      textAlignmentDesktop={textAlignmentDesktop}
      textAlignmentMobile={textAlignmentMobile}
   >
      <GatsbyImage image={backgroundImages} className="left-0 top-0 w-full h-full" objectFit={backgroundSize} objectPosition={backgroundPosition} />
      <div className="container">{children}</div>
   </StyledBackground>
);

export default BackgroundImageComponent;
