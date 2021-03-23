import React from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Contact from "../Form/Contact";

const StyledModal = styled.div`
   .modal {
      &.is-open {
         ${tw`block`}
      }
      &[aria-hidden="false"] {
         .overlay {
            animation: mmfadeIn 0.5s cubic-bezier(0, 0, 0.2, 1);
         }
      }
      &[aria-hidden="false"] {
         .content-wrapper {
            animation: mmslideIn 0.5s cubic-bezier(0, 0, 0.2, 1);
         }
      }
      &[aria-hidden="true"] {
         .overlay {
            animation: mmfadeOut 0.5s cubic-bezier(0, 0, 0.2, 1);
         }
      }
      &[aria-hidden="true"] {
         .content-wrapper {
            animation: mmslideOut 0.5s cubic-bezier(0, 0, 0.2, 1);
         }
      }
      .content-wrapper,
      .overlay {
         will-change: transform;
      }
   }
   @keyframes mmfadeIn {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }

   @keyframes mmfadeOut {
      from {
         opacity: 1;
      }
      to {
         opacity: 0;
      }
   }

   @keyframes mmslideIn {
      from {
         transform: translateX(100%);
      }
      to {
         transform: translateX(0);
      }
   }

   @keyframes mmslideOut {
      from {
         transform: translateX(0);
      }
      to {
         transform: translateX(100%);
      }
   }
`;

const Modal = () => {
   if (typeof window !== `undefined`) {
      MicroModal.init({
         openTrigger: "data-modal-open",
         closeTrigger: "data-modal-close",
         disableFocus: true,
         disableScroll: true,
         awaitOpenAnimation: true,
         awaitCloseAnimation: true,
      });
   }

   return (
      <div>
         <StyledModal>
            <div className="modal relative hidden z-50" id="modal-contact" aria-hidden="false">
               <div
                  className="overlay fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black bg-opacity-75 outline-none"
                  tabIndex="-1"
                  data-modal-close
               >
                  <div
                     className="content-wrapper bg-gray-700 w-full h-screen overflow-auto max-w-3xl ml-auto py-16 md:py-20 px-6 md:px-20"
                     role="dialog"
                     aria-modal="true"
                  >
                     <header className="mb-8">
                        <p className="heading-three text-white">Contact Heading</p>
                        <p className="text-white mb-0">
                           Interdu velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis
                           nunc sed id semper.
                        </p>
                     </header>

                     <span className="inline-block mb-8">
                        <a className="text-primary font-semibold flex items-center" href="tel:+1-123-456-7890">
                           <i className="fas fa-phone-alt mr-2"></i> 123-456-7890
                        </a>
                     </span>

                     <Contact />

                     <i
                        className="close fal fa-times absolute top-0 right-0 mr-8 md:mr-12 mt-12 text-2xl text-white hover:text-primary focus:text-primary active:text-primary cursor-pointer transition-all duration-300 ease-linear"
                        data-modal-close
                     ></i>
                  </div>
               </div>
            </div>
         </StyledModal>
      </div>
   );
};
export default Modal;
