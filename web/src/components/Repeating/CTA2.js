import React from "react";

import { StaticImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

import CTAFullWidth from "../CTA/CTAFullWidth";

import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";

// import doubleArrows from "../../images/1.0 Homepage/double-arrows.svg";

const CTA2 = ({
    heading,
    headingLevel,
    className,
}) => {
    const HeadingTag = headingLevel || "h2";
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
        getImage(data.backgroundDesktop.childImageSharp.gatsbyImageData),
        {
            ...getImage(data.backgroundMobile.childImageSharp.gatsbyImageData),
            media: `(max-width: 767px)`,
        },
    ];
    return (
        <CTAFullWidth backgroundImages={backgroundImages} backgroundSize="" backgroundPosition="" backgroundRepeat=""
            padding="pt-24 md:pt-44 pb-24 md:pb-44" textAlignment="text-center mx-auto" textMaxWidth="max-w-4xl">
            <HeadingTag className="text-mobile-7xl md:text-7xl font-display font-black uppercase text-white mb-4">
                {heading || "Comprehensive Janitorial Services for Long Beach Businesses"}
            </HeadingTag>
            <p className="text-mobile-xl md:text-xl leading-tight text-white mb-10">
                Experience the Long Beach Janitorial difference. Tell us about your cleaning needs today!
            </p>
            <ButtonSolid as="button" modal="modal-contact" text="Schedule a Consultation" />


        </CTAFullWidth>
    );
};

export default CTA2;
