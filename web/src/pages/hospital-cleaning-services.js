import React from "react";
import { graphql } from "gatsby";
import Link from "gatsby-plugin-transition-link";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from "react-accessible-accordion";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroStacked from "../components/Hero/HeroStacked";
import Testimonials from "../components/Repeating/Testimonials";
import Clients from "../components/Repeating/Clients";
import WhyUs from "../components/Repeating/WhyUs";
import CallToAction from "../components/Repeating/CTA";

const sections = [
   {
      heading: "Why Hospital Cleaning Requires a Different Standard",
      paragraphs: [
         "A missed corner in a retail store is a minor inconvenience. A missed corner in a patient room is a documented gap that can contribute to a healthcare-associated infection, and a gap your facility may be asked to account for in an inspection or audit. That distinction is why we do not treat hospital accounts as standard commercial cleaning with extra disinfectant. It is why every task, product, and dwell time on this page is tied to a standard we can point to, not an internal opinion of what \"clean enough\" looks like.",
         "Facilities managers who bring us in after using a general commercial cleaning crew tend to describe the same three problems: no documentation trail to show inspectors, no risk-based sequencing between high-contact and low-contact zones, and no accountability when a corrective action is needed. Our process is built to close all three, starting with a site walkthrough and ending with a paper trail your compliance team can produce on request.",
      ],
   },
   {
      heading: "Our Healthcare Facility Cleaning Process",
      paragraphs: ["Every account follows the same four-stage process, adjusted to your facility's layout and department mix."],
      items: [
         {
            title: "Site Walkthrough.",
            text: "Before we clean a single surface, we walk the facility with your team to map traffic patterns, identify isolation areas, and flag high-touch zones specific to your layout. This step is never skipped, including for smaller clinics and medical offices.",
         },
         {
            title: "Custom Cleaning Plan.",
            text: "Frequency, disinfection protocols, and staffing levels are matched to department needs. An ICU corridor, a billing office, and a cafeteria are documented as three separate risk profiles, not one uniform space.",
         },
         {
            title: "Execution by Trained Staff.",
            text: "Our team follows facility-specific protocols for personal protective equipment, color-coded tools, and cross-contamination prevention. Staff train on your protocol before they are assigned to your account, and that training is logged.",
         },
         {
            title: "Quality Checks and Recordkeeping.",
            text: "Routine inspections confirm disinfection standards are being met. Findings, corrective actions, and plan adjustments are recorded, not just verbally reported, so the record exists if your facility needs it later.",
         },
      ],
   },
   {
      heading: "Hospital Areas We Clean",
      paragraphs: ["Our teams handle dusting, wiping, vacuuming, and disinfection across every zone of your facility, high-risk and low-risk alike, with the risk sequencing and dedicated equipment covered in the sections below."],
      items: [
         "Lobbies and waiting areas",
         "Patient rooms",
         "Exam rooms",
         "Offices",
         "Cafeteria and break rooms",
         "Bathrooms",
         "Stairwells",
         "And more, based on your facility's layout",
      ].map(text => ({ text })),
   },
   {
      heading: "CDC-Aligned Compliance Protocols",
      paragraphs: [
         "Our cleaning protocols are structured around CDC guidance for environmental infection control in healthcare facilities, covering surface classification, cleaning frequency by risk level, and terminal cleaning between patient occupancies. We classify every surface in your facility as noncritical, semicritical, or high-touch, and the cleaning frequency and product selection assigned to each classification follows that guidance rather than a generic janitorial schedule.",
         "Your custom cleaning plan documents every surface, disinfectant type, and service frequency required for your facility. We develop this plan during your initial 30 Minute Site Consultation to ensure complete transparency and alignment with your operational goals. When facility directors or compliance personnel need to verify how a specific area is maintained, every detail is clearly recorded in your written scope of work rather than left to memory. Our certified cleaning technicians utilize EPA-registered disinfectants and follow CDC-aligned health protocols to deliver a consistent, medical-grade clean across every zone.",
         "Our specialized disinfection teams are certified cleaning experts, professionally trained on industry best practices in accordance with CDC guidelines. Before servicing any medical office, dental clinic, or healthcare facility, our crews are trained in proper dwell times and cross-contamination prevention using EPA-registered, hospital-grade disinfectants. Every phase of our healthcare sanitation program is documented in your custom scope of work to ensure complete compliance and patient safety.",
      ],
   },
   {
      heading: "Healthcare-Specific Disinfection Procedures",
      paragraphs: [
         "Cleaning a medical facility is not the same job as cleaning an office, and treating it that way is how infection risk creeps in. We use EPA-registered, hospital-grade disinfectants and follow terminal cleaning procedures in patient rooms and exam areas, meaning every surface a patient or provider might touch is treated with the same rigor used between patient discharges, not a quick wipe-down.",
         "Dwell time, meaning how long a disinfectant must remain wet on a surface before it is wiped away, is the single most common failure point we find when we take over an account. Removing a disinfectant too early can leave pathogens behind even though the surface looks and feels clean. Our staff are trained on the specific dwell time for each product used in your facility, not on the general concept of disinfecting, and dwell time compliance is one of the items checked during routine quality inspections.",
         "Surface disinfection is paired with specialized cleaning systems to capture airborne pathogens and sanitize high-touch areas before contaminants can resettle on cleaned surfaces. By combining advanced equipment with EPA-registered disinfectants, our certified cleaning experts deliver a comprehensive, medical-grade clean that prevents cross-contamination throughout your facility.",
      ],
   },
   {
      heading: "Cross-Contamination Prevention",
      paragraphs: [
         "Equipment and cleaning cloths are color-coded and never shared between patient zones. This single practice is one of the most effective, and most overlooked, ways to stop pathogens from traveling from one room to the next on a mop head or a rag. A cloth used in a bathroom never touches a countertop in a patient room. A mop used in an exam room never crosses into a break room.",
         "Cross-contamination prevention is sequenced, not just color-coded. High-risk zones, including patient rooms, exam rooms, and bathrooms, are cleaned and disinfected before lower-risk common areas like lobbies, offices, and break rooms. A crew that cleans a lobby first and a patient room last, using the same cart and tools throughout, can unintentionally carry contamination in the wrong direction. Reversing that order, and assigning dedicated equipment to each risk tier, keeps pathogens contained to the areas where they originate.",
      ],
   },
   {
      heading: "Healthcare Compliance and Disinfection Support",
      paragraphs: [
         "Medical offices, dental clinics, and hospital accounts require rigorous sanitation protocols that keep patients, staff, and visitors safe. Our certified cleaning experts adhere to CDC guidelines and utilize EPA-registered, hospital-grade disinfectants to eliminate pathogens and prevent cross-contamination across waiting rooms, exam areas, and high-touch surfaces. Every service frequency and product standard is clearly established in your written scope of work during your initial 30 Minute Site Consultation, providing your facility management team with clear, organized documentation that supports your ongoing sanitation and health compliance standards.",
      ],
   },
   {
      heading: "The LBJ Hospital Sanitation Protocol",
      paragraphs: [
         "Every hospital account we manage runs on the LBJ Hospital Sanitation Protocol, our internal framework for sequencing cleaning tasks by contamination risk and tying each task to a specific standard, product, and record. High-risk zones are cleaned first, with dedicated equipment for each risk tier, and each step in the sequence is logged so the protocol produces a documented record rather than an unverified routine.",
         "The protocol matters because sequencing errors are usually invisible until something goes wrong. By fixing the order of operations and separating equipment by zone, the LBJ Hospital Sanitation Protocol keeps pathogens contained to the areas where they originate instead of letting them spread through the building over a single cleaning visit. It is a documented operational standard, not a best-effort habit that varies by crew.",
      ],
   },
   {
      heading: "Why Long Beach Facilities Choose LBJ for Medical Office Cleaning Services",
      paragraphs: [
         "Hospitals and medical offices in the Long Beach area choose LBJ because we treat medical-grade cleaning as its own discipline, supported by its own documentation, not an add-on to standard janitorial work. Staff go through facility-specific onboarding rather than a one-size-fits-all training program, and that onboarding is recorded, so the people cleaning your building can be shown to understand your protocols, your layout, and your risk zones.",
         "We build flexibility into every cleaning plan without losing the written paper trail. Patient volumes shift, departments expand, and outbreak precautions can change unexpectedly. Because your custom cleaning plan is established and documented from day one during your initial 30 Minute Site Consultation, adjusting your schedule or expanding coverage simply means updating an existing written record. Backed by over 5 years of commercial cleaning experience and trusted by more than 100 local accounts, we keep your facility compliant, adaptable, and protected through every operational shift.",
      ],
   },
];

