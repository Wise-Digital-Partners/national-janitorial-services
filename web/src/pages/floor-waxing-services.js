import React from "react";
import { graphql } from "gatsby";
import Link from "gatsby-plugin-transition-link";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from "react-accessible-accordion";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroStacked from "../components/Hero/HeroStacked";
import Testimonials from "../components/Repeating/Testimonials";
import About from "../components/Repeating/About";
import Clients from "../components/Repeating/Clients";
import WhyUs from "../components/Repeating/WhyUs";
import CallToAction from "../components/Repeating/CTA";

const sections = [
   {
      "heading": "Why Floor Care Is an Asset Protection Issue, Not Just an Appearance Issue",
      "paragraphs": [
         "Scuff marks, dulling, and discoloration on a commercial floor are not just cosmetic. High-traffic areas accumulate dirt and grime that wear through wax and finish faster than most facility managers expect, and once that finish is gone, the floor material underneath is exposed to the same foot traffic with no protective layer left. Restoring that shine rarely requires replacing the flooring. Stripping the old wax and applying a new layer is usually enough to bring back the original finish, at a fraction of the cost of new tile or plank.",
         "The businesses that call us after trying to handle this in-house tend to describe the same outcome: an employee stripped the floor without the right equipment, the new wax went down unevenly, and the floor still looks dull and worn even after it dries. Poor wax removal leaves dull spots that a new coat cannot fix on its own. Getting the strip-and-wax cycle right the first time is what protects the floor, not just the appearance.",
         "There is also a cost dimension most facility managers do not price in until it becomes a problem. A floor's wax finish is a wear layer, not decoration. Every day of foot traffic wears down that layer before it starts wearing down the floor material itself. A facility that lets its wax finish wear through entirely is no longer protecting hardwood, VCT, or tile, it is exposing that material directly to scuffing, staining, and structural wear that a new coat of wax cannot reverse. That is the difference between a maintenance cost and a replacement cost, and it is why we treat floor care as asset protection rather than a cosmetic add-on."
      ]
   },
   {
      "heading": "Floor Types We Service",
      "paragraphs": [
         "Our commercial floor waxing and stripping services cover the flooring types most common in Long Beach commercial spaces:"
      ],
      "items": [
         {
            "text": "Hardwood"
         },
         {
            "text": "Terra Cotta"
         },
         {
            "text": "Tile"
         },
         {
            "text": "Vinyl, including VCT (vinyl composition tile), the resilient tile most common in healthcare, retail, and office corridors"
         },
         {
            "text": "And more, based on your facility's flooring mix"
         }
      ],
      "after": [
         "VCT floor maintenance gets called out specifically because it behaves differently than hardwood or terra cotta. VCT is a resilient, porous tile that relies on a maintained finish coat to resist scuffing and staining; without a maintenance schedule, VCT dulls and stains faster than harder flooring materials, which is why we treat VCT maintenance frequency as its own line item in your custom plan rather than folding it into a generic floor care schedule."
      ]
   },
   {
      "heading": "Stripping vs. Waxing: What Each Process Actually Does",
      "paragraphs": [
         "Floor stripping and floor waxing are two different processes, and confusing them is how facilities end up with a floor that looks temporarily better but is not actually protected.",
         {
            "lead": "Stripping",
            "text": " removes the old wax, sealant, and embedded grime down to the bare floor material. High-traffic areas lose their shine over years of buildup, and stripping is what removes that buildup rather than covering over it. Stripping also exposes deep scratches and stains that have gone past the wax sealant, which is why an experienced crew checks for surface damage before recoating rather than sealing wax over an already-damaged floor."
         },
         {
            "lead": "Waxing",
            "text": " applies a new protective finish over the stripped, cleaned surface. This is the step that locks in shine and creates the barrier that protects the floor material from the next few months of foot traffic. Waxing without stripping first just adds another layer on top of old, dull wax, which is why the two services are sold together for any floor that has not been stripped recently."
         },
         "Facilities sometimes ask why we do not simply wax over an existing finish to save time. Wax bonds to the layer beneath it, including any grime trapped in that layer. Waxing over buildup locks the buildup in rather than removing it, which produces a floor that looks temporarily glossy but dulls again within weeks and does nothing to protect the floor material underneath. Stripping first is what makes the new wax coat actually functional as a wear layer rather than cosmetic."
      ]
   },
   {
      "heading": "Our Process",
      "paragraphs": [],
      "items": [
         {
            "title": "Assessment.",
            "text": " We evaluate your floor type, current finish condition, and traffic patterns to determine whether the floor needs a full strip-and-wax cycle or a maintenance recoat."
         },
         {
            "title": "Stripping.",
            "text": " Old wax, sealant, and buildup are removed down to the bare surface using EPA-registered cleaning agents. Deep scratches and stains that surface during stripping are buffed and treated before recoating."
         },
         {
            "title": "Waxing.",
            "text": " A fresh, even coat of wax is applied across the full surface. Uneven application is the most common failure point in do-it-yourself floor care, so this step is done in controlled passes rather than a single quick coat."
         },
         {
            "title": "Cleanup.",
            "text": " Stripping creates dust and debris that spreads if it is not contained. Our crew removes all debris, supplies, and equipment brought into your facility, leaving only the finished floor behind."
         }
      ]
   },
   {
      "heading": "Maintenance Schedules",
      "paragraphs": [
         "Floor maintenance frequency depends on traffic volume, floor type, and how recently the floor was last stripped and waxed. As a starting reference:"
      ],
      "items": [
         {
            "title": "High-traffic areas",
            "text": " (lobbies, corridors, entryways): more frequent recoating to prevent wear from reaching the floor material itself."
         },
         {
            "title": "VCT and resilient tile",
            "text": ": benefits from a scheduled maintenance recoat between full strip-and-wax cycles, since VCT shows wear faster than harder materials once the finish thins."
         },
         {
            "title": "Lower-traffic areas",
            "text": " (private offices, back-of-house spaces): a full strip-and-wax cycle on a longer interval, with spot maintenance as needed."
         }
      ],
      "after": [
         "Your exact service schedule is established during your initial 30 Minute Site Consultation and documented in your custom cleaning plan, rather than assumed from a generic template. Whether your facility requires daily janitorial maintenance or scheduled floor stripping and floor waxing to protect high-traffic areas from wear, we align our service frequencies directly with your operational needs and surface care requirements.",
         "Sticking to a documented schedule matters more than picking the \"right\" interval on paper. A floor serviced on a consistent schedule never lets its finish wear down to bare material, which is what keeps a maintenance recoat cheaper and faster than an emergency strip-and-wax on a floor that has gone years without service. We track service dates per floor zone so your next visit is scheduled off your facility's actual wear pattern, not a generic calendar reminder."
      ]
   },
   {
      "heading": "Cost Factors",
      "paragraphs": [
         "Commercial floor waxing and floor stripping costs depend on specific facility factors rather than generic flat rates. Your estimate is tailored to your total square footage, floor material, including hardwood, terra cotta, tile, or vinyl, and current surface condition. Facilities on a routine floor maintenance schedule typically require less labor and stripping agent per visit than neglected surfaces with heavy buildup. To get exact pricing for your space, Long Beach Janitorial conducts an initial 30 Minute Site Consultation to evaluate your flooring needs and provide a clear, written estimate before service begins."
      ]
   },
   {
      "heading": "Asset Preservation ROI",
      "paragraphs": [],
      "roi": true
   },
   {
      "heading": "The LBJ Floor Protection Standard",
      "paragraphs": [
         "Every commercial floor account runs on the LBJ Floor Protection Standard, our internal framework for sequencing floor care around asset preservation rather than appearance alone. The standard ties floor type, traffic pattern, and current finish condition to a specific stripping and recoating schedule, so the plan protects the floor material itself, not just its shine between visits.",
         "The standard also governs safety on site. Fresh wax is slippery, and stripping machinery is not something an untrained employee should operate without the right equipment and PPE. Every crew member working under the LBJ Floor Protection Standard is equipped and trained to perform stripping and waxing safely, which is also why facilities that bring in DIY crews for this work carry a real workplace injury risk that a professional crew is insured against.",
         "Sequencing matters here the same way it matters in our other commercial accounts: a crew that skips the assessment step and jumps straight to waxing over an untreated floor is treating the symptom, not the asset. The LBJ Floor Protection Standard exists so that every floor account, regardless of size, gets the same assessment-first sequencing rather than a rushed recoat that looks fine for a few weeks and then fails early."
      ]
   },
   {
      "heading": "Why Long Beach Businesses Choose LBJ for Floor Care",
      "paragraphs": [
         "Facility managers hire a professional floor care team instead of assigning the work to staff for three concrete reasons. First, results: uneven DIY wax application leaves dull spots that a new coat cannot fix, while an experienced crew gets an even finish the first time. Second, damage control: deep scratches and stains that have gone past the wax sealant require buffing and treatment expertise most in-house teams do not have. Third, risk: stripping machinery and wet wax both carry real workplace injury risk, and a professional crew works under proper safety protocols and insurance coverage, rather than exposing your own staff to that risk.",
         "We invest directly in the best new equipment and advanced cleaning systems rather than treating floor care as an extension of general janitorial supplies. From thorough floor stripping that removes years of ground-in dirt to protective floor waxing that locks in shine, our certified cleaning experts utilize professional-grade floor care machinery and EPA-registered cleaning agents to optimize your flooring's appearance, extend its lifespan, and maintain a safe, welcoming space."
      ]
   }
];

