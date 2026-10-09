import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
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

const floorTypes = [
   "Hardwood",
   "Terra Cotta",
   "Tile",
   "Vinyl, including VCT (vinyl composition tile), the resilient tile most common in healthcare, retail, and office corridors",
   "And more, based on your facility's flooring mix",
];

const faqs = [
   {
      question: "What is the difference between floor stripping and floor waxing?",
      answer:
         "Stripping removes old wax, sealant, and grime down to the bare floor. Waxing applies a new protective finish on top of the stripped surface. Most floors need both, done in sequence, unless the floor is on a maintenance recoat schedule.",
   },
   {
      question: "How often does VCT flooring need maintenance?",
      answer:
         "VCT (vinyl composition tile) wears through its finish faster than harder flooring materials like tile or terra cotta, so it typically needs a maintenance recoat between full strip-and-wax cycles. Your exact schedule is set during the initial floor assessment.",
   },
   {
      question: "What floor types do you service?",
      answer: "Hardwood, terra cotta, tile, and vinyl including VCT, along with most other commercial flooring materials. Tell us your flooring mix during the site visit and we will confirm coverage.",
   },
   {
      question: "What determines the cost of a floor stripping and waxing job?",
      answer:
         "Total square footage, floor material, current finish condition, and how much furniture or equipment needs to be moved. A floor on a regular maintenance schedule typically costs less per visit than one requiring an emergency strip after years without service.",
   },
   {
      question: "Is it actually cheaper to maintain floors than to replace them?",
      answer:
         "Yes, in most cases. A worn finish exposes the floor material underneath to direct foot traffic, which accelerates the timeline to replacement. A consistent stripping and waxing schedule protects that material and defers replacement costs.",
   },
   {
      question: "Is it safe to have employees strip and wax floors themselves?",
      answer:
         "It carries real risk. Fresh wax is slippery and stripping machinery requires training to operate safely. A slip-and-fall or equipment injury can mean workplace downtime and a workers' compensation claim, which is a cost most facilities do not account for when comparing DIY floor care to a professional contract.",
   },
];

