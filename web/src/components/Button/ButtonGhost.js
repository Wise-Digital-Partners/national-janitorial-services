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
    <div
      className={`inline-flex overflow-hidden rounded-xl bg-gradient-to-tr from-primary-500 to-primary-500 p-0.5 ${
        className || ""
      }`}
    >
      <Tag
        className={`group relative inline-flex min-h-[46px] min-w-[170px] items-center justify-center rounded-5xl px-4 py-2 text-center font-body font-medium no-underline ${
          altStyle === 2
            ? "bg-primary-900 text-white hover:text-white"
            : "bg-white text-typography-heading hover:text-white"
        } ${className || ""}`}
        {...(anchor ? { to: href } : link ? { to: href } : { href: href })}
        target={target}
        rel={rel}
        data-modal-open={modal}
        onClick={onClick}
        type={type}
        alt-style={altStyle}
      >
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-tr from-primary-500 to-primary-500 opacity-0 transition-opacity duration-300 ease-linear group-hover:opacity-100" />
        <div className="relative z-10">
          {text}
          {icon && (
            <i
              className={`relative left-0 ml-2 text-lg transition-all duration-300 ease-linear group-hover:left-2 ${
                altStyle ? "text-white" : "text-gray-900"
              } ${icon}`}
            ></i>
          )}
        </div>
      </Tag>
      
    </div>
  );
};

export default Button;
