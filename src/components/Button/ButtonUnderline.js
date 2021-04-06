import React from "react";

const Button = ({ className, href, target, rel, modal, onClick, as, type, text }) => (
   <a
      className={`group relative inline-flex font-heading text-primary font-semibold pb-1.5 focus:outline-none ${className}`}
      href={href}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      as={as}
      type={type}
   >
      {text}
      <span className="absolute w-full bottom-0 left-0 right-auto bg-primary h-0.5 group-hover:w-0 group-hover:right-0 group-hover:left-auto transition-all duration-500 ease-in-out"></span>
   </a>
);

export default Button;
