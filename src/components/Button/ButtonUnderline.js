import React from "react";

const Button = ({ ...props }) => (
   <a
      className={`group relative inline-flex font-heading text-primary font-semibold pb-1.5 focus:outline-none ${props.className}`}
      href={props.href}
      target={props.target}
      rel={props.rel}
      data-modal-open={props.data}
      onClick={props.onClick}
      as={props.as}
      type={props.type}
   >
      {props.text}
      <span className="absolute w-full bottom-0 left-0 right-auto bg-primary h-0.5 group-hover:w-0 group-hover:right-0 group-hover:left-auto transition-all duration-500 ease-in-out"></span>
   </a>
);

export default Button;
