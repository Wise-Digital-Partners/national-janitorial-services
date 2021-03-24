import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../Header/Header";

const WhyUs = ({ ...props }) => {
   const data = useStaticQuery(graphql`
      {
         icon1: file(relativePath: { eq: "repeating/why-us/icon-experienced.svg" }) {
            publicURL
         }
         icon2: file(relativePath: { eq: "repeating/why-us/icon-professional.svg" }) {
            publicURL
         }
         icon3: file(relativePath: { eq: "repeating/why-us/icon-reliable.svg" }) {
            publicURL
         }
         icon4: file(relativePath: { eq: "repeating/why-us/icon-value.svg" }) {
            publicURL
         }
      }
   `);

   return (
      <section className={`${props.className ? props.className : ""}`}>
         <div className="container">
            <Header
               headingLevel={props.headingLevel}
               heading="The NJS Difference"
               subtext="Find out what makes us Long Beach’s top cleaning company."
               subtextSize="text-xl md:text-2xl"
               textAlignment="md:text-center md:mx-auto"
               maxWidth="max-w-3xl"
               margin="mb-12 md:mb-16"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-12 md:gap-y-16">
               <div>
                  <img className="mb-4" src={data.icon1.publicURL} alt="Lorem Ipsum" />
                  <p className="font-heading text-xl text-gray-700 font-bold uppercase mb-4">Experienced</p>
                  <p className="mb-0">With more than 100 businesses served, we tailor our cleaning services to your specific industry needs.</p>
               </div>
               <div>
                  <img className="mb-4" src={data.icon2.publicURL} alt="Lorem Ipsum" />
                  <p className="font-heading text-xl text-gray-700 font-bold uppercase mb-4">Reliable & Local</p>
                  <p className="mb-0">
                     We’re based in the community we serve. Count on our experts to be on time, on-budget, and on-point with our services.
                  </p>
               </div>
               <div>
                  <img className="mb-4" src={data.icon3.publicURL} alt="Lorem Ipsum" />
                  <p className="font-heading text-xl text-gray-700 font-bold uppercase mb-4">Good Value</p>
                  <p className="mb-0">
                     We deliver a quality experience using only the most advanced cleaning products and procedures at excellent prices.
                  </p>
               </div>
               <div>
                  <img className="mb-4" src={data.icon4.publicURL} alt="Lorem Ipsum" />
                  <p className="font-heading text-xl text-gray-700 font-bold uppercase mb-4">Professional</p>
                  <p className="mb-0">Our experienced commercial cleaning team is fully trained, licensed and insured for your peace of mind.</p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default WhyUs;
