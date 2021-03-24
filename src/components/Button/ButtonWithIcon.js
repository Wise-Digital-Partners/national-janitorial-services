import React from "react";

const Button = ({ className, href, target, rel, data, onClick, as, type, text }) => (
   <a
      className={`group font-heading font-semibold text-gray-800 hover:text-gray-800 inline-flex items-center justify-center text-center no-underline focus:outline-none transition-colors duration-300 ease-in-out ${className}`}
      href={href}
      target={target}
      rel={rel}
      data-modal-open={data}
      onClick={onClick}
      as={as}
      type={type}
   >
      {text}
      <i className={`text-lg font-normal text-primary relative -right-2 group-hover:-right-4 transition-all duration-300 ease-in-out ${icon}`}></i>
   </a>
);

export default Button;
