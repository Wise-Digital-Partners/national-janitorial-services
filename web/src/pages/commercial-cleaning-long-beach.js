import React from "react";
import { graphql } from "gatsby";
import Link from "gatsby-plugin-transition-link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroStacked from "../components/Hero/HeroStacked";
import Clients from "../components/Repeating/Clients";
import CallToAction from "../components/Repeating/CTA";

const faqs = [
  {
    question: "How is commercial cleaning priced in Long Beach?",
    answer:
      "Pricing depends on three things: the size of your facility, the scope of work, and how often we service it. A small dental office on a nightly schedule and a large warehouse on a weekly schedule are different jobs with different costs. We quote after a 30 Minute Site Consultation, so the number reflects your actual facility rather than a square-footage average.",
  },
  {
    question: "How do you customize cleaning plans?",
    answer:
      "We build your plan during the 30 Minute Site Consultation, based on your facility type, square footage, and preferred schedule: daily, weekly, or after-hours. Office, medical, and industrial clients each get a scope suited to their specific space.",
  },
  {
    question: "Can you clean after hours or on weekends?",
    answer:
      "Yes. Most of our Long Beach office clients are serviced after hours, and industrial accounts are usually scheduled around shift changes. Retail and medical clients often prefer early morning or late evening so cleaning never overlaps customer or patient hours.",
  },
  {
    question: "What products and protocols do you use for facility disinfection?",
    answer:
      "We use Multi-Clean Chlorinated Disinfecting Tablets, an EPA-registered disinfectant, for facility disinfection. Our certified experts follow CDC guidelines for dwell time and application across high-touch surfaces. We sequence the work so cleaned areas stay clean until we finish.",
  },
  {
    question: "What should I look for in commercial cleaners in Long Beach?",
    answer:
      "Ask for three things in writing. First, proof the company is licensed and insured. Second, which disinfectants they use and whether those are EPA-registered. Third, who is accountable when something is missed. Long Beach Janitorial is licensed and insured and uses EPA-registered disinfectants under CDC-aligned protocols. Every account gets a direct local contact instead of a call center queue.",
  },
  {
    question:
      "Can I combine office cleaning with medical facility disinfection on the same schedule?",
    answer:
      "Yes. Many of our medical clients run routine cleaning on one schedule and deeper EPA-registered disinfection on a separate cadence, following CDC guidelines. We map out both during your site consultation so the two services fit together rather than overlap.",
  },
];

const ModalButton = ({ children }) => (
  <button
    type="button"
    data-modal-open="modal-contact"
    className="text-link font-bold underline"
  >
    {children}
  </button>
);

const Phone = () => (
  <a href="tel:+1-424-260-7369" className="text-link font-bold">
    Call (424) 260-7369
  </a>
);

