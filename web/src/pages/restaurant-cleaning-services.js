import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CitablePassage from "../components/Repeating/CitablePassage";
import HeroStacked from "../components/Hero/HeroStacked";
import { Link } from "gatsby-plugin-transition-link";

const L = ({ to, children }) => (
  <Link fade to={to} className="text-link font-bold">
    {children}
  </Link>
);

const Cta = ({ children }) => (
  <button type="button" data-modal-open="modal-contact" className="text-link font-bold underline">
    {children}
  </button>
);

const kitchenProblems = [
  {
    lead: "Ventilation grease buildup.",
    text: " Cooking oils and airborne grease collect on fans, filters, and hood surfaces every service. Our certified experts perform high-strength degreasing to support safe, efficient ventilation.",
  },
  {
    lead: "Cross-contamination risk.",
    text: " Prep zones and high-touch equipment move pathogens fast. We sanitize kitchens, breakrooms, and touchpoints with professional-grade products and EPA-registered disinfectants to reduce pathogen risk.",
  },
];

const backOfHouse = [
  "Exhaust fans, filters, and hood surfaces",
  "Prep surfaces and food contact zones",
  "Cooking line and equipment exteriors",
  "Walk-in and dry storage",
  "Dish pit and drains",
  "Kitchen flooring and mats",
];

const frontOfHouse = [
  "Dining room tables, booths, and seating",
  "Host stand and high-touch surfaces",
  "Restroom sanitation",
  "Entryway and lobby",
  "Bar and service stations",
];

const testimonials = [
  {
    quote:
      "I appreciate the diligence and professionalism of Anthony and the crew member appointed to us. During these covid times they have taken the upmost care to provide the level of cleanliness and safeguarding measures needed to insure everyone's safety. The pricing is fair and we are happy with the great service!",
    name: "St. Joseph Church",
  },
  {
    quote:
      "My law firm hired Long Beach Janitorial to do some deep cleaning/disinfection after one of our staff was diagnosed with COVID. We called several businesses for pricing and availability for professional sanitation. National was the best pricing and was available that same day. They were great. Two guys arrived, both had sanitation equipment and sprayed down the entire office in less than an hour.",
    name: "Hilary V.",
  },
  {
    quote:
      "Long Beach Janitorial was very professional and responsive when we needed them the most. We will recommend them to anyone looking for janitorial services.",
    name: "Carlos A.",
  },
];

const differences = [
  {
    lead: "Experienced.",
    text: " With more than 100 businesses served, we tailor our cleaning services to your specific industry needs.",
  },
  {
    lead: "Reliable & Local.",
    text: " We're based in the community we serve. Count on our experts to be on time, on-budget, and on-point with our services.",
  },
  {
    lead: "Good Value.",
    text: " We deliver a quality experience using only the most advanced cleaning products and procedures at fair pricing.",
  },
  {
    lead: "Professional.",
    text: " Our experienced commercial cleaning team is fully trained, licensed and insured for your peace of mind.",
  },
];

