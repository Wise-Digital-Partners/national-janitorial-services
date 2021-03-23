import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const WhyUs = ({ ...props }) => {
   const data = useStaticQuery(graphql`
      {
         icon1: file(relativePath: { eq: "repeating/clients/client-1.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, quality: 100)
            }
         }
         icon2: file(relativePath: { eq: "repeating/clients/client-2.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, quality: 100)
            }
         }
         icon3: file(relativePath: { eq: "repeating/clients/client-3.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, quality: 100)
            }
         }
      }
   `);

   return (
      <section className={`${props.className} ${props.padding}`}>
         <div className="container max-w-5xl">
            <header className="text-center mb-12 md:mb-18">
               <h2>Some of Our Happy Clients</h2>
            </header>
            <div className="grid grid-cols-3 gap-x-2 md:gap-x-6 max-w-3xl mx-auto">
               <div>
                  <GatsbyImage image={data.icon1.childImageSharp.gatsbyImageData} className="mx-auto" alt="Lorem Ipsum" />
               </div>
               <div>
                  <GatsbyImage image={data.icon2.childImageSharp.gatsbyImageData} className="mx-auto" alt="Lorem Ipsum" />
               </div>
               <div>
                  <GatsbyImage image={data.icon3.childImageSharp.gatsbyImageData} className="mx-auto" alt="Lorem Ipsum" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default WhyUs;
