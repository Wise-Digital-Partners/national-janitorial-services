import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../Header/Header";

const WhyUs = ({ className, headingLevel }) => {
   const data = useStaticQuery(graphql`
      {
         experienced: file(relativePath: { eq: "repeating/why-us/icon-experienced.svg" }) {
            publicURL
         }
         professional: file(relativePath: { eq: "repeating/why-us/icon-professional.svg" }) {
            publicURL
         }
         reliable: file(relativePath: { eq: "repeating/why-us/icon-reliable.svg" }) {
            publicURL
         }
         value: file(relativePath: { eq: "repeating/why-us/icon-value.svg" }) {
            publicURL
         }
      }
   `);

   return (
      <section className={`${className || ""}`}>
         <div className="container">
            <Header
               headingLevel={headingLevel}
               heading="The Long Beach Janitorial Difference"
               subtext="Find out what makes us Long Beach’s top cleaning company."
               subtextSize="text-2xl"
               textAlignment="text-center mx-auto"
               textMaxWidth="max-w-3xl"
               textMargin="mb-16"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10 md:gap-y-16 text-center md:text-left">
               <div>
                  <img src={data.experienced.publicURL} alt="Experienced" className="mx-auto md:mx-0 mb-3 md:mb-4" />
                  <p className="font-heading text-xl text-gray-700 font-bold uppercase mb-3 md:mb-4">Experienced</p>
                  <p className="mb-0">With more than 100 businesses served, we tailor our cleaning services to your specific industry needs.</p>
               </div>
               <div>
                  <img src={data.reliable.publicURL} alt="Good Value" className="mx-auto md:mx-0 mb-3 md:mb-4" />
                  <p className="font-heading text-xl text-gray-700 font-bold uppercase mb-3 md:mb-4">Reliable & Local</p>
                  <p className="mb-0">
                     We’re based in the community we serve. Count on our experts to be on time, on-budget, and on-point with our services.
                  </p>
               </div>
               <div>
                  <img src={data.value.publicURL} alt="Professional" className="mx-auto md:mx-0 mb-3 md:mb-4" />
                  <p className="font-heading text-xl text-gray-700 font-bold uppercase mb-3 md:mb-4">Good Value</p>
                  <p className="mb-0">
                     We deliver a quality experience using only the most advanced cleaning products and procedures at excellent prices.
                  </p>
               </div>
               <div>
                  <img src={data.professional.publicURL} alt="Reliable & Local" className="mx-auto md:mx-0 mb-3 md:mb-4" />
                  <p className="font-heading text-xl text-gray-700 font-bold uppercase mb-3 md:mb-4">Professional</p>
                  <p className="mb-0">Our experienced commercial cleaning team is fully trained, licensed and insured for your peace of mind.</p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default WhyUs;
