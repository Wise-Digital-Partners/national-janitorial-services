import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Burger from "./Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
import Accordion from "./Accordion";
const menuItems = [
  {
    id: 1,

    title: "Services",
    link: "/commercial-cleaning-services/",
    submenu: [
      {
        title: "Floor Waxing",
        link: "/floor-waxing-services/",
      },
      {
        title: "Floor Stripping",
        link: "/floor-stripping-services/",
      },
      {
        title: "Window Cleaning",
        link: "/window-cleaning-services/",
      },
      {
        title: "Janitorial Services",
        link: "/janitorial-cleaning-company/",
      },
      {
        title: "Commercial Cleaning",
        link: "/commercial-cleaning-company/",
      },
      {
        title: "Office Cleaning",
        link: "/office-cleaning-services/",
      },
      {
        title: "Porter Services",
        link: "/day-porter-services/",
      },
      {
        title: "Deep Cleaning",
        link: "/deep-cleaning-services/",
      },
      {
        title: "Disinfectant Services",
        link: "/disinfection-services/",
      },
      // Add more submenu items here
    ],
  },
  {
    id: 2,
    title: "Industries",
    link: "/industries-we-serve/",

    submenu: [
      {
        title: "Hospitals",
        link: "/hospital-cleaning-services/",
      },
      {
        title: "HOA",
        link: "/hoa-cleaning-services/",
      },
      {
        title: "Private Offices",
        link: "/commercial-office-cleaning/",
      },
      {
        title: "Office Buildings",
        link: "/office-building-cleaning/",
      },
      {
        title: "Churches",
        link: "/church-cleaning-services/",
      },
      {
        title: "Schools",
        link: "/school-cleaning-services/",
      },
      {
        title: "Car Dealerships",
        link: "/car-dealership-cleaning/",
      },
      {
        title: "Movie Theaters",
        link: "/movie-theater-cleaning/",
      },
      {
        title: "Bars & Nightclubs",
        link: "/bar-cleaning-services/",
      },
      {
        title: "Gyms & Fitness",
        link: "/gym-cleaning-services/",
      },
      {
        title: "Medical & Dental",
        link: "/medical-dental-office-cleaning/",
      },
      {
        title: "Dispensaries",
        link: "/dispensary-cleaning-services/",
      },
    ],
  },
  {
    id: 3,
    title: "About",
    link: "/about/",
  },
  // Add more menu items here
];
const services = [
  {
    title: "COVID Cleaning",
    link: "/covid-cleaning-services/",
  },
  {
    title: "Janitorial Services",
    link: "/janitorial-cleaning-company/",
  },
  {
    title: "Commercial Cleaning",
    link: "/commercial-cleaning-company/",
  },
  {
    title: "Office Cleaning",
    link: "/office-cleaning-services/",
  },
  {
    title: "Porter Services",
    link: "/day-porter-services/",
  },
  {
    title: "Deep Cleaning",
    link: "/deep-cleaning-services/",
  },
  {
    title: "Disinfectant Services",
    link: "/disinfection-services/",
  },
];