const keyTakeaways = [
   "Floor stripping removes old wax, sealant, and grime; floor waxing applies the new protective finish; most floors need both in sequence",
   "LBJ services hardwood, terra cotta, tile, and vinyl including VCT (vinyl composition tile), which needs its own maintenance recoat schedule",
   "Every account runs on the LBJ Floor Protection Standard, which ties floor type, traffic pattern, and finish condition to a specific care schedule",
   "All stripping and waxing uses EPA-registered cleaning agents",
   "Maintenance frequency depends on traffic volume and floor type, with VCT and high-traffic areas needing more frequent recoating",
   "Cost depends on square footage, floor material, current finish condition, and access requirements, not a flat rate",
   "A consistent strip-and-wax schedule defers floor replacement costs by protecting the floor material once the finish wears through",
   "DIY floor stripping and waxing carries real workplace injury risk from slippery wax and stripping machinery; a professional crew works under safety protocols and insurance coverage",
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
            title="Commercial Floor Waxing & Stripping in Long Beach | LBJ"
            description="Commercial floor waxing, stripping, and VCT floor maintenance from Long Beach Janitorial. One hub, every floor type. Schedule a site consultation."
            // openGraphImage={data.openGraphImage.publicURL}
            // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <HeroStacked
            image={data.heroStacked.childImageSharp.gatsbyImageData}
            backgroundFixed={true}
            imageMaxHeight="max-h-[468px]"
            heading="Long Beach Floor Waxing Services"
            subtext="We’ll seal in that shine!"
            textMaxWidth="max-w-4xl"
         />

         <section className="pt-16 md:pt-32 mb-16 md:mb-32">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-12 items-center">
                  <div>
                     <h2>Keeping Long Beach Businesses Clean</h2>
                     <p className="mb-0">
                        Do more than get a protective barrier on your company’s floor – optimize its appearance while protecting its lifespan with help from our professional floor waxing services. Our team only uses quality EPA-registered
                        cleaning agents so that we can keep your space safe and sanitized. Contact us when you’re ready for floor waxing that locks in shine!
                     </p>
                  </div>
                  <div>
                     <GatsbyImage image={data.intro.childImageSharp.gatsbyImageData} alt="COVID-19 Cleaning in Long Beach" />
                  </div>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-20">
            <div className="container">
               <div className="max-w-4xl">
                  <p className="mb-0">
                     We'll seal in that shine, and protect what's underneath it. Long Beach Janitorial (LBJ) provides commercial floor waxing, floor stripping, and ongoing VCT floor maintenance for businesses across Long Beach, all handled under a
                     single coordinated plan instead of three separate service calls.
                  </p>
               </div>
            </div>
         </section>

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Why Floor Care Is an Asset Protection Issue, Not Just an Appearance Issue</h2>
                  <p>
                     Scuff marks, dulling, and discoloration on a commercial floor are not just cosmetic. High-traffic areas accumulate dirt and grime that wear through wax and finish faster than most facility managers expect, and once that finish
                     is gone, the floor material underneath is exposed to the same foot traffic with no protective layer left. Restoring that shine rarely requires replacing the flooring. Stripping the old wax and applying a new layer is usually
                     enough to bring back the original finish, at a fraction of the cost of new tile or plank.
                  </p>
                  <p>
                     The businesses that call us after trying to handle this in-house tend to describe the same outcome: an employee stripped the floor without the right equipment, the new wax went down unevenly, and the floor still looks dull and
                     worn even after it dries. Poor wax removal leaves dull spots that a new coat cannot fix on its own. Getting the strip-and-wax cycle right the first time is what protects the floor, not just the appearance.
                  </p>
                  <p className="mb-0">
                     There is also a cost dimension most facility managers do not price in until it becomes a problem. A floor's wax finish is a wear layer, not decoration. Every day of foot traffic wears down that layer before it starts wearing
                     down the floor material itself. A facility that lets its wax finish wear through entirely is no longer protecting hardwood, VCT, or tile, it is exposing that material directly to scuffing, staining, and structural wear that a
                     new coat of wax cannot reverse. That is the difference between a maintenance cost and a replacement cost, and it is why we treat floor care as asset protection rather than a cosmetic add-on.
                  </p>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-20">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Floor Types We Service</h2>
                  <p>Our commercial floor waxing and stripping services cover the flooring types most common in Long Beach commercial spaces:</p>
                  <ul className="styled-list">
                     {floorTypes.map((type) => (
                        <li key={type}>
                           <span>{type}</span>
                        </li>
                     ))}
                  </ul>
                  <p className="mb-0">
                     VCT floor maintenance gets called out specifically because it behaves differently than hardwood or terra cotta. VCT is a resilient, porous tile that relies on a maintained finish coat to resist scuffing and staining; without a
                     maintenance schedule, VCT dulls and stains faster than harder flooring materials, which is why we treat VCT maintenance frequency as its own line item in your custom plan rather than folding it into a generic floor care
                     schedule.
                  </p>
               </div>
            </div>
         </section>

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Stripping vs. Waxing: What Each Process Actually Does</h2>
                  <p>Floor stripping and floor waxing are two different processes, and confusing them is how facilities end up with a floor that looks temporarily better but is not actually protected.</p>
                  <p>
                     <strong>Stripping</strong> removes the old wax, sealant, and embedded grime down to the bare floor material. High-traffic areas lose their shine over years of buildup, and stripping is what removes that buildup rather than
                     covering over it. Stripping also exposes deep scratches and stains that have gone past the wax sealant, which is why an experienced crew checks for surface damage before recoating rather than sealing wax over an
                     already-damaged floor.
                  </p>
                  <p>
                     <strong>Waxing</strong> applies a new protective finish over the stripped, cleaned surface. This is the step that locks in shine and creates the barrier that protects the floor material from the next few months of foot
                     traffic. Waxing without stripping first just adds another layer on top of old, dull wax, which is why the two services are sold together for any floor that has not been stripped recently.
                  </p>
                  <p className="mb-0">
                     Facilities sometimes ask why we do not simply wax over an existing finish to save time. Wax bonds to the layer beneath it, including any grime trapped in that layer. Waxing over buildup locks the buildup in rather than
                     removing it, which produces a floor that looks temporarily glossy but dulls again within weeks and does nothing to protect the floor material underneath. Stripping first is what makes the new wax coat actually functional as a
                     wear layer rather than cosmetic.
                  </p>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-20">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Our Process</h2>
                  <ul className="styled-list mb-0">
                     <li>
                        <span>
                           <strong>Assessment.</strong> We evaluate your floor type, current finish condition, and traffic patterns to determine whether the floor needs a full strip-and-wax cycle or a maintenance recoat.
                        </span>
                     </li>
                     <li>
                        <span>
                           <strong>Stripping.</strong> Old wax, sealant, and buildup are removed down to the bare surface using EPA-registered cleaning agents. Deep scratches and stains that surface during stripping are buffed and treated before
                           recoating.
                        </span>
                     </li>
                     <li>
                        <span>
                           <strong>Waxing.</strong> A fresh, even coat of wax is applied across the full surface. Uneven application is the most common failure point in do-it-yourself floor care, so this step is done in controlled passes rather
                           than a single quick coat.
                        </span>
                     </li>
                     <li>
                        <span>
                           <strong>Cleanup.</strong> Stripping creates dust and debris that spreads if it is not contained. Our crew removes all debris, supplies, and equipment brought into your facility, leaving only the finished floor behind.
                        </span>
                     </li>
                  </ul>
               </div>
            </div>
         </section>

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Maintenance Schedules</h2>
                  <p>Floor maintenance frequency depends on traffic volume, floor type, and how recently the floor was last stripped and waxed. As a starting reference:</p>
                  <ul className="styled-list">
                     <li>
                        <span>
                           <strong>High-traffic areas</strong> (lobbies, corridors, entryways): more frequent recoating to prevent wear from reaching the floor material itself.
                        </span>
                     </li>
                     <li>
                        <span>
                           <strong>VCT and resilient tile</strong>: benefits from a scheduled maintenance recoat between full strip-and-wax cycles, since VCT shows wear faster than harder materials once the finish thins.
                        </span>
                     </li>
                     <li>
                        <span>
                           <strong>Lower-traffic areas</strong> (private offices, back-of-house spaces): a full strip-and-wax cycle on a longer interval, with spot maintenance as needed.
                        </span>
                     </li>
                  </ul>
                  <p>Your exact schedule is set during the initial assessment and documented in your custom cleaning plan, not assumed from a generic template.</p>
                  <p className="mb-0">
                     Sticking to a documented schedule matters more than picking the "right" interval on paper. A floor serviced on a consistent schedule never lets its finish wear down to bare material, which is what keeps a maintenance recoat
                     cheaper and faster than an emergency strip-and-wax on a floor that has gone years without service. We track service dates per floor zone so your next visit is scheduled off your facility's actual wear pattern, not a generic
                     calendar reminder.
                  </p>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-20">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Cost Factors</h2>
                  <p className="mb-0">
                     Commercial floor waxing and stripping pricing depends on a small number of concrete factors rather than a flat per-square-foot rate: total square footage, floor material (VCT, hardwood, terra cotta, and tile all require
                     different products and processes), current finish condition (a floor that has not been stripped in years takes more labor than one on a regular maintenance cycle), and how much furniture or equipment needs to be moved to
                     access the full floor. Facilities on a regular maintenance schedule typically see lower per-visit costs than facilities calling for an emergency strip-and-wax after years of neglect, since less buildup means less labor.
                  </p>
               </div>
            </div>
         </section>

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Asset Preservation ROI</h2>
                  <p className="mb-0">
                     A floor's finish is the layer standing between foot traffic and the floor material itself. Once that finish wears through, the material underneath, whether hardwood, VCT, or tile, takes the wear directly, and that is what
                     turns a maintenance cost into a replacement cost. A consistent strip-and-wax schedule defers the point at which a floor needs to be replaced rather than refinished, which is the core of the return on a maintenance contract:
                     paying for recoating on a schedule costs less over the life of the floor than paying to replace flooring material ahead of schedule.
                  </p>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-20">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>The LBJ Floor Protection Standard</h2>
                  <p>
                     Every commercial floor account runs on the LBJ Floor Protection Standard, our internal framework for sequencing floor care around asset preservation rather than appearance alone. The standard ties floor type, traffic
                     pattern, and current finish condition to a specific stripping and recoating schedule, so the plan protects the floor material itself, not just its shine between visits.
                  </p>
                  <p>
                     The standard also governs safety on site. Fresh wax is slippery, and stripping machinery is not something an untrained employee should operate without the right equipment and PPE. Every crew member working under the LBJ
                     Floor Protection Standard is equipped and trained to perform stripping and waxing safely, which is also why facilities that bring in DIY crews for this work carry a real workplace injury risk that a professional crew is
                     insured against.
                  </p>
                  <p className="mb-0">
                     Sequencing matters here the same way it matters in our other commercial accounts: a crew that skips the assessment step and jumps straight to waxing over an untreated floor is treating the symptom, not the asset. The LBJ
                     Floor Protection Standard exists so that every floor account, regardless of size, gets the same assessment-first sequencing rather than a rushed recoat that looks fine for a few weeks and then fails early.
                  </p>
               </div>
            </div>
         </section>

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="max-w-4xl">
                  <h2>Why Long Beach Businesses Choose LBJ for Floor Care</h2>
                  <p>
                     Facility managers hire a professional floor care team instead of assigning the work to staff for three concrete reasons. First, results: uneven DIY wax application leaves dull spots that a new coat cannot fix, while an
                     experienced crew gets an even finish the first time. Second, damage control: deep scratches and stains that have gone past the wax sealant require buffing and treatment expertise most in-house teams do not have. Third, risk:
                     stripping machinery and wet wax both carry real workplace injury risk, and a professional crew works under proper safety protocols and insurance coverage, rather than exposing your own staff to that risk.
                  </p>
                  <p className="mb-0">We also invest directly in the equipment this work requires rather than treating floor care as an extension of general janitorial supplies.</p>
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
                           <Link fade to="/janitorial-cleaning-company/" className="text-link font-bold">
                              Janitorial Cleaning Services.
                           </Link>{" "}
                           Ongoing commercial janitorial coverage for the rest of your facility, coordinated on the same account as your floor care plan.
                        </span>
                     </li>
                     <li>
                        <span>
                           <Link fade to="/office-building-cleaning/" className="text-link font-bold">
                              Office Building Cleaning.
                           </Link>{" "}
                           Daily cleaning for administrative and common areas outside the floor care schedule.
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
                  <h2>Schedule Your Floor Care Consultation</h2>
                  <p className="mb-0">
                     Your floor's finish is the only thing standing between daily foot traffic and the material underneath it. <ModalButton>Schedule a 30 Minute Site Consultation</ModalButton> and we will assess your floor type, current finish
                     condition, and traffic patterns, and show you what the LBJ Floor Protection Standard would look like for your facility. Prefer a lower-commitment first step? <ModalButton>Get a Free Estimate</ModalButton> and we will follow up
                     with next steps for a full assessment.
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

         <section className="pb-16 md:pb-20">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-10 items-center">
                  <div className="md:col-start-1 md:col-span-3">
                     <GatsbyImage image={data.toolGun.childImageSharp.gatsbyImageData} alt="COVID cleaning & disinfection tool" />
                  </div>
                  <div className="md:col-start-4 md:col-span-4">
                     <p className="heading-two">The Tools</p>
                     <p className="mb-0">We invest in the best new equipment and cleaning systems to keep your workplace safe and secure for anyone that enters. </p>
                  </div>
                  <div className="md:col-end-13 md:col-span-5">
                     <GatsbyImage image={data.toolBackpack.childImageSharp.gatsbyImageData} alt="COVID cleaning & disinfection tool" />
                  </div>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-18">
            <div className="container">
               <header className="md:text-center mb-6">
                  <h3>What We Clean</h3>
               </header>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
                  <div>
                     <ul className="styled-list">
                        <li>Carpet</li>
                        <li>Countertops</li>
                        <li>Elevators</li>
                        <li>Furniture</li>
                     </ul>
                  </div>
                  <div>
                     <ul className="styled-list">
                        <li>Glass Surfaces (partitions, doors, windows)</li>
                        <li>Kitchens & Break Rooms</li>
                        <li>Lobbies</li>
                        <li>Restrooms</li>
                     </ul>
                  </div>
                  <div>
                     <ul className="styled-list">
                        <li>Restrooms</li>
                        <li>Floor Care</li>
                        <li>Stairwells</li>
                        <li>... And more!</li>
                     </ul>
                  </div>
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
      # openGraphImage: file(relativePath: { eq: "open-graph/facebook/COVID Cleaning_FB.jpg" }) {
      #    publicURL
      # }
      # twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/COVID Cleaning_TW.jpg" }) {
      #    publicURL
      # }
      heroStacked: file(relativePath: { eq: "common/1.0 Floor Waxing Hero Desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      intro: file(relativePath: { eq: "common/9_floorwaxing_services_intro.png" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      toolGun: file(relativePath: { eq: "services/covid-cleaning/3.0-Tools-gun.png" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      toolBackpack: file(relativePath: { eq: "services/covid-cleaning/3.1-Tool-backpack.png" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
   }
`;
export default Page;
