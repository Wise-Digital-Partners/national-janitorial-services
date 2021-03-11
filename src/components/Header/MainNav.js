import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Burger from "./Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
import Accordion from "../Header/Accordion";

const StyledMainNav = styled.nav`
   ${({ headerHasBorder }) => (headerHasBorder ? tw`border-b border-solid border-white border-opacity-25` : null)};
   /* @media (min-width: 1024px) {
        ${({ megaMenuHovering }) => (megaMenuHovering ? tw`bg-white` : null)};
    } */
   @media (max-width: 1023px) {
      ${({ offcanvasOpen }) => (offcanvasOpen ? tw`bg-gray-900` : null)};
      /* ${({ headerStyle }) => (headerStyle === "overlap" ? tw`bg-white` : null)};  */
   }
   &[data-fixed="true"] {
      ${tw`fixed top-0 left-0 w-full bg-white z-20`}
      @media (max-width: 1023px) {
         ${({ offcanvasOpen }) => (offcanvasOpen ? tw`bg-gray-900` : null)};
      }
      #navigation-desktop {
         > li {
            > a {
               ${tw`text-gray-800`}
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
            ${({ headerLinkColor }) => (headerLinkColor === "white" ? tw`text-white` : tw`text-gray-800`)};
            /* ${({ megaMenuHovering }) => (megaMenuHovering ? tw`text-gray-800` : null)}; */
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
            ${tw`absolute flex flex-col w-auto bg-white shadow-global pt-8 pr-14 pb-10 pl-6 opacity-0 invisible z-10 transform -translate-x-10 translate-y-12 transition-all duration-300 ease-linear`}
            li {
               ${tw`whitespace-nowrap`}
               &:not(:last-child) {
                  ${tw`mb-5`}
               }
               a {
                  ${tw`relative font-heading text-black text-opacity-40 no-underline`}
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
                ${tw`absolute left-0 flex flex-col w-full bg-white shadow-global pt-20 pb-12 opacity-0 invisible z-10 transform translate-y-12 transition-all duration-300 ease-linear`}
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
            ${tw`font-heading text-mobile-4xl text-white font-bold no-underline`}
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

const MainNav = ({ scrolled, headerStyle, headerLinkColor, headerHasBorder }) => {
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
      initialPhoneIcon = null,
      stickyPhoneIcon = null,
      className = null;

   if (headerStyle === "overlap") {
      initialLogo = data.logoLight.publicURL;
      stickyLogo = data.logoDark.publicURL;
      initialPhoneIcon = data.phoneLight.publicURL;
      stickyPhoneIcon = data.phoneDark.publicURL;
      className = "absolute";
   } else if (headerStyle === "standard") {
      initialLogo = data.logoDark.publicURL;
      stickyLogo = data.logoDark.publicURL;
      initialPhoneIcon = data.phoneDark.publicURL;
      stickyPhoneIcon = data.phoneDark.publicURL;
   }

   // Change logo on mega menu reveal
   // if (megaMenuHovering) {
   //     initialLogo = data.logoDark.publicURL;
   // }

   if (offcanvasOpen) {
      initialLogo = data.logoLight.publicURL;
      stickyLogo = data.logoLight.publicURL;
      initialPhoneIcon = data.phoneLight.publicURL;
      stickyPhoneIcon = data.phoneLight.publicURL;
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
            <div className="lg:hidden flex-auto flex items-center">
               <div className="logo-initial">
                  <a className="gtm-phone-number" href="tel:+1-619-839-9566">
                     <img src={initialPhoneIcon} alt="Phone icon" width="20" />
                  </a>
               </div>
               <div className="logo-fixed hidden">
                  <a className="gtm-phone-number" href="tel:+1-619-839-9566">
                     <img src={stickyPhoneIcon} alt="Phone icon" width="20" />
                  </a>
               </div>
            </div>
            <div className="flex-auto flex items-center justify-center lg:justify-start">
               <AniLink fade to="/">
                  <div className="logo-initial">
                     <img src={initialLogo} alt="Design Appruv Logo" width="190" className="hidden md:block" />
                     <img src={initialLogo} alt="Design Appruv Logo" width="110" className="md:hidden" />
                  </div>
                  <div className="logo-fixed hidden">
                     <img src={stickyLogo} alt="Design Appruv Logo" width="190" className="hidden md:block" />
                     <img src={stickyLogo} alt="Design Appruv Logo" width="110" className="md:hidden" />
                  </div>
               </AniLink>
            </div>
            <div className="flex items-center justify-end flex-auto">
               <ul id="navigation-desktop" className="hidden lg:flex lg:items-center lg:justify-end lg:mr-10">
                  <li className={`is-submenu-parent ${subMenuHovering1 ? "active" : ""}`}>
                     <AniLink onMouseEnter={isHoveringSubMenu1} onMouseLeave={notHoveringSubMenu1} fade to="#">
                        Services
                     </AniLink>
                     <ul className="submenu">
                        <li>
                           <AniLink fade to="#">
                              Accessory Dwelling Units
                           </AniLink>
                        </li>
                        <li>
                           <AniLink fade to="#">
                              Residential Additions & Remodels
                           </AniLink>
                        </li>
                        <li>
                           <AniLink fade to="#">
                              Custom Homes
                           </AniLink>
                        </li>
                        <li>
                           <AniLink fade to="#">
                              Commercial Design & Drafting
                           </AniLink>
                        </li>
                        <li>
                           <AniLink fade to="#">
                              Building Permits
                           </AniLink>
                        </li>
                     </ul>
                  </li>
                  <li className={`is-submenu-parent ${subMenuHovering2 ? "active" : ""}`}>
                     <AniLink onMouseEnter={isHoveringSubMenu2} onMouseLeave={notHoveringSubMenu2} fade to="#">
                        About
                     </AniLink>
                     <ul className="submenu">
                        <li>
                           <AniLink fade to="#">
                              Our Process
                           </AniLink>
                        </li>
                        <li>
                           <AniLink fade to="#">
                              Gallery
                           </AniLink>
                        </li>
                        {/* <li>
                           <AniLink fade to="#">
                              Blog
                           </AniLink>
                        </li> */}
                        <li>
                           <AniLink fade to="#">
                              Meet the Team
                           </AniLink>
                        </li>
                        {/* <li><AniLink fade to="#">FAQ</AniLink></li> */}
                     </ul>
                  </li>
                  <li>
                     <AniLink fade to="#">
                        Reviews
                     </AniLink>
                  </li>
               </ul>
               <div className="hidden lg:inline-flex items-center">
                  <ButtonSolid href="#" text="Contact" />
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
                        <li>
                           <AniLink fade to="/" onKeyDown={clickHandler} onClick={clickHandler}>
                              Home
                           </AniLink>
                        </li>

                        <li>
                           <Accordion title="Services">
                              <li>
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">
                                    All Services
                                 </AniLink>
                              </li>
                              <li>
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">
                                    Accessory Dwelling Units
                                 </AniLink>
                              </li>
                              <li>
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">
                                    Residential Additions & Remodels
                                 </AniLink>
                              </li>
                              <li>
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">
                                    Custom Homes
                                 </AniLink>
                              </li>
                              <li>
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">
                                    Commercial Design & Drafting
                                 </AniLink>
                              </li>
                              <li>
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">
                                    Building Permits
                                 </AniLink>
                              </li>
                           </Accordion>
                        </li>

                        <li>
                           <Accordion title="About">
                              <li>
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">
                                    About
                                 </AniLink>
                              </li>
                              <li>
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">
                                    Our Process
                                 </AniLink>
                              </li>
                              <li>
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">
                                    Gallery
                                 </AniLink>
                              </li>
                              {/* <li>
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">
                                    Blog
                                 </AniLink>
                              </li> */}
                              <li>
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">
                                    Meet the Team
                                 </AniLink>
                              </li>
                              {/* <li>
                                        <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">FAQ</AniLink>
                                    </li> */}
                              <li>
                                 <AniLink onKeyDown={clickHandler} onClick={clickHandler} fade to="#">
                                    Reviews
                                 </AniLink>
                              </li>
                           </Accordion>
                        </li>

                        <li>
                           <AniLink fade to="#" onKeyDown={clickHandler} onClick={clickHandler}>
                              Contact
                           </AniLink>
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
