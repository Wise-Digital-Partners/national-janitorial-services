import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "gatsby-plugin-transition-link";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from "react-accessible-accordion";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroStacked from "../components/Hero/HeroStacked";
import Testimonials from "../components/Repeating/Testimonials";
import Clients from "../components/Repeating/Clients";
import WhyUs from "../components/Repeating/WhyUs";
import CallToAction from "../components/Repeating/CTA";
import CovidSplit from "../components/Repeating/CovidSplit";

const faqs = [
   {
      question: "How often should a hospital be professionally cleaned?",
      answer:
         "High-traffic and patient-care areas typically need daily disinfection, while administrative and common areas may run a less frequent schedule. Frequency is set in your custom cleaning plan during the site walkthrough and adjusted as patient volume changes.",
   },
   {
      question: "Do you provide cleaning staff trained for medical environments?",
      answer:
         "Yes. Staff are trained in hospital-grade disinfection protocols, PPE use, and cross-contamination prevention before working in a medical facility, and that training is documented and tailored to your facility's layout and protocols.",
   },
   {
      question: "Can you work around hospital operating hours?",
      answer: "Yes. We schedule cleaning around your facility's patient flow and operating hours to minimize disruption to care, including off-hours cleaning for high-traffic departments.",
   },
   {
      question: "What products do you use to disinfect, and are they EPA-registered?",
      answer: "We use EPA-registered, hospital-grade disinfectants appropriate for medical environments, applied with documented dwell times so surfaces are actually disinfected, not just wiped.",
   },
   {
      question: "Can you support our facility's OSHA and infection control documentation needs?",
      answer:
         "Yes. We maintain Safety Data Sheets, staff bloodborne pathogen training records, and PPE usage logs specific to your account, available on request for internal review or external inspection.",
   },
   {
      question: "Can you handle multiple buildings or departments under one plan?",
      answer: "Yes. Larger facilities with multiple departments or buildings can be managed under a single coordinated plan, with staffing, protocols, and documentation adjusted per area.",
   },
];

const areas = [
   "Lobbies and waiting areas",
   "Patient rooms",
   "Exam rooms",
   "Offices",
   "Cafeteria and break rooms",
   "Bathrooms",
   "Stairwells",
   "And more, based on your facility's layout",
];

const keyTakeaways = [
   "Hospital cleaning requires a documented, risk-sequenced standard, not a standard commercial cleaning routine with extra disinfectant",
   "LBJ builds a custom, documented cleaning plan for your facility after an on-site walkthrough, classifying surfaces by CDC-aligned risk category",
   "Cleaning follows the LBJ Hospital Sanitation Protocol, sequencing tasks from highest to lowest contamination risk with dedicated, zone-specific equipment",
   "All disinfectants used are EPA-registered and applied with documented dwell times appropriate for medical-grade environments",
   "Cross-contamination prevention relies on color-coded, zone-specific equipment that never crosses between patient areas",
   "OSHA documentation, including Safety Data Sheets, bloodborne pathogen training records, and PPE logs, is maintained and available on request",
   "Staff receive facility-specific, documented onboarding rather than generic commercial cleaning training",
   "Cleaning schedules are built and adjusted around your facility's patient flow, operating hours, and department needs",
];

