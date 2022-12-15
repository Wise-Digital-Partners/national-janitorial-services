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
      className={`group inline-flex items-center justify-center space-x-3.5 rounded-5xl px-4 py-2 text-center font-heading font-heading font-bold font-semibold no-underline transition-all duration-300 ease-linear text-secondary-500  hover:bg-secondary-500 hover:text-white
       ${
         altStyle === 2
           ? "border-2 border-secondary-500"
           : altStyle === 3
           ? ""
           : "border-2 border-secondary-500"
       } ${className}`}
      {...(anchor ? { to: href } : link ? { to: href } : { href: href })}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
      alt-style={altStyle}
    >
      <i
        className={`relative left-0 text-lg  ${icon || ""}  ${
          altStyle === 2
            ? `fa-google fab `
            : altStyle === 3
            ? ``
            : `fa-yelp fab `
        }`}
      ></i>
      <div>{text}</div>
    </Tag>
  );
};

export default Button;
