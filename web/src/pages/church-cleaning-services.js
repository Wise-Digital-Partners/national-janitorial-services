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

const faqs = [
  {
    question: "How much does church cleaning cost?",
    answer:
      "Cost depends on square footage, service frequency, and the areas included. A site visit is the only accurate way to quote a house of worship, because sanctuary size, restroom count, and event calendar vary widely between congregations.",
  },
  {
    question: "Can cleaning happen without disrupting services or events?",
    answer:
      "Yes. Most congregations schedule the main cleaning between the last event of the week and the first service, with lighter touchpoint service between events.",
  },
  {
    question: "Do you clean spaces other than the sanctuary?",
    answer:
      "Yes. Nurseries, classrooms, fellowship halls, kitchens, offices, restrooms, hallways, and entry areas are all part of a complete plan.",
  },
  {
    question: "Is disinfection separate from regular cleaning?",
    answer:
      "It is a distinct step with its own products and procedures. Regular janitorial visits can include disinfection of shared touch points, and deeper disinfection can be scheduled after an exposure or during respiratory illness season.",
  },
  {
    question: "How quickly can you respond to an urgent situation?",
    answer:
      "Same-day response is often possible. Tell us what happened when you call and we will let you know what we can do that day.",
  },
  {
    question: "Do you serve congregations outside Long Beach?",
    answer:
      "Yes. We serve Long Beach along with Downey, Lakewood, Santa Fe Springs, Commerce, and Vernon.",
  },
];

const schedule = [
  [
    "Before and after each service",
    "Restroom checks and restocking, touch point disinfection, entryway mats, visible spot cleaning",
  ],
  [
    "Weekly",
    "Sanctuary dusting and vacuuming, full restroom cleaning, kitchen and fellowship hall, offices, trash removal",
  ],
  [
    "Monthly",
    "Detail dusting of light fixtures and vents, interior glass, baseboards, upholstery vacuuming, floor buffing",
  ],
  [
    "Quarterly",
    "Carpet extraction, hard floor stripping and waxing, high dusting, exterior glass",
  ],
  [
    "Annually or seasonally",
    "Deep cleaning ahead of major holidays, pressure washing walkways and entry areas",
  ],
];

const partnerQuestions = [
  "Are you licensed and insured, and can you show current certificates?",
  "Which disinfectants do you use, and are they EPA-registered?",
  "How is your team trained on CDC guidelines?",
  "Will the same team clean our building each visit?",
  "How do you handle a same-day request after an exposure or an unexpected event?",
  "Can you work around a worship calendar that changes week to week?",
  "How would you handle our older or specialty surfaces, and when would you tell us a job needs a specialist?",
  "Do you conduct a site visit before quoting, or quote from square footage alone?",
  "What are your billing terms?",
  "Can you provide references from other houses of worship?",
];