const ModalButton = ({ children }) => (
   <button type="button" data-modal-open="modal-contact" className="text-link font-bold underline">
      {children}
   </button>
);

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
            heading="Hospital Cleaning Services"
            subtext="Thorough sanitation and disinfection for your hospital and medical facility."
            textMaxWidth="max-w-4xl"
         />

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-10 lg:gap-x-20 items-center">
                  <div>
                     <h2>Top Hospital Cleaning Services in Long Beach</h2>
                     <p className="mb-0">
                        Maintaining a rigorously sanitized environment is crucial to reduce the risk of hospital-acquired infections. At Long Beach Janitorial, we provide thorough and medical-grade cleaning to help keep your patients and staff safe. Our
                        professional cleaning experts capture airborne pathogens and disinfect surfaces without cross-contamination.
                     </p>
                  </div>
                  <div>
                     <GatsbyImage image={data.intro.childImageSharp.gatsbyImageData} alt="Top Hospital Cleaning Services in Long Beach" />
                  </div>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-20">
            <div className="container">
               <div className="max-w-4xl">
                  <p className="mb-0">
                     Long Beach Janitorial (LBJ) is a hospital cleaning company built around one premise: a hospital cannot verify what it does not document. This page covers our medical office cleaning services, our healthcare facility cleaning
                     process, and the CDC-aligned and OSHA-ready recordkeeping we build into every account, so your facility can show, not just say, that infection control cleaning happened.
                  </p>
               </div>
            </div>
         </section>

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Why Hospital Cleaning Requires a Different Standard</h2>
                  <p>
                     A missed corner in a retail store is a minor inconvenience. A missed corner in a patient room is a documented gap that can contribute to a healthcare-associated infection, and a gap your facility may be asked to account for in
                     an inspection or audit. That distinction is why we do not treat hospital accounts as standard commercial cleaning with extra disinfectant. It is why every task, product, and dwell time on this page is tied to a standard we can
                     point to, not an internal opinion of what "clean enough" looks like.
                  </p>
                  <p className="mb-0">
                     Facilities managers who bring us in after using a general commercial cleaning crew tend to describe the same three problems: no documentation trail to show inspectors, no risk-based sequencing between high-contact and
                     low-contact zones, and no accountability when a corrective action is needed. Our process is built to close all three, starting with a site walkthrough and ending with a paper trail your compliance team can produce on request.
                  </p>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-20">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Our Healthcare Facility Cleaning Process</h2>
                  <p>Every account follows the same four-stage process, adjusted to your facility's layout and department mix.</p>
                  <ul className="styled-list mb-0">
                     <li>
                        <span>
                           <strong>Site Walkthrough.</strong> Before we clean a single surface, we walk the facility with your team to map traffic patterns, identify isolation areas, and flag high-touch zones specific to your layout. This step is
                           never skipped, including for smaller clinics and medical offices.
                        </span>
                     </li>
                     <li>
                        <span>
                           <strong>Custom Cleaning Plan.</strong> Frequency, disinfection protocols, and staffing levels are matched to department needs. An ICU corridor, a billing office, and a cafeteria are documented as three separate risk
                           profiles, not one uniform space.
                        </span>
                     </li>
                     <li>
                        <span>
                           <strong>Execution by Trained Staff.</strong> Our team follows facility-specific protocols for personal protective equipment, color-coded tools, and cross-contamination prevention. Staff train on your protocol before they
                           are assigned to your account, and that training is logged.
                        </span>
                     </li>
                     <li>
                        <span>
                           <strong>Quality Checks and Recordkeeping.</strong> Routine inspections confirm disinfection standards are being met. Findings, corrective actions, and plan adjustments are recorded, not just verbally reported, so the
                           record exists if your facility needs it later.
                        </span>
                     </li>
                  </ul>
               </div>
            </div>
         </section>

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Hospital Areas We Clean</h2>
                  <p>
                     Our teams handle dusting, wiping, vacuuming, and disinfection across every zone of your facility, high-risk and low-risk alike, with the risk sequencing and dedicated equipment covered in the sections below.
                  </p>
                  <ul className="styled-list mb-0 grid grid-cols-1 gap-x-12 md:grid-cols-2">
                     {areas.map((area) => (
                        <li key={area}>
                           <span>{area}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-20">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>CDC-Aligned Compliance Protocols</h2>
                  <p>
                     Our cleaning protocols are structured around CDC guidance for environmental infection control in healthcare facilities, covering surface classification, cleaning frequency by risk level, and terminal cleaning between patient
                     occupancies. We classify every surface in your facility as noncritical, semicritical, or high-touch, and the cleaning frequency and product selection assigned to each classification follows that guidance rather than a generic
                     janitorial schedule.
                  </p>
                  <p>
                     This is not a marketing claim that we ask you to take on faith. Your custom cleaning plan documents which surfaces fall into which classification, which disinfectant and dwell time apply to each, and how often each zone is
                     serviced. When your infection control team or an accrediting body asks how a specific area is cleaned, the answer is in the plan, not in a staff member's memory.
                  </p>
                  <p className="mb-0">Our disinfection and infection-control teams are certified and professionally trained on best practices in accordance with CDC guidelines before working in a medical facility.</p>
               </div>
            </div>
         </section>

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Healthcare-Specific Disinfection Procedures</h2>
                  <p>
                     Cleaning a medical facility is not the same job as cleaning an office, and treating it that way is how infection risk creeps in. We use EPA-registered, hospital-grade disinfectants and follow terminal cleaning procedures in
                     patient rooms and exam areas, meaning every surface a patient or provider might touch is treated with the same rigor used between patient discharges, not a quick wipe-down.
                  </p>
                  <p>
                     Dwell time, meaning how long a disinfectant must remain wet on a surface before it is wiped away, is the single most common failure point we find when we take over an account. Removing a disinfectant too early can leave
                     pathogens behind even though the surface looks and feels clean. Our staff are trained on the specific dwell time for each product used in your facility, not on the general concept of disinfecting, and dwell time compliance is
                     one of the items checked during routine quality inspections.
                  </p>
                  <p className="mb-0">Surface disinfection is paired with equipment that captures airborne pathogens before they resettle on cleaned surfaces.</p>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-20">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Cross-Contamination Prevention</h2>
                  <p>
                     Equipment and cleaning cloths are color-coded and never shared between patient zones. This single practice is one of the most effective, and most overlooked, ways to stop pathogens from traveling from one room to the next on a
                     mop head or a rag. A cloth used in a bathroom never touches a countertop in a patient room. A mop used in an exam room never crosses into a break room.
                  </p>
                  <p className="mb-0">
                     Cross-contamination prevention is sequenced, not just color-coded. High-risk zones, including patient rooms, exam rooms, and bathrooms, are cleaned and disinfected before lower-risk common areas like lobbies, offices, and break
                     rooms. A crew that cleans a lobby first and a patient room last, using the same cart and tools throughout, can unintentionally carry contamination in the wrong direction. Reversing that order, and assigning dedicated
                     equipment to each risk tier, keeps pathogens contained to the areas where they originate.
                  </p>
               </div>
            </div>
         </section>

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>OSHA Documentation Support</h2>
                  <p>
                     Hospital and medical office accounts carry OSHA obligations our staff are trained to support, including Bloodborne Pathogens Standard requirements for any task involving potential exposure to blood or other potentially
                     infectious materials, and Hazard Communication Standard requirements for the chemicals we bring on site. We maintain and can provide, on request, Safety Data Sheets for every disinfectant used in your facility, documented
                     staff training records for bloodborne pathogen exposure control, and PPE usage logs specific to your account.
                  </p>
                  <p className="mb-0">
                     This documentation exists so your facility's compliance officer is not building an audit file from scratch during an inspection. If your facility undergoes a Joint Commission survey, a state health department inspection, or an
                     internal compliance review, the records supporting our cleaning and disinfection work are already organized and ready to hand over.
                  </p>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-20">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>The LBJ Hospital Sanitation Protocol</h2>
                  <p>
                     Every hospital account we manage runs on the LBJ Hospital Sanitation Protocol, our internal framework for sequencing cleaning tasks by contamination risk and tying each task to a specific standard, product, and record.
                     High-risk zones are cleaned first, with dedicated equipment for each risk tier, and each step in the sequence is logged so the protocol produces a documented record rather than an unverified routine.
                  </p>
                  <p className="mb-0">
                     The protocol matters because sequencing errors are usually invisible until something goes wrong. By fixing the order of operations and separating equipment by zone, the LBJ Hospital Sanitation Protocol keeps pathogens
                     contained to the areas where they originate instead of letting them spread through the building over a single cleaning visit. It is a documented operational standard, not a best-effort habit that varies by crew.
                  </p>
               </div>
            </div>
         </section>

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Why Long Beach Facilities Choose LBJ for Medical Office Cleaning Services</h2>
                  <p>
                     Hospitals and medical offices in the Long Beach area choose LBJ because we treat medical-grade cleaning as its own discipline, supported by its own documentation, not an add-on to standard janitorial work. Staff go through
                     facility-specific onboarding rather than a one-size-fits-all training program, and that onboarding is recorded, so the people cleaning your building can be shown to understand your protocols, your layout, and your risk zones.
                  </p>
                  <p className="mb-0">
                     We also build flexibility into every plan without losing the paper trail. Patient volume changes, departments expand, and outbreak precautions can shift overnight. Because your cleaning plan is custom and documented from day
                     one, adjusting it means updating a record that already exists, not starting over.
                  </p>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-20">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Related LBJ Commercial Cleaning Services</h2>
                  <ul className="styled-list mb-0">
                     <li>
                        <span>
                           <Link fade to="/office-building-cleaning/" className="text-link font-bold">
                              Office Building Cleaning.
                           </Link>{" "}
                           Daily janitorial service for administrative suites, billing offices, and non-clinical areas within a larger medical facility.
                        </span>
                     </li>
                     <li>
                        <span>
                           <Link fade to="/floor-waxing-services/" className="text-link font-bold">
                              Floor Care and Waxing Services.
                           </Link>{" "}
                           Scheduled floor maintenance for corridors and common areas that fall outside patient-care zones.
                        </span>
                     </li>
                  </ul>
               </div>
            </div>
         </section>

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="max-w-4xl">
                  <h2 className="mb-10">Frequently Asked Questions</h2>
                  <Accordion allowZeroExpanded={true}>
                     {faqs.map(({ question, answer }, index) => (
                        <AccordionItem key={question} uuid={`faq-${index}`} className="mb-4 bg-gray-50 px-6 py-4 md:px-10">
                           <AccordionItemHeading aria-level={3}>
                              <AccordionItemButton className="flex cursor-pointer items-center justify-between focus:outline-none">
                                 <span className="pr-4 text-lg font-bold md:text-xl">{question}</span>
                                 <AccordionItemState>
                                    {({ expanded }) => <i className={`fas fa-caret-down transform transition-all duration-300 ease-linear ${expanded ? "rotate-180" : "rotate-0"}`}></i>}
                                 </AccordionItemState>
                              </AccordionItemButton>
                           </AccordionItemHeading>
                           <AccordionItemPanel className="animate-fadeIn pt-4">
                              <p className="mb-0">{answer}</p>
                           </AccordionItemPanel>
                        </AccordionItem>
                     ))}
                  </Accordion>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-20">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Schedule Your Site Consultation</h2>
                  <p className="mb-0">
                     Infection control cleaning is not something to take on faith. <ModalButton>Schedule a 30 Minute Site Consultation</ModalButton> and we will walk your facility with you, map your risk zones, and show you exactly what the LBJ
                     Hospital Sanitation Protocol would look like for your building. Prefer a lower-commitment first step? <ModalButton>Get a Free Estimate</ModalButton> and we will follow up with next steps for a full walkthrough.
                  </p>
               </div>
            </div>
         </section>

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Key Takeaways</h2>
                  <ul className="styled-list mb-0">
                     {keyTakeaways.map((item) => (
                        <li key={item}>
                           <span>{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </section>

         <CovidSplit className="pb-16 md:pb-32" />

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
      intro: file(relativePath: { eq: "industries/hospitals/2.0 Hospital cleaning.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
   }
`;
export default Page;
