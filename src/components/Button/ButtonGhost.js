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
        text-gray-900 hover:text-white focus:text-white active:text-white
        font-semibold
        border
        border-solid
        border-primary 
        bg-transparent hover:bg-primary focus:bg-primary active:bg-primary
        px-6
        py-3
        no-underline
        cursor-pointer
        focus:outline-none
        transition-all
        duration-300
        ease-linear
    `}
   min-width: 168px;
   &.is-light {
      ${tw`
            text-white hover:text-primary focus:text-primary active:text-primary
            border-white hover:bg-white focus:bg-white active:bg-white
        `}
   }
`;

const Button = ({ as, type, className, href, target, rel, data, onClick, text }) => (
   <StyledButton as={as} type={type} className={className} href={href} target={target} rel={rel} data-modal-open={data} onClick={onClick}>
      {text}
   </StyledButton>
);

export default Button;
