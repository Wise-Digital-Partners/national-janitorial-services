import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Burger from "./Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
import Accordion from "./Accordion";

const StyledMainNav = styled.nav`
   ${({ headerStyle }) => (headerStyle === "hidden" ? tw`hidden` : null)};
   ${({ headerHasBorder }) => (headerHasBorder ? tw`border-b border-solid border-gray-700 border-opacity-10` : null)};
   /* @media (min-width: 1024px) {
        ${({ megaMenuHovering }) => (megaMenuHovering ? tw`bg-white` : null)};
    } */
   @media (max-width: 1023px) {
      ${({ offcanvasOpen }) => (offcanvasOpen ? tw`bg-gray-800` : null)};
      /* ${({ headerStyle }) => (headerStyle === "overlap" ? tw`bg-white` : null)};  */
   }
   &[data-fixed="true"] {
      ${tw`fixed top-0 left-0 w-full bg-white z-20`}
      @media (max-width: 1023px) {
         ${({ offcanvasOpen }) => (offcanvasOpen ? tw`bg-gray-800` : null)};
      }
      #navigation-desktop {
         > li {
            > a {
               ${tw`text-gray-700`}
            }
         }
      }
      .logo-initial {
         ${tw`hidden`}
      }
      .logo-fixed {
         ${tw`block`}
      }
   }
   #navigation-desktop {
      > li {
         &:not(:last-child) {
            ${tw`lg:mr-8`}
         }
         > a {
            ${({ headerLinkColor }) => (headerLinkColor === "white" ? tw`text-white` : tw`text-gray-700`)};
            /* ${({ megaMenuHovering }) => (megaMenuHovering ? tw`text-gray-700` : null)}; */
            ${tw`relative font-heading font-semibold no-underline pb-8`}
            &:after {
               ${tw`content absolute bottom-0 right-0 left-0 mx-auto h-1 bg-primary w-0 transform -translate-y-6 transition-all duration-300 ease-linear`}
            }
            &:hover {
               &:after {
                  ${tw`w-8`}
               }
            }
         }
         &.active {
            &:after {
               ${tw`w-8`}
            }
         }
      }
      .submenu-parent {
         ${tw`relative`}
         .submenu {
            ${tw`absolute flex flex-col w-auto bg-white shadow-xl pt-8 pr-14 pb-10 pl-6 opacity-0 invisible z-10 transform -translate-x-10 translate-y-12 transition-all duration-300 ease-linear`}
            li {
               ${tw`whitespace-nowrap`}
               &:not(:last-child) {
                  ${tw`mb-4`}
               }
               a {
                  ${tw`relative font-heading text-gray-800 text-opacity-40 hover:text-opacity-100 no-underline`}
                  /* &:after {
                            content: '';
                            ${tw`absolute left-auto right-0 bottom-0 h-px bg-primary w-0 transition-all duration-300 ease-linear`}
                        } */
                        &:hover {
                     /* &:after {
                                ${tw`w-full right-auto left-0`}
                            } */
                  }
               }
            }
         }
         &:hover {
            .submenu {
               ${tw`opacity-100 visible translate-y-6`}
            }
         }
      }
      /* .is-mega-menu-parent {
            ${tw`static`}
            .mega-menu {
                ${tw`absolute left-0 flex flex-col w-full bg-white shadow-3xl pt-20 pb-12 opacity-0 invisible z-10 transform translate-y-12 transition-all duration-300 ease-linear`}
            }
            &:hover {
                .mega-menu {
                    ${tw`opacity-100 visible translate-y-7`}
                }
            }
        }         */
   }

   #navigation-mobile {
      > li {
         &:not(:last-child) {
            ${tw`mb-8`}
         }
         > a,
         button {
            ${tw`font-heading text-xl text-white hover:text-primary font-bold uppercase no-underline text-left focus:outline-none transition-colors duration-300 ease-linear`}
         }
      }
      .submenu {
         ${tw`flex-col pl-4`}
         li {
            &:not(:last-child) {
               ${tw`mb-2`}
            }
            a {
               ${tw`text-white hover:text-primary`}
            }
         }
      }
   }
`;

