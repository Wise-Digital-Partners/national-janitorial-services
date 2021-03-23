import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Scrollspy from "react-scrollspy";

const StyledScrollNavigation = styled.div`
   /* @media (max-width: 1023px){
        ${tw`relative sticky hidden md:flex items-center justify-between bg-primary w-full h-12 px-6 cursor-pointer z-10 transform -translate-x-6`}
        top: 64px;
        width: calc(100% + 3rem);
        &:after {
            content: "\f078";
            font-family: "Font Awesome 5 Pro";
            ${tw`text-white text-base font-normal transition-all duration-300 ease-linear`}
        }
        &.active {
            &:after {
                ${tw`transform rotate-180`}
            }
        }            
        ul {
            ${tw`absolute top-0 left-0 p-0 m-0 w-full bg-white shadow-lg list-none transform translate-y-12`}
            li {
                ${tw`text-sm text-gray-800 flex items-center`}
                a {
                    ${tw`block w-full px-6 py-3 no-underline`}
                    &:hover {
                        ${tw`text-primary`}
                    }
                }                    
            }
        }
    } */
   .scroll-navigation {
      @media (min-width: 1024px) {
         ${tw`sticky`}
         top: 8rem;
         .scrollspy {
            ${tw`max-h-full!`}
         }
         ul {
            li {
               ${tw`text-sm text-black text-opacity-40 flex items-center`}
               &.is-current {
                  ${tw`text-opacity-100`}/* &:before {
                            ${tw`w-8 mr-3`}
                        } */
               }
               /* &:before {
                        content: '';
                        ${tw`h-px w-0 bg-primary transition-all duration-300 ease-linear`}
                    } */
               &:not(:last-child) {
                  ${tw`mb-3`}
               }
            }
         }
      }
   }
`;

const ScrollNavigation = ({ children, className }) => {
   // Toggle Dropdown
   const [setActive, setActiveState] = useState("");
   const [setHeight, setHeightState] = useState("0px");
   const scrollNavigationList = useRef(null);

   const clickHandler = () => {
      setActiveState(setActive === "" ? "active" : "");
      setHeightState(setActive === "active" ? "0px" : "400px");
   };

   return (
      <StyledScrollNavigation className={`${className} ${setActive}`} onKeyDown={clickHandler} onClick={clickHandler}>
         {/* <span className="inline text-white lg:hidden">Services Menu</span> */}
         <nav className="scroll-navigation">
            <Scrollspy
               items={[
                  "section-1",
                  "section-2",
                  "section-3",
                  "section-4",
                  "section-5",
                  "section-6",
                  "section-7",
                  "section-8",
                  "section-9",
                  "section-10",
                  "section-11",
                  "section-12",
                  "section-13",
                  "section-14",
                  "section-15",
                  "section-16",
                  "section-17",
                  "section-18",
                  "section-19",
                  "section-20",
               ]}
               offset={-100}
               currentClassName="is-current"
               ref={scrollNavigationList}
               className="scrollspy overflow-auto transition-all duration-300 ease-linear"
               style={{ maxHeight: `${setHeight}` }}
            >
               {children}
            </Scrollspy>
         </nav>
      </StyledScrollNavigation>
   );
};

export default ScrollNavigation;
