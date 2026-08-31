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
        title="Santa Fe Springs Janitorial Services | Long Beach Janitorial"
        description="Commercial cleaning for Santa Fe Springs warehouses and businesses. EPA-registered products, licensed and insured team. Schedule a 30 Minute Site Consultation."
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
                alt="Long Beach Janitorial team servicing a Santa Fe Springs commercial property."
                className="hidden md:block"
              />
              <GatsbyImage
                image={data.introMobile.childImageSharp.gatsbyImageData}
                alt="Long Beach Janitorial team servicing a Santa Fe Springs commercial property."
                className="md:hidden"
              />
            </div>
            <div className="order-1 md:order-2 md:col-span-7 md:col-end-13">
              <h1>Janitorial Services in Santa Fe Springs, CA</h1>
              <p>
                <Link
                  fade
                  to="/commercial-cleaning-company/"
                  className="text-link font-bold"
                >
                  Long Beach Janitorial
                </Link>{" "}
                (formerly National Janitorial Services) is a commercial cleaning
                company based in Long Beach that keeps Santa Fe Springs
                workplaces clean, compliant, and healthy. Our licensed and
                insured team uses EPA-registered disinfectants and high-caliber
                cleaning products to serve warehouses, distribution centers,
                light manufacturing plants, and office space throughout Santa Fe
                Springs. More than 100 businesses across Long Beach and the
                Gateway Cities count on us for recurring maintenance cleaning
                and one-time deep cleans.
              </p>
              <p className="mb-0">
                <button
                  type="button"
                  data-modal-open="modal-contact"
                  className="text-link font-bold underline"
                >
                  Schedule a 30 Minute Site Consultation
                </button>{" "}
                to walk through your Santa Fe Springs facility with our team
                today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2>Services Offered in Santa Fe Springs</h2>
            <p className="mb-0">
              We bring our full commercial cleaning lineup to Santa Fe Springs
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
              : Stripping, sealing, and waxing built for high-traffic warehouse
              and distribution floors.
            </li>
            <li>
              <Link
                fade
                to="/commercial-cleaning-company/"
                className="text-link font-bold"
              >
                Commercial Cleaning
              </Link>
              : Full facility cleaning and management for warehouses, plants,
              and industrial workspaces.
            </li>
            <li>
              <Link
                fade
                to="/office-cleaning-services/"
                className="text-link font-bold"
              >
                Office Cleaning
              </Link>
              : Daily, weekly, or custom-schedule cleaning for the
              administrative space attached to industrial parks.
            </li>
            <li>
              <Link
                fade
                to="/medical-dental-office-cleaning/"
                className="text-link font-bold"
              >
                Medical and Dental Office Cleaning
              </Link>
              : EPA-registered disinfection applied according to CDC guidelines
              for clinical and healthcare-adjacent spaces.
            </li>
            <li>
              <Link
                fade
                to="/deep-cleaning-services/"
                className="text-link font-bold"
              >
                Deep Cleaning
              </Link>
              : One-time deep cleans, repeated as often as your facility needs
              them.
            </li>
            <li>
              <Link
                fade
                to="/disinfection-services/"
                className="text-link font-bold"
              >
                Disinfectant Services
              </Link>
              : Certified disinfection for shared surfaces, break rooms, and
              high-touch points.
            </li>
            <li>
              <Link
                fade
                to="/pressure-washing-services/"
                className="text-link font-bold"
              >
                Pressure Washing
              </Link>
              : Loading docks, truck courts, exterior walls, and walkways.
            </li>
            <li>
              <Link
                fade
                to="/day-porter-services/"
                className="text-link font-bold"
              >
                Day Porter Services
              </Link>
              : On-site coverage during operating hours for facilities that
              cannot wait for a night crew.
            </li>
            <li>
              <Link
                fade
                to="/window-cleaning-services/"
                className="text-link font-bold"
              >
                Window Cleaning
              </Link>
              : Interior and exterior glass for offices and showroom space.
            </li>
          </ul>
          <div className="mt-10 max-w-3xl">
            <h3>Certified Disinfection for Santa Fe Springs Facilities</h3>
            <p className="mb-0">
              Our team applies EPA-registered agents, including Multi-Clean
              Chlorinated Disinfecting Tablets, in line with CDC guidance. This
              protocol helps reduce pathogen risk across break rooms, locker
              rooms, shared equipment, and office areas. Disinfection is
              available as a standalone service or built into your recurring
              schedule.{" "}
              <Link
                fade
                to="/disinfection-services/"
                className="text-link font-bold"
              >
                Learn more about our disinfectant services
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2>Why Choose Us in Santa Fe Springs</h2>
          </header>
          <ul className="grid grid-cols-1 gap-y-8">
            <li>
              <strong>
                Long Beach Janitorial matches floor care to how hard your floors
                actually work.
              </strong>{" "}
              Warehouse floors near the Telegraph Road and Carmenita Road
              corridors take constant pallet-jack, forklift, and foot traffic.
              We set the stripping and waxing interval around each floor's
              surface and traffic load, so you get longer floor life instead of
              a shine that wears off in a shift.
            </li>
            <li>
              <strong>
                Long Beach Janitorial uses EPA-registered disinfectants on every
                visit.
              </strong>{" "}
              We apply them in line with CDC guidance, not as surface-level
              tidying. That matters for manufacturing, logistics, and
              healthcare-adjacent spaces.
            </li>
            <li>
              <strong>
                Long Beach Janitorial schedules around multi-shift operations.
              </strong>{" "}
              Many Santa Fe Springs warehouses run two or three shifts. We build
              cleaning windows into the gaps between shift changes, so you never
              have to choose between production time and a clean floor.
            </li>
            <li>
              <strong>Our team is experienced, licensed, and insured.</strong>{" "}
              Every technician assigned to a Santa Fe Springs account is
              licensed and insured for commercial and industrial work, whether
              the site is a distribution center, a manufacturing plant, or an
              attached office suite.
            </li>
            <li>
              <strong>
                Long Beach Janitorial treats preventative maintenance as the
                default.
              </strong>{" "}
              A recurring schedule catches equipment residue, dust buildup, and
              floor wear before it turns into a bigger repair. We set
              maintenance intervals around how your facility actually runs, not
              a fixed calendar.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-6 max-w-3xl">
            <h2>Service Area: Santa Fe Springs and Surrounding Communities</h2>
          </header>
          <div className="max-w-4xl">
            <p>
              We serve businesses throughout Santa Fe Springs, including the
              Telegraph Road and Carmenita Road industrial corridors, the area
              around the I-5 and I-605 interchange, the Alondra Boulevard
              industrial pocket, and the Norwalk Boulevard commercial corridor.
            </p>
            <p>
              From our Long Beach base, we also serve nearby Gateway Cities
              communities. That includes{" "}
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
              , along with Norwalk, Whittier, and La Mirada.
            </p>
            <p className="mb-0">
              If your property sits within our service radius, our team can
              schedule an on-site 30 Minute Site Consultation. We will walk your
              facility, discuss your goals, and build a cleaning plan around
              them.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="mb-6 max-w-3xl">
            <h2>
              Local Knowledge: Cleaning for Santa Fe Springs' Industrial Base
            </h2>
          </header>
          <div className="max-w-4xl">
            <p>
              Santa Fe Springs is the densest industrial hub in Los Angeles
              County, in the words of the{" "}
              <a
                href="https://www.santafesprings.gov/213/Economic-Development"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link font-bold"
              >
                city's own economic development office
              </a>
              . Roughly 8.9 square miles hold more than 3,000 businesses and
              about 55 million square feet of industrial and manufacturing
              space, supporting a daytime workforce of over 30,000 people.
              Retail and standalone office space make up a much smaller share
              than in neighboring cities.
            </p>
            <p>
              That concentration is regional, not just local. Santa Fe Springs,
              Commerce, Vernon, and Industry together occupy under 1 percent of
              Los Angeles County's land but hold more than 24 percent of its
              industrial square footage. Direct access to the I-5, I-605, and
              I-105, plus proximity to the Ports of Los Angeles and Long Beach,
              is why logistics and distribution tenants cluster here.
            </p>
            <p className="mb-0">
              That industrial density changes what a cleaning plan needs to
              cover. A cleaning company serving Santa Fe Springs needs an
              industrial-first playbook, not a retail or office template with
              the city name swapped in. We build our service plans around the
              warehouse and manufacturing reality of this city rather than
              treating it like a generic commercial account.
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
                How quickly can you start service for a Santa Fe Springs
                facility?
              </h4>
              <p className="mb-0">
                Turnaround depends on the scope of your property and the
                specific services requested. We have a track record of same-day
                response on urgent deep cleaning and disinfection requests. One
                law firm client needed its entire office disinfected after a
                staff COVID diagnosis, and our team was on site the same day.
                For ongoing scheduled service, we start with a 30 Minute Site
                Consultation to meet you on-site and build your cleaning plan.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Can you clean around a two- or three-shift warehouse schedule in
                Santa Fe Springs?
              </h4>
              <p className="mb-0">
                Yes. We build cleaning windows into the gaps between shift
                changes rather than defaulting to a fixed overnight slot, so
                cleaning does not interrupt loading dock or production activity.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Do you clean the office space attached to a warehouse or
                manufacturing facility?
              </h4>
              <p className="mb-0">
                Yes. We staff and schedule attached administrative offices
                separately from the warehouse floor, since each space needs a
                different cleaning approach.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Is your floor care approach different for a warehouse than for a
                retail or office property?
              </h4>
              <p className="mb-0">
                Yes. Warehouse and distribution floors see constant pallet-jack
                and forklift traffic. That calls for a stripping and waxing
                schedule built around that traffic load rather than standard
                floor cleaning.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Do you offer one-time deep cleaning, or only recurring service,
                for Santa Fe Springs facilities?
              </h4>
              <p className="mb-0">
                We offer both. Many industrial accounts start with a one-time
                deep clean before moving to a recurring maintenance schedule,
                though either option is available on its own.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Is there a minimum facility size or contract length to work with
                you in Santa Fe Springs?
              </h4>
              <p className="mb-0">
                We accommodate commercial facilities and offices of all sizes.
                We do not lock you into rigid, one-size-fits-all contracts.
                Instead, we partner with you on a customized cleaning plan and
                offer flexible Standard (Net 30) or Financed (Net 15) monthly
                billing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyUs className="py-16 md:py-32" headingLevel="h2" />

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2>Serving Santa Fe Springs From Our Long Beach Headquarters</h2>
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
              title="Map showing Long Beach Janitorial at 144 W San Antonio Dr, Long Beach, serving Santa Fe Springs"
              src="https://www.google.com/maps?q=144+W+San+Antonio+Dr,+Long+Beach,+CA+90807&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="mb-0 mt-4 text-sm text-gray-500">
              This is our primary servicing office for the Santa Fe Springs
              area, with Santa Fe Springs and the surrounding Gateway Cities
              included within our commercial service radius.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="max-w-4xl">
            <h2>Ready for a Cleaner, Healthier Santa Fe Springs Facility?</h2>
            <p>
              A clean, healthy work environment starts with the right cleaning
              partner. Whether you operate a warehouse, a distribution center, a
              manufacturing plant, or an office in Santa Fe Springs, our team is
              ready to build a schedule that fits your facility.
            </p>
            <p>
              More than 100 businesses across Long Beach and the Gateway Cities
              count on our licensed and insured team to be on-time, on-budget,
              and on-point.
            </p>
            <ButtonSolid
              as="button"
              modal="modal-contact"
              text="Get a Free Estimate"
              className="mb-0"
            />
          </header>
        </div>
      </section>

      <CityCTA
        heading="Santa Fe Springs Janitorial Services: Reliable & Detailed"
        headingLevel="h2"
        subText="Experience the Long Beach Janitorial Santa Fe Springs cleaning service difference. Tell us about your needs today!"
        cityBackground={data.cityCTA}
      />
      <WhyWeLove
        heading="Why We Love Santa Fe Springs"
        subText="From Heritage Park and the Hathaway Ranch and Oil Museum to the Santa Fe Swap Meet, nearly year-round sunshine, and charming architecture, there's so much to love about Santa Fe Springs, California. Businesses in the area work hard to provide residents and visitors with unforgettable experiences and services. Here at Long Beach Janitorial, we offer that same level of care to all companies in the area. Working across various industries, our professional Santa Fe Springs janitorial company assists with businesses' maintenance and sanitation needs, allowing them to focus on serving this beautiful community."
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
      relativePath: { eq: "repeating/cta/cities/CTA Santa Fe.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    citySquareImage: file(relativePath: { eq: "cities/Santa Fe.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