const MainNav = ({ headerStyle, headerHasBorder, headerLinkColor, scrolled }) => {
   // determine if offcanvas is open
   const [offcanvasOpen, setOffcanvasOpen] = useState(false);

   // Hover on parent links
   // const [megaMenuHovering, setMegaMenuHovering] = useState(false);
   // const isHoveringMegaMenu = () => setMegaMenuHovering(true);
   // const notHoveringMegaMenu = () => setMegaMenuHovering(false);

   const [subMenuHovering1, setSubMenuHovering1] = useState(false);
   const isHoveringSubMenu1 = () => setSubMenuHovering1(true);
   const notHoveringSubMenu1 = () => setSubMenuHovering1(false);

   const [subMenuHovering2, setSubMenuHovering2] = useState(false);
   const isHoveringSubMenu2 = () => setSubMenuHovering2(true);
   const notHoveringSubMenu2 = () => setSubMenuHovering2(false);

   // handle click of navigation items
   const clickHandler = () => {
      setOffcanvasOpen(!offcanvasOpen);
   };

   // close offcanvas onclick outside
   const node = useRef();
   useOnClickOutside(node, () => setOffcanvasOpen(false));

   const data = useStaticQuery(graphql`
      {
         logoDark: file(relativePath: { eq: "global/logo-dark.svg" }) {
            publicURL
         }
         logoLight: file(relativePath: { eq: "global/logo-light.svg" }) {
            publicURL
         }
         phoneDark: file(relativePath: { eq: "global/phone-dark.svg" }) {
            publicURL
         }
         phoneLight: file(relativePath: { eq: "global/phone-light.svg" }) {
            publicURL
         }
      }
   `);

   // Define logos based on header style
   let initialLogo = null,
      stickyLogo = null,
      // initialPhoneIcon = null,
      // stickyPhoneIcon = null,
      className = null;

   if (headerStyle === "overlap") {
      initialLogo = data.logoDark.publicURL;
      stickyLogo = data.logoDark.publicURL;
      // initialPhoneIcon = data.phoneLight.publicURL;
      // stickyPhoneIcon = data.phoneDark.publicURL;
      className = "absolute";
   } else if (headerStyle === "standard") {
      initialLogo = data.logoDark.publicURL;
      stickyLogo = data.logoDark.publicURL;
      // initialPhoneIcon = data.phoneDark.publicURL;
      // stickyPhoneIcon = data.phoneDark.publicURL;
   }

   // Change logo on mega menu reveal
   // if (megaMenuHovering) {
   //     initialLogo = data.logoDark.publicURL;
   // }

   if (offcanvasOpen) {
      initialLogo = data.logoLight.publicURL;
      stickyLogo = data.logoLight.publicURL;
      // initialPhoneIcon = data.phoneLight.publicURL;
      // stickyPhoneIcon = data.phoneLight.publicURL;
   }

   return (
      <StyledMainNav
         id="main-navigation"
         className={`py-4 w-full transition duration-300 ease-linear ${className}`}
         role="navigation"
         aria-label="main-navigation"
         data-fixed={scrolled}
         headerStyle={headerStyle}
         headerHasBorder={headerHasBorder}
         headerLinkColor={headerLinkColor}
         // megaMenuHovering={megaMenuHovering}
         offcanvasOpen={offcanvasOpen}
      >
         <div className="container flex justify-between items-center">
            {/* <div className="lg:hidden flex-auto flex items-center">
               <div className="logo-initial">
                  <a href="tel:+1-619-839-9566">
                     <img src={initialPhoneIcon} alt="Phone icon" width="20" />
                  </a>
               </div>
               <div className="logo-fixed hidden">
                  <a href="tel:+1-619-839-9566">
                     <img src={stickyPhoneIcon} alt="Phone icon" width="20" />
                  </a>
               </div>
            </div> */}
            <div className="flex-auto flex items-center">
               <a href="/">
                  <div className="logo-initial">
                     <img src={initialLogo} alt="National Janitorial Services Logo" width="169" className="w-36 md:w-44" />
                  </div>
                  <div className="logo-fixed hidden">
                     <img src={stickyLogo} alt="National Janitorial Services Logo" width="169" className="w-36 md:w-44" />
                  </div>
               </a>
            </div>
            <div className="flex items-center justify-end flex-auto">
               <ul id="navigation-desktop" className="hidden lg:flex lg:items-center lg:justify-end lg:mr-10">
                  <li className={`submenu-parent ${subMenuHovering1 ? "active" : ""}`}>
                     <a onMouseEnter={isHoveringSubMenu1} onMouseLeave={notHoveringSubMenu1} href="/commercial-cleaning-services/">
                        Services
                     </a>
                     <ul className="submenu">
                        <li>
                           <a href="/janitorial-cleaning-company/">Janitorial Services</a>
                        </li>
                        <li>
                           <a href="/commercial-cleaning-company/">Commercial Cleaning</a>
                        </li>
                        <li>
                           <a href="/office-cleaning-services/">Office Cleaning</a>
                        </li>
                        <li>
                           <a href="/day-porter-services/">Porter Services</a>
                        </li>
                        <li>
                           <a href="/deep-cleaning-services/">Deep Cleaning</a>
                        </li>
                        <li>
                           <a href="/disinfection-services/">Disinfectant Services</a>
                        </li>
                     </ul>
                  </li>
                  <li className={`submenu-parent ${subMenuHovering2 ? "active" : ""}`}>
                     <a onMouseEnter={isHoveringSubMenu2} onMouseLeave={notHoveringSubMenu2} href="/industries-we-serve/">
                        Industries
                     </a>
                     <ul className="submenu">
                        <li>
                           <a href="/hospital-cleaning-services/">Hospitals</a>
                        </li>
                        <li>
                           <a href="/hoa-cleaning-services/">HOA</a>
                        </li>
                        <li>
                           <a href="/commercial-office-cleaning/">Private Offices</a>
                        </li>
                        <li>
                           <a href="/office-building-cleaning/">Office Buildings</a>
                        </li>
                        <li>
                           <a href="/church-cleaning-services/">Churches</a>
                        </li>
                        <li>
                           <a href="/school-cleaning-services/">Schools</a>
                        </li>
                        <li>
                           <a href="/car-dealership-cleaning/">Car Dealerships</a>
                        </li>
                        <li>
                           <a href="/movie-theater-cleaning/">Movie Theaters</a>
                        </li>
                        <li>
                           <a href="/bar-cleaning-services/">Bars & Nightclubs</a>
                        </li>
                        <li>
                           <a href="/gym-cleaning-services/">Gyms & Fitness</a>
                        </li>
                        <li>
                           <a href="/medical-dental-office-cleaning/">Medical & Dental</a>
                        </li>
                        <li>
                           <a href="/dispensary-cleaning-services/">Dispensaries</a>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a href="/about/">About</a>
                  </li>
                  {/* <li>
                     <a href="# ">Blog</a>
                  </li> */}
               </ul>
               <div className="hidden lg:inline-flex items-center">
                  <ButtonSolid className="min-w-[160px]" as="button" data="modal-contact" text="Contact" />
               </div>

               <div className="lg:hidden" ref={node}>
                  <Burger
                     offcanvasOpen={offcanvasOpen}
                     setOffcanvasOpen={setOffcanvasOpen}
                     headerStyle={headerStyle}
                     scrolled={scrolled}
                     aria-controls="offcanvas-navigation"
                  />
                  <OffCanvas offcanvasOpen={offcanvasOpen} id="offcanvas-navigation">
                     <ul id="navigation-mobile">
                        <li className="relative mb-8">
                           <Accordion title="Services" className="submenu-parent">
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/commercial-cleaning-services/">
                                    All Services
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/janitorial-cleaning-company/">
                                    Janitorial Services
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/commercial-cleaning-company/">
                                    Commercial Cleaning
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/office-cleaning-services/">
                                    Office Cleaning
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/day-porter-services/">
                                    Porter Services
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/deep-cleaning-services/">
                                    Deep Cleaning
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/disinfection-services/">
                                    Disinfectant Services
                                 </a>
                              </li>
                           </Accordion>
                        </li>
                        <li className="relative mb-8">
                           <Accordion title="Industries" className="submenu-parent">
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/industries-we-serve/">
                                    All Industries
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/hospital-cleaning-services/">
                                    Hospitals
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/hoa-cleaning-services/">
                                    HOA
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/commercial-office-cleaning/">
                                    Private Offices
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/office-building-cleaning/">
                                    Office Buildings
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/church-cleaning-services/">
                                    Churches
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/school-cleaning-services/">
                                    Schools
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/car-dealership-cleaning/">
                                    Car Dealerships
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/movie-theater-cleaning/">
                                    Movie Theaters
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/bar-cleaning-services/">
                                    Bars & Nightclubs
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/gym-cleaning-services/">
                                    Gyms & Fitness
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/medical-dental-office-cleaning/">
                                    Medical & Dental
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/dispensary-cleaning-services/">
                                    Dispensaries
                                 </a>
                              </li>
                           </Accordion>
                        </li>
                        <li className="relative mb-8">
                           <a href="/about/" onKeyDown={clickHandler} onClick={clickHandler}>
                              About
                           </a>
                        </li>
                        {/* <li className="relative">
                           <a href="# " onKeyDown={clickHandler} onClick={clickHandler}>
                              Blog
                           </a>
                        </li> */}
                     </ul>
                     <div className="flex mt-8">
                        <a
                           href="https://www.yelp.com/biz/national-janitorial-services-long-beach"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="mr-6"
                        >
                           <i className="fab fa-yelp text-2xl text-white hover:text-primary transition-all duration-300 ease-linear"></i>
                        </a>
                        <a href="https://www.facebook.com/nationaljanitorialservices" target="_blank" rel="noopener noreferrer">
                           <i className="fab fa-facebook-f text-2xl text-white hover:text-primary transition-all duration-300 ease-linear"></i>
                        </a>
                     </div>
                  </OffCanvas>
               </div>
            </div>
         </div>
      </StyledMainNav>
   );
};
export default MainNav;
