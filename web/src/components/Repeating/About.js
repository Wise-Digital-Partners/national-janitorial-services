import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
               <div className="order-2 md:order-1">
                  <GatsbyImage image={data.about.childImageSharp.gatsbyImageData} alt="One Company, Many Industries" />
               </div>
               <div className="order-1 md:order-2">
                  <HeadingTag>One Company, Many Industries</HeadingTag>
                  <p>No matter what industry you’re in, we have the experience and expertise to deliver. Here are some of the industries we serve.</p>
                  <div className="grid md:grid-cols-2 md:gap-x-10">
                     <ul>
                        <li className="mb-3">
                           <AniLink fade to="/hospital-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              Hospitals
                           </AniLink>
                        </li>
                        <li className="mb-4">
                           <AniLink fade to="/hoa-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              HOA
                           </AniLink>
                        </li>
                        <li className="mb-4">
                           <AniLink fade to="/dispensary-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              Dispensaries
                           </AniLink>
                        </li>
                        <li className="mb-4">
                           <AniLink fade to="/commercial-office-cleaning/" className="text-gray-700 font-bold underline uppercase">
                              Private Offices
                           </AniLink>
                        </li>
                        <li className="mb-4">
                           <AniLink fade to="/office-building-cleaning/" className="text-gray-700 font-bold underline uppercase">
                              Office Buildings
                           </AniLink>
                        </li>
                        <li className="mb-4">
                           <AniLink fade to="/church-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              Churches
                           </AniLink>
                        </li>
                     </ul>
                     <ul>
                        <li className="mb-3">
                           <AniLink fade to="/school-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              Schools
                           </AniLink>
                        </li>
                        <li className="mb-4">
                           <AniLink fade to="/car-dealership-cleaning/" className="text-gray-700 font-bold underline uppercase">
                              Car Dealerships
                           </AniLink>
                        </li>
                        <li className="mb-4">
                           <AniLink fade to="/bar-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              Bars & Nightclubs
                           </AniLink>
                        </li>
                        <li className="mb-4">
                           <AniLink fade to="/movie-theater-cleaning/" className="text-gray-700 font-bold underline uppercase">
                              Movie Theaters
                           </AniLink>
                        </li>
                        <li className="mb-4">
                           <AniLink fade to="/gym-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              Gyms & Fitness
                           </AniLink>
                        </li>
                        <li className="mb-4">
                           <AniLink fade to="/medical-dental-office-cleaning/" className="text-gray-700 font-bold underline uppercase">
                              Medical & Dental
                           </AniLink>
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
