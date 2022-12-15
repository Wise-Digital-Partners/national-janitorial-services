import React from "react";

const OffCanvas = ({ children, offcanvasOpen, offcanvasOffset }) => {
   const isHidden = offcanvasOpen ? true : false;

   if (typeof window !== `undefined`) {
      if (offcanvasOpen) {
         document.body.style.overflow = "hidden";
         document.getElementsByTagName("html")[0].style.overflow = "hidden";
      } else {
         document.body.style.overflow = "";
         document.getElementsByTagName("html")[0].style.overflow = "";
      }
   }

   return (
      <nav
         offcanvasOpen={offcanvasOpen}
         aria-hidden={!isHidden}
         className={`bg-gray-800 fixed top-0 left-0 w-full h-screen pt-16 pb-40 px-4 z-10 overflow-y-scroll transition-transform duration-500 ease-in-out ${
            offcanvasOpen ? "translate-x-0" : "translate-x-full"
         }`}
         style={{ top: offcanvasOffset + "px" }}
      >
         {children}
      </nav>
   );
};

export default OffCanvas;