const related = [
   { to: "/office-building-cleaning/", title: "Office Building Cleaning:", text: "Daily janitorial service for administrative suites, billing offices, and non-clinical areas within your facility." },
   { to: "/floor-stripping-services/", title: "Floor Care and Waxing Services:", text: "Scheduled floor stripping, waxing, and surface protection for corridors, lobbies, and common areas that fall outside patient-care zones." },
   { to: "/disinfection-services/", title: "Disinfection Services:", text: "Targeted sanitization using EPA-registered, hospital-grade disinfectants for high-touch surfaces, waiting areas, and shared restrooms." },
];

const faqs = [
   {
      "q": "What is the difference between floor stripping and floor waxing?",
      "a": "Stripping removes old wax, sealant, and grime down to the bare floor. Waxing applies a new protective finish on top of the stripped surface. Most floors need both, done in sequence, unless the floor is on a maintenance recoat schedule."
   },
   {
      "q": "How often does VCT flooring need maintenance?",
      "a": "VCT (vinyl composition tile) wears through its finish faster than harder flooring materials like tile or terra cotta, so it typically needs a maintenance recoat between full strip-and-wax cycles. Your exact schedule is set during the initial floor assessment."
   },
   {
      "q": "What floor types do you service?",
      "a": "Hardwood, terra cotta, tile, and vinyl including VCT, along with most other commercial flooring materials. Tell us your flooring mix during the site visit and we will confirm coverage."
   },
   {
      "q": "What determines the cost of a floor stripping and waxing job?",
      "a": "Total square footage, floor material, current finish condition, and how much furniture or equipment needs to be moved. A floor on a regular maintenance schedule typically costs less per visit than one requiring an emergency strip after years without service."
   },
   {
      "q": "Is it actually cheaper to maintain floors than to replace them?",
      "a": "Yes, in most cases. A worn finish exposes the floor material underneath to direct foot traffic, which accelerates the timeline to replacement. A consistent stripping and waxing schedule protects that material and defers replacement costs."
   },
   {
      "q": "Is it safe to have employees strip and wax floors themselves?",
      "a": "It carries real risk. Fresh wax is slippery and stripping machinery requires training to operate safely. A slip-and-fall or equipment injury can mean workplace downtime and a workers' compensation claim, which is a cost most facilities do not account for when comparing DIY floor care to a professional contract."
   }
];