const Page = ({ data }) => {
  return (
    <Layout
      navigationStyle="standard"
      headerLinkColor=""
      headerHasBorder={false}
    >
      <SearchEngineOptimization
        title="Church Cleaning Guide: Caring for Your House of Worship"
        description="A practical guide to house of worship cleaning, from the sanctuary to the nursery, with schedules, disinfection standards, and questions to ask a cleaning partner."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
        noIndex
      />

      <HeroStacked
        image={data.heroStacked.childImageSharp.gatsbyImageData}
        backgroundFixed={true}
        imageMaxHeight="max-h-[468px]"
        heading="Maintaining Sacred Spaces: A Guide to Professional Church Cleaning"
        textMaxWidth="max-w-5xl"
      />

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <p>
              A house of worship is not a building like any other. It holds
              weddings and funerals, first communions and last goodbyes. People
              arrive carrying grief, gratitude, and everything in between. The
              room they walk into says something before a single word is spoken.
            </p>
            <p>
              Cleaning that space is stewardship, not housekeeping. This guide
              walks through what thorough house of worship cleaning actually
              involves: the areas that need attention, how often each one needs
              it, what proper disinfection looks like, and how routine care
              protects a building your congregation has invested in for
              generations. It is written for the pastors, deacons, facility
              volunteers, and administrators who carry the weight of keeping a
              sacred space ready.
            </p>
            <p className="mb-0">
              <Link fade to="/about/" className="text-link font-bold">
                Long Beach Janitorial
              </Link>{" "}
              (formerly National Janitorial Services) has served more than 100
              businesses and organizations across Long Beach and the surrounding
              communities, including local congregations. What follows reflects
              that work.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h2>Why a House of Worship Is Not an Office</h2>
            <p>
              Most{" "}
              <Link
                fade
                to="/commercial-cleaning-company/"
                className="text-link font-bold"
              >
                commercial cleaning
              </Link>{" "}
              plans assume a steady rhythm. People arrive at nine, leave at
              five, and the building sits quiet overnight.
            </p>
            <p>
              A church runs on a different clock. The building may be nearly
              empty on a Tuesday afternoon and hold 400 people on a Sunday
              morning. Then the youth group meets Wednesday, a funeral is
              scheduled Thursday, and a community meal fills the fellowship hall
              Friday night.
            </p>
            <p>Four things make these spaces distinct:</p>
            <ul className="styled-list">
              <li>
                <span>
                  <strong>Surge use.</strong> Traffic concentrates into a few
                  hours, then stops. Restrooms, entryways, and seating take
                  heavy wear in short bursts.
                </span>
              </li>
              <li>
                <span>
                  <strong>Shared touch points.</strong> Hymnals, offering
                  plates, door handles, communion rails, and pew backs are
                  touched by hundreds of hands in a single service.
                </span>
              </li>
              <li>
                <span>
                  <strong>Mixed generations in one room.</strong> Infants in the
                  nursery and elders in the front pews share the same air and
                  the same surfaces. Both groups are more vulnerable to illness.
                </span>
              </li>
              <li>
                <span>
                  <strong>Long-lived materials.</strong> Wood pews, glass, brass
                  fixtures, and original flooring were built to last decades.
                  Their condition reflects decades of giving, and replacing them
                  is rarely in the budget.
                </span>
              </li>
            </ul>
            <p className="mb-0">
              A cleaning plan that ignores any of these misses the point of the
              space.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <h2>A Room by Room Guide to Cleaning a House of Worship</h2>

            <h3>The Sanctuary</h3>
            <p>
              This is the heart of the building and the room most people judge
              it by. Focus on:
            </p>
            <ul className="styled-list">
              <li>
                <span>
                  Dusting pew backs, ledges, hymnal racks, and window sills
                </span>
              </li>
              <li>
                <span>
                  Vacuuming carpet runners and aisles, with attention to the
                  high-traffic center aisle
                </span>
              </li>
              <li>
                <span>
                  Damp wiping pew seats and armrests with a product suited to
                  the wood finish
                </span>
              </li>
              <li>
                <span>
                  Cleaning the altar area, lectern, and communion rail
                </span>
              </li>
              <li>
                <span>
                  Dusting light fixtures, ceiling fans, and organ or piano
                  exteriors
                </span>
              </li>
              <li>
                <span>
                  Spot cleaning stained glass frames and interior glass
                </span>
              </li>
            </ul>
            <p>
              Work from top to bottom so dust falls onto surfaces still waiting
              to be cleaned.
            </p>

            <h3>Entryways, Narthex, and Gathering Areas</h3>
            <p>
              First impressions happen here, and so does most of the dirt
              tracked into the building. Mats need vacuuming or extraction,
              glass doors need cleaning at hand height, and door handles need
              disinfection. Bulletin boards and literature racks collect dust
              quickly and are easy to overlook.
            </p>

            <h3>Restrooms</h3>
            <p>
              Restrooms shape a visitor's judgment of the whole facility more
              than any other room. Sunday volume means they need attention
              before and after services, not just once a week. Disinfect all
              touch points, restock fully in advance of peak use, and check for
              the small failures people remember: a burned-out bulb, an empty
              dispenser, a slow drain.
            </p>

            <h3>Nursery and Children's Ministry Rooms</h3>
            <p>
              These rooms carry the highest health stakes in the building. Toys,
              mats, tables, and cribs need cleaning and disinfection after every
              use. Parents notice these details, and their confidence in the
              nursery affects whether they return.
            </p>

            <h3>Kitchen and Fellowship Hall</h3>
            <p>
              Where food is served, sanitation standards rise. Counters, sinks,
              appliance handles, serving lines, and tables all need proper
              cleaning and sanitizing. Floors need degreasing on a set schedule
              rather than only when they look dirty.
            </p>

            <h3>Offices, Classrooms, and Hallways</h3>
            <p className="mb-0">
              Weekday staff and volunteers work here. Regular dusting, trash
              removal, vacuuming, and disinfection of shared keyboards, phones,
              and copiers keep the administrative side of the ministry running.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h2>How Often Should a Church Be Cleaned?</h2>
            <p>
              Most congregations need a layered schedule rather than a single
              weekly visit. Adjust the table below to your building's size and
              calendar.
            </p>
            <div className="mb-6 overflow-x-auto">
              <table className="w-full border-collapse bg-white text-left">
                <thead>
                  <tr>
                    <th className="border border-gray-200 p-4 font-bold">
                      Frequency
                    </th>
                    <th className="border border-gray-200 p-4 font-bold">
                      Tasks
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map(([frequency, tasks]) => (
                    <tr key={frequency}>
                      <td className="border border-gray-200 p-4 align-top">
                        {frequency}
                      </td>
                      <td className="border border-gray-200 p-4 align-top">
                        {tasks}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mb-0">
              Respiratory illness season is worth planning around. According to
              the CDC, flu season in the United States falls in the fall and
              winter, and activity most often{" "}
              <a
                href="https://www.cdc.gov/flu/about/season.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link font-bold"
              >
                peaks between December and February
              </a>
              . Adding disinfection frequency during those months is easier than
              responding to an outbreak after it has moved through a
              congregation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <h2>Disinfection Standards for Shared Worship Spaces</h2>
            <p>
              Cleaning removes dirt. Disinfection addresses pathogens you cannot
              see. Both matter, and they are not the same task.
            </p>
            <p>
              Our certified experts use EPA-registered agents, including
              multi-clean chlorinated disinfecting tablets, which are effective
              against pathogens such as Staphylococcus aureus, Norovirus, and
              the novel coronavirus. Our disinfection teams are trained on best
              practices in accordance with CDC guidelines for surface
              disinfection and contact time.
            </p>
            <p>
              Two points deserve honesty. Contact time matters: a disinfectant
              that is wiped away too quickly has not done its job, which is why
              trained application matters more than the product label alone.
            </p>
            <p className="mb-0">
              And no cleaning program can promise a congregation will stay
              healthy. What a proper protocol does is reduce the risk of
              infection, help stop the spread, and give your leadership a
              documented standard of care. You can read more about our approach
              on our{" "}
              <Link
                fade
                to="/disinfection-services/"
                className="text-link font-bold"
              >
                disinfection services
              </Link>{" "}
              and{" "}
              <Link
                fade
                to="/covid-cleaning-services/"
                className="text-link font-bold"
              >
                COVID cleaning services
              </Link>{" "}
              pages.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h2>Protecting the Materials Your Congregation Has Invested In</h2>
            <p>
              Routine maintenance is asset preservation. Floors, glass, and
              fixtures wear out on a schedule you can either manage or inherit,
              and managing it costs far less than replacement.
            </p>
            <p>
              Hard floor care is the clearest example. Stripping and waxing on a
              set cycle protects hardwood, tile, terra cotta, and other
              commercial flooring from the wear that heavy Sunday traffic
              causes. Left alone, the finish thins, dirt reaches the material
              underneath, and what would have been routine maintenance becomes
              refinishing or replacement. The same logic applies to glass:
              regular window cleaning removes the airborne pollutants and hard
              water deposits that etch the surface permanently over time.
            </p>
            <p className="mb-0">
              Older buildings deserve an extra conversation. Many congregations
              are stewarding pews, fixtures, and flooring that predate everyone
              currently in the room, and specialty or antique materials can
              react badly to standard products. Bring those surfaces up during
              the site visit so the cleaning plan is written around them rather
              than discovering the problem afterward. If a material needs a
              conservation specialist rather than a janitorial team, the right
              answer is to say so.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <h2>Questions to Ask Before You Choose a Cleaning Partner</h2>
            <p>Use this list when you interview any provider:</p>
            <ol className="mb-6 list-decimal space-y-2 pl-6">
              {partnerQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ol>
            <p className="mb-0">
              The answers to questions 4, 5, 6, and 7 tend to separate a partner
              from a vendor.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h2>A Long Beach Congregation That Trusted Us With Its Space</h2>
            <p>
              St. Joseph Church came to us during the height of COVID-19
              concerns. Their question was not about price. It was whether
              anyone would treat the building with the care it deserved and hold
              to the standard the moment required.
            </p>
            <p>
              Our team conducted a site visit, built a plan around the parish
              calendar, and worked to that standard. In their own words:
            </p>
            <blockquote className="mb-6 border-l-4 border-gray-300 pl-6">
              <p>
                "I appreciate the diligence and professionalism of Anthony and
                the crew member appointed to us. During these COVID times they
                have taken the upmost care to provide the level of cleanliness
                and safeguarding measures needed to insure everyone's safety.
                The pricing is fair and we are happy with the great service!"
              </p>
              <footer className="font-bold">St. Joseph Church</footer>
            </blockquote>
            <p>
              You can read this testimonial and others on our{" "}
              <Link fade to="/reviews/" className="text-link font-bold">
                reviews page
              </Link>
              .
            </p>
            <p className="mb-0">
              That is the whole aim: a congregation that does not have to think
              about the building, because it is ready.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <h2>The Long Beach Janitorial Difference</h2>
            <ul className="styled-list mb-0">
              <li>
                <span>
                  <strong>Experienced.</strong> More than 100 businesses and
                  organizations served across healthcare, education,
                  hospitality, and faith-based facilities. Our certified experts
                  know how different spaces need to be treated.
                </span>
              </li>
              <li>
                <span>
                  <strong>Reliable and Local.</strong> We are based in the
                  community we serve, at 144 W San Antonio Dr, Long Beach, CA
                  90807, with same-day availability when an urgent need comes
                  up. One local law firm needed disinfection after a staff
                  member tested positive for COVID-19 and had a team on site the
                  same day. When something happens on a Saturday night before a
                  Sunday service, we are nearby. Count on our team to be
                  on-time, on-budget, and on-point.
                </span>
              </li>
              <li>
                <span>
                  <strong>Good Value.</strong> Fair pricing built around what
                  your facility actually needs, with Net 30 standard billing and
                  Net 15 financed billing available to fit your budget cycle.
                </span>
              </li>
              <li>
                <span>
                  <strong>Professional.</strong> Licensed and insured, using
                  EPA-registered agents and CDC-aligned protocols, with a
                  documented scope so you always know what is included.
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
            <h2>Let Us Care for Your Sacred Space</h2>
            <p>
              Your calling is to welcome the congregation. Ours is to make sure
              the space is ready for them.
            </p>
            <p className="mb-0">
              If you would like to talk through what your building needs, we are
              glad to walk it with you. Learn more about our{" "}
              <Link
                fade
                to="/church-cleaning-services/"
                className="text-link font-bold"
              >
                church cleaning services
              </Link>
              , or{" "}
              <button
                type="button"
                data-modal-open="modal-contact"
                className="text-link font-bold underline"
              >
                Schedule a 30 Minute Site Consultation
              </button>{" "}
              and we will build a plan around your calendar.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Churches_FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Churches_TW.jpg" }
    ) {
      publicURL
    }
    heroStacked: file(
      relativePath: {
        eq: "services/church-cleaning/Chruch Cleaning_Hero Image.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
