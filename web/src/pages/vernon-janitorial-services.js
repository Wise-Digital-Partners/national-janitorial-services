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
        title="Janitorial Services in Vernon, CA | Long Beach Janitorial"
        description="Commercial cleaning for Vernon warehouses, cold storage, and food plants. EPA-registered products, CDC-aligned protocols, licensed and insured team."
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
                alt="Long Beach Janitorial team servicing a Vernon industrial facility."
                className="hidden md:block"
              />
              <GatsbyImage
                image={data.introMobile.childImageSharp.gatsbyImageData}
                alt="Long Beach Janitorial team servicing a Vernon industrial facility."
                className="md:hidden"
              />
            </div>
            <div className="order-1 md:order-2 md:col-span-7 md:col-end-13">
              <h1>Commercial Cleaning & Janitorial Services in Vernon, CA</h1>
              <p>
                <Link
                  fade
                  to="/commercial-cleaning-company/"
                  className="text-link font-bold"
                >
                  Long Beach Janitorial
                </Link>{" "}
                (formerly National Janitorial Services) brings high-caliber
                commercial cleaning and disinfection to the industrial core of
                Vernon, CA. With more than 100 businesses served across Long
                Beach and the surrounding cities, we bring an established
                operation to Vernon accounts. Our licensed and insured team uses
                EPA-registered disinfectants and professional-grade cleaning
                products. We serve warehouses, distribution centers, cold
                storage sites, and food and beverage processing facilities
                throughout the city. Whether your facility needs regular
                preventative maintenance cleaning or a deep clean, we have the
                expertise to get the job done right.
              </p>
              <p>
                Looking for our primary commercial cleaning services in Long
                Beach?{" "}
                <Link
                  fade
                  to="/commercial-cleaning-company/"
                  className="text-link font-bold"
                >
                  Visit our main location page.
                </Link>
              </p>
              <p className="mb-0">
                <button
                  type="button"
                  data-modal-open="modal-contact"
                  className="text-link font-bold underline"
                >
                  Schedule a 30 Minute Site Consultation
                </button>{" "}
                to walk through your Vernon facility with our team today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2>Services Offered in Vernon</h2>
            <p className="mb-0">
              We bring our full commercial cleaning lineup to Vernon businesses.
              Each service below links to a full breakdown of what is included.
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
              and distribution floors, matched to each floor type.
            </li>
            <li>
              <Link
                fade
                to="/commercial-cleaning-company/"
                className="text-link font-bold"
              >
                Commercial and Industrial Facility Cleaning
              </Link>
              : Full-facility cleaning for warehouses, distribution centers, and
              cold storage sites, including sanitation-focused protocols for
              food and beverage processing environments.
            </li>
            <li>
              <Link
                fade
                to="/disinfection-services/"
                className="text-link font-bold"
              >
                Disinfection Services
              </Link>
              : EPA-registered disinfectants applied according to CDC guidance,
              on a schedule built around your production cycle.
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
              administrative space attached to Vernon's industrial parks.
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
                to="/day-porter-services/"
                className="text-link font-bold"
              >
                Day Porter Services
              </Link>{" "}
              and{" "}
              <Link
                fade
                to="/pressure-washing-services/"
                className="text-link font-bold"
              >
                Pressure Washing
              </Link>
              : On-site daytime coverage for multi-shift facilities, plus
              exterior and loading dock washdowns.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2>Why Choose Us in Vernon</h2>
          </header>
          <ul className="grid grid-cols-1 gap-y-8">
            <li>
              <strong>
                Long Beach Janitorial matches floor care to how hard your floors
                actually work.
              </strong>{" "}
              Facilities along the Santa Fe Avenue and Soto Street corridors see
              constant pallet-jack, forklift, and foot traffic. We set the
              stripping and waxing interval around each floor's surface and
              traffic load. Vernon facility managers get longer floor life
              instead of a shine that wears off in a shift.
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
                on every visit, applied according to CDC guidance.
              </strong>{" "}
              Vernon's concentration of food and beverage processing and cold
              storage makes consistent, effective disinfection non-negotiable.
              For specialized disinfection work we use Multi-Clean Chlorinated
              Disinfecting Tablets, matched to the surfaces and frequency each
              facility requires.
            </li>
            <li>
              <strong>
                We schedule around multi-shift operations, not against them.
              </strong>{" "}
              Many Vernon facilities run around the clock. We build cleaning
              windows into the gaps between shift changes. Nobody has to choose
              between production time and a clean floor, and the work stays
              on-time, on-budget, and on-point.
            </li>
            <li>
              <strong>Our team is experienced, licensed, and insured.</strong>{" "}
              Every technician assigned to a Vernon account carries the training
              and insurance coverage a commercial or industrial property
              requires, whether the site is a warehouse, a cold storage
              facility, a food or beverage plant, or an attached office suite.
            </li>
            <li>
              <strong>
                We treat preventative maintenance as the default, not the
                exception.
              </strong>{" "}
              A recurring cleaning schedule catches equipment residue, dust
              buildup, and sanitation gaps before they become a bigger problem.
              That matters for Vernon facilities running near-continuous
              operations. We build maintenance intervals around each facility's
              actual usage pattern rather than a one-size-fits-all calendar.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-6 max-w-3xl">
            <h2>Service Area: Vernon and Surrounding Communities</h2>
          </header>
          <div className="max-w-4xl">
            <p>
              We serve businesses throughout Vernon, including the Vernon
              industrial core, the Santa Fe Avenue corridor, and the Soto Street
              corridor. From our Long Beach base, we also extend service to
              nearby communities including{" "}
              <Link
                fade
                to="/commerce-janitorial-services/"
                className="text-link font-bold"
              >
                Commerce
              </Link>
              , Huntington Park, Maywood, Bell, and the Boyle Heights and Arts
              District areas of Los Angeles.
            </p>
            <p>
              Because Vernon has so little retail or standard commercial space,
              nearly every account here is a warehouse, a distribution facility,
              a cold storage site, or a food or beverage plant. That is
              different from{" "}
              <Link
                fade
                to="/downey-janitorial-services/"
                className="text-link font-bold"
              >
                Downey
              </Link>{" "}
              or{" "}
              <Link
                fade
                to="/lakewood-janitorial-services/"
                className="text-link font-bold"
              >
                Lakewood
              </Link>
              , where our team splits time across retail, office, and civic
              accounts. In Vernon, our scheduling and staffing decisions are
              built almost entirely around industrial and food-facility needs.
            </p>
            <p className="mb-0">
              If your property sits within our service area, we can schedule an
              on-site 30 Minute Site Consultation. We will walk your facility
              with you, evaluate your goals, and build a customized commercial
              cleaning plan around them.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="mb-6 max-w-3xl">
            <h2>Local Knowledge: Cleaning for Vernon's Industrial Core</h2>
          </header>
          <div className="max-w-4xl">
            <p>
              Vernon stands apart from its neighboring cities in one clear way.
              It is almost entirely zoned for industrial and commercial use,
              with one of the smallest residential populations of any
              incorporated city in Los Angeles County. Nearly every property
              here is a facility, not a storefront or an office building
              surrounded by homes. More than 1,800 businesses operate inside
              roughly five square miles, which is dense enough that we can route
              our team efficiently between accounts and keep service consistent
              for facilities of any size.
            </p>
            <p>
              Vernon also runs its own municipal Health Department rather than
              relying on the county, so food facilities here are inspected by
              city staff. Our sanitation protocols support the documentation and
              surface standards inspectors look for.
            </p>
            <p>
              Food and beverage processing is a significant share of that
              facility base, and it carries sanitation standards well above
              general warehouse cleaning. Food processing work means production
              surfaces, floor drains, equipment bases, and washdown areas, on a
              schedule tied to each plant's production cycle. Our licensed and
              insured team uses EPA-registered disinfectants applied according
              to CDC guidance, and we staff these accounts with cleaners trained
              on that distinction.
            </p>
            <p>
              Cold storage adds a third set of problems. Temperature-controlled
              rooms collect condensate, freezer floors hold traction risks that
              a standard mop program makes worse, and the wrong cleaning
              chemistry behaves differently below freezing. We adjust product
              selection and dwell times for these environments rather than
              running the same plan we would run in an ambient warehouse.
            </p>
            <p className="mb-0">
              Vernon's rail and trucking infrastructure supports a dense
              concentration of warehouse and distribution facilities alongside
              that food base. Those floors accumulate dust, packaging debris,
              and equipment residue from constant pallet-jack and forklift
              traffic. The result is that a cleaning company serving Vernon
              needs distinct playbooks under one roof: a sanitation-first
              approach for food and cold storage facilities, and an industrial
              floor-care approach for general warehouse and distribution space.
              We build service plans around which category a given Vernon
              facility falls into rather than applying one generic industrial
              template across the account.
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
                How quickly can you start service for a Vernon facility?
              </h4>
              <p className="mb-0">
                Turnaround depends on the scope of your property and the service
                requested. Our onboarding is responsive and tailored to the size
                and scope of your facility. Same-day availability for urgent
                disinfection is something we have delivered before. One law firm
                client called after a staff COVID diagnosis and had the office
                sprayed down in under an hour. For regular recurring services,
                we begin with a 30 Minute Site Consultation to evaluate your
                space and establish your customized cleaning plan.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Do you clean food processing and cold storage facilities in
                Vernon, or only general warehouses?
              </h4>
              <p className="mb-0">
                We clean all three. Food processing and cold storage facilities
                receive a sanitation-focused cleaning protocol distinct from our
                general warehouse and{" "}
                <Link
                  fade
                  to="/floor-stripping-services/"
                  className="text-link font-bold"
                >
                  floor care
                </Link>{" "}
                service.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Can you clean around a 24-hour or multi-shift operation in
                Vernon?
              </h4>
              <p className="mb-0">
                Yes. We build cleaning windows into the gaps between shift
                changes rather than defaulting to a fixed overnight slot, so
                cleaning does not interrupt production or loading dock activity.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Are your cleaning products appropriate for food handling
                environments?
              </h4>
              <p className="mb-0">
                Yes. We use EPA-registered disinfectants suited to food
                processing and food-handling environments, including Multi-Clean
                Chlorinated Disinfecting Tablets, applied according to CDC
                guidance and the sanitation protocol each facility type
                requires.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Do you offer one-time deep cleaning, or only recurring service,
                for Vernon facilities?
              </h4>
              <p className="mb-0">
                We offer both. Many Vernon accounts start with a{" "}
                <Link
                  fade
                  to="/deep-cleaning-services/"
                  className="text-link font-bold"
                >
                  one-time deep clean
                </Link>{" "}
                before moving to a recurring maintenance schedule, though either
                option is available on its own.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Is there a minimum facility size or contract length to work with
                you in Vernon?
              </h4>
              <p className="mb-0">
                We accommodate commercial facilities and offices of any size.
                Rather than locking you into rigid, one-size-fits-all contracts,
                we focus on establishing a true service partnership with a
                customizable cleaning plan. To fit your operational budget, we
                offer flexible monthly billing choices, including Standard Net
                30 or Financed Net 15 terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyUs className="py-16 md:py-32" headingLevel="h2" />

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2>Serving Vernon From Our Long Beach Headquarters</h2>
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
              title="Map showing Long Beach Janitorial at 144 W San Antonio Dr, Long Beach, serving Vernon"
              src="https://www.google.com/maps?q=144+W+San+Antonio+Dr,+Long+Beach,+CA+90807&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="mb-0 mt-4 text-sm text-gray-500">
              This is our primary servicing office for the Vernon area, and
              Vernon and the surrounding communities are inside our commercial
              service area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="max-w-4xl">
            <h2>Ready for a Cleaner, Healthier Vernon Facility?</h2>
            <p>
              A clean, healthy work environment starts with the right cleaning
              partner. Whether you operate a warehouse, a cold storage facility,
              a food or beverage plant, or an office in Vernon, our team is
              ready to build a schedule that fits your business.
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
                to="/commerce-janitorial-services/"
                className="text-link font-bold"
              >
                Commerce
              </Link>
              .
            </p>
          </header>
        </div>
      </section>

      <CityCTA
        heading="Vernon Janitorial Services: Reliable & Detailed"
        headingLevel="h2"
        subText="Experience the Long Beach Janitorial Vernon cleaning service difference. Tell us about your needs today!"
        cityBackground={data.cityCTA}
      />
      <WhyWeLove
        heading="Why We Love Vernon"
        subText="As the nearest separate city to downtown Los Angeles and founded in 1905 as the first exclusively industrial city in the Southwestern United States, Vernon is an important economic region. Our Long Beach Janitorial team is honored to help the more than 1,800 businesses operating out of this city maintain their building’s cleanliness. Thanks to our expertise across various industries, we can ensure Vernon companies have all the sanitization support they need."
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
    cityCTA: file(relativePath: { eq: "repeating/cta/cities/CTA Vernon.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    citySquareImage: file(relativePath: { eq: "cities/Vernon.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