const Page = ({ data }) => {
  return (
    <Layout navigationStyle="standard" headerLinkColor="" headerHasBorder={false}>
      <SearchEngineOptimization
        title="Commercial Cleaners in Long Beach, CA | Licensed & Insured"
        description="Licensed and insured commercial cleaners serving Long Beach offices, medical facilities, and warehouses. 100+ businesses served. Schedule a site consultation."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
        noIndex
      />

      <HeroStacked
        image={data.heroStacked.childImageSharp.gatsbyImageData}
        backgroundFixed={true}
        imageMaxHeight="max-h-[468px]"
        heading="Commercial Cleaning & Janitorial Services in Long Beach, CA"
        textMaxWidth="max-w-5xl"
        alt="Commercial cleaners servicing a Long Beach office building"
      />

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <p>
              <strong>Reliable Commercial Cleaning & Janitorial Services in Long Beach</strong>
            </p>
            <p>
              Tailored facility maintenance designed to keep your business clean, safe, and
              professional.
            </p>
            <p>
              <ModalButton>Schedule a 30 Minute Site Consultation</ModalButton> |{" "}
              <ModalButton>Get a Free Estimate</ModalButton> | <Phone />
            </p>
            <p className="mb-0">
              Long Beach Janitorial (formerly National Janitorial Services) provides commercial
              cleaning services in Long Beach for offices, medical facilities, and industrial
              spaces. We are a licensed and insured local team of commercial cleaners, not a
              rotating crew from a national call center. With 100+ businesses served, our{" "}
              <Link fade to="/janitorial-cleaning-company/" className="text-link font-bold">
                janitorial services
              </Link>{" "}
              are built around your schedule and your facility, not a standard route.
            </p>
          </div>
        </div>
      </section>

      <Clients className="pb-6" />
      <p className="container pb-16 text-center italic md:pb-24">
        Trusted by 100+ businesses across Long Beach and the surrounding Gateway Cities.
      </p>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h2>Comprehensive Cleaning Solutions for Long Beach Businesses</h2>
            <p>
              Long Beach Janitorial's core services cover the three facility types we service most
              often in Long Beach. Each one carries its own scope and standards. We do not apply one
              generic cleaning plan across every client. The routine at a dental office and the
              routine at a warehouse floor are not the same job, and we treat them that way. For
              scopes beyond the three below, see our{" "}
              <Link fade to="/commercial-cleaning-services/" className="text-link font-bold">
                complete range of commercial cleaning services
              </Link>
              .
            </p>

            <h3>Office Cleaning in Long Beach</h3>
            <p>
              Routine dusting, trash removal, and workspace sanitization keep desks, break rooms,
              and shared equipment presentable for staff and visitors every day.{" "}
              <Link fade to="/office-cleaning-services/" className="text-link font-bold">
                Office cleaning
              </Link>{" "}
              is the entry point for most Long Beach clients, running on a daily or weekly schedule.
            </p>
            <p>
              It is also the easiest place to start a new relationship. We build the scope around
              your headcount, your square footage, and the hours you need us out of the way.
            </p>

            <h3>Medical Facility Cleaning</h3>
            <p>
              Healthcare-grade disinfecting that follows CDC guidelines for medical and dental
              practices. Our{" "}
              <Link fade to="/medical-dental-office-cleaning/" className="text-link font-bold">
                medical and dental office cleaning
              </Link>{" "}
              scope covers exam rooms, waiting areas, and shared high-touch surfaces on a schedule
              built around patient hours.
            </p>
            <p>
              Some facilities need more than routine cleaning. For the deeper EPA-registered
              protocols required after an exposure event or as part of ongoing infection control,
              our{" "}
              <Link fade to="/disinfection-services/" className="text-link font-bold">
                disinfection services
              </Link>{" "}
              page covers that compliance-heavy scope in full. The page you are reading covers the
              routine cleaning layer that runs alongside those protocols.
            </p>

            <h3>Industrial and Warehouse Cleaning</h3>
            <p className="mb-0">
              Professional-grade floor care built for larger commercial spaces. That means loading
              docks, warehouse floors, and industrial break areas, which take far more foot and
              equipment traffic than a typical office. Heavy floors often need{" "}
              <Link fade to="/floor-stripping-services/" className="text-link font-bold">
                commercial floor stripping and waxing
              </Link>{" "}
              on a separate cycle from routine service. Scheduling for industrial clients is usually
              built around shift changes so cleaning never interrupts production.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <h2>Specialized Disinfection and Virus Protection</h2>
            <p className="mb-0">
              For high-touch sanitization and pathogen protection, our certified experts follow
              disinfection protocols aligned with CDC guidelines. We use Multi-Clean Chlorinated
              Disinfecting Tablets, an EPA-registered disinfectant. Our team applies it at the dwell
              time and surface coverage the protocol calls for. We also sequence the work so cleaned
              areas are not recontaminated. Whether you need routine preventative sanitation or a
              rapid-response deep clean, our{" "}
              <Link fade to="/covid-cleaning-services/" className="text-link font-bold">
                COVID-19 cleaning services
              </Link>{" "}
              cover the full scope.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h2>Industries We Serve in Long Beach</h2>
            <p>
              The same team cleans a warehouse and a waiting room, but not the same way. Each
              vertical carries its own compliance expectations, traffic patterns, and scheduling
              constraints.
            </p>
            <ul className="styled-list">
              <li>
                <span>
                  <strong>Healthcare.</strong> Exam rooms, waiting areas, and surgical support
                  spaces demand cross-contamination control. Our{" "}
                  <Link fade to="/hospital-cleaning-services/" className="text-link font-bold">
                    hospital cleaning services
                  </Link>{" "}
                  follow CDC guidelines and use EPA-registered disinfectants on every high-touch
                  surface.
                </span>
              </li>
              <li>
                <span>
                  <strong>Education.</strong> Classrooms, cafeterias, and gyms turn over hundreds of
                  people a day, and flu season compounds the load. Our{" "}
                  <Link fade to="/school-cleaning-services/" className="text-link font-bold">
                    school cleaning services
                  </Link>{" "}
                  are scheduled around the academic day so sanitation never interrupts instruction.
                </span>
              </li>
              <li>
                <span>
                  <strong>Restaurants and hospitality.</strong> Front-of-house appearance and
                  back-of-house hygiene are both revenue issues. Our{" "}
                  <Link fade to="/restaurant-cleaning-services/" className="text-link font-bold">
                    restaurant and hospitality cleaning
                  </Link>{" "}
                  covers kitchen degreasing, dining areas, and restrooms on a cadence built around
                  service hours.
                </span>
              </li>
              <li>
                <span>
                  <strong>Property management and HOA.</strong> Lobbies, stairwells, parking
                  structures, and common areas set the tone for every tenant. Our{" "}
                  <Link fade to="/hoa-cleaning-services/" className="text-link font-bold">
                    HOA and common-area cleaning
                  </Link>{" "}
                  protects asset value through scheduled maintenance rather than reactive cleanups.
                </span>
              </li>
            </ul>
            <p className="mb-0">
              Long Beach Janitorial serves thirteen commercial verticals in total. See the full list
              of{" "}
              <Link fade to="/industries-we-serve/" className="text-link font-bold">
                industries we serve
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <h2>The Trusted Choice for Local Commercial Cleaners</h2>
            <p>
              Long Beach Janitorial competes in the partnership game, not the price game. That
              standard governs every service line we offer, from daily office cleaning to
              specialized disinfection. Consistency and accountability come before the lowest
              possible bid. The{" "}
              <Link fade to="/about/" className="text-link font-bold">
                Long Beach Janitorial team
              </Link>{" "}
              is based in the city it serves, so accountability is a phone call, not a ticket
              number.
            </p>
            <ul className="styled-list mb-0">
              <li>
                <span>
                  <strong>Licensed and insured professionalism.</strong> Our experienced commercial
                  cleaning team is fully trained, licensed, and insured. That gives property
                  managers and business owners peace of mind on every account.
                </span>
              </li>
              <li>
                <span>
                  <strong>Customizable product standards.</strong> We review product options and
                  supply preferences during your 30 Minute Site Consultation. Our cleaning agents
                  match your facility's operational and environmental requirements before service
                  begins.
                </span>
              </li>
              <li>
                <span>
                  <strong>Flexible scheduling.</strong> Daily, weekly, or after-hours service built
                  around your operating hours, so cleaning never competes with business hours. That
                  matters for retail storefronts and medical offices with patient hours to protect.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h2>The Long Beach Janitorial Difference</h2>
            <ul className="styled-list mb-0">
              <li>
                <span>
                  <strong>Experienced.</strong> With 100+ businesses served, we tailor our cleaning
                  services to your specific industry needs.
                </span>
              </li>
              <li>
                <span>
                  <strong>Reliable and Local.</strong> We are based in the community we serve. Count
                  on our certified experts to be on-time, on-budget, and on-point.
                </span>
              </li>
              <li>
                <span>
                  <strong>Good Value.</strong> We deliver a high-caliber experience using
                  professional-grade cleaning products and procedures at fair pricing.
                </span>
              </li>
              <li>
                <span>
                  <strong>Professional.</strong> Our commercial cleaning team is fully trained,
                  licensed and insured for your peace of mind.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <h2>What Long Beach Clients Say</h2>
            <p>
              Our clients describe the partnership better than we can. Read more{" "}
              <Link fade to="/reviews/" className="text-link font-bold">
                client reviews
              </Link>
              .
            </p>
            <blockquote className="mb-6 border-l-4 border-gray-300 pl-6">
              <p>
                "I appreciate the diligence and professionalism of Anthony and the crew member
                appointed to us. During these covid times they have taken the upmost care to provide
                the level of cleanliness and safeguarding measures needed to insure everyone's
                safety. The pricing is fair and we are happy with the great service!"
              </p>
              <footer className="font-bold">St. Joseph Church</footer>
            </blockquote>
            <blockquote className="mb-0 border-l-4 border-gray-300 pl-6">
              <p>
                "My law firm hired Long Beach Janitorial to do some deep cleaning/disinfection after
                one of our staff was diagnosed with COVID. We called several businesses for pricing
                and availability for professional sanitation. National was the best pricing and was
                available that same day. They were great. Two guys arrived, both had sanitation
                equipment and sprayed down the entire office in less than an hour."
              </p>
              <footer className="font-bold">Hilary V.</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h2>Proudly Serving Long Beach and the Surrounding Gateway Cities</h2>
            <p>
              Long Beach Janitorial serves commercial clients across Long Beach, including Downtown
              Long Beach, Belmont Shore, and Bixby Knolls, plus neighboring Signal Hill. We do not
              offer one-size-fits-all service. We conduct a site visit and build the plan around
              your facility and industry. Downtown Long Beach mixes office towers with ground-floor
              retail. That usually calls for after-hours{" "}
              <Link fade to="/office-building-cleaning/" className="text-link font-bold">
                office building cleaning
              </Link>{" "}
              that does not compete with daytime foot traffic.
            </p>
            <p>
              Belmont Shore's smaller commercial storefronts often fit a lighter, more frequent
              cadence than a large office building needs. Signal Hill is a separate city, fully
              surrounded by Long Beach. Its industrial and light-manufacturing footprint lines up
              with our industrial scope, often paired with{" "}
              <Link fade to="/pressure-washing-services/" className="text-link font-bold">
                commercial pressure washing
              </Link>{" "}
              for exterior surfaces and loading areas. Bixby Knolls' mix of small offices and
              medical practices often combines routine office cleaning with healthcare-grade
              disinfecting that follows CDC guidelines.
            </p>
            <p>
              Businesses outside these core areas can confirm coverage during a site consultation.
              Our service area has grown alongside the 100+ businesses we serve across the region.
            </p>
            <p>We also serve commercial clients across the Gateway Cities:</p>
            <ul className="styled-list">
              <li>
                <span>
                  <Link fade to="/downey-janitorial-services/" className="text-link font-bold">
                    Downey janitorial services
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <Link fade to="/lakewood-janitorial-services/" className="text-link font-bold">
                    Lakewood janitorial services
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <Link
                    fade
                    to="/santa-fe-springs-janitorial-services/"
                    className="text-link font-bold"
                  >
                    Santa Fe Springs janitorial services
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <Link fade to="/commerce-janitorial-services/" className="text-link font-bold">
                    Commerce janitorial services
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <Link fade to="/vernon-janitorial-services/" className="text-link font-bold">
                    Vernon janitorial services
                  </Link>
                </span>
              </li>
            </ul>
            <iframe
              title="Map showing Long Beach Janitorial at 144 W San Antonio Dr, Long Beach, CA 90807"
              src="https://www.google.com/maps?q=144+W+San+Antonio+Dr,+Long+Beach,+CA+90807&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="mb-0 mt-4">
              Long Beach Janitorial, 144 W San Antonio Dr, Long Beach, CA 90807. <Phone />.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="mb-10">Long Beach Commercial Cleaning FAQs</h2>
            <Accordion allowZeroExpanded={true}>
              {faqs.map(({ question, answer }, index) => (
                <AccordionItem
                  key={question}
                  uuid={`faq-${index}`}
                  className="mb-4 bg-gray-50 px-6 py-4 md:px-10"
                >
                  <AccordionItemHeading aria-level={3}>
                    <AccordionItemButton className="flex cursor-pointer items-center justify-between focus:outline-none">
                      <span className="pr-4 text-lg font-bold md:text-xl">{question}</span>
                      <AccordionItemState>
                        {({ expanded }) => (
                          <i
                            className={`fas fa-caret-down transform transition-all duration-300 ease-linear ${
                              expanded ? "rotate-180" : "rotate-0"
                            }`}
                          ></i>
                        )}
                      </AccordionItemState>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="animate-fadeIn pt-4">
                    <p className="mb-0">{answer}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="mb-0 mt-10 font-bold">
              Ready to work with a commercial cleaning company that answers the phone?{" "}
              <ModalButton>Schedule a 30 Minute Site Consultation</ModalButton> with Long Beach
              Janitorial, or <Phone />.
            </p>
          </div>
        </div>
      </section>

      <CallToAction headingLevel="h2" />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(relativePath: { eq: "open-graph/facebook/Homepage_FB.jpg" }) {
      publicURL
    }
    twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/Homepage_TW.jpg" }) {
      publicURL
    }
    heroStacked: file(relativePath: { eq: "services/commercial-cleaning/long-beach.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
