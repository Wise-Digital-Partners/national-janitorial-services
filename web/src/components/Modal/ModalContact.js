import React, { useState } from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";
import tw from "twin.macro";
import generalManagerProfile from "../../images/contact-form/Anthony avatar.png";
import Contact from "../Form/Contact";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { CalendlyFrame } from "../ContactModal/CalendlyFrame";
import CalendarIcon from "../ContactModal/CalendarIcon";
import MessageIcon from "../ContactModal/MessageIcon";

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
  const [activeTab, setActiveTab] = useState(0);

  if (typeof window !== "undefined") {
    MicroModal.init({
      openTrigger: "data-modal-open",
      closeTrigger: "data-modal-close",
      disableFocus: true,
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
    });
  }

  const data = useStaticQuery(graphql`
    {
      calendarIcon: file(relativePath: { eq: "contact-form/calendar icon.svg" }) {
        id
        publicURL
      }
      messageIcon: file(relativePath: { eq: "contact-form/message icon.svg" }) {
        id
        publicURL
      }
    }
  `);

  return (
    <div>
      <StyledModal>
        <div className="modal relative z-50 hidden" id="modal-contact" aria-hidden="false">
          <div
            className="overlay fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black bg-opacity-75 outline-none"
            tabIndex="-1"
            data-modal-close
          >
            <div
              className="content-wrapper ml-auto h-screen w-full max-w-[720px] overflow-auto bg-gray-700 "
              role="dialog"
              aria-modal="true"
              //px-6 py-16 md:px-20 md:py-20
            >
              <div className="flex w-full items-center justify-between bg-primary px-6 py-4">
                <a
                  className="flex items-center font-semibold text-white"
                  href="tel:+1-424-260-7369"
                >
                  <i className="fas fa-phone-alt mr-2"></i> (424) 260-7369
                </a>
                <i
                  className="close fal fa-times   cursor-pointer text-2xl text-white transition-all duration-300 ease-linear hover:text-primary focus:text-primary active:text-primary"
                  data-modal-close
                ></i>
              </div>
              <div className="p-10">
                <div className="pb-[28px]">
                  <header className="heading-three mb-0 self-center text-white">
                    Contact Long Beach Janitorial
                  </header>
                </div>
                <div className="mb-7 grid grid-cols-2 gap-x-0">
                  <SimpleTabButton
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    tabIndex={0}
                    buttonText="Site Visit"
                    buttonIcon="calendar"
                  />
                  <SimpleTabButton
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    tabIndex={1}
                    buttonText="Send us a message"
                    buttonIcon="message"
                  />
                </div>
                {activeTab === 0 ? (
                  <div>
                    <p className="mb-0 text-white">
                      Let our highly qualified team handle your business with the utmost
                      professionalism and care for janitorial services you can rely on.
                    </p>
                    <CalendlyFrame />
                  </div>
                ) : (
                  <div>
                    <p className="mb-6 text-white">
                      Experience the Long Beach Janitorial difference. Tell us about your cleaning
                      needs today!
                    </p>
                    <Contact />
                  </div>
                )}
                {/* <div>
                  <p className="mb-0 text-white">
                    Experience the Long Beach Janitorial difference. Tell us about your cleaning
                    needs today!
                  </p>
                  <Contact />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </StyledModal>
    </div>
  );
};

const SimpleTabButton = ({ activeTab, setActiveTab, tabIndex, buttonText, buttonIcon }) => {
  const handleClick = () => {
    setActiveTab(tabIndex);
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        activeTab === tabIndex ? " border-primary text-primary" : " border-white text-white"
      } flex cursor-pointer items-center justify-center gap-x-[16px] border-b-[1px]  px-[40px] py-[11px]  !font-semibold`}
    >
      {buttonText}
    </div>
  );
};

const TabButton = ({ activeTab, setActiveTab, tabIndex, buttonText, buttonIcon }) => {
  const handleClick = () => {
    setActiveTab(tabIndex);
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        activeTab === tabIndex ? "bg-white text-primary" : "bg-gray-400 text-white"
      } flex cursor-pointer items-center justify-start gap-x-[16px] rounded-[3px] px-[40px] py-[11px] font-semibold`}
    >
      {buttonIcon === "calendar" ? (
        <CalendarIcon isActive={activeTab === tabIndex} />
      ) : (
        <MessageIcon isActive={activeTab === tabIndex} />
      )}
      {/* <img src={buttonIcon.publicURL} width={20} height="auto"/>  */}
      <div className="">{buttonText}</div>
    </div>
  );
};
export default Modal;
