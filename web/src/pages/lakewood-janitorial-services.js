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
        title="Janitorial Services in Lakewood, CA | Long Beach Janitorial"
        description="Commercial cleaning for Lakewood businesses, from retail centers to schools. EPA-registered disinfectants, licensed and insured team. Schedule a consultation."
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
                alt="Long Beach Janitorial team servicing a Lakewood commercial property."
                className="hidden md:block"
              />
              <GatsbyImage
                image={data.introMobile.childImageSharp.gatsbyImageData}
                alt="Long Beach Janitorial team servicing a Lakewood commercial property."
                className="md:hidden"
              />
            </div>
            <div className="order-1 md:order-2 md:col-span-7 md:col-end-13">
              <h1>Janitorial Services in Lakewood, CA</h1>
              <p>
                <Link
                  fade
                  to="/commercial-cleaning-company/"
                  className="text-link font-bold"
                >
                  Long Beach Janitorial
                </Link>{" "}
                (formerly National Janitorial Services) is a commercial cleaning
                company based in Long Beach that keeps Lakewood workplaces
                clean, compliant, and healthy. Our experienced, licensed, and
                insured team uses EPA-registered disinfectants and
                commercial-grade cleaning products, applied according to CDC
                guidance. We serve retail centers, schools, civic buildings, and
                offices throughout Lakewood, with more than 100 businesses
                served across Long Beach and the surrounding Gateway Cities.
                Whether your business needs regular preventative maintenance
                cleaning or a deep clean, we have the expertise to get the job
                done right.
              </p>
              <p className="mb-0">
                <button
                  type="button"
                  data-modal-open="modal-contact"
                  className="text-link font-bold underline"
                >
                  Schedule a 30 Minute Site Consultation
                </button>{" "}
                to walk through your Lakewood property with our team today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2>Services Offered in Lakewood</h2>
            <p className="mb-0">
              Long Beach Janitorial brings its full commercial cleaning lineup
              to Lakewood businesses. Each service below links to a full
              breakdown of what is included.
            </p>
          </header>
          <ul className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
            <li>
              <Link
                fade
                to="/office-cleaning-services/"
                className="text-link font-bold"
              >
                Office Cleaning
              </Link>
              : Daily, weekly, or custom-schedule cleaning for private offices
              and corporate suites.
            </li>
            <li>
              <Link
                fade
                to="/commercial-cleaning-company/"
                className="text-link font-bold"
              >
                Retail and Shopping Center Cleaning
              </Link>
              : Common-area and storefront cleaning built around customer
              traffic hours.
            </li>
            <li>
              <Link
                fade
                to="/medical-dental-office-cleaning/"
                className="text-link font-bold"
              >
                Medical and Dental Office Cleaning
              </Link>
              : EPA-registered disinfection protocols suited to healthcare and
              clinical spaces.
            </li>
            <li>
              <Link
                fade
                to="/hoa-cleaning-services/"
                className="text-link font-bold"
              >
                HOA and Property Management Cleaning
              </Link>
              : Common-area and shared-space cleaning for HOAs and managed
              properties.
            </li>
            <li>
              <Link
                fade
                to="/deep-cleaning-services/"
                className="text-link font-bold"
              >
                Deep Cleaning and Preventative Maintenance
              </Link>
              : One-time deep cleans or a recurring maintenance schedule.
            </li>
            <li>
              <Link
                fade
                to="/disinfection-services/"
                className="text-link font-bold"
              >
                Disinfection Services
              </Link>
              : Certified disinfection for exposure events, flu season, and
              high-touch environments.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2>Why Choose Us in Lakewood</h2>
          </header>
          <ul className="grid grid-cols-1 gap-y-8">
            <li>
              <strong>
                We use EPA-registered disinfectants on every visit, applied
                according to CDC guidance.
              </strong>{" "}
              Lakewood businesses in retail, education, and property management
              get effective disinfection, not just surface-level tidying.
            </li>
            <li>
              <strong>
                We match floor care to the floor, not to a generic schedule.
              </strong>{" "}
              Retail centers, school corridors, and civic lobbies each take
              different chemistry and different maintenance intervals. That is
              why our{" "}
              <Link
                fade
                to="/floor-stripping-services/"
                className="text-link font-bold"
              >
                floor stripping
              </Link>{" "}
              and{" "}
              <Link
                fade
                to="/floor-waxing-services/"
                className="text-link font-bold"
              >
                floor waxing
              </Link>{" "}
              work is quoted per property rather than sold as a package.
            </li>
            <li>
              <strong>Our team is experienced, licensed, and insured.</strong>{" "}
              Every person assigned to a Lakewood account carries the training
              and coverage a commercial property requires, on a retail
              storefront, a school facility, or a civic building.
            </li>
            <li>
              <strong>
                We offer Net 30 standard or Net 15 financed billing.
              </strong>{" "}
              A Lakewood property manager should not have to choose between cash
              flow and a clean building, so we build payment terms into the
              partnership.
            </li>
            <li>
              <strong>We are local, and that means accountability.</strong> Our
              office is in the Bixby Knolls area of Long Beach, a short drive
              from Lakewood. When something goes wrong at 6:00 AM, you are
              calling a local team, not a national dispatch line.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-6 max-w-3xl">
            <h2>Service Area: Lakewood and Surrounding Communities</h2>
          </header>
          <div className="max-w-4xl">
            <p>
              Long Beach Janitorial serves commercial properties throughout
              Lakewood, CA. We work with businesses across the Lakewood Center
              retail district at Lakewood Boulevard and Del Amo Boulevard. We
              also serve the South Street corridor, the Del Amo Boulevard
              corridor, and the Civic Center area around Lakewood City Hall on
              Clark Avenue. From our Long Beach base, we also extend service to
              nearby communities including Bellflower, Cerritos, Hawaiian
              Gardens, and the surrounding areas of Long Beach.
            </p>
            <p className="mb-0">
              If your property sits within our service area, our team can
              promptly schedule an on-site 30 Minute Site Consultation. We will
              walk through your facility with you, discuss your specific goals,
              and build your custom commercial cleaning plan together.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="mb-6 max-w-3xl">
            <h2>Local Knowledge: Cleaning for Lakewood's Business Mix</h2>
          </header>
          <div className="max-w-4xl">
            <p>
              Lakewood's commercial base is not one thing, and it does not take
              one cleaning plan.
            </p>
            <p>
              Retail sits at the center of it. Lakewood Center anchors a large
              share of the city's commercial footprint, and that concentration
              shapes how we schedule and staff a Lakewood account. A shopping
              center needs common-area and restroom cleaning timed around store
              hours and peak shopper traffic, not a generic after-hours-only
              window. With Lakewood Center entering a multi-year redevelopment,
              neighboring properties will also be working around active{" "}
              <Link
                fade
                to="/construction-cleaning-services/"
                className="text-link font-bold"
              >
                construction
              </Link>
              , which brings dust, debris, and phased tenant turnover.
            </p>
            <p>
              Lakewood's layout as a planned community means its commercial
              properties cluster along a handful of major corridors rather than
              spreading evenly across the city. That pattern lets us route our
              teams efficiently between accounts on the same corridor. Service
              stays consistent even for smaller Lakewood properties that a
              larger cleaning company might treat as a low-priority stop.
            </p>
            <p>
              Lakewood is also unusual in being served by four separate school
              districts: Long Beach Unified, Bellflower Unified, ABC Unified,
              and Paramount Unified. A schedule that works for one district's
              calendar and access protocol will not automatically work for the
              next. Our team keeps classrooms, administrative offices,
              cafeterias, restrooms, and{" "}
              <Link
                fade
                to="/school-cleaning-services/"
                className="text-link font-bold"
              >
                school
              </Link>{" "}
              gyms clean using EPA-registered disinfectants applied according to
              CDC guidance. Civic buildings carry their own standards and
              usually need cleaning coordinated around public office hours and
              scheduled community events.
            </p>
            <p>
              Lakewood's identity as a master-planned residential community also
              means many of its commercial corridors, particularly along Del Amo
              Boulevard and South Street, sit close to residential
              neighborhoods. We factor noise considerations and vehicle access
              into scheduling for these properties. A commercial cleaning team
              working near residential streets needs a different approach than
              one working in a purely industrial corridor.
            </p>
            <p className="mb-0">
              That standard is why clients stay with us. St. Joseph Church, a
              long-term client, trusted our team through COVID and has since,
              and we bring the same care to every Lakewood account. You can read
              more{" "}
              <Link fade to="/reviews/" className="text-link font-bold">
                client reviews
              </Link>{" "}
              here.
            </p>
          </div>
        </div>
      </section>

      <Testimonials headingLevel="h2" />

      <About className="mb-16 pt-16 md:mb-32 md:pt-32" headingLevel="h2" />

      <WhyUs className="pb-16 md:pb-32" headingLevel="h2" />

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-12 max-w-3xl">
            <h2>Frequently Asked Questions</h2>
          </header>
          <div className="grid max-w-4xl grid-cols-1 gap-y-10">
            <div>
              <h4 className="heading-six mb-2">
                How quickly can you start service for a Lakewood business?
              </h4>
              <p className="mb-0">
                Turnaround depends on the scope of your property and the service
                requested, and our onboarding process is highly responsive. For
                urgent needs, same-day{" "}
                <Link
                  fade
                  to="/disinfection-services/"
                  className="text-link font-bold"
                >
                  disinfection
                </Link>{" "}
                and deep cleaning is often available. One local law firm reached
                us after a staff member tested positive for COVID and had the
                full office disinfected the same day. For ongoing, scheduled
                janitorial services, we begin with a 30 Minute Site Consultation
                to meet you on-site, discuss your facility goals, and establish
                your customized cleaning plan.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Do you serve retail centers, or only offices and schools, in
                Lakewood?
              </h4>
              <p className="mb-0">
                We serve all commercial property types in Lakewood, including
                retail, office, medical, education, civic, and HOA-managed
                properties.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Can you schedule retail cleaning around store hours at a
                Lakewood shopping center?
              </h4>
              <p className="mb-0">
                Yes. We build cleaning schedules around your operating hours and
                customer traffic patterns rather than defaulting to a fixed
                after-hours window. For a property near Lakewood Center, that
                often means common-area cleaning early in the morning before
                shoppers arrive, with spot cleaning available during business
                hours for spills or high-traffic areas.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Are your cleaning products safe for school or medical facilities
                in Lakewood?
              </h4>
              <p className="mb-0">
                Yes. We use EPA-registered disinfectants suited to healthcare,
                clinical, and education environments, applied according to CDC
                guidance and the protocol each facility type requires.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Do you offer one-time deep cleaning, or only recurring service,
                for Lakewood properties?
              </h4>
              <p className="mb-0">
                We offer both. Many Lakewood accounts start with a one-time deep
                clean before moving to a recurring maintenance schedule, though
                either option is available on its own.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Is there a minimum property size or contract length to work with
                you in Lakewood?
              </h4>
              <p className="mb-0">
                No. We accommodate commercial facilities and offices of all
                sizes with customizable cleaning plans built around your
                operational goals. We do not lock clients into rigid,
                one-size-fits-all contracts. Instead, we build service
                partnerships and offer flexible monthly payment terms, including
                Standard Net 30 or Financed Net 15 billing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2>Serving Lakewood From Our Long Beach Servicing Office</h2>
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
              title="Map showing Long Beach Janitorial's servicing office at 144 W San Antonio Dr, Long Beach, serving Lakewood, CA"
              src="https://www.google.com/maps?q=144+W+San+Antonio+Dr,+Long+Beach,+CA+90807&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="mb-0 mt-4 text-sm text-gray-500">
              This is our primary servicing office for the Lakewood area, with
              Lakewood and the surrounding Gateway Cities communities included
              within our commercial service radius.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-32">
        <div className="container">
          <header className="max-w-4xl">
            <h2>Ready for a Cleaner, Healthier Lakewood Workplace?</h2>
            <p>
              A clean, healthy work environment starts with the right cleaning
              partner. Whether you manage a retail center, a school facility, a
              civic building, or an office in Lakewood, our team is ready to
              build a schedule that fits your property. Long Beach Janitorial
              provides commercial janitorial services in Lakewood, CA, on-time,
              on-budget, and on-point.
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
              .
            </p>
          </header>
        </div>
      </section>

      <CityCTA
        heading="Lakewood Janitorial Services: Reliable & Detailed"
        headingLevel="h2"
        subText="Experience the Long Beach Janitorial Lakewood cleaning service difference. Tell us about your needs today!
"
        cityBackground={data.cityCTA}
      />
      <WhyWeLove
        heading="Why We Love Lakewood"
        subText="From its gorgeous weather and proximity to the ocean to its vibrant nightlife and eclectic community, there is so much to love about Lakewood, California. Residents can frequent several delicious eateries and unique boutiques, spend the day at the Lakewood Equestrian Center, or even learn to skate over at The Rinks - Lakewood Ice; this city has something for everyone! The range of businesses in the city makes all feel welcome, and here at Long Beach Janitorial, we’re honored to help those welcoming businesses with their Lakewood janitorial needs."
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
      relativePath: { eq: "repeating/cta/cities/CTA Lakewood.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    citySquareImage: file(relativePath: { eq: "cities/Lakewood.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
