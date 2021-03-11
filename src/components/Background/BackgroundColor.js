import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledBackground = styled.div`
  background-color: ${({ backgroundColorMobile }) => {
    return backgroundColorMobile;
  }};
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
    background-color: ${({ backgroundColorDesktop }) => {
      return backgroundColorDesktop;
    }};
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
`;

const BackgroundColorComponent = ({
  children,
  className,
  backgroundColorDesktop,
  backgroundColorMobile,
  paddingTopDesktop,
  paddingTopMobile,
  paddingBottomDesktop,
  paddingBottomMobile,
  textAlignmentDesktop,
  textAlignmentMobile,
}) => (
  <StyledBackground
    className={className}
    backgroundColorDesktop={backgroundColorDesktop}
    backgroundColorMobile={backgroundColorMobile}
    paddingTopDesktop={paddingTopDesktop}
    paddingTopMobile={paddingTopMobile}
    paddingBottomDesktop={paddingBottomDesktop}
    paddingBottomMobile={paddingBottomMobile}
    textAlignmentDesktop={textAlignmentDesktop}
    textAlignmentMobile={textAlignmentMobile}
  >
    <div className="container">{children}</div>
  </StyledBackground>
);

export default BackgroundColorComponent;
