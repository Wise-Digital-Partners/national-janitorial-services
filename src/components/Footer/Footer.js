import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink";

// import ModalContact from '../Modal/ModalContact'
// import Newsletter from '../Form/Newsletter'

const Footer = () => {
   //   const getYear = () => {
   //     return new Date().getFullYear();
   //   }

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
         <footer className="bg-gray-900 pt-22 md:pt-28 pb-6 md:pb-6 text-center md:text-left">
            <div className="container">
               <div className="md:flex md:justify-between md-20 md:mb-22">
                  <div className="mb-16 md:mb-0">
                     <img src={data.logo.publicURL} alt="Design Appruv Logo" width="250" className="hidden md:block" />
                     <img src={data.logo.publicURL} alt="Design Appruv Logo" width="184" className="md:hidden mx-auto" />
                  </div>

                  <div className="md:grid md:grid-cols-2 md:justify-between">
                     <div className="text-center md:text-right md:mr-10 mb-16 md:mb-0">
                        <span className="font-heading text-white font-bold tracking-wider uppercase block mb-3 md:mb-4">Contact</span>
                        <p className="text-sm leading-relaxed mb-0">
                           <a
                              className="text-white hover:text-white opacity-90 hover:opacity-100 no-underline text-link"
                              href="mailto:info@designappruv.com"
                           >
                              info@designappruv.com
                           </a>
                           <br />
                           <a
                              className="gtm-phone-number text-white hover:text-white opacity-90 hover:opacity-100 no-underline text-link"
                              href="tel:+1-619-839-9566"
                           >
                              (619) 839-9566
                           </a>
                        </p>
                     </div>
                     <div className="text-center md:text-right mb-16 md:mb-0">
                        <span className="font-heading text-white font-bold tracking-wider uppercase block mb-3 md:mb-4">Address</span>
                        <p className="text-sm leading-relaxed mb-0">
                           <a
                              href="https://goo.gl/maps/y9KrMWvwmEKGk9779"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-link text-white hover:text-white opacity-90 hover:opacity-100 no-underline text-link"
                           >
                              555 W Country Club Ln c221 <br /> Escondido, CA 92026
                           </a>
                        </p>
                     </div>
                  </div>
               </div>

               <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-items-center md:justify-between items-center">
                  <div className="md:flex md:items-center order-2 md:order-1">
                     <ul className="flex items-center flex-col md:flex-row">
                        {/* <li className="text-xs text-gray-400">© {getYear()} Bella Woof Spa all Rights Reserved </li> */}
                        <li className="text-sm md:mr-6">
                           <AniLink fade to="/terms-conditions/" className="text-white text-opacity-70 hover:text-opacity-100">
                              Terms & Conditions
                           </AniLink>
                        </li>
                        <li className="text-sm md:mr-6">
                           <AniLink fade to="/privacy-policy/" className="text-white text-opacity-70 hover:text-opacity-100">
                              Privacy Policy
                           </AniLink>
                        </li>
                        <li className="text-sm text-white text-opacity-70">
                           <div className="flex items-center justify-center mt-2 md:mt-0">
                              Powered by
                              <a
                                 className="group text-white text-opacity-70 hover:text-white flex items-center ml-1"
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
                     <a
                        href="https://www.instagram.com/designappruv/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center border border-solid border-white border-opacity-40 rounded-full hover:border-opacity-100 mr-4 transition-300-ease"
                     >
                        <i className="fab fa-instagram text-3sm text-white"></i>
                     </a>
                     <a
                        href="https://www.facebook.com/DesignAppruv/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center border border-solid border-white border-opacity-40 rounded-full hover:border-opacity-100 mr-4 transition-300-ease"
                     >
                        <i className="fab fa-facebook-f text-sm text-white"></i>
                     </a>
                     <a
                        href="https://www.houzz.com/professionals/building-designers-and-drafters/design-appruv-inc-pfvwus-pf~1706570061"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center border border-solid border-white border-opacity-40 rounded-full hover:border-opacity-100 mr-4 transition-300-ease"
                     >
                        <i className="fab fa-houzz text-sm text-white"></i>
                     </a>
                     <a
                        href="https://www.yelp.com/biz/design-appruv-escondido-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center border border-solid border-white border-opacity-40 rounded-full hover:border-opacity-100 transition-300-ease"
                     >
                        <i className="fab fa-yelp text-sm text-white"></i>
                     </a>
                  </div>
               </div>
            </div>
         </footer>

         {/* <ModalContact /> */}
      </div>
   );
};

export default Footer;
