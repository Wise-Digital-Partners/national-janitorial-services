import React from "react";
import { BgImage } from "gbimage-bridge";

const Background = ({ ...props }) => (
   <div>
      {props.backgroundImages ? (
         <BgImage
            className={`${props.padding} ${props.className ? props.className : ""}`}
            image={props.backgroundImages}
            style={{
               backgroundSize: props.backgroundSize ? props.backgroundSize : "cover",
               backgroundPosition: props.backgroundPosition ? props.backgroundPosition : "center",
               backgroundRepeat: props.backgroundRepeat ? props.backgroundRepeat : "no-repeat",
            }}
         >
            <div className="container">{props.children}</div>
         </BgImage>
      ) : (
         <section className={` ${props.backgroundColor} ${props.padding}  ${props.className ? props.className : ""}`}>
            <div className="container">{props.children}</div>
         </section>
      )}
   </div>
);

export default Background;
