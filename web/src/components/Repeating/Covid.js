import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Link from "gatsby-plugin-transition-link";

import Background from "../Background/Background";
import ButtonUnderline from "../Button/ButtonUnderline";
import downloadFile from "../../images/downloads/disinfecttabletsLit2-25-20-NJS.pdf";

const Covid = ({ className, headingLevel }) => {
   const data = useStaticQuery(graphql`
      {
         backgroundDesktop: file(relativePath: { eq: "repeating/covid/Covid Cleaning Desktop.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
         backgroundMobile: file(relativePath: { eq: "repeating/covid/Covid Cleaning Mobile.jpg" }) {
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

   const HeadingTag = headingLevel;

   return (
      <Background
         className={`${className || ""}`}
         backgroundImages={backgroundImages}
         // backgroundColor=""
         // backgroundSize=""
         // backgroundPosition=""
         // backgroundRepeat=""
         padding="pt-16 md:pt-36 pb-48 md:pb-64"
      >
         <header className="max-w-xl">
            <HeadingTag className="text-white">COVID Cleaning Services</HeadingTag>
            <p className="text-white mb-16 md:mb-12">
               Stop the spread and protect your business with our specialized{" "}
               <Link fade to="/covid-cleaning-services/" className="underline hover:text-primary">
                  COVID cleaning services
               </Link>
               . We use Multi-Clean Chlorinated Disinfecting Tablets, an EPA-registered disinfectant that is effective against pathogens like
               Staphylococcus aureus, Norovirus, and the novel coronavirus. To learn more about our chlorinated disinfecting tablets, browse the PDF
               below.
            </p>
            <ButtonUnderline href={downloadFile} target="_blank" text="Download Fact Sheet" />
         </header>
      </Background>
   );
};

export default Covid;