const Page = ({ data }) => {
  return (
    <Layout navigationStyle="standard" headerLinkColor="" headerHasBorder={false}>
      <SearchEngineOptimization
        title="Restaurant & Kitchen Cleaning Long Beach | LB Janitorial"
        description="Commercial kitchen cleaning built around Long Beach health code compliance. Grease, hoods, prep surfaces, and front of house. Book a 30-minute site visit."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroStacked
        image={data.heroStacked.childImageSharp.gatsbyImageData}
        backgroundFixed={true}
        imageMaxHeight="max-h-[468px]"
        heading="Restaurant & Hospitality Cleaning Services in Long Beach, CA"
        textMaxWidth="max-w-4xl"
        alt="Long Beach Janitorial expert degreasing a commercial kitchen exhaust hood."
      />

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <p>
              Long Beach Janitorial (formerly National Janitorial Services) builds restaurant cleaning services around the rooms that carry the most risk. That means the line, the prep surfaces, and the exhaust system, plus the dining room your guests actually see.
            </p>
            <p>
              Plenty of Long Beach restaurants run a kitchen and a bar under one roof. We scope a program for both, because the work in each room is different. Hotels, resorts, and banquet spaces get the same treatment across kitchens, lobbies, and guest areas.
            </p>
            <p className="mb-0">
              <Cta>Schedule a 30 Minute Site Consultation</Cta> or call{" "}
              <a href="tel:+14242607369" className="text-link font-bold">
                (424) 260-7369
              </a>{" "}
              to see what commercial kitchen cleaning looks like for your restaurant. Every visit uses EPA-registered disinfectants applied in line with CDC guidance.
            </p>
          </div>
        </div>
      </section>

      <CitablePassage itemType="https://schema.org/Service">
        <p className="mb-0" itemProp="description">
          Hospitality and food service cleaning is specialized facility sanitation designed to eliminate biological contaminants and preserve strict health department compliance.{" "}
          <a href="https://longbeachjanitorial.com/restaurant-cleaning-services/" className="text-link font-bold">Long Beach Janitorial</a> brings over 5 years of experience and 100+ accounts served, deploying licensed and insured cleaning technicians using eco-friendly, EPA-registered disinfectants.
        </p>
      </CitablePassage>

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <h2>What a Commercial Kitchen Needs That a Dining Room Does Not</h2>
            <p>
              A commercial kitchen creates three problems a general janitorial package is not built to solve. Each one carries a different cost when it goes unmanaged.
            </p>
            <ul className="styled-list">
              {kitchenProblems.map((item) => (
                <li key={item.lead}>
                  <span>
                    <strong>{item.lead}</strong>
                    {item.text}
                  </span>
                </li>
              ))}
              <li>
                <span>
                  <strong>High-stress flooring.</strong> Kitchen floors take constant grease, heat, and traffic. Routine sweeping and mopping will not hold them, so we add <L to="/floor-stripping-services/">floor stripping</L> to protect the surface and keep walkways slip-free.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h2>Long Beach Health Code Compliance</h2>
            <p>
              Long Beach restaurants answer to their own city regulator, not the county. The Long Beach Bureau of Environmental Health enforces state and local food safety rules across more than 2,000 food facilities in the city under the California Retail Food Code.
            </p>
            <p>
              That is the standard we clean to. Our team helps you maintain strict health code compliance, pass inspections, and keep your facility sanitized using EPA-registered disinfectants applied in line with CDC guidance. If an exposure event or an outbreak concern puts you on a clock, our <L to="/disinfection-services/">commercial disinfection services</L> cover the response.
            </p>
            <p className="mb-0">
              <strong>Key takeaway:</strong> Long Beach Janitorial cleans commercial kitchens to California Retail Food Code standards using EPA-registered disinfectants.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-10 lg:gap-x-20">
            <div>
              <h2>What We Clean: Kitchen and Front of House</h2>
              <p>
                Long Beach Janitorial cleans both sides of your restaurant on one plan. Back of house carries the compliance risk. Front of house carries the first impression, and both get scoped during your site visit.
              </p>
              <p>
                <strong>Back of house</strong>
              </p>
              <ul className="styled-list">
                {backOfHouse.map((item) => (
                  <li key={item}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                <strong>Front of house</strong>
              </p>
              <ul className="styled-list">
                {frontOfHouse.map((item) => (
                  <li key={item}>
                    <span>{item}</span>
                  </li>
                ))}
                <li>
                  <span>
                    Storefront and dining room glass, through our <L to="/window-cleaning-services/">window cleaning services</L>
                  </span>
                </li>
              </ul>
              <p className="mb-0">
                Exterior areas matter too. Dumpster pads, back-door walkways, and patio surfaces collect grease and food waste that draws pests, which is why <L to="/pressure-washing-services/">pressure washing</L> is worth building into the schedule.
              </p>
            </div>
            <div>
              <GatsbyImage
                image={data.intro.childImageSharp.gatsbyImageData}
                alt="Restaurant dining room cleaned by Long Beach Janitorial certified experts."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h2>Our Process for a Restaurant Kitchen Visit</h2>
            <p>We run a kitchen visit in five steps. The sequence is the same every time so nothing gets skipped on a busy week.</p>
            <ol className="list-decimal pl-6">
              <li>
                <strong>Establish a customizable cleaning plan:</strong> We start with an on-site visit to evaluate your layout and operating needs. We work with you to identify high-priority areas and design a plan that fits your service schedule.
              </li>
              <li>
                <strong>Execute professional degreasing:</strong> Our certified experts handle high-strength degreasing for exhaust fans, filters, and hood surfaces. We tackle heavy buildup to support safe, clean, efficient ventilation.
              </li>
              <li>
                <strong>Sanitize kitchens and high-touch surfaces:</strong> Using professional-grade products and EPA-registered disinfectants, our certified experts sanitize kitchens, breakrooms, and high-touch surfaces to reduce pathogen risk for your guests and staff.
              </li>
              <li>
                <strong>Deliver specialized floor care:</strong> We handle routine floor cleaning and vacuuming as scoped in your plan. For deeper maintenance, we add professional <L to="/floor-waxing-services/">floor waxing</L> to protect the surface and keep walkways clean and slip-free.
              </li>
              <li className="mb-0">
                <strong>Deliver a professional, high-caliber clean:</strong> The work is carried out by our fully trained, licensed and insured commercial cleaning team, on-time, on-budget, and on-point.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <h2>Cleaning Scheduled Around Your Service Hours</h2>
            <p>
              Long Beach Janitorial schedules restaurant cleaning around your service hours, not around a generic janitorial timetable. Most kitchens book post-close or pre-open, so the line is clear and nothing interrupts a shift.
            </p>
            <p>
              Restaurants that run long hours or double shifts often need coverage during the day instead. Our <L to="/day-porter-services/">day porter services</L> put someone on site through service to keep restrooms, the dining room, and high-touch surfaces handled while you are open.
            </p>
            <p className="mb-0">
              For urgent situations, our team offers same-day availability for priority disinfection requests. Call us and we will tell you what we can get to today.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h2>Why Long Beach Operators Choose a Kitchen-Specific Program</h2>
            <p>
              Most cleaning companies write one janitorial package and stretch it across every kind of commercial space, kitchens included. We build restaurant cleaning as its own program, because a kitchen problem costs you a dining room, not just a line item.
            </p>
            <p>
              That is the partnership approach behind all of our work. We would rather build a long-term relationship around your actual compliance risk than sell you a weekly wipe-down and call it a program. When a kitchen needs a full reset between quarters, <L to="/deep-cleaning-services/">restaurant deep cleaning</L> gets the equipment, corners, and floors that a nightly visit cannot reach.
            </p>
            <p className="mb-0">
              A kitchen floor exposed to constant grease needs different care than a dining room floor. Scoping them separately is how both stay in shape, and it is the same logic we apply across every service in our <L to="/commercial-cleaning-services/">commercial cleaning</L> lineup.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-10 lg:gap-x-20">
            <div className="order-2 md:order-1">
              <GatsbyImage
                image={data.covid.childImageSharp.gatsbyImageData}
                alt="COVID cleaning and disinfection for Long Beach restaurants."
              />
            </div>
            <div className="order-1 md:order-2">
              <h2>COVID Cleaning and Disinfection</h2>
              <p className="mb-0">
                Stop the spread and protect your business with specialized <L to="/covid-cleaning-services/">COVID cleaning services</L>. We use Multi-Clean Chlorinated Disinfecting Tablets, an EPA-registered disinfectant effective against pathogens including Staphylococcus aureus, Norovirus, and the novel coronavirus, applied in line with CDC guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h2>What a Clean Kitchen Actually Protects</h2>
            <p className="mb-0">
              A clean kitchen protects two things at once: your standing with the health department and the guests who never see the back of house. A kitchen problem becomes a dining room problem the moment it reaches a review or a closure notice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <h2>Hear from Satisfied Clients</h2>
            <p>Trusted by more than 100 businesses served across Southern California.</p>
            {testimonials.map((t, i) => (
              <blockquote key={t.name} className={i === testimonials.length - 1 ? "mb-0" : "mb-8"}>
                <p>"{t.quote}"</p>
                <footer>{t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h2>The Long Beach Janitorial Difference</h2>
            <p>Find out what makes us Long Beach's top cleaning company.</p>
            <ul className="styled-list mb-0">
              {differences.map((item) => (
                <li key={item.lead}>
                  <span>
                    <strong>{item.lead}</strong>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <h2>Related Cleaning Services</h2>
            <p>
              If your business is a bar or nightclub rather than a full kitchen operation, our <L to="/bar-cleaning-services/">bar and nightclub cleaning services</L> page covers spill cleanup, late-night turnover, and the risks that come with serving drinks rather than running a line.
            </p>
            <p>
              Restaurants that need ongoing coverage beyond the kitchen can build a recurring plan through our <L to="/janitorial-cleaning-company/">janitorial services</L>.
            </p>
            <p>
              Gyms, theaters, hotels, and other hospitality venues are covered across the <L to="/industries-we-serve/">industries we serve</L>.
            </p>
            <p className="mb-0">
              We serve restaurants across the Gateway Cities as well, including <L to="/downey-janitorial-services/">Downey</L>, Lakewood, Santa Fe Springs, Commerce, and Vernon.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h2>Schedule Your 30 Minute Site Consultation</h2>
            <p>
              Backed by more than five years of commercial cleaning experience, Anthony and our certified experts keep your facility inspection-ready. Our fully trained, licensed and insured team will walk your kitchen and dining room, scope the work, and build a plan around your hours.
            </p>
            <p className="mb-0">
              Call{" "}
              <a href="tel:+14242607369" className="text-link font-bold">
                (424) 260-7369
              </a>{" "}
              or <Cta>Request a 30 Minute Site Consultation today</Cta>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(relativePath: { eq: "open-graph/facebook/Bars _ Night_FB.jpg" }) {
      publicURL
    }
    twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/Bars _ Night_TW.jpg" }) {
      publicURL
    }
    heroStacked: file(relativePath: { eq: "services/restaurant-cleaning/restaurant cleaning page_Hero Image.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    intro: file(relativePath: { eq: "industries/restaurant-hospitality/intro.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    covid: file(relativePath: { eq: "industries/covid-cleaning.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
