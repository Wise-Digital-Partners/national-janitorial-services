import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const WhyUs = ({ className, headingLevel }) => {
   const data = useStaticQuery(graphql`
      {
         icon1: file(relativePath: { eq: "repeating/clients/client-1.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FIXED, width: 207, placeholder: BLURRED, quality: 100)
            }
         }
         icon2: file(relativePath: { eq: "repeating/clients/client-2.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FIXED, width: 207, placeholder: BLURRED, quality: 100)
            }
         }
         icon3: file(relativePath: { eq: "repeating/clients/client-3.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FIXED, width: 207, placeholder: BLURRED, quality: 100)
            }
         }
      }
   `);

   const HeadingTag = headingLevel;

   return (
      <section className={`${className || ""}`}>
         <div className="container max-w-5xl">
            <header className="text-center mb-4 md:mb-18">
               <HeadingTag>Some of Our Happy Clients</HeadingTag>
            </header>
            <div className="grid md:grid-cols-3 gap-y-0 gap-x-2 md:gap-x-6 max-w-3xl mx-auto">
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
