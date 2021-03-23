import React from "react";

const Button = ({ ...props }) => (
   <a
      className={`group font-heading font-semibold text-gray-800 hover:text-gray-800 inline-flex items-center justify-center text-center no-underline focus:outline-none transition-colors duration-300 ease-in-out ${props.className}`}
      href={props.href}
      target={props.target}
      rel={props.rel}
      data-modal-open={props.data}
      onClick={props.onClick}
      as={props.as}
      type={props.type}
   >
      {props.text}
      <i
         className={`text-lg font-normal text-primary relative -right-2 group-hover:-right-4 transition-all duration-300 ease-in-out ${props.icon}`}
      ></i>
   </a>
);

export default Button;
