import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";

import ModalContact from "../Modal/ModalContact";
// import Newsletter from '../Form/Newsletter'
import ButtonSolid from "../Button/ButtonSolid";

const Footer = () => {
   const getYear = () => {
      return new Date().getFullYear();
   };

   const data = useStaticQuery(graphql`
      {
         logo: file(relativePath: { eq: "global/logo-light.svg" }) {
            publicURL
         }
         nestLogo: file(relativePath: { eq: "global/nest.svg" }) {
            publicURL
         }
      }
   `);

   return (
      <div>
         <footer className="bg-gray-800 pt-24 md:pt-40 pb-6 md:pb-6 text-center md:text-left">
            <div className="container">
               <div className="md:flex md:justify-between md-24 md:mb-36">
                  <div className="mb-16 md:mb-0">
                     <img src={data.logo.publicURL} alt="Logo" width="233" className="mx-auto md:mx-0" />
                  </div>

                  <ul className="flex flex-col md:flex-row items-center">
                     <li className="mr-6">
                        <a href="# " className="font-heading text-white text-xl font-bold uppercase">
                           Services
                        </a>
                     </li>
                     <li className="mr-6">
                        <a href="# " className="font-heading text-white text-xl font-bold uppercase">
                           Facilities
                        </a>
                     </li>
                     <li className="mr-6">
                        <a href="# " className="font-heading text-white text-xl font-bold uppercase">
                           About
                        </a>
                     </li>
                     <li className="mr-6">
                        <a href="# " className="font-heading text-white text-xl font-bold uppercase">
                           Blog
                        </a>
                     </li>
                     <li>
                        <ButtonSolid data="contact-modal" text="Contact Us" />
                     </li>
                  </ul>
               </div>

               <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-items-center md:justify-between items-center">
                  <div className="md:flex md:items-center order-2 md:order-1">
                     <ul className="flex items-center flex-col md:flex-row">
                        <li className="text-sm text-white md:mr-6">© {getYear()} National Janitorial Services </li>
                        <li className="text-sm md:mr-6">
                           <a href="# " className="text-white">
                              Privacy Policy
                           </a>
                        </li>
                        <li className="text-sm text-white">
                           <div className="flex items-center justify-center mt-2 md:mt-0">
                              Powered by
                              <a
                                 className="group text-white flex items-center ml-1"
                                 href="https://www.wisedigitalpartners.com/affordable-web-design/"
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 nest <img className="ml-2" src={data.nestLogo.publicURL} alt="nest Logo" />
                              </a>
                           </div>
                        </li>
                     </ul>
                  </div>

                  <div className="flex justify-center md:justify-items-start order-1 md:order-2 mb-22 md:mb-0">
                     <a href="# " target="_blank" rel="noopener noreferrer" className="mr-6 transition-all duration-300 ease-linear">
                        <i className="fab fa-yelp text-2xl text-white"></i>
                     </a>
                     <a href="# " target="_blank" rel="noopener noreferrer" className="transition-all duration-300 ease-linear">
                        <i className="fab fa-facebook-f text-2xl text-white"></i>
                     </a>
                  </div>
               </div>
            </div>
         </footer>

         <ModalContact />
      </div>
   );
};

export default Footer;
