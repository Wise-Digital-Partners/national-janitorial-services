import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";

import styled from "@emotion/styled";
import tw from "twin.macro";

import Burger from "./Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
import Accordion from "../Accordion/Accordion";

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
               content: "";
               ${tw`absolute bottom-0 right-0 left-0 mx-auto h-1 bg-primary w-0 transform -translate-y-6 transition-all duration-300 ease-linear`}
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
      .is-submenu-parent {
         ${tw`relative`}
         .submenu {
            ${tw`absolute flex flex-col w-auto bg-white shadow-xl pt-8 pr-14 pb-10 pl-6 opacity-0 invisible z-10 transform -translate-x-10 translate-y-12 transition-all duration-300 ease-linear`}
            li {
               ${tw`whitespace-nowrap`}
               &:not(:last-child) {
                  ${tw`mb-4`}
               }
               a {
                  ${tw`relative font-heading text-gray-800 text-opacity-40 no-underline`}
                  /* &:after {
                            content: '';
                            ${tw`absolute left-auto right-0 bottom-0 h-px bg-primary w-0 transition-all duration-300 ease-linear`}
                        } */
                        &:hover {
                     ${tw`text-opacity-100`}/* &:after {
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
      ${tw`w-full text-center`}
      > li {
         ${tw`relative`}
         &:not(:last-child) {
            ${tw`mb-5`}
         }
         > a,
         button {
            ${tw`font-heading text-mobile-4xl text-white font-bold no-underline transition-colors duration-300 ease-linear`}
            &:hover {
               ${tw`text-primary`}
            }
            &:focus {
               ${tw`outline-none`}
            }
         }
         &.is-submenu-parent {
            > a {
               ${tw`block`}
               /* &:after {
                        content: '\f078';
                        font-family: 'Font Awesome 5 Pro';
                        ${tw`absolute top-0 right-0 font-normal text-black transition-all duration-300 ease-linear`}
                    } */
                    &.active {
                  ${tw`text-primary`}/* &:after {
                            content: '\f068';
                        } */
               }
            }
         }
      }
      .submenu {
         ${tw`flex-col transition-all duration-300 ease-linear`}
         li {
            &:not(:last-child) {
               ${tw`mb-4`}
            }
            a {
               ${tw`text-white`}
               &:hover {
                  ${tw`text-primary`}
               }
            }
         }
      }
   }
`;

const MainNav = ({ ...props }) => {
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

   if (props.headerStyle === "overlap") {
      initialLogo = data.logoDark.publicURL;
      stickyLogo = data.logoDark.publicURL;
      // initialPhoneIcon = data.phoneLight.publicURL;
      // stickyPhoneIcon = data.phoneDark.publicURL;
      className = "absolute";
   } else if (props.headerStyle === "standard") {
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
         data-fixed={props.scrolled}
         headerStyle={props.eaderStyle}
         headerHasBorder={props.headerHasBorder}
         headerLinkColor={props.headerLinkColor}
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
                     <img src={initialLogo} alt="National Janitorial Services Logo" width="169" className="hidden md:block" />
                     <img src={initialLogo} alt="National Janitorial Services Logo" width="110" className="md:hidden" />
                  </div>
                  <div className="logo-fixed hidden">
                     <img src={stickyLogo} alt="National Janitorial Services Logo" width="169" className="hidden md:block" />
                     <img src={stickyLogo} alt="National Janitorial Services Logo" width="110" className="md:hidden" />
                  </div>
               </a>
            </div>
            <div className="flex items-center justify-end flex-auto">
               <ul id="navigation-desktop" className="hidden lg:flex lg:items-center lg:justify-end lg:mr-10">
                  <li className={`is-submenu-parent ${subMenuHovering1 ? "active" : ""}`}>
                     <a onMouseEnter={isHoveringSubMenu1} onMouseLeave={notHoveringSubMenu1} href="/services/">
                        Services
                     </a>
                     <ul className="submenu">
                        <li>
                           <a href="/janitorial-services/">Janitorial Services</a>
                        </li>
                        <li>
                           <a href="# ">Commercial Cleaning</a>
                        </li>
                        <li>
                           <a href="# ">Office Cleaning</a>
                        </li>
                        <li>
                           <a href="# ">Porter Service(s)</a>
                        </li>
                        <li>
                           <a href="# ">Deep Cleaning</a>
                        </li>
                        <li>
                           <a href="# ">Disinfectant Services</a>
                        </li>
                     </ul>
                  </li>
                  <li className={`is-submenu-parent ${subMenuHovering2 ? "active" : ""}`}>
                     <a onMouseEnter={isHoveringSubMenu2} onMouseLeave={notHoveringSubMenu2} href="/industries-we-serve/">
                        Industries
                     </a>
                     <ul className="submenu">
                        <li>
                           <a href="/hospital-cleaning-services/">Hospitals</a>
                        </li>
                        <li>
                           <a href="# ">Restaurants</a>
                        </li>
                        <li>
                           <a href="# ">HOA</a>
                        </li>
                        <li>
                           <a href="# ">Private Offices</a>
                        </li>
                        <li>
                           <a href="# ">Office Buildings</a>
                        </li>
                        <li>
                           <a href="# ">Churches</a>
                        </li>
                        <li>
                           <a href="# ">Schools</a>
                        </li>
                        <li>
                           <a href="# ">Car Dealerships</a>
                        </li>
                        <li>
                           <a href="# ">Movie Theaters</a>
                        </li>
                        <li>
                           <a href="# ">Bars & Nightclubs</a>
                        </li>
                        <li>
                           <a href="# ">Gyms & Fitness</a>
                        </li>
                        <li>
                           <a href="# ">Medical & Dental</a>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a href="/about/">About</a>
                  </li>
                  <li>
                     <a href="/blog/">Blog</a>
                  </li>
               </ul>
               <div className="hidden lg:inline-flex items-center">
                  <ButtonSolid className="min-w-[160px]" data="modal-contact" text="Contact" />
               </div>

               <div className="lg:hidden" ref={node}>
                  <Burger
                     offcanvasOpen={offcanvasOpen}
                     setOffcanvasOpen={setOffcanvasOpen}
                     headerStyle={props.headerStyle}
                     scrolled={props.scrolled}
                     aria-controls="offcanvas-navigation"
                  />
                  <OffCanvas offcanvasOpen={offcanvasOpen} id="offcanvas-navigation">
                     <ul id="navigation-mobile">
                        <li>
                           <Accordion title="Services">
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="# ">
                                    All Services
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="/service-1/">
                                    Service 1
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="# ">
                                    Service 2
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="# ">
                                    Service 3
                                 </a>
                              </li>
                              <li>
                                 <a onKeyDown={clickHandler} onClick={clickHandler} href="# ">
                                    Service 4
                                 </a>
                              </li>
                           </Accordion>
                        </li>
                        <li>
                           <a href="# " onKeyDown={clickHandler} onClick={clickHandler}>
                              About
                           </a>
                        </li>
                        <li>
                           <a href="# " onKeyDown={clickHandler} onClick={clickHandler}>
                              Contact
                           </a>
                        </li>
                     </ul>
                  </OffCanvas>
               </div>
            </div>
         </div>
      </StyledMainNav>
   );
};
export default MainNav;
