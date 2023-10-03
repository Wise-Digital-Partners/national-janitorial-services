import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useState } from "react";

export const CalendlyFrame = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const handleOpen = () => {
    setShowCalendly(true)
  }

  const handleClose = () => {
    setShowCalendly(false)
  }

  const data = useStaticQuery(graphql`
    {
      profilePicture: file(relativePath: {eq: "contact-form/Anthony avatar.png"}) {
         id
         childImageSharp {
           gatsbyImageData(layout: CONSTRAINED, width: 167)
         }
       }
    }
  `);

  return (
    <div>
      {showCalendly ? (
        <iframe
          title="Book a Meeting"
          src="https://calendly.com/anthony-lbcleaning"
          width="100%"
          class="h-[70vh] mt-[66px]"
          height="100%"
        ></iframe>
      ) : (
        <div className="rounded-2xl mt-[66px] border-2 border-primary text-white h-[233px] flex flex-col justify-center items-center gap-y-[6px] cursor-pointer" onClick={handleOpen}>
          <GatsbyImage image={data.profilePicture.childImageSharp.gatsbyImageData} width={88} height={88} className="w-[88px] h-[88px]"/>
          <div className="text-lg font-bold ">Anthony Orozco</div>
          <div className="text-sm font-normal">Partner/General Manager</div>
        </div>
      )}
    </div>
  );
};