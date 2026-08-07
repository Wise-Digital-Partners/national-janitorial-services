import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "gatsby-plugin-transition-link";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroStacked from "../components/Hero/HeroStacked";
import Testimonials from "../components/Repeating/Testimonials";
import About from "../components/Repeating/About";
import Clients from "../components/Repeating/Clients";
import WhyUs from "../components/Repeating/WhyUs";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
  return (
    <Layout navigationStyle="standard" headerLinkColor="" headerHasBorder={false}>
      <SearchEngineOptimization
        title="Commercial Cleaning & Janitorial Services in Bixby Knolls, CA"
        description="Local commercial cleaning and janitorial services for Bixby Knolls offices, retail, and medical facilities in Long Beach. Schedule your free consultation."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroStacked
        image={data.heroStacked.childImageSharp.gatsbyImageData}
        backgroundFixed={true}
        imageMaxHeight="max-h-[468px]"
        heading="Commercial Cleaning & Janitorial Services in Bixby Knolls"
        subtext="Local, neighborhood-based janitorial care for Bixby Knolls' boutique retail, offices, and medical facilities."
        textMaxWidth="max-w-4xl"
      />

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-10 lg:gap-x-20">
            <div>
              <h2>Keeping Bixby Knolls Businesses Pristine</h2>
              <p>
                <Link fade to="/commercial-cleaning-company/" className="text-link font-bold">
                  Long Beach Janitorial
                </Link>{" "}
                (formerly National Janitorial Services) provides commercial cleaning in Bixby Knolls
                for boutique retail storefronts, neighborhood offices, and medical facilities along
                and around the Atlantic Avenue corridor. Our office sits right in the neighborhood
                at 144 W San Antonio Dr, so our Bixby Knolls team isn't commuting in from across the
                city, we're already here.
              </p>
              <p className="mb-0">
                Operating a business in Bixby Knolls means working in a walkable, boutique-retail
                neighborhood rather than a high-rise commercial core. Whether you run a storefront
                on Atlantic Avenue, a small professional office nearby, or a medical practice
                serving the neighborhood, Long Beach Janitorial builds cleaning plans around your
                specific hours, not a generic downtown route that doesn't fit a Bixby Knolls
                storefront.
              </p>
            </div>
            <div>
              <GatsbyImage
                image={data.intro.childImageSharp.gatsbyImageData}
                alt="Commercial Cleaning & Janitorial Services in Bixby Knolls"
              />
            </div>
          </div>
          <div className="mt-12 max-w-4xl md:mt-16">
            <p className="mb-0">
              Our Bixby Knolls team works quietly behind the scenes so your space is ready before
              your first customer or patient walks in, whether that means an early-morning visit
              before a boutique opens or an after-hours visit once a small office empties out.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-10 md:text-center">
            <h3>Services Offered in Bixby Knolls</h3>
          </header>
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-3">
            <div>
              <p className="mb-2 font-heading font-bold text-gray-700">Corporate & Office Spaces</p>
              <p className="mb-0">
                High-dusting, deep carpet cleaning, glass partition cleaning, and daily sanitization
                for the neighborhood's smaller professional offices, a different scale than a
                downtown tower, and scheduled accordingly.
              </p>
            </div>
            <div>
              <p className="mb-2 font-heading font-bold text-gray-700">
                Retail & Boutique Storefronts
              </p>
              <p className="mb-0">
                Detailed floor care, restroom restocking, and high-touch surface disinfection for
                Atlantic Avenue's boutique retail businesses. Storefront cleaning here is matched to
                daytime retail hours, not a fixed citywide time slot.
              </p>
            </div>
            <div>
              <p className="mb-2 font-heading font-bold text-gray-700">
                Medical & Clinical Facilities
              </p>
              <p className="mb-0">
                Strict adherence to healthcare cleaning protocols, using EPA-registered
                disinfectants and CDC-aligned protocols for clinical environments, delivered by
                licensed and insured, certified experts. For deeper, EPA-registered disinfection
                service for ongoing infection control, our{" "}
                <Link fade to="/disinfection-services/" className="text-link font-bold">
                  Medical Facility Disinfection Services
                </Link>{" "}
                page covers that compliance-heavy scope specifically.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2>Why Choose Our Bixby Knolls Team?</h2>
          </header>
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            <div>
              <p className="mb-2 font-heading font-bold text-gray-700">Rapid local response</p>
              <p className="mb-0">
                Being based at 144 W San Antonio Dr, right in Bixby Knolls, means we can turn around
                last-minute scheduling changes fast. Need a same-week adjustment or a one-time deep
                clean before a store opening? We can usually make it work.
              </p>
            </div>
            <div>
              <p className="mb-2 font-heading font-bold text-gray-700">Customized schedules</p>
              <p className="mb-0">
                After-hours, early morning, or weekend service, matched to each business's actual
                hours. An Atlantic Avenue boutique and a small professional office rarely need the
                same cleaning window. We don't force them into one, a retail storefront closing at
                6pm gets a different visit time than a professional office running standard 9-to-5
                hours.
              </p>
            </div>
            <div>
              <p className="mb-2 font-heading font-bold text-gray-700">
                Green cleaning options available upon request
              </p>
              <p className="mb-0">
                If your Bixby Knolls facility prefers environmentally-conscious products, ask during
                your site consultation and we'll confirm what's available for your service.
              </p>
            </div>
            <div>
              <p className="mb-2 font-heading font-bold text-gray-700">
                Backed by 100+ businesses served across Long Beach
              </p>
              <p className="mb-0">
                The same certified, licensed and insured team, now with a Bixby Knolls-focused
                schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-6 max-w-3xl">
            <h2>Cleaning for Bixby Knolls' Commercial Corridor</h2>
          </header>
          <div className="max-w-4xl">
            <p>
              Bixby Knolls' commercial character centers on the Atlantic Avenue corridor, a walkable
              strip of boutique retail, small professional offices, and neighborhood service
              businesses, rather than the high-rise towers found in Long Beach's downtown core. That
              lower-rise, storefront-level building stock calls for a different cleaning rhythm than
              a convention-district office tower would need.
            </p>
            <p className="mb-0">
              The neighborhood also sits directly next to the historic{" "}
              <a
                href="https://www.rancholoscerritos.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link font-bold"
              >
                Rancho Los Cerritos
              </a>{" "}
              grounds and the Virginia Country Club. This gives Bixby Knolls a more residential,
              tree-lined feel than the commercial density near the waterfront. That character shows
              up in scheduling: Atlantic Avenue retail needs service matched to daytime shopping
              hours. The neighborhood's smaller offices and medical practices, on the other hand,
              tend to run standard business-day schedules without the event-driven traffic spikes a
              downtown location would see. Our Bixby Knolls team builds each client's plan around
              this specific pace rather than applying a schedule built for a busier commercial
              district.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="mb-6 max-w-3xl">
            <h2>Service Area: Bixby Knolls & Nearby Streets</h2>
          </header>
          <div className="max-w-4xl">
            <p>
              Long Beach Janitorial's Bixby Knolls service area centers on the Atlantic Avenue
              retail corridor and the surrounding Los Cerritos streets near Rancho Los Cerritos and
              the Virginia Country Club. Because our office sits inside this service area rather
              than outside it, scheduling flexibility extends to same-week requests that a vendor
              traveling in from another part of Long Beach couldn't easily accommodate.
            </p>
            <p className="mb-0">
              If your business is in Downtown Long Beach, Belmont Shore, or Signal Hill instead, our
              team also serves those areas, each with its own service pattern suited to that area's
              building types.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-12 max-w-3xl">
            <h2>Bixby Knolls Commercial Cleaning FAQs</h2>
          </header>
          <div className="grid max-w-4xl grid-cols-1 gap-y-10">
            <div>
              <h4 className="heading-six mb-2">
                Do you clean Atlantic Avenue storefronts before or after business hours?
              </h4>
              <p className="mb-0">
                Yes. We schedule Atlantic Avenue retail cleaning around each store's specific hours,
                so service never overlaps with shopping traffic.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">Is your office actually located in Bixby Knolls?</h4>
              <p className="mb-0">
                Yes. Long Beach Janitorial is based at 144 W San Antonio Dr, right in the Bixby
                Knolls area, we're not commuting in from another part of the city to serve this
                neighborhood.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">Do you provide your own cleaning supplies?</h4>
              <p className="mb-0">
                Yes. Long Beach Janitorial brings all standard cleaning supplies and equipment. If
                your Bixby Knolls facility requires green cleaning products, let us know during your
                site consultation.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Do you serve medical or clinical offices in Bixby Knolls?
              </h4>
              <p className="mb-0">
                Yes. We provide healthcare cleaning protocols with EPA-registered disinfectants and{" "}
                <a
                  href="https://www.cdc.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link font-bold"
                >
                  CDC-aligned protocols
                </a>{" "}
                for clinical environments in the neighborhood. For deeper EPA-registered
                disinfection service, see our{" "}
                <Link fade to="/disinfection-services/" className="text-link font-bold">
                  Medical Facility Disinfection Services
                </Link>{" "}
                page.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                How quickly can you start service for a new Bixby Knolls business?
              </h4>
              <p className="mb-0">
                Because our office is based right in Bixby Knolls, we can typically schedule a site
                consultation within days rather than weeks, and begin regular service shortly after
                your plan is confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="max-w-4xl">
            <h2>Ready to Elevate Your Bixby Knolls Facility's Standard of Clean?</h2>
            <p className="mb-0">
              Don't let a poorly maintained storefront or office slow your business down in Bixby
              Knolls. Our neighborhood team will walk your space, build a schedule around your
              actual hours, and give you a straightforward estimate before you commit to anything.
            </p>
          </header>
        </div>
      </section>

      <About className="mb-16 pt-16 md:mb-32 md:pt-32" headingLevel="h2" />

      <Clients className="pb-16 md:pb-32" headingLevel="h2" />

      <Testimonials headingLevel="h2" />

      <WhyUs className="py-16 md:py-32" headingLevel="h2" />

      <CallToAction heading="Schedule a 30 Minute Site Consultation" headingLevel="h2" />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(relativePath: { eq: "open-graph/facebook/Commercial Cleaning_FB.jpg" }) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Commercial Cleaning_TW.jpg" }
    ) {
      publicURL
    }
    heroStacked: file(relativePath: { eq: "services/commercial-cleaning/bixby-knolls.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    intro: file(relativePath: { eq: "services/commercial-cleaning/intro.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
