import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useState } from "react";

export const CalendlyFrame = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const handleOpen = () => {
    setShowCalendly(true);
  };

  const handleClose = () => {
    setShowCalendly(false);
  };

  const data = useStaticQuery(graphql`
    {
      profilePicture: file(relativePath: { eq: "contact-form/Anthony avatar.png" }) {
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
          src="https://calendly.com/nationaljanitorialservices-support"
          width="100%"
          class="mt-[66px] h-[70vh]"
          height="100%"
        ></iframe>
      ) : (
        <div
          className="mt-[36px] flex  cursor-pointer flex-col items-start justify-center gap-y-[6px] rounded-sm border-2 border-primary p-6 text-white"
          onClick={handleOpen}
        >
          {/* <GatsbyImage image={data.profilePicture.childImageSharp.gatsbyImageData} width={88} height={88} className="w-[88px] h-[88px]"/>
          <div className="text-lg font-bold ">Anthony Orozco</div>
          <div className="text-sm font-normal">Partner/General Manager</div> */}
          <div className="text-lg font-bold ">30 Minute Site Consultation</div>
          <div className="text-sm font-normal">
            Ready to get started? We will meet you on site to discuss your specific janitorial
            needs.
          </div>
        </div>
      )}
    </div>
  );
};
