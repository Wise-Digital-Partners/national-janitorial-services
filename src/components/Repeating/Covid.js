import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Background from "../Background/Background";
import ButtonUnderline from "../Button/ButtonUnderline";

const Covid = ({ ...props }) => {
   const data = useStaticQuery(graphql`
      {
         background: file(relativePath: { eq: "repeating/covid/background.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
      }
   `);

   const backgroundImages = [
      getImage(data.background.childImageSharp.gatsbyImageData),
      {
         ...getImage(data.background.childImageSharp.gatsbyImageData),
         media: `(max-width: 767px)`,
      },
   ];

   const HeadingTag = props.headingLevel;

   return (
      <Background
         className={`${props.className ? props.className : ""}`}
         backgroundImages={backgroundImages}
         // backgroundColor=""
         // backgroundSize=""
         // backgroundPosition=""
         // backgroundRepeat=""
         padding="pt-48 md:pt-36 pb-12 md:pb-64"
      >
         <header className="max-w-2xl">
            <HeadingTag className="text-white">COVID Cleaning Services</HeadingTag>
            <p className="text-white mb-12">
               Stop the spread and protect your business with our specialized COVID cleaning services. We use Multi-Clean Chlorinated Disinfecting
               Tablets, an EPA-registered disinfectant that is effective against pathogens like Staphylococcus aureus, Norovirus, and the novel
               coronavirus. To learn more about our chlorinated disinfecting tablets, browse the PDF below.
            </p>
            <ButtonUnderline href="# " text="Download Fact Sheet" />
         </header>
      </Background>
   );
};

export default Covid;
