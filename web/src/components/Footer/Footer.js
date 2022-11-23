import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import ModalContact from "../Modal/ModalContact";
// import Newsletter from '../Form/Newsletter'
import ButtonSolid from "../Button/ButtonSolid";

const Footer = () => {
   const getYear = () => {
      return new Date().getFullYear();
   };

   const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

   const citiesClickHandler = () => {
      setCityDropdownOpen(!cityDropdownOpen);
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
       <footer className="bg-gray-800 pt-20 md:pt-40 pb-6 text-center md:text-left">
         <div className="container">
           <div className="md:flex md:justify-between items-start mb-20 md:mb-32 whitespace-nowrap">
             <div className="mb-20 md:mb-0">
               <AniLink fade to="/">
                 <img
                   src={data.logo.publicURL}
                   alt="Long Beach Janitorial Logo"
                   width="233"
                   className="mx-auto md:mx-0 mb-8 w-44 md:w-60"
                 />
               </AniLink>

               <address className="not-italic">
                 <a
                   href="https://goo.gl/maps/cEUm9xF1KaDviCVWA"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-white"
                 >
                   144 W San Antonio Dr
                   <br /> Long Beach, CA 90807
                 </a>
               </address>
             </div>

             <ul className="flex flex-col md:flex-row items-center">
               <li className="mb-5 md:mb-0 md:mr-6">
                 <AniLink
                   fade
                   to="/commercial-cleaning-services/"
                   className="font-heading text-white hover:text-primary text-xl font-bold uppercase"
                 >
                   Services
                 </AniLink>
               </li>
               <li className="mb-5 md:mb-0 md:mr-6">
                 <AniLink
                   fade
                   to="/industries-we-serve/"
                   className="font-heading text-white hover:text-primary text-xl font-bold uppercase"
                 >
                   Industries
                 </AniLink>
               </li>
               <li className="mb-5 md:mb-0 md:mr-6">
                 <AniLink
                   fade
                   to="/about/"
                   className="font-heading text-white hover:text-primary text-xl font-bold uppercase"
                 >
                   About
                 </AniLink>
               </li>
               {/* <li className="mb-5 md:mb-0 md:mr-6">
                        <AniLink fade to="# " className="font-heading text-white hover:text-primary text-xl font-bold uppercase">
                           Blog
                        </AniLink>
                     </li> */}
               <li>
                 <ButtonSolid
                   as="button"
                   modal="modal-contact"
                   text="Contact Us"
                 />
               </li>
             </ul>
           </div>

           <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-items-center md:justify-between items-center">
             <div className="md:flex md:items-center order-2 md:order-1">
               <ul className="flex items-center flex-col md:flex-row">
                 <li className="text-sm text-white mb-3 md:mb-0 md:mr-6">
                   © {getYear()} National Janitorial Services
                 </li>
                 <li className="text-sm mb-3 md:mb-0 md:mr-6">
                   <AniLink fade to="/privacy-policy/" className="text-white">
                     Privacy Policy
                   </AniLink>
                 </li>
                 {/* 
                        // CITES DROPDOWN <li className="text-sm mb-3 md:mb-0 md:mr-6">
                           <button className="relative focus:outline-none" onKeyDown={citiesClickHandler} onClick={citiesClickHandler}>
                              <span className="text-white flex items-center justify-between">
                                 Cities
                                 <i
                                    className={`far fa-chevron-up ml-2 transition-all duration-300 ease-linear transform ${
                                       cityDropdownOpen ? "rotate-180" : "rotate-0"
                                    }`}
                                 ></i>
                              </span>
                              <ul
                                 className={`bg-white text-left absolute bottom-0 px-4 py-5 flex flex-col transform transition-all duration-300 ease-linear ${
                                    cityDropdownOpen ? "opacity-100 -translate-y-10 visible" : "opacity-0 -translate-y-4 invisible"
                                 }`}
                              >
                                 <li className="mb-3 whitespace-nowrap">
                                    <AniLink fade to="/san-diego-janitorial-services/" className="hover:text-gray-800">
                                       San Diego
                                    </AniLink>
                                 </li>
                                 <li className="mb-3 whitespace-nowrap">
                                    <AniLink fade to="/orange-county-janitorial-services/" className="hover:text-gray-800">
                                       Orange County
                                    </AniLink>
                                 </li>
                                 <li className="mb-3 whitespace-nowrap">
                                    <AniLink fade to="/long-beach-janitorial-services/" className="hover:text-gray-800">
                                       Long Beach
                                    </AniLink>
                                 </li>
                                 <li className="mb-3 whitespace-nowrap">
                                    <AniLink fade to="/los-angeles-janitorial-services/" className="hover:text-gray-800">
                                       Los Angeles
                                    </AniLink>
                                 </li>
                                 <li className="mb-3 whitespace-nowrap">
                                    <AniLink fade to="/phoenix-janitorial-services/" className="hover:text-gray-800">
                                       Phoenix
                                    </AniLink>
                                 </li>
                                 <li className="whitespace-nowrap">
                                    <AniLink fade to="/denver-janitorial-services/" className="hover:text-gray-800">
                                       Denver
                                    </AniLink>
                                 </li>
                              </ul>
                           </button>
                        </li> */}
                 <li className="text-sm text-white">
                   <div className="flex items-center justify-center mt-2 md:mt-0">
                     Powered by
                     <a
                       className="group text-white flex items-center ml-1"
                       href="https://www.wisedigitalpartners.com/affordable-web-design/"
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       NEST<sup className="text-[6px] pl-[2px]">TM</sup>{" "}
                       <img
                         className="ml-2"
                         src={data.nestLogo.publicURL}
                         alt="nest Logo"
                       />
                     </a>
                   </div>
                 </li>
               </ul>
             </div>

             <div className="flex justify-center md:justify-items-start order-1 md:order-2 mb-18 md:mb-0">
               <a
                 href="https://www.yelp.com/biz/national-janitorial-services-long-beach"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="mr-6"
               >
                 <i className="fab fa-yelp text-2xl text-white hover:text-primary transition-all duration-300 ease-linear"></i>
               </a>
               <a
                 href="https://www.facebook.com/longbeachjanitorial/"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <i className="fab fa-facebook-f text-2xl text-white hover:text-primary transition-all duration-300 ease-linear"></i>
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
