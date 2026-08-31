import React from "react";
import { BgImage } from "gbimage-bridge";

const Hero = ({
  className,
  padding,
  backgroundImages,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  textAlignment,
  textMaxWidth,
  alt,
  children,
}) => (
  <BgImage
    className={`${padding} ${className}`}
    image={backgroundImages}
    role={alt ? "img" : undefined}
    aria-label={alt}
    style={{
      backgroundSize: backgroundSize || "cover",
      backgroundPosition: backgroundPosition || "center",
      backgroundRepeat: backgroundRepeat || "no-repeat",
    }}
  >
    <div className="container">
      <header className={`${textAlignment} ${textMaxWidth}`}>{children}</header>
    </div>
  </BgImage>
);

export default Hero;
