import React from "react";
import { BgImage } from "gbimage-bridge";

const Background = ({ children, backgroundColor, backgroundImages, backgroundSize, backgroundPosition, backgroundRepeat, padding, className }) => (
   <div>
      {backgroundImages ? (
         <BgImage
            className={`${padding} ${className || ""}`}
            image={backgroundImages}
            style={{
               backgroundSize: backgroundSize || "cover",
               backgroundPosition: backgroundPosition || "center",
               backgroundRepeat: backgroundRepeat || "no-repeat",
            }}
         >
            <div className="container">{children}</div>
         </BgImage>
      ) : (
         <section className={` ${backgroundColor} ${padding} ${className || ""}`}>
            <div className="container">{children}</div>
         </section>
      )}
   </div>
);

export default Background;
