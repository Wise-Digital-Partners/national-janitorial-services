import React from "react";

const Button = ({ ...props }) => (
   <a
      className={`font-heading font-semibold bg-primary hover:bg-opacity-80 text-white hover:text-white px-6 py-3 min-w-[185px] inline-flex items-center justify-center text-center no-underline focus:outline-none transition-colors duration-300 ease-in-out ${props.className}`}
      href={props.href}
      target={props.target}
      rel={props.rel}
      data-modal-open={props.data}
      onClick={props.onClick}
      as={props.as}
      type={props.type}
   >
      {props.text}
   </a>
);

export default Button;
