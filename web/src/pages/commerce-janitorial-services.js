import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Link from "gatsby-plugin-transition-link";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroFullWidth from "../components/Hero/HeroFullWidth";
// import Covid from "../components/Repeating/Covid";
import Testimonials from "../components/Repeating/Testimonials";
import CityCTA from "../components/Repeating/CityCTA";
import About from "../components/Repeating/About";
import Badges from "../components/Repeating/Badges";
// import Clients from "../components/Repeating/Clients";
import WhyUs from "../components/Repeating/WhyUs";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonGhost from "../components/Button/ButtonGhost";
import WhyWeLove from "../components/Repeating/WhyWeLove";

const Page = ({ data }) => {
  const heroFullWidthImages = [
    getImage(data.heroFullWidthDesktop.childImageSharp.gatsbyImageData),
    {
      ...getImage(data.heroFullWidthMobile.childImageSharp.gatsbyImageData),
      media: `(max-width: 767px)`,
    },
  ];
  return (
    <Layout
      navigationStyle="standard"
      headerLinkColor=""
      headerHasBorder={false}
    >
      <SearchEngineOptimization
        title="Janitorial Services in Commerce, CA | Long Beach Janitorial"
        description="Commercial cleaning for Commerce warehouses, retail, and offices. EPA-registered products, CDC-aligned protocols, licensed and insured team."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <HeroFullWidth
        backgroundImages={heroFullWidthImages}
        padding="pt-40 md:pt-64 pb-18 md:pb-64 pr-6 md:mr-0"
        textAlignment="text-left"
        textMaxWidth="max-w-4xl"
        backgroundPosition="50% 35%"
      >
        <p className="mb-6 font-display text-mobile-7xl font-black uppercase text-accent md:mb-2 md:text-7xl">
          Reliable.
          <br className="block md:hidden" /> Local.
          <br className="block md:hidden" /> Professional.
        </p>
        <p className="mb-7 text-xl text-accent md:mb-10 md:text-3xl">
          Keeping workspaces clean, employees safe, and your mind at peace.
        </p>
        <div className="grid  gap-y-6 md:flex md:items-center">
          <ButtonSolid
            as="button"
            modal="modal-contact"
            text="Get a Free Estimate"
            className="md:mr-6"
          />
          <ButtonGhost
            className="hidden md:inline-flex"
            href="tel:+1-424-260-7369"
            text="(424) 260-7369"
          />
          <ButtonGhost
            className="md:hidden"
            darkmode={true}
            href="tel:+1-424-260-7369"
            text="(424) 260-7369"
          />
        </div>
      </HeroFullWidth>
      <Badges className="py-14" />
      {/* <Clients className="py-14" headingLevel="h2" /> */}
      <section className="py-16 md:py-8">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-y-10 md:grid-cols-12 md:gap-x-10 lg:gap-x-20">
            <div className="order-2 md:order-1 md:col-span-5 md:col-start-1">
              <GatsbyImage
                image={data.introDesktop.childImageSharp.gatsbyImageData}
                alt="Long Beach Janitorial team servicing a Commerce commercial property."
                className="hidden md:block"
              />
              <GatsbyImage
                image={data.introMobile.childImageSharp.gatsbyImageData}
                alt="Long Beach Janitorial team servicing a Commerce commercial property."
                className="md:hidden"
              />
            </div>
            <div className="order-1 md:order-2 md:col-span-7 md:col-end-13">
              <h1>Janitorial Services in Commerce, CA</h1>
              <p>
                <Link
                  fade
                  to="/commercial-cleaning-company/"
                  className="text-link font-bold"
                >
                  Long Beach Janitorial
                </Link>{" "}
                (formerly National Janitorial Services) is a Long Beach
                commercial cleaning company that also keeps Commerce workplaces
                clean and healthy. With more than 100 businesses served across
                Long Beach and the surrounding cities, we bring an established
                commercial cleaning operation to Commerce. Our licensed and
                insured team uses EPA-registered disinfectants and
                professional-grade cleaning products. We serve warehouses,
                distribution centers, retail properties, and offices throughout
                the city. Whether your business needs regular preventative
                maintenance cleaning or a deep clean, we have the expertise to
                get the job done right.
              </p>
              <p className="mb-0">
                <button
                  type="button"
                  data-modal-open="modal-contact"
                  className="text-link font-bold underline"
                >
                  Schedule a 30 Minute Site Consultation
                </button>{" "}
                to walk through your Commerce property with our team today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2>Services Offered in Commerce</h2>
            <p className="mb-0">
              We bring our full commercial cleaning lineup to Commerce
              businesses. Each service below links to a full breakdown of what
              is included.
            </p>
          </header>
          <ul className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
            <li>
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
              : Stripping, sealing, and waxing for high-traffic warehouse and
              rail-adjacent facility floors, matched to each floor type.
            </li>
            <li>
              <Link
                fade
                to="/commercial-cleaning-company/"
                className="text-link font-bold"
              >
                Commercial and Retail Property Cleaning
              </Link>
              : Common-area and storefront cleaning built around customer
              traffic hours, suited to Commerce's retail corridor.
            </li>
            <li>
              <Link
                fade
                to="/office-cleaning-services/"
                className="text-link font-bold"
              >
                Office Cleaning
              </Link>
              : Daily, weekly, or custom-schedule cleaning for the corporate and
              administrative space attached to Commerce's industrial parks.
            </li>
            <li>
              <Link
                fade
                to="/medical-dental-office-cleaning/"
                className="text-link font-bold"
              >
                Medical Facility Cleaning
              </Link>
              : EPA-registered disinfection protocols aligned with CDC
              guidelines, suited to healthcare and clinical spaces.
            </li>
            <li>
              <Link
                fade
                to="/deep-cleaning-services/"
                className="text-link font-bold"
              >
                Deep Cleaning
              </Link>{" "}
              and{" "}
              <Link
                fade
                to="/janitorial-cleaning-company/"
                className="text-link font-bold"
              >
                Preventative Maintenance
              </Link>
              : One-time deep cleans or a recurring maintenance schedule.
            </li>
            <li>
              <Link
                fade
                to="/pressure-washing-services/"
                className="text-link font-bold"
              >
                Pressure Washing
              </Link>
              : Exterior cleaning for loading docks, dock aprons, walkways, and
              warehouse frontage.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2>Why Choose Us in Commerce</h2>
          </header>
          <ul className="grid grid-cols-1 gap-y-8">
            <li>
              <strong>
                We match floor care chemistry and intervals to warehouse floor
                types.
              </strong>{" "}
              Facilities close to Commerce's freight rail infrastructure see
              constant pallet-jack, forklift, and foot traffic. We pair the
              right stripping and waxing schedule to each floor type. Commerce
              facility managers get longer floor life instead of a shine that
              wears off within a shift.
            </li>
            <li>
              <strong>
                We know how to clean for high-foot-traffic retail venues.
              </strong>{" "}
              Commerce is home to a large retail and entertainment draw near the
              Citadel Outlets. Properties in that corridor need common-area
              cleaning scheduled around customer and visitor traffic, not a
              fixed overnight-only window.
            </li>
            <li>
              <strong>
                We use{" "}
                <Link
                  fade
                  to="/disinfection-services/"
                  className="text-link font-bold"
                >
                  EPA-registered disinfectants
                </Link>{" "}
                on every visit.
              </strong>{" "}
              Our disinfectants meet EPA registration standards and our
              protocols follow CDC guidance. That is effective disinfection, not
              just surface-level tidying.
            </li>
            <li>
              <strong>
                We schedule around multi-shift and high-traffic operations, not
                against them.
              </strong>{" "}
              Many Commerce warehouses run multiple shifts. Retail properties
              near the Citadel Outlets see heavy weekend traffic. We build
              cleaning windows around each property's actual pattern instead of
              applying one generic schedule to every account type.
            </li>
            <li>
              <strong>Our team is experienced, licensed, and insured.</strong>{" "}
              Every certified expert assigned to a Commerce account carries the
              training, licensing, and insurance a commercial property requires.
              That holds for a warehouse, a retail storefront, or an office
              suite.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-6 max-w-3xl">
            <h2>Service Area: Commerce and Surrounding Communities</h2>
          </header>
          <div className="max-w-4xl">
            <p>
              Long Beach Janitorial serves businesses throughout Commerce. That
              includes the area around the Citadel Outlets, the Washington
              Boulevard corridor, and the rail-yard-adjacent industrial zone.
              From our Long Beach base, we also serve nearby communities
              including{" "}
              <Link
                fade
                to="/vernon-janitorial-services/"
                className="text-link font-bold"
              >
                Vernon
              </Link>
              , Bell Gardens, Maywood, Montebello,{" "}
              <Link
                fade
                to="/downey-janitorial-services/"
                className="text-link font-bold"
              >
                Downey
              </Link>
              , and East Los Angeles.
            </p>
            <p className="mb-0">
              If your property sits within our service area, our team can
              promptly schedule an on-site 30 Minute Site Consultation. We will
              walk through your facility with you, evaluate your specific goals,
              and build a customized cleaning plan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="mb-6 max-w-3xl">
            <h2>
              Local Knowledge: Cleaning for Commerce's Dual Commercial Base
            </h2>
          </header>
          <div className="max-w-4xl">
            <p>
              Commerce runs two distinct commercial identities in a small
              footprint. Its freight rail infrastructure supports a dense
              warehouse and distribution corridor. At the same time, the Citadel
              Outlets and the surrounding entertainment corridor draw
              significant retail and visitor traffic.
            </p>
            <p>
              That dual identity changes what a cleaning plan needs to cover.
              Warehouse and rail-adjacent floors accumulate dust, packaging
              debris, and equipment residue from constant pallet-jack and
              forklift traffic. That calls for stripping and waxing intervals
              set to the floor type and traffic load. Retail properties near the
              Citadel Outlets need something different. Their common-area
              cleaning has to be timed around shopper traffic, especially on
              weekends when foot traffic peaks well above a typical weekday.
            </p>
            <p className="mb-0">
              The administrative offices attached to Commerce's industrial parks
              add a third layer. These spaces call for standard office cleaning
              rather than industrial floor care or retail common-area service.
              We schedule them independently so each property type gets the
              treatment it actually needs.
            </p>
          </div>
        </div>
      </section>

      <Testimonials headingLevel="h2" />

      <About className="mb-16 pt-16 md:mb-32 md:pt-32" headingLevel="h2" />

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-12 max-w-3xl">
            <h2>Frequently Asked Questions</h2>
          </header>
          <div className="grid max-w-4xl grid-cols-1 gap-y-10">
            <div>
              <h4 className="heading-six mb-2">
                How quickly can you start service for a Commerce business?
              </h4>
              <p className="mb-0">
                Turnaround depends on the scope of your property and the service
                requested. Our onboarding turnaround is highly responsive and
                tailored to the size and scope of your facility. For urgent
                needs, we have a track record of same-day availability for{" "}
                <Link
                  fade
                  to="/disinfection-services/"
                  className="text-link font-bold"
                >
                  emergency deep cleaning and disinfection
                </Link>{" "}
                requests, including a law office we fully disinfected the same
                day it called us. For regular recurring janitorial services, we
                begin with a 30 Minute Site Consultation to evaluate your space
                and quickly establish your customized cleaning plan.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Do you clean warehouses and retail properties, or only one type
                of business, in Commerce?
              </h4>
              <p className="mb-0">
                We serve all commercial property types in Commerce, including
                warehouses, distribution centers, retail, hospitality-adjacent
                properties, offices, and medical facilities.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Can you schedule around weekend traffic at a Commerce retail
                property near the Citadel Outlets?
              </h4>
              <p className="mb-0">
                Yes. We build cleaning schedules around your peak traffic hours.
                For retail properties in that corridor, that often means heavier
                weekend coverage and lighter weekday service.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Can you clean around a multi-shift warehouse schedule in
                Commerce?
              </h4>
              <p className="mb-0">
                Yes. We build cleaning windows into the gaps between shift
                changes rather than defaulting to a fixed overnight slot, so
                cleaning does not interrupt loading dock activity.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Do you offer one-time deep cleaning, or only recurring service,
                for Commerce properties?
              </h4>
              <p className="mb-0">
                We offer both. Our highly trained team is fully equipped to
                serve the commercial, retail, and industrial businesses of
                Commerce. Some accounts want a long-term commercial partnership.
                Others start with a thorough, one-time deep clean of a warehouse
                or office. Either way, we tailor our schedules to keep your
                facility pristine.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Is there a minimum property size or contract length to work with
                you in Commerce?
              </h4>
              <p className="mb-0">
                We proudly accommodate commercial facilities and offices of all
                sizes, big or small. Rather than locking you into rigid,
                one-size-fits-all contracts, we focus on a true service
                partnership built around your budget and operational needs. To
                make onboarding as seamless as possible, we offer a choice of
                flexible payment terms, including Standard Net 30 or Financed
                Net 15 monthly billing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyUs className="py-16 md:py-32" headingLevel="h2" />

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2>Serving Commerce From Our Long Beach Headquarters</h2>
            <p>
              Servicing Office: 144 W San Antonio Dr
              <br />
              Long Beach, CA 90807
              <br />
              <a href="tel:5623171575" className="text-link font-bold">
                (562) 317-1575
              </a>
            </p>
            <p className="mb-0">Hours: Monday to Sunday, 7:00AM to 9:00PM</p>
          </header>
          <div className="max-w-4xl">
            <iframe
              title="Map showing Long Beach Janitorial at 144 W San Antonio Dr, Long Beach, serving Commerce"
              src="https://www.google.com/maps?q=144+W+San+Antonio+Dr,+Long+Beach,+CA+90807&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="mb-0 mt-4 text-sm text-gray-500">
              This is our primary servicing office for the Commerce area.
              Commerce and surrounding communities are proudly included within
              our commercial service radius.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="max-w-4xl">
            <h2>Ready for a Cleaner, Healthier Commerce Workplace?</h2>
            <p>
              A clean, healthy work environment starts with the right cleaning
              partner. Whether you operate a warehouse, a retail property, an
              office, or a facility near the Citadel Outlets, the Long Beach
              Janitorial team is ready to build a schedule that fits your
              business: on-time, on-budget, and on-point.
            </p>
            <ButtonSolid
              as="button"
              modal="modal-contact"
              text="Get a Free Estimate"
              className="mb-8"
            />
            <p className="mb-0">
              We also serve businesses in{" "}
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
              , and{" "}
              <Link
                fade
                to="/vernon-janitorial-services/"
                className="text-link font-bold"
              >
                Vernon
              </Link>
              .
            </p>
          </header>
        </div>
      </section>

      <CityCTA
        heading="Commerce Janitorial Services: Reliable & Detailed"
        headingLevel="h2"
        subText="Experience the Long Beach Janitorial Commerce cleaning service difference. Tell us about your needs today!"
        cityBackground={data.cityCTA}
      />
      <WhyWeLove
        heading="Why We Love Commerce"
        subText="Once a 19th-century ranch, this city was eventually converted into an industrial area, and when leaders and residents banded together to encourage commerce, the city's name was born. We love the city of Commerce's rich history and ability to turn industrial land into lucrative commercial uses, like the Citadel Outlets that was once the site of a tire factory. We're honored to do our part to help maintain all the growing businesses in the area. Our Commerce janitorial professionals look forward to learning more about your industry's commercial cleaning needs."
        image={data.citySquareImage.childImageSharp.gatsbyImageData}
      />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage_FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage_TW.jpg" }
    ) {
      publicURL
    }
    heroFullWidthDesktop: file(
      relativePath: { eq: "home/1.0-hero-desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    heroFullWidthMobile: file(
      relativePath: { eq: "home/1.0-hero-mobile.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    introDesktop: file(relativePath: { eq: "home/2.0 Intro Desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    introMobile: file(relativePath: { eq: "home/2.0 Intro Mobile.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    cityCTA: file(
      relativePath: { eq: "repeating/cta/cities/CTA Commerce.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    citySquareImage: file(relativePath: { eq: "cities/Commerce.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
