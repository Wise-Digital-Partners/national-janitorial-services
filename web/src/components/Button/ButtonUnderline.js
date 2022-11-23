import React from "react";
import Link from "gatsby-plugin-transition-link";

const Button = ({
  className,
  href,
  outboundLink,
  modal,
  onClick,
  type,
  altStyle,
  text,
}) => {
  const Tag = href ? Link : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";
  let link = true;

  href && (link = !href.includes("tel:") && !href.includes("mailto:"));

  return (
    <Tag
      className={`group relative inline-flex font-bold no-underline ${
        altStyle === 2
          ? "text-secondary-500 hover:text-secondary-500"
          : altStyle === 3
          ? ""
          : "text-primary-500 hover:text-primary-500"
      } ${className}`}
      {...(link ? { to: href } : { href: href })}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
      alt-style={altStyle}
    >
      <div className="relative">
        {text}
        <span
          className={`absolute -bottom-2 left-0 right-auto h-0.5 w-full transition-all duration-500 ease-in-out group-hover:left-auto group-hover:right-0 group-hover:w-0 ${
            altStyle === 2
              ? "bg-secondary-500"
              : altStyle === 3
              ? ""
              : "bg-primary-500"
          }`}
        ></span>
      </div>
    </Tag>
  );
};

export default Button;
