import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledButton = styled.a`
   ${tw`
        relative 
        inline-block 
        font-heading 
        text-gray-800 
        text-base 
        font-bold 
        pb-2.5 
        cursor-pointer 
        focus:outline-none
    `}
   &:after {
      content: "";
      ${tw`
            absolute 
            w-full 
            bottom-0 
            left-0 
            right-auto 
            bg-primary
            h-1.5
            transition-all 
            duration-500 
            ease-in-out
        `}
   }
   &:hover,
   &:active,
   &:focus {
      &:after {
         ${tw`
                w-0 
                right-0 
                left-auto
            `}
      }
   }
`;

const Button = ({ as, type, className, href, target, rel, data, onClick, text }) => (
   <StyledButton as={as} type={type} className={className} href={href} target={target} rel={rel} data-modal-open={data} onClick={onClick}>
      {text}
   </StyledButton>
);

export default Button;