const ConsultationButton = ({ children }) => (
   <button type="button" data-modal-open="modal-contact" className="text-link font-bold underline">
      {children}
   </button>
);

const Page = ({ data }) => {
   return (
      <Layout navigationStyle="standard" headerLinkColor="" headerHasBorder={false}>
         <SearchEngineOptimization
            title="Commercial Floor Waxing & Stripping in Long Beach | LBJ"
            description="Commercial floor waxing, stripping, and VCT floor maintenance from Long Beach Janitorial. One hub, every floor type. Schedule a site consultation."
         />

         <HeroStacked
            image={data.heroStacked.childImageSharp.gatsbyImageData}
            backgroundFixed={true}
            imageMaxHeight="max-h-[468px]"
            heading="Commercial Floor Stripping and Waxing Services in Long Beach"
            textMaxWidth="max-w-4xl"
         />

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="max-w-4xl">
                  <p className="mb-0">
                     We'll seal in that shine, and protect what's underneath it. Long Beach Janitorial (LBJ) provides commercial floor waxing, floor stripping, and ongoing VCT floor maintenance for businesses across Long Beach, all handled under a
                     single coordinated plan instead of three separate service calls.
                  </p>
               </div>
            </div>
         </section>

         {sections.map((section, i) => {
            const hasAfter = section.after && section.after.length > 0;
            return (
               <section key={section.heading} className={i % 2 === 0 ? "bg-gray-50 py-14 md:py-20" : "py-16 md:py-32"}>
                  <div className="container">
                     <div className="max-w-4xl">
                        <h2>{section.heading}</h2>
                        {section.roi ? (
                           <p className="mb-0">
                              A floor's finish acts as the critical protective barrier between daily foot traffic and the underlying material. Once that finish wears through, surfaces like hardwood, VCT, terra cotta, or tile take direct damage, turning
                              routine surface care into an unnecessary capital replacement<sup>[1]</sup>. Implementing a consistent <strong>floor stripping and floor waxing</strong> schedule preserves the integrity of your flooring and optimizes its
                              lifespan over years of heavy use. By establishing a customized maintenance schedule during an initial <strong>30 Minute Site Consultation</strong>, Long Beach Janitorial helps you protect your physical investment, deliver
                              excellent long-term value, and avoid the high cost of replacing worn flooring ahead of schedule.
                           </p>
                        ) : (
                           section.paragraphs.map((p, j) => (
                              <p key={j} className={j === section.paragraphs.length - 1 && !section.items && !hasAfter ? "mb-0" : ""}>
                                 {typeof p === "string" ? (
                                    p
                                 ) : (
                                    <>
                                       <strong>{p.lead}</strong>
                                       {p.text}
                                    </>
                                 )}
                              </p>
                           ))
                        )}
                        {section.items && (
                           <ul className={`styled-list ${hasAfter ? "" : "mb-0"}`}>
                              {section.items.map(item => (
                                 <li key={item.title || item.text}>
                                    <span>
                                       {item.title && <strong>{item.title}</strong>}
                                       {item.text}
                                    </span>
                                 </li>
                              ))}
                           </ul>
                        )}
                        {hasAfter &&
                           section.after.map((text, j) => (
                              <p key={j} className={j === section.after.length - 1 ? "mb-0" : ""}>
                                 {text}
                              </p>
                           ))}
                     </div>
                  </div>
               </section>
            );
         })}

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
                  <h2>Schedule Your Floor Care Consultation</h2>
                  <p className="mb-0">
                     Your floor's finish is the only thing standing between daily foot traffic and the material underneath it. Schedule a <ConsultationButton>30 Minute Site Consultation</ConsultationButton> and we will assess your floor type,
                     current finish condition, and traffic patterns, and show you what the LBJ Floor Protection Standard would look like for your facility. Prefer a lower-commitment first step? Get a <ConsultationButton>Free Estimate</ConsultationButton>{" "}
                     and we will follow up with next steps for a full assessment.
                  </p>
               </div>
            </div>
         </section>

         <About className="pt-16 md:pt-32 mb-16 md:mb-32" headingLevel="h2" />

         <Clients className="pb-16 md:pb-32" headingLevel="h2" />

         <Testimonials headingLevel="h2" />

         <WhyUs className="py-16 md:py-32" headingLevel="h2" />

         <CallToAction headingLevel="h2" />
      </Layout>
   );
};

export const query = graphql`
   {
      heroStacked: file(relativePath: { eq: "common/1.0 Floor Waxing Hero Desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
   }
`;
export default Page;
