import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import ButtonUnderline from "../Button/ButtonUnderline";

const Covid = ({ className }) => {
   const data = useStaticQuery(graphql`
      {
         covideCleaning: file(relativePath: { eq: "industries/covid-cleaning.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
      }
   `);

   return (
      <section className={`${className || ""}`}>
         <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-12 items-center">
               <div className="order-2 md:order-1">
                  <GatsbyImage image={data.covideCleaning.childImageSharp.gatsbyImageData} alt="COVID Cleaning Service" />
               </div>
               <div className="order-1 md:order-2">
                  <h2>COVID Cleaning Service</h2>
                  <p>
                     Stop the spread and protect your business with our specialized COVID cleaning services. We use Multi-Clean Chlorinated
                     Disinfecting Tablets, an EPA-registered disinfectant that is effective against pathogens like Staphylococcus aureus, Norovirus,
                     and the novel coronavirus.
                  </p>
                  <ButtonUnderline href="/covid-cleaning-services/" text="Learn More" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Covid;
