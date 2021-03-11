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
   form {
      ${tw`flex flex-wrap`}
   }
   .field {
      ${tw`mb-6 w-full`}
   }
   label,
   legend {
      ${tw`block text-sm text-gray-800 mb-2`}
   }
   input[type="text"],
   input[type="tel"],
   input[type="email"],
   textarea,
   select {
      ${tw`w-full px-4 py-3 text-gray-800 border border-solid border-gray-400 border-opacity-40 rounded-sm`}
      &:focus,
    &:active {
         ${tw`border-black outline-none`}
      }
   }
   select {
      ${tw`h-12 appearance-none cursor-pointer`}
   }
   .select-wrapper {
      ${tw`relative`}
      &:after {
         content: "\f078";
         font-family: "Font Awesome 5 Pro";
         ${tw`absolute text-gray-800 font-normal transform translate-y-3 -translate-x-10`}
      }
   }
`;

export default class Form extends Component {
   constructor(props) {
      super(props);
      this.state = { isValidated: false };
   }

   handleChange = (e) => {
      const name = e.target.name;
      if (name.includes("[]")) {
         this.setState((state) => {
            let array = state[name] || [];
            array = e.target.checked === true ? [...array, e.target.value] : array.filter((element) => element !== e.target.value);
            return {
               ...state,
               [name]: array,
            };
         });
      } else {
         this.setState({ [e.target.name]: e.target.value });
      }
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
            <div id="contact-form-ajax-response"></div>
            <form name="Contact" method="post" action="" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
               {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
               <input type="hidden" name="form-name" value="Contact" />
               <div hidden>
                  <label>
                     Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
                  </label>
               </div>

               <div className="field">
                  <label htmlFor="name">
                     Name<span className="text-red-500 text-base">*</span>
                  </label>
                  <input type="text" name="name" onChange={this.handleChange} id="name" required={true} />
               </div>

               <div className="field">
                  <label htmlFor="street-address">
                     Project Address<span className="text-red-500 text-base">*</span>
                  </label>
                  <input
                     type="text"
                     name="street-address"
                     onChange={this.handleChange}
                     id="street-address"
                     required={true}
                     placeholder="Street Address"
                  />
               </div>

               <div className="field">
                  <input
                     type="text"
                     name="street-address-line-2"
                     onChange={this.handleChange}
                     id="street-address-line-2"
                     required={false}
                     placeholder="Street Address Line 2"
                  />
               </div>

               <div className="field">
                  <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6 w-full">
                     <input type="text" name="city" onChange={this.handleChange} id="city" required={true} placeholder="City" />
                     <input type="text" name="region" onChange={this.handleChange} id="region" required={true} placeholder="Region" />
                     <input
                        type="text"
                        name="zip-code"
                        onChange={this.handleChange}
                        id="zip-code"
                        required={true}
                        placeholder="Zip Code"
                        pattern="[0-9]*"
                     />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 w-full">
                  <div className="field">
                     <label htmlFor="email">
                        Email<span className="text-red-500 text-base">*</span>
                     </label>
                     <input type="email" name="email" onChange={this.handleChange} id="email" required={true} />
                  </div>
                  <div className="field">
                     <label htmlFor="phone">
                        Phone Number<span className="text-red-500 text-base">*</span>
                     </label>
                     <input type="tel" name="phone" onChange={this.handleChange} id="phone" required={true} />
                  </div>
               </div>

               <div className="field">
                  <fieldset>
                     <legend>
                        I am a...<span className="text-red-500 text-base">*</span>
                     </legend>
                     <p className="text-xs -mt-2 mb-3">Check all that apply.</p>
                     <div className="grid grid-cols-2 gap-x-6 mt-2">
                        <label className="relative pl-8 mb-2 cursor-pointer">
                           <input type="checkbox" name="i-am-a" value="Homeowner" onChange={this.handleChange} />
                           Homeowner
                           <span className="checkbox-custom"></span>
                        </label>
                        <label className="relative pl-8 mb-2 cursor-pointer">
                           <input
                              type="checkbox"
                              name="i-am-a"
                              onChange={this.handleChange}
                              value="Builder/Contractor
"
                           />
                           Builder/Contractor
                           <span className="checkbox-custom"></span>
                        </label>
                        <label className="relative pl-8 mb-2 cursor-pointer">
                           <input type="checkbox" name="i-am-a" value="Investor/Developer" onChange={this.handleChange} />
                           Investor/Developer
                           <span className="checkbox-custom"></span>
                        </label>
                        <label className="relative pl-8 mb-2 cursor-pointer">
                           <input
                              type="checkbox"
                              name="i-am-a"
                              value="Business Owner/Tenant
"
                              onChange={this.handleChange}
                           />
                           Business Owner/Tenant
                           <span className="checkbox-custom"></span>
                        </label>
                        <label className="relative pl-8 mb-2 cursor-pointer">
                           <input type="checkbox" name="i-am-a" value="Other" onChange={this.handleChange} />
                           Other
                           <span className="checkbox-custom"></span>
                        </label>
                     </div>
                  </fieldset>
               </div>

               <div className="field">
                  <fieldset>
                     <legend>
                        Project Type<span className="text-red-500 text-base">*</span>
                     </legend>
                     <p className="text-xs -mt-2 mb-3">Check all that apply.</p>
                     <div className="grid grid-cols-2 gap-x-6 mt-2">
                        <label className="relative pl-8 mb-2 cursor-pointer">
                           <input type="checkbox" name="project-type" value="Accessory Dwelling Unit" onChange={this.handleChange} />
                           Accessory Dwelling Unit
                           <span className="checkbox-custom"></span>
                        </label>
                        <label className="relative pl-8 mb-2 cursor-pointer">
                           <input type="checkbox" name="project-type" onChange={this.handleChange} value="Residential Remodel/Addition" />
                           Residential Remodel/Addition
                           <span className="checkbox-custom"></span>
                        </label>
                        <label className="relative pl-8 mb-2 cursor-pointer">
                           <input type="checkbox" name="project-type" value="Custom Home" onChange={this.handleChange} />
                           Custom Home
                           <span className="checkbox-custom"></span>
                        </label>
                        <label className="relative pl-8 mb-2 cursor-pointer">
                           <input type="checkbox" name="project-type" value="Code Enforcement Case" onChange={this.handleChange} />
                           Code Enforcement Case
                           <span className="checkbox-custom"></span>
                        </label>
                        <label className="relative pl-8 mb-2 cursor-pointer">
                           <input type="checkbox" name="project-type" value="Commercial/Tenant Improvment" onChange={this.handleChange} />
                           Commercial/Tenant Improvment <span className="checkbox-custom"></span>
                        </label>
                        <label className="relative pl-8 mb-2 cursor-pointer">
                           <input type="checkbox" name="project-type" value="Other" onChange={this.handleChange} />
                           Other
                           <span className="checkbox-custom"></span>
                        </label>
                     </div>
                  </fieldset>
               </div>

               <div className="field">
                  <label htmlFor="message">
                     Project Description<span className="text-red-500 text-base">*</span>
                  </label>
                  <p className="text-xs -mt-2 mb-3">
                     *Please include if applicable - Total Existing sq. ft., Proposed Renovation sq. ft., Special Permit Requests
                  </p>
                  <textarea className="textarea" name="message" onChange={this.handleChange} id="message" rows="4" required={true} />
               </div>

               <div className="field">
                  <label htmlFor="service-select">
                     How'd You Hear About Us?<span className="text-red-500 text-base">*</span>
                  </label>
                  <div className="select-wrapper">
                     <select name="service-select" id="service-select" onBlur={this.handleChange} required={true}>
                        <option value="">Please Select</option>
                        <option value="Thumbtack">Thumbtack</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Houzz">Houzz</option>
                        <option value="Yelp">Yelp</option>
                        <option value="Referral">Referral</option>
                     </select>
                  </div>
               </div>

               <div className="mt-2">
                  <ButtonSolid as="button" type="submit" text="Submit" />
               </div>
            </form>
         </StyledForm>
      );
   }
}
