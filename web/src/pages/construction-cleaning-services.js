import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
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

const faqs = [
  {
    question:
      "Is Long Beach Janitorial licensed and insured for post-construction cleanup?",
    answer: (
      <>
        Yes. Our experienced commercial cleaning team is fully trained,
        licensed, and insured to safely handle post-construction cleaning and
        debris removal.
      </>
    ),
  },
  {
    question: "How do you safely remove construction debris?",
    answer: (
      <>
        Our team sorts and removes debris, including packaging, offcuts, and
        leftover materials, before beginning surface cleaning. The team is
        trained to identify and safely handle sharp or unstable items on-site.
      </>
    ),
  },
  {
    question: "Do you use EPA-registered cleaning products?",
    answer: (
      <>
        Yes. We sanitize hardware, touchpoints, and fixtures using
        EPA-registered disinfectants as a standard part of every project,
        applied in line with CDC guidance on cleaning and disinfecting a
        facility.
      </>
    ),
  },
  {
    question: "How long does a post-construction cleanup take?",
    answer: (
      <>
        Timeline depends on the size of the space and the volume of debris and
        residue left behind. We assess this during our site consultation and
        provide a project-specific timeline rather than a one-size-fits-all
        estimate.
      </>
    ),
  },
  {
    question:
      "What's the difference between a construction clean up crew and a standard cleaning team?",
    answer: (
      <>
        A{" "}
        <Link fade to="/about/" className="text-link font-bold">
          construction clean up crew
        </Link>{" "}
        is trained for post-construction conditions, including dust removal from
        vents and fixtures, debris hazards, and residue that office cleaning
        teams don't typically encounter.
      </>
    ),
  },
];

const ConsultationButton = () => (
  <button
    type="button"
    data-modal-open="modal-contact"
    className="text-link font-bold underline"
  >
    Schedule a 30 Minute Site Consultation
  </button>
);

