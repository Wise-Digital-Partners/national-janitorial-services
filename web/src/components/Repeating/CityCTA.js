import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import CTAFullWidth from "../CTA/CTAFullWidth";
import ButtonSolid from "../Button/ButtonSolid";

const CTA = ({ heading, subText, cityBackground, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      backgroundDesktop: file(relativePath: { eq: "repeating/cta/background.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
        }
      }
      backgroundMobile: file(relativePath: { eq: "repeating/cta/background.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
        }
      }
    }
  `);

  const backgroundImages = [
    getImage(cityBackground.childImageSharp.gatsbyImageData),
    {
      ...getImage(cityBackground.childImageSharp.gatsbyImageData),
      media: `(max-width: 767px)`,
    },
  ];

  const HeadingTag = headingLevel;

  return (
    <CTAFullWidth
      backgroundImages={backgroundImages}
      backgroundSize=""
      backgroundPosition=""
      backgroundRepeat=""
      padding="pt-24 md:pt-44 pb-24 md:pb-44"
      textAlignment="text-center mx-auto"
      textMaxWidth="max-w-4xl"
    >
      <HeadingTag className="mb-4 font-display text-mobile-7xl font-black uppercase text-white md:text-7xl">
        {heading || "Comprehensive Janitorial Services for Long Beach Businesses"}
      </HeadingTag>
      <p className="mb-10 text-mobile-xl leading-tight text-white md:text-xl">{subText}</p>
      <ButtonSolid as="button" modal="modal-contact" text="Schedule a Consultation" />
    </CTAFullWidth>
  );
};

export default CTA;
