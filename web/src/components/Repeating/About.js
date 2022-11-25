import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "gatsby-plugin-transition-link";

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
                  <GatsbyImage image={data.about} alt="One Company, Many Industries" />
               </div>
               <div className="order-1 md:order-2">
                  <HeadingTag>One Company, Many Industries</HeadingTag>
                  <p>No matter what industry you’re in, we have the experience and expertise to deliver. Here are some of the industries we serve.</p>
                  <div className="grid md:grid-cols-2 md:gap-x-10">
                     <ul>
                        <li className="mb-3">
                           <Link fade to="/hospital-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              Hospitals
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link fade to="/hoa-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              HOA
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link fade to="/dispensary-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              Dispensaries
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link fade to="/commercial-office-cleaning/" className="text-gray-700 font-bold underline uppercase">
                              Private Offices
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link fade to="/office-building-cleaning/" className="text-gray-700 font-bold underline uppercase">
                              Office Buildings
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link fade to="/church-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              Churches
                           </Link>
                        </li>
                     </ul>
                     <ul>
                        <li className="mb-3">
                           <Link fade to="/school-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              Schools
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link fade to="/car-dealership-cleaning/" className="text-gray-700 font-bold underline uppercase">
                              Car Dealerships
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link fade to="/bar-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              Bars & Nightclubs
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link fade to="/movie-theater-cleaning/" className="text-gray-700 font-bold underline uppercase">
                              Movie Theaters
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link fade to="/gym-cleaning-services/" className="text-gray-700 font-bold underline uppercase">
                              Gyms & Fitness
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link fade to="/medical-dental-office-cleaning/" className="text-gray-700 font-bold underline uppercase">
                              Medical & Dental
                           </Link>
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