const related = [
   { to: "/office-building-cleaning/", title: "Office Building Cleaning:", text: "Daily janitorial service for administrative suites, billing offices, and non-clinical areas within your facility." },
   { to: "/floor-waxing-services/", title: "Floor Care and Waxing Services:", text: "Scheduled floor stripping, waxing, and surface protection for corridors, lobbies, and common areas that fall outside patient-care zones." },
   { to: "/disinfection-services/", title: "Disinfection Services:", text: "Targeted sanitization using EPA-registered, hospital-grade disinfectants for high-touch surfaces, waiting areas, and shared restrooms." },
];

const faqs = [
   {
      q: "How often should a hospital be professionally cleaned?",
      a: "High-traffic and patient-care areas typically need daily disinfection, while administrative and common areas may run a less frequent schedule. Frequency is set in your custom cleaning plan during the site walkthrough and adjusted as patient volume changes.",
   },
   {
      q: "Do you provide cleaning staff trained for medical environments?",
      a: "Yes. Staff are trained in hospital-grade disinfection protocols, PPE use, and cross-contamination prevention before working in a medical facility, and that training is documented and tailored to your facility's layout and protocols.",
   },
   {
      q: "Can you work around hospital operating hours?",
      a: "Yes. We schedule cleaning around your facility's patient flow and operating hours to minimize disruption to care, including off-hours cleaning for high-traffic departments.",
   },
   {
      q: "What products do you use to disinfect, and are they EPA-registered?",
      a: "We use EPA-registered, hospital-grade disinfectants appropriate for medical environments, applied with documented dwell times so surfaces are actually disinfected, not just wiped.",
   },
   {
      q: "Can you support our facility's OSHA and infection control documentation needs?",
      a: "Yes. We maintain Safety Data Sheets, staff bloodborne pathogen training records, and PPE usage logs specific to your account, available on request for internal review or external inspection.",
   },
   {
      q: "Can you handle multiple buildings or departments under one plan?",
      a: "Yes. Larger facilities with multiple departments or buildings can be managed under a single coordinated plan, with staffing, protocols, and documentation adjusted per area.",
   },
];

