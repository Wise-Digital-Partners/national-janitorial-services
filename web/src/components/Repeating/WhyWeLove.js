import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

function WhyWeLove({heading, subText, image}) {
  return (
    <section>
      <div className="container grid grid-cols-2 text-black py-20 items-center gap-x-10">
        <div className="flex flex-col gap-y-4">
          <div className="text-5xl font-bold">{heading}</div>
          <div>{subText}</div>
        </div>
        <div>
          <GatsbyImage image={image}/>
        </div>
      </div>
    </section>
  );
}

export default WhyWeLove;
