import React, { Component } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import ButtonSolid from "../Button/ButtonSolid";

function encode(data) {
   return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const StyledForm = styled.div`
   .field {
      ${tw`mb-6`}
   }
   .label {
      ${tw`text-sm font-semibold text-white block mb-1`}
   }
   [multiple],
   [type="date"],
   [type="datetime-local"],
   [type="email"],
   [type="month"],
   [type="number"],
   [type="password"],
   [type="search"],
   [type="tel"],
   [type="text"],
   [type="time"],
   [type="url"],
   [type="week"],
   select,
   textarea {
      ${tw`w-full bg-transparent text-white px-4 py-3 border border-solid border-gray-100 rounded-sm focus:border-blue-300 focus:ring-blue-300`}
   }
   select {
      &:invalid {
         ${tw`text-opacity-60`}
      }
   }
`;

export default class Form extends Component {
   constructor(props) {
      super(props);
      this.state = { isValidated: false };
   }

   handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   };

   handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      fetch("/", {
         method: "POST",
         headers: { "Content-Type": "application/x-www-form-urlencoded" },
         body: encode({
            "form-name": form.getAttribute("name"),
            ...this.state,
         }),
      })
         .then(
            () =>
               (document.getElementById("contact-form-ajax-response").innerHTML =
                  "Thank you for contacting us! We will get in touch with you shortly."),
            form.remove(),
            (window.dataLayer = window.dataLayer || []),
            window.dataLayer.push({
               event: "contactFormSubmission",
            })
         )
         .catch((error) => alert(error));
   };

   render() {
      return (
         <StyledForm>
            <div id="contact-form-ajax-response" className="text-white"></div>
            <form name="Contact" method="post" action="" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
               {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
               <input type="hidden" name="form-name" value="Contact" />
               <div hidden>
                  <label>
                     Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
                  </label>
               </div>

               <div className="field">
                  <label className="label" htmlFor="name">
                     Name
                  </label>
                  <input type="text" name="name" onChange={this.handleChange} id="name" required={true} />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 w-full">
                  <div className="field">
                     <label className="label" htmlFor="email">
                        Email
                     </label>
                     <input type="email" name="email" onChange={this.handleChange} id="email" required={true} />
                  </div>
                  <div className="field">
                     <label className="label" htmlFor="phone">
                        Phone
                     </label>
                     <input type="tel" name="phone" onChange={this.handleChange} id="phone" required={true} />
                  </div>
               </div>

               <div className="field">
                  <label className="label" htmlFor="service-select">
                     How can we help?
                  </label>
                  <select name="service-select" id="service-select" onBlur={this.handleChange} required={true}>
                     <option value="" disabled defaultValue>
                        How can we help?
                     </option>
                     <option value="Janitorial Services">Janitorial Services</option>
                     <option value="Commercial Cleaning">Commercial Cleaning</option>
                     <option value="Office Cleaning">Office Cleaning</option>
                     <option value="Porter Services">Porter Services</option>
                     <option value="Deep Cleaning">Deep Cleaning</option>
                     <option value="Disinfectant Cleaning">Disinfectant Cleaning</option>
                     <option value="COVID Cleaning Services">COVID Cleaning Services</option>
                     <option value="Other">Other</option>
                  </select>
               </div>

               <div className="field">
                  <label className="label" htmlFor="message">
                     Message
                  </label>
                  <textarea className="textarea" name="message" onChange={this.handleChange} id="message" rows="4" required={false} />
               </div>

               <div className="mt-2">
                  <ButtonSolid as="button" type="submit" text="Get Started" />
               </div>
            </form>
         </StyledForm>
      );
   }
}
