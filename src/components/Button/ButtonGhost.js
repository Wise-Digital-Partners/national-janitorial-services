import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.a``;

const Button = ({ className, href, target, rel, modal, onClick, as, type, text }) => (
   <StyledButton
      className={`font-heading font-semibold bg-transparent hover:bg-primary text-primary hover:text-white border border-solid border-primary px-6 py-3 min-w-[185px] inline-flex items-center justify-center text-center no-underline focus:outline-none transition-colors duration-300 ease-in-out ${className}`}
      href={href}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      as={as}
      type={type}
   >
      {text}
   </StyledButton>
);

export default Button;
