import React from "react";
import Link from "gatsby-plugin-transition-link";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Button = ({
  className,
  href,
  outboundLink,
  modal,
  onClick,
  type,
  altStyle,
  icon,
  text,
}) => {
  const Tag = href && href.includes("#") ? AnchorLink : href ? Link : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";
  let link = true;
  let anchor = false;

  href && (link = !href.includes("tel:") && !href.includes("mailto:"));

  return (
    <Tag
      className={`group inline-flex items-center justify-center space-x-3.5 font-heading font-bold no-underline
       ${
         altStyle === 2
           ? "text-secondary-500 hover:text-secondary-500"
           : altStyle === 3
           ? ""
           : "text-primary-500 hover:text-primary-500"
       } ${className}`}
      {...(anchor ? { to: href } : link ? { to: href } : { href: href })}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
      alt-style={altStyle}
    >
      <div>{text}</div>
      <i
        className={`relative left-0 text-lg transition-all duration-300 ease-linear group-hover:left-1 ${
          icon || "fa-solid fa-arrow-right"
        }  ${
          altStyle === 2
            ? `text-secondary-500 group-hover:text-secondary-500`
            : altStyle === 3
            ? ``
            : `text-primary-500 group-hover:text-primary-500`
        }`}
      ></i>
    </Tag>
  );
};

export default Button;