const Page = ({ data }) => {
   return (
      <Layout navigationStyle="standard" headerLinkColor="" headerHasBorder={false}>
         <SearchEngineOptimization
            title="Hospital Cleaning Company in Long Beach, CA | LBJ"
            description="LBJ delivers healthcare facility cleaning built on CDC-aligned protocols, documented infection control cleaning, and OSHA-ready records. Schedule a site consultation."
            openGraphImage={data.openGraphImage.publicURL}
            twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <HeroStacked
            image={data.heroStacked.childImageSharp.gatsbyImageData}
            backgroundFixed={true}
            imageMaxHeight="max-h-[468px]"
            heading="Hospital Cleaning Company Serving Long Beach Medical Facilities"
            textMaxWidth="max-w-4xl"
         />

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="max-w-4xl">
                  <p className="mb-0">
                     Long Beach Janitorial (LBJ) is a hospital cleaning company built around one premise: a hospital cannot verify what it does not document. This page covers our medical office cleaning services, our healthcare facility cleaning process, and
                     the CDC-aligned and OSHA-ready recordkeeping we build into every account, so your facility can show, not just say, that infection control cleaning happened.
                  </p>
               </div>
            </div>
         </section>

         {sections.map((section, i) => (
            <section key={section.heading} className={i % 2 === 0 ? "bg-gray-50 py-14 md:py-20" : "py-16 md:py-32"}>
               <div className="container">
                  <div className="max-w-4xl">
                     <h2>{section.heading}</h2>
                     {section.paragraphs.map((text, j) => (
                        <p key={j} className={j === section.paragraphs.length - 1 && !section.items ? "mb-0" : ""}>
                           {text}
                        </p>
                     ))}
                     {section.items && section.items.length > 0 && (
                        <ul className="styled-list mb-0">
                           {section.items.map(item => (
                              <li key={item.title || item.text}>
                                 <span>
                                    {item.title && <strong>{item.title}</strong>}
                                    {item.title ? " " : ""}
                                    {item.text}
                                 </span>
                              </li>
                           ))}
                        </ul>
                     )}
                  </div>
               </div>
            </section>
         ))}

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Related LBJ Commercial Cleaning Services</h2>
                  <ul className="styled-list mb-0">
                     {related.map(item => (
                        <li key={item.to}>
                           <span>
                              <Link fade to={item.to} className="text-link font-bold">
                                 {item.title}
                              </Link>{" "}
                              {item.text}
                           </span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-20">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Frequently Asked Questions</h2>
                  <Accordion allowZeroExpanded>
                     {faqs.map((faq, i) => (
                        <AccordionItem key={faq.q} uuid={`faq-${i}`} className="mb-4 bg-white px-6 md:px-10 py-4">
                           <AccordionItemHeading aria-level={3}>
                              <AccordionItemButton className="flex items-center justify-between focus:outline-none">
                                 <span className="text-lg font-bold pr-4">{faq.q}</span>
                                 <AccordionItemState>
                                    {({ expanded }) => <i className={`fas fa-caret-down transform ${expanded ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-linear`}></i>}
                                 </AccordionItemState>
                              </AccordionItemButton>
                           </AccordionItemHeading>
                           <AccordionItemPanel className="pt-4 animate-fadeIn">
                              <p className="mb-0">{faq.a}</p>
                           </AccordionItemPanel>
                        </AccordionItem>
                     ))}
                  </Accordion>
               </div>
            </div>
         </section>

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Schedule Your Site Consultation</h2>
                  <p className="mb-0">
                     Infection control cleaning is not something to take on faith. Schedule a{" "}
                     <button type="button" data-modal-open="modal-contact" className="text-link font-bold underline">
                        30 Minute Site Consultation
                     </button>{" "}
                     and we will walk your facility with you, map your risk zones, and show you exactly what the LBJ Hospital Sanitation Protocol would look like for your building. Prefer a lower-commitment first step? Get a{" "}
                     <button type="button" data-modal-open="modal-contact" className="text-link font-bold underline">
                        Free Estimate
                     </button>{" "}
                     and we will follow up with next steps for a full walkthrough.
                  </p>
               </div>
            </div>
         </section>

         <Clients className="pb-16 md:pb-32" headingLevel="h2" />

         <Testimonials headingLevel="h2" />

         <WhyUs className="py-16 md:py-32" headingLevel="h2" />

         <CallToAction headingLevel="h2" />
      </Layout>
   );
};

export const query = graphql`
   {
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/Hospitals_FB.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/Hospitals_TW.jpg" }) {
         publicURL
      }
      heroStacked: file(relativePath: { eq: "industries/hospitals/1.0 Hospital Hero Desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
   }
`;
export default Page;