const StyledMainNav = styled.nav`
  ${({ navigationStyle }) => (navigationStyle === "hidden" ? tw`hidden` : null)};
  ${({ headerHasBorder }) =>
    headerHasBorder ? tw`border-b border-solid border-gray-700 border-opacity-10` : null};
  /* @media (min-width: 1024px) {
        ${({ megaMenuHovering }) => (megaMenuHovering ? tw`bg-white` : null)};
    } */
  @media (max-width: 1023px) {
    ${({ offcanvasOpen }) => (offcanvasOpen ? tw`bg-gray-800` : null)};
    /* ${({ navigationStyle }) => (navigationStyle === "overlap" ? tw`bg-white` : null)};  */
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
        ${({ headerLinkColor }) =>
          headerLinkColor === "white" ? tw`text-white` : tw`text-gray-700`};
        /* ${({ megaMenuHovering }) => (megaMenuHovering ? tw`text-gray-700` : null)}; */
        ${tw`relative font-heading font-bold tracking-wide uppercase no-underline pb-8`}
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
            ${tw`relative font-heading text-gray-800  text-gray-700/60 hover:text-gray-900 no-underline`}
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
function clickHandler(event) {
  if (event.currentTarget.getAttribute("href").indexOf("#") !== -1) {
    event.preventDefault();
    // get the hash value from the link's href attribute
    const hash = event.currentTarget.getAttribute("href").split("#")[1];
    // scroll to the element with the matching id
    document.getElementById(hash).scrollIntoView({ behavior: "smooth" });
  }
}
const MainNav = ({
  navigationStyle,
  headerHasBorder,
  headerLinkColor,
  scrolled,
  offcanvasOffset,
}) => {
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

  const [subMenuHovering3, setSubMenuHovering3] = useState(false);
  const isHoveringSubMenu3 = () => setSubMenuHovering3(true);
  const notHoveringSubMenu3 = () => setSubMenuHovering3(false);
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

  if (navigationStyle === "overlap") {
    initialLogo = data.logoDark.publicURL;
    stickyLogo = data.logoDark.publicURL;
    // initialPhoneIcon = data.phoneLight.publicURL;
    // stickyPhoneIcon = data.phoneDark.publicURL;
    className = "absolute";
  } else if (navigationStyle === "standard") {
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
      className={`w-full py-4 transition duration-300 ease-linear ${className}`}
      role="navigation"
      aria-label="main-navigation"
      data-fixed={scrolled}
      navigationStyle={navigationStyle}
      headerHasBorder={headerHasBorder}
      headerLinkColor={headerLinkColor}
      offcanvasOpen={offcanvasOpen}
    >
      <div className="container flex items-center justify-between">
        <div className="flex flex-auto items-center">
          <a href="/">
            <div className="logo-initial">
              <img
                src={initialLogo}
                alt="Long Beach Janitorial Logo"
                width="169"
                className="w-36 md:w-44"
              />
            </div>
            <div className="logo-fixed hidden">
              <img
                src={stickyLogo}
                alt="Long Beach Janitorial Logo"
                width="169"
                className="w-36 md:w-44"
              />
            </div>
          </a>
        </div>
        <div className="flex flex-auto items-center justify-end">
          <ul
            id="navigation-desktop"
            className="hidden lg:mr-10 lg:flex lg:items-center lg:justify-end"
          >
            {menuItems.map((menuItem) => (
              <li
                key={menuItem.id}
                className={`submenu-parent ${subMenuHovering1 ? "active" : ""}`}
              >
                {menuItem.link ? (
                  <a href={menuItem.link}>{menuItem.title}</a>
                ) : (
                  <a onMouseEnter={isHoveringSubMenu1} onMouseLeave={notHoveringSubMenu1} href="#">
                    {menuItem.title}
                  </a>
                )}
                {menuItem.submenu && (
                  <ul className="submenu">
                    {menuItem.submenu
                      .slice()
                      .sort((a, b) => a.title.localeCompare(b.title))
                      .map((subMenuItem) => (
                        <li key={subMenuItem.id}>
                          <a href={subMenuItem.link}>{subMenuItem.title}</a>
                        </li>
                      ))}
                      {/*Covid element taken from services*/}
                      <li key={services[0].id}>
                          <a href={services[0].link}>{services[0].title}</a>
                        </li>
                  </ul>
                )}
              </li>
            ))}

            <li>
              <a href="/reviews/">Reviews</a>
            </li>
          </ul>
          <div className="hidden items-center lg:inline-flex">
            <ButtonSolid
              className="min-w-[160px]"
              as="button"
              modal="modal-contact"
              text="Contact"
            />
          </div>{" "}
          <div className="lg:hidden" ref={node}>
            <Burger
              offcanvasOpen={offcanvasOpen}
              setOffcanvasOpen={setOffcanvasOpen}
              navigationStyle={navigationStyle}
              scrolled={scrolled}
              aria-controls="offcanvas-navigation"
            />
            <OffCanvas
              offcanvasOpen={offcanvasOpen}
              offcanvasOffset={offcanvasOffset}
              id="offcanvas-navigation"
            >
              <ul id="navigation-mobile">
                {menuItems.map((menuItem) => (
                  <li key={menuItem.id} className="relative mb-8">
                    {menuItem.title === "Services" ? (
                      <a href="/commercial-cleaning-services/" onClick={clickHandler}>
                        {menuItem.title}
                      </a>
                    ) : menuItem.title === "Industries" ? (
                      <a href="/industries-we-serve" onClick={clickHandler}>
                        {menuItem.title}
                      </a>
                    ) : menuItem.link ? (
                      <a href={menuItem.link} onClick={clickHandler}>
                        {menuItem.title}
                      </a>
                    ) : (
                      <Accordion title={menuItem.title} className="submenu-parent">
                        {menuItem.submenu
                          .sort((a, b) => a.title.localeCompare(b.title)) // sort submenu items alphabetically
                          .map((subMenuItem) => (
                            <li key={subMenuItem.id}>
                              <a href={subMenuItem.link} onClick={clickHandler}>
                                {subMenuItem.title}
                              </a>
                            </li>
                          ))}
                      </Accordion>
                    )}
                  </li>
                ))}

                <div className="mt-8 flex">
                  <a
                    href="https://www.yelp.com/biz/national-janitorial-services-long-beach"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6"
                  >
                    <i className="fab fa-yelp text-2xl text-white transition-all duration-300 ease-linear hover:text-primary"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/longbeachjanitorial/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f text-2xl text-white transition-all duration-300 ease-linear hover:text-primary"></i>
                  </a>
                </div>
              </ul>
            </OffCanvas>
          </div>
        </div>
      </div>
    </StyledMainNav>
  );
};
export default MainNav;