const Page = ({ data }) => {
  return (
    <Layout
      navigationStyle="standard"
      headerLinkColor=""
      headerHasBorder={false}
    >
      <SearchEngineOptimization
        title="Post-Construction Cleaning Long Beach | Licensed & Insured"
        description="Licensed, insured post-construction cleaning in Long Beach. Safe debris removal, dust and surface cleaning, and a final-clean walkthrough before handoff"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroStacked
        image={data.heroStacked.childImageSharp.gatsbyImageData}
        backgroundFixed={true}
        imageMaxHeight="max-h-[468px]"
        heading="Post-Construction Cleaning Built Around Safety, Not Just Speed"
        textMaxWidth="max-w-5xl"
        alt="Long Beach Janitorial team performing post-construction cleaning in a newly finished Long Beach commercial space"
      />

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <p>
              Leave the heavy lifting to us. From dust to debris, we have you
              covered. Don't be left with a mess on a potentially dangerous
              site. Turn to{" "}
              <Link fade to="/about/" className="text-link font-bold">
                Long Beach Janitorial
              </Link>{" "}
              (formerly National Janitorial Services) for post-construction
              cleaning. We get a finished space ready for its first walkthrough,
              not just tidy enough to photograph.
            </p>
            <p className="mb-0">
              <ConsultationButton /> and we'll assess your site before our team
              ever arrives.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-y-10 md:grid-cols-12 md:gap-x-10 lg:gap-x-20">
            <div className="md:col-span-7">
              <h2>
                Why Post-Construction Sites Need a Specialized Cleaning Team
              </h2>
              <p>
                A finished construction site is not a typical cleaning job.
                Drywall dust settles into HVAC returns and light fixtures.
                Adhesive residue and paint overspray sit on windows and
                hardware. Leftover debris, from packaging to offcuts, still
                needs sorting and hauling before the space is safe to occupy.
              </p>
              <p>
                General janitorial teams without construction site experience
                can miss hazards that a dedicated construction cleanup crew is
                trained to catch. Exposed fasteners, stray nails, unstable
                debris piles, and leftover cutting materials all belong on that
                list.
              </p>
              <p>
                Our construction cleanup services close that gap. We bring a
                team trained for construction site conditions, not an office
                cleaning team working outside its scope. That team knows the
                difference between a fine layer of drywall dust that needs a
                wipe-down and a residue that needs a solvent to lift. It also
                knows which surfaces can take pressure washing and which need a
                gentler hand. On a newly finished site, the wrong method can
                damage a surface before the client ever sees it.
              </p>
              <p className="mb-0">
                Post-construction cleanup is a specialized trade, not a larger
                version of an office clean.
              </p>
            </div>
            <div className="md:col-span-5">
              <GatsbyImage
                image={data.intro.childImageSharp.gatsbyImageData}
                alt="Construction debris and packaging sorted for removal from a Long Beach commercial job site"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <h2>What Our Post-Construction Cleaning Service Includes</h2>
            <p>
              <strong>
                Post-construction cleaning clears debris, removes dust and
                residue, and details every surface in a newly built or renovated
                space so it is ready for occupancy.
              </strong>{" "}
              Our scope typically covers the full site, top to bottom, inside
              and out.
              <br />
              Our post-construction cleaning services cover:
            </p>
            <ul className="styled-list">
              <li>
                <span>Cleaning walls of dust, scuff marks, and smudges</span>
              </li>
              <li>
                <span>
                  <Link
                    fade
                    to="/pressure-washing-services/"
                    className="text-link font-bold"
                  >
                    Pressure washing
                  </Link>{" "}
                  outside surfaces
                </span>
              </li>
              <li>
                <span>Baseboard washing</span>
              </li>
              <li>
                <span>Door frame polishing</span>
              </li>
              <li>
                <span>Cleaning remaining fixtures</span>
              </li>
              <li>
                <span>
                  <Link
                    fade
                    to="/window-cleaning-services/"
                    className="text-link font-bold"
                  >
                    Window washing
                  </Link>
                  , interior and exterior
                </span>
              </li>
              <li>
                <span>
                  Trash and debris removal, including packaging and construction
                  offcuts
                </span>
              </li>
              <li>
                <span>Scrubbing and detailing floors</span>
              </li>
              <li>
                <span>Vent and light fixture dust removal</span>
              </li>
              <li>
                <span>
                  Hardware and touchpoint sanitizing using EPA-registered
                  disinfectants
                </span>
              </li>
            </ul>
            <p className="mb-0">
              We scope every project on-site before quoting. A small suite
              build-out and a ground-up commercial build leave behind very
              different amounts of dust, residue, and debris.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h2>Our Process for Post-Construction Cleanup</h2>
            <ol className="mb-6 list-decimal space-y-4 pl-6">
              <li>
                <strong>Site walkthrough and hazard assessment.</strong> We
                inspect the space for debris, exposed materials, and
                site-specific hazards before work begins.
              </li>
              <li>
                <strong>Debris removal and disposal.</strong> Our team clears
                construction debris, packaging, and offcuts first. That way, the
                remaining surfaces can actually be cleaned rather than worked
                around.
              </li>
              <li>
                <strong>Top-down dust and surface cleaning.</strong> We clean
                from ceiling height down to the floor, covering vents, fixtures,
                walls, and hardware. Dust removed from higher surfaces doesn't
                resettle on floors we've already cleaned.
              </li>
              <li>
                <strong>Detail cleaning and sanitizing.</strong> Baseboards,
                door frames, window tracks, and touchpoints get individual
                attention. We sanitize them with EPA-registered disinfectants,
                applied according to{" "}
                <a
                  href="https://www.cdc.gov/hygiene/about/when-and-how-to-clean-and-disinfect-a-facility.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link font-bold"
                >
                  CDC guidance for cleaning and disinfecting a facility
                </a>
                , including matching the product to the germs it is rated
                against.
              </li>
              <li>
                <strong>Final walkthrough and sign-off.</strong> We walk the
                finished space with you against our final-clean standard before
                handoff. That walkthrough confirms:
                <ul className="styled-list mt-2">
                  <li>
                    <span>Debris is fully cleared, inside and out</span>
                  </li>
                  <li>
                    <span>
                      Dust has not resettled on surfaces already cleaned
                    </span>
                  </li>
                  <li>
                    <span>
                      Hardware and touchpoints have been sanitized with
                      EPA-registered disinfectants
                    </span>
                  </li>
                  <li>
                    <span>
                      Floors, baseboards, and window tracks are detailed, not
                      just wiped down
                    </span>
                  </li>
                </ul>
              </li>
            </ol>
            <p className="mb-0">
              Every project follows the same five steps, from hazard assessment
              to final walkthrough.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <h2>
              Licensed, Insured, and Trained for Construction Site Conditions
            </h2>
            <p>
              Long Beach Janitorial is fully licensed and insured for commercial
              construction cleanup work. Our skilled construction cleaning team
              is fully trained to safely navigate active job sites. That
              training covers debris identification, safe handling of sharp or
              unstable materials, and proper use of personal protective
              equipment.
            </p>
            <p>
              A post-construction site presents hazards a standard cleaning job
              never does. Electrical work may not have passed final inspection
              yet. Flooring may still be curing, which means it can't take foot
              traffic or chemical contact the way a finished floor can.
              Construction dust from concrete, drywall, and masonry can also
              contain respirable crystalline silica.{" "}
              <a
                href="https://www.osha.gov/silica-crystalline/construction"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link font-bold"
              >
                OSHA's construction silica standard
              </a>{" "}
              (29 CFR 1926.1153) restricts dry sweeping where that activity
              would raise a worker's silica exposure. Clearing that kind of dust
              is not a broom-and-dustpan job.
            </p>
            <p className="mb-0">
              Long Beach Janitorial is licensed, insured, and trained for
              construction site conditions before a team is assigned to a site.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h2>
              What Long Beach Property Managers and Contractors Can Expect
            </h2>
            <p>
              We've served 100+ businesses across Long Beach. Our experienced
              team has prepped and sanitized newly finished commercial spaces,
              handling everything from detailed fixture polishing to heavy trash
              and debris removal.
            </p>
            <blockquote className="mb-6 border-l-4 border-gray-300 pl-6">
              <p>
                "
                <em>
                  Long Beach Janitorial was very professional and responsive
                  when we needed them the most. We will recommend them to anyone
                  looking for janitorial services
                </em>
                ."
              </p>
              <footer className="font-bold">Carlos A.</footer>
            </blockquote>
            <p>
              Timeline reliability matters most on this kind of project. A
              delayed final clean can push back a certificate of occupancy
              inspection or a tenant move-in date. We coordinate scheduling
              directly with your general contractor or property manager. Our
              team arrives once the site is genuinely ready for final cleaning,
              not while other trades are still finishing punch list items.
            </p>
            <p className="mb-0">
              We handle site cleanup across Long Beach and the surrounding
              corridor, including{" "}
              <Link
                fade
                to="/downey-janitorial-services/"
                className="text-link font-bold"
              >
                Downey
              </Link>
              ,{" "}
              <Link
                fade
                to="/lakewood-janitorial-services/"
                className="text-link font-bold"
              >
                Lakewood
              </Link>
              ,{" "}
              <Link
                fade
                to="/santa-fe-springs-janitorial-services/"
                className="text-link font-bold"
              >
                Santa Fe Springs
              </Link>
              ,{" "}
              <Link
                fade
                to="/commerce-janitorial-services/"
                className="text-link font-bold"
              >
                Commerce
              </Link>
              , and{" "}
              <Link
                fade
                to="/vernon-janitorial-services/"
                className="text-link font-bold"
              >
                Vernon
              </Link>
              . That includes{" "}
              <Link
                fade
                to="/office-building-cleaning/"
                className="text-link font-bold"
              >
                office buildings
              </Link>{" "}
              and{" "}
              <Link
                fade
                to="/hoa-cleaning-services/"
                className="text-link font-bold"
              >
                HOA communities
              </Link>{" "}
              where a renovation has just wrapped.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <h2>Related Long Beach Janitorial Services</h2>
            <p>
              Post-construction cleanup is one part of our{" "}
              <Link
                fade
                to="/commercial-cleaning-services/"
                className="text-link font-bold"
              >
                broader commercial cleaning capability
              </Link>
              . Related services include:
            </p>
            <ul className="styled-list mb-0">
              <li>
                <span>
                  <Link
                    fade
                    to="/commercial-cleaning-company/"
                    className="text-link font-bold"
                  >
                    Commercial Cleaning
                  </Link>
                  : our full range of ongoing commercial janitorial services for
                  offices, retail, and industrial spaces.
                </span>
              </li>
              <li>
                <span>
                  <Link
                    fade
                    to="/hospital-cleaning-services/"
                    className="text-link font-bold"
                  >
                    Hospital and Medical Facility Cleaning
                  </Link>
                  : specialized cleaning and disinfecting for healthcare
                  environments, including cleanup after a renovation in an{" "}
                  <Link
                    fade
                    to="/medical-dental-office-cleaning/"
                    className="text-link font-bold"
                  >
                    active medical or dental facility
                  </Link>
                  .
                </span>
              </li>
              <li>
                <span>
                  <Link
                    fade
                    to="/floor-stripping-services/"
                    className="text-link font-bold"
                  >
                    Floor Stripping
                  </Link>{" "}
                  and{" "}
                  <Link
                    fade
                    to="/floor-waxing-services/"
                    className="text-link font-bold"
                  >
                    Floor Waxing
                  </Link>
                  : ongoing floor maintenance that protects newly finished
                  flooring once the space is occupied.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="mb-10">Frequently Asked Questions</h2>
            <Accordion allowZeroExpanded={true}>
              {faqs.map(({ question, answer }, index) => (
                <AccordionItem
                  key={question}
                  uuid={`faq-${index}`}
                  className="mb-4 bg-white px-6 py-4 md:px-10"
                >
                  <AccordionItemHeading aria-level={3}>
                    <AccordionItemButton className="flex cursor-pointer items-center justify-between focus:outline-none">
                      <span className="pr-4 text-lg font-bold md:text-xl">
                        {question}
                      </span>
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
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <h2>The Long Beach Janitorial Difference</h2>
            <p>
              Find out what makes us Long Beach's trusted commercial cleaning
              partner.
            </p>
            <ul className="styled-list mb-0">
              <li>
                <span>
                  <strong>Experienced.</strong> With 100+ businesses served, we
                  scope every cleanup to your build type rather than running the
                  same routine on every site.
                </span>
              </li>
              <li>
                <span>
                  <strong>Reliable &amp; Local.</strong> We're based in the
                  community we serve. Count on our team to be on-time,
                  on-budget, and on-point.
                </span>
              </li>
              <li>
                <span>
                  <strong>Good Value.</strong> We deliver a quality experience
                  using only the most advanced cleaning products and procedures
                  at fair prices.
                </span>
              </li>
              <li>
                <span>
                  <strong>Professional.</strong> Our experienced commercial
                  cleaning team is fully trained, licensed and insured for your
                  peace of mind.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <h2>Ready for a Spotless Finish?</h2>
            <p className="mb-0">
              Don't hand off a construction project with dust and debris still
              on-site. Our construction cleanup services get the space ready for
              its final walkthrough, safely and on your timeline.
              <br />
              <ConsultationButton /> to see what post-construction cleaning
              looks like for your project. Or{" "}
              <a href="tel:+1-562-318-0602" className="text-link font-bold">
                Call (562) 318-0602
              </a>{" "}
              to talk through your timeline.
            </p>
          </div>
        </div>
      </section>
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
    heroStacked: file(
      relativePath: { eq: "services/construction-cleaning/hero-desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    intro: file(
      relativePath: { eq: "services/construction-cleaning/intro.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
