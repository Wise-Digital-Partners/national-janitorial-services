import React from "react";

const Button = ({ className, href, target, rel, data, onClick, as, type, text }) => (
   <a
      className={`font-heading font-semibold bg-transparent hover:bg-primary text-primary hover:text-white border border-solid border-primary px-6 py-3 min-w-[185px] inline-flex items-center justify-center text-center no-underline focus:outline-none transition-colors duration-300 ease-in-out ${className}`}
      href={href}
      target={target}
      rel={rel}
      data-modal-open={data}
      onClick={onClick}
      as={as}
      type={type}
   >
      {text}
   </a>
);

export default Button;
