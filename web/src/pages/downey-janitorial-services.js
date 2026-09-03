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
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonGhost from "../components/Button/ButtonGhost";
import HeroSplit from "../../src/components/Hero/HeroSplit";
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
    <Layout navigationStyle="standard" headerLinkColor="" headerHasBorder={false}>
      <SearchEngineOptimization
        title="Janitorial Services in Downey, CA | Long Beach Janitorial"
        description="Commercial cleaning for Downey offices, medical buildings, HOAs and warehouses. EPA-registered disinfectants, CDC-aligned protocols, licensed and insured."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <HeroFullWidth
        backgroundImages={heroFullWidthImages}
        padding="pt-40 md:pt-64 pb-18 md:pb-64 pr-6 md:mr-0"
        textAlignment="text-left"
        textMaxWidth="max-w-4xl"
        backgroundPosition="50% 35%"
        alt="Long Beach Janitorial team cleaning a Downey commercial office suite."
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
                alt="Long Beach Janitorial team cleaning a Downey commercial office suite."
                className="hidden md:block"
              />
              <GatsbyImage
                image={data.introMobile.childImageSharp.gatsbyImageData}
                alt="Long Beach Janitorial team cleaning a Downey commercial office suite."
                className="md:hidden"
              />
            </div>
            <div className="order-1 md:order-2 md:col-span-7 md:col-end-13">
              <h1>Janitorial Services in Downey, CA</h1>
              <p>
                <Link fade to="/commercial-cleaning-company/" className="text-link font-bold">
                  Long Beach Janitorial
                </Link>{" "}
                (formerly National Janitorial Services) is a commercial cleaning company that keeps
                Downey workplaces clean, healthy, and compliant. Our licensed and insured team uses
                EPA-registered disinfectants and professional cleaning products to serve office
                parks, warehouses, medical buildings, and HOAs throughout the Downey area. Whether
                your business needs regular preventative maintenance cleaning or a deep clean, we
                have the expertise to get the job done right.
              </p>
              <p className="mb-0">
                <button
                  type="button"
                  data-modal-open="modal-contact"
                  className="text-link font-bold underline"
                >
                  Schedule a 30 Minute Site Consultation
                </button>{" "}
                to walk through your Downey property with our team today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2>Services Offered in Downey</h2>
            <p className="mb-0">
              We bring our full commercial cleaning lineup to Downey businesses. Each service below
              links to a full breakdown of what is included.
            </p>
          </header>
          <ul className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
            <li>
              <Link fade to="/commercial-office-cleaning/" className="text-link font-bold">
                Office Cleaning
              </Link>
              : Daily, weekly, or custom-schedule cleaning for private offices and corporate suites.
            </li>
            <li>
              <Link fade to="/medical-dental-office-cleaning/" className="text-link font-bold">
                Medical Facility Cleaning
              </Link>
              : EPA-registered disinfection protocols applied in line with CDC guidance for
              healthcare and clinical spaces.
            </li>
            <li>
              <Link fade to="/hoa-cleaning-services/" className="text-link font-bold">
                HOA and Property Management Cleaning
              </Link>
              : Common-area and shared-space cleaning for HOAs and managed properties.
            </li>
            <li>
              <Link fade to="/commercial-cleaning-company/" className="text-link font-bold">
                Warehouse and Light Industrial Cleaning
              </Link>
              : General maintenance and floor care for logistics and industrial spaces.
            </li>
            <li className="md:col-span-2">
              <Link fade to="/deep-cleaning-services/" className="text-link font-bold">
                Deep Cleaning and Preventative Maintenance
              </Link>
              : One-time deep cleans or a recurring maintenance schedule.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2>Why Choose Us in Downey</h2>
          </header>
          <ul className="grid grid-cols-1 gap-y-8">
            <li>
              <strong>We use EPA-registered disinfectants on every visit.</strong> Downey businesses
              in healthcare, education, and property management trust us because our products meet
              EPA registration standards and our team applies them according to CDC guidelines. That
              is disinfection, not surface-level tidying.{" "}
              <Link fade to="/disinfection-services/" className="text-link font-bold">
                See our disinfection services
              </Link>
              .
            </li>
            <li>
              <strong>We match floor care to the floor, not to a calendar.</strong> Downey's
              industrial and flex properties see heavy foot and equipment traffic. Their floors take
              a different kind of beating than an office suite does. Sealed concrete in a warehouse,
              VCT in an office suite, and tile in a medical corridor each require different
              products, methods, and intervals. We set the plan around what the surface is and how
              hard it gets used, so Downey property managers get longer floor life instead of a
              quick shine that fades in a week.
            </li>
            <li>
              <strong>Our team is licensed and insured.</strong> Every member of the team assigned
              to a Downey account carries the training and coverage a commercial property requires,
              whether the site is a private office suite or a multi-tenant medical building.
            </li>
            <li>
              <strong>
                We serve more than 100 businesses across Long Beach and the Gateway Cities.
              </strong>{" "}
              We work with healthcare, education, and property management accounts throughout the
              region. Downey accounts get the same protocols, accountability, and team.
            </li>
            <li>
              <strong>We treat preventative maintenance as the default, not the exception.</strong>{" "}
              A recurring schedule catches wear, buildup, and sanitation issues before they become a
              bigger problem. That matters for Downey properties with steady tenant or customer
              traffic year-round. We build maintenance intervals around each property's actual usage
              pattern rather than a one-size-fits-all calendar.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-6 max-w-3xl">
            <h2>Service Area: Downey and Surrounding Communities</h2>
          </header>
          <div className="max-w-4xl">
            <p>
              We service commercial properties across all of Downey. That includes the Downtown
              Downey business and dining district, the Firestone Boulevard retail corridor, the
              Imperial Highway commercial corridor, and the Stonewood Center area.
            </p>
            <p>
              Downey sits at the center of our Gateway Cities service footprint, alongside our{" "}
              <Link fade to="/lakewood-janitorial-services/" className="text-link font-bold">
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
              <Link fade to="/commerce-janitorial-services/" className="text-link font-bold">
                Commerce
              </Link>
              , and{" "}
              <Link fade to="/vernon-janitorial-services/" className="text-link font-bold">
                Vernon
              </Link>{" "}
              accounts.
            </p>
            <p className="mb-0">
              If your property sits within this service radius, our team can promptly schedule your
              initial, on-site 30 Minute Site Consultation. We will walk through your facility with
              you to evaluate your specific goals, discuss your janitorial needs, and work closely
              with you to establish a customizable commercial cleaning plan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="mb-6 max-w-3xl">
            <h2>Local Knowledge: Cleaning for Downey's Business Mix</h2>
          </header>
          <div className="max-w-4xl">
            <p>
              Downey needs more than one cleaning playbook. The city's commercial landscape mixes
              light industrial and logistics space, retail and dining along Firestone Boulevard, and
              a healthcare cluster that anchors a large share of its professional office space. That
              mix changes how we schedule and staff a Downey account.
            </p>
            <p>
              A warehouse or distribution property needs a different cleaning cadence than a retail
              storefront in Downtown Downey. Industrial floors accumulate dust, debris, and
              equipment residue that call for specific chemistry and application steps. A retail or
              office property in the downtown core needs cleaning scheduled around customer and
              foot-traffic hours instead of shift changes.
            </p>
            <p>
              Downey sits close to the I-5, I-605, I-710, and I-105 interchange, and industrial
              properties there often run multiple shifts. We build cleaning windows that do not
              interrupt operations. That means coordinating around loading dock activity and shift
              changes rather than defaulting to a generic after-hours slot. As a fully trained,
              licensed, and insured commercial cleaning partner, our team is equipped to align
              seamlessly with your facility's strict safety protocols and shift schedules.
            </p>
            <p>
              Downey's healthcare cluster runs along Imperial Highway, where Kaiser Permanente
              Downey Medical Center and Rancho Los Amigos National Rehabilitation Center sit within
              two miles of each other. PIH Health Downey Hospital anchors the Brookshire Avenue side
              near downtown. The medical and professional office buildings that grow up around
              hospitals like these carry clinical-adjacent requirements. They need EPA-registered
              disinfection applied according to CDC guidance every day, not only during a periodic
              deep clean, because patient and staff safety depends on daily attention to high-touch
              surfaces. We staff these accounts with certified experts trained specifically on
              healthcare-grade disinfection, distinct from the team assigned to general office
              accounts.
            </p>
            <p className="mb-0">
              One cleaning company serving Downey needs more than one playbook. An industrial
              property near the freeway interchange, a retail storefront in the Downtown Downey
              core, and a medical office along Imperial Highway each call for a different service
              plan. We build one for each rather than applying a generic template across the city.
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
                How quickly can you start service for a Downey business?
              </h4>
              <p className="mb-0">
                Turnaround depends on the scope of your property and the service requested. For
                urgent sanitization needs, we have a proven track record of providing same-day
                availability for emergency deep cleaning and disinfection. For ongoing, scheduled
                janitorial services, we begin with a 30 Minute Site Consultation to evaluate your
                space and quickly establish your customized cleaning plan.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Do you serve retail and dining properties in Downtown Downey, or only offices and
                industrial sites?
              </h4>
              <p className="mb-0">
                We serve all commercial property types in Downey, including retail, dining, office,
                medical, industrial, and HOA-managed properties.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Can you schedule cleaning around shift changes at a Downey warehouse or distribution
                property?
              </h4>
              <p className="mb-0">
                Yes. We build cleaning schedules around your operating hours and shift patterns
                rather than defaulting to a fixed after-hours window.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Are your cleaning products safe for medical or healthcare facilities in Downey?
              </h4>
              <p className="mb-0">
                Yes. We use EPA-registered disinfectants suited to healthcare and clinical
                environments, applied according to CDC guidance and the protocol each facility type
                requires.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Do you offer one-time deep cleaning, or only recurring service, for Downey
                properties?
              </h4>
              <p className="mb-0">
                We offer both. Many Downey accounts start with a one-time deep clean before moving
                to a recurring maintenance schedule, though either option is available on its own.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Is there a minimum property size or contract length to work with you in Downey?
              </h4>
              <p className="mb-0">
                We proudly accommodate commercial facilities and offices of all sizes, big or small.
                Rather than locking you into rigid, one-size-fits-all contracts, we focus on a true
                service partnership built around your unique budget and operational needs. To make
                onboarding as seamless as possible, we offer a choice of flexible payment terms,
                including Standard Net 30 or Financed Net 15 monthly billing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2>Serving Downey From Our Long Beach Headquarters</h2>
            <p>
              Long Beach Janitorial
              <br />
              144 W San Antonio Dr
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
              title="Map showing Long Beach Janitorial headquarters at 144 W San Antonio Dr, Long Beach, serving Downey, CA"
              src="https://www.google.com/maps?q=144+W+San+Antonio+Dr,+Long+Beach,+CA+90807&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="mb-0 mt-4 text-sm text-gray-500">
              This is our servicing office for the Downey area. Downey falls within our regular
              service radius from this location.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-32">
        <div className="container">
          <header className="max-w-4xl">
            <h2>Ready for a Cleaner, Healthier Downey Workplace?</h2>
            <p>
              A clean, healthy work environment starts with the right cleaning partner. We are in
              the partnership game, not the price game. A Downey account is a long-term commitment
              to your property, your tenants, and your team.
            </p>
            <p>
              Whether you manage an office suite, a medical building, an HOA, or a warehouse in
              Downey, our team is ready to build a schedule that fits your property.
            </p>
            <ButtonSolid
              as="button"
              modal="modal-contact"
              text="Get a Free Estimate"
              className="mb-8"
            />
            <p className="mb-0">
              Outside Downey? We also serve{" "}
              <Link fade to="/lakewood-janitorial-services/" className="text-link font-bold">
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
              <Link fade to="/commerce-janitorial-services/" className="text-link font-bold">
                Commerce
              </Link>
              , and{" "}
              <Link fade to="/vernon-janitorial-services/" className="text-link font-bold">
                Vernon
              </Link>
              .
            </p>
          </header>
        </div>
      </section>

      <CityCTA
        heading="Downey Janitorial Services: Reliable & Detailed"
        headingLevel="h2"
        subText="Experience the Long Beach Janitorial Downey cleaning service difference. Tell us about your needs today!"
        cityBackground={data.cityCTA}
      />
      <WhyWeLove
        heading="Why We Love Downey"
        subText="The city of Downey isn’t only known for its gorgeous weather, clean parks, and being the birthplace of the Apollo Space Program; it’s also known as one of the most business-friendly cities, even earning an award for it! And here at Long Beach Janitorial, we’re honored to help all businesses in the area thrive. By offering a multitude of professional commercial Downey janitorial cleaning services across a range of industries, we can ensure your building stays spotless and hygienic."
        image={data.citySquareImage.childImageSharp.gatsbyImageData}
      />
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
    heroFullWidthDesktop: file(relativePath: { eq: "home/1.0-hero-desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    heroFullWidthMobile: file(relativePath: { eq: "home/1.0-hero-mobile.jpg" }) {
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
    cityCTA: file(relativePath: { eq: "repeating/cta/cities/CTA Downey.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    citySquareImage: file(relativePath: { eq: "cities/Downey.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
