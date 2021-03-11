import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledButton = styled.a`
   ${tw`
        inline-flex 
        items-center 
        text-gray-800 hover:text-gray-800 focus:text-gray-800 active:text-gray-800
        font-bold
        no-underline
        cursor-pointer 
        focus:outline-none 
        transition-all 
        duration-300 
        ease-in-out
    `}
   i {
      ${tw`text-lg font-light text-primary pl-2 transition-all duration-300 ease-in-out`}
   }
   &:hover {
      i {
         ${tw`pl-4`}
      }
   }
`;

const Button = ({ as, type, className, href, target, rel, data, onClick, text }) => (
   <StyledButton as={as} type={type} className={className} href={href} target={target} rel={rel} data-modal-open={data} onClick={onClick}>
      {text} <i className="fas fa-arrow-right"></i>
   </StyledButton>
);

export default Button;
