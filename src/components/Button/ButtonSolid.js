import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledButton = styled.a`
   ${tw`
        inline-flex
        items-center
        justify-center
        text-center
        font-heading
        bg-primary hover:bg-primary_light focus:bg-primary_light active:bg-primary_light
        text-gray-800 hover:text-gray-800 focus:text-gray-800 active:text-gray-800
        font-semibold
        px-6
        py-3
        no-underline
        cursor-pointer 
        focus:outline-none 
        transition-all
        duration-300 
        ease-in-out
    `}
   min-width: 168px;
   &.is-light {
      ${tw`
            bg-white hover:bg-white focus:bg-white active:bg-white
            bg-opacity-25 hover:bg-opacity-100 focus:bg-opacity-100 active:bg-opacity-100
            text-white hover:text-primary focus:text-primary active:text-primary
        `}
   }
`;

const Button = ({ as, type, className, href, target, rel, data, onClick, text }) => (
   <StyledButton as={as} type={type} className={className} href={href} target={target} rel={rel} data-modal-open={data} onClick={onClick}>
      {text}
   </StyledButton>
);

export default Button;
