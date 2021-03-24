import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const About = ({ className, headingLevel }) => {
   const data = useStaticQuery(graphql`
      {
         about: file(relativePath: { eq: "repeating/about/about.png" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
      }
   `);

   const HeadingTag = headingLevel;

   return (
      <section className={`${className || ""}`}>
         <div className="container">
            <div className="grid md:grid-cols-2 gap-y-10 gap-x-18 items-center">
               <div>
                  <GatsbyImage image={data.about.childImageSharp.gatsbyImageData} alt="About" />
               </div>
               <div>
                  <HeadingTag>One Company, Many Industries</HeadingTag>
                  <p>No matter what industry you’re in, we have the experience and expertise to deliver. Here are some of the industries we serve.</p>
                  <div className="grid md:grid-cols-2 md:gap-x-10">
                     <ul>
                        <li className="mb-3">
                           <a href="/hospital-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              Hospitals
                           </a>
                        </li>
                        <li className="mb-4">
                           <a href="/hoa-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              HOA
                           </a>
                        </li>
                        <li className="mb-4">
                           <a href="/dispensary-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              Dispensaries
                           </a>
                        </li>
                        <li className="mb-4">
                           <a href="/commercial-office-cleaning/" className="text-gray-700 font-bold underline uppercase">
                              Private Offices
                           </a>
                        </li>
                        <li className="mb-4">
                           <a href="/office-building-cleaning/" className="text-gray-700 font-bold underline uppercase">
                              Office Buildings
                           </a>
                        </li>
                        <li className="mb-4">
                           <a href="/church-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              Churches
                           </a>
                        </li>
                     </ul>
                     <ul>
                        <li className="mb-3">
                           <a href="/school-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              Schools
                           </a>
                        </li>
                        <li className="mb-4">
                           <a href="/car-dealership-cleaning/" className="text-gray-700 font-bold underline uppercase">
                              Car Dealerships
                           </a>
                        </li>
                        {/* <li className="mb-4">
                           <a href="# " className="text-gray-700 font-bold underline uppercase">
                              Vehicle Maintenance Lots
                           </a>
                        </li> */}
                        <li className="mb-4">
                           <a href="/movie-theater-cleaning/" className="text-gray-700 font-bold underline uppercase">
                              Movie Theaters
                           </a>
                        </li>
                        <li className="mb-4">
                           <a href="/gym-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              Gyms & Fitness
                           </a>
                        </li>
                        <li className="mb-4">
                           <a href="/medical-dental-office-cleaning/" className="text-gray-700 font-bold underline uppercase">
                              Medical & Dental
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
