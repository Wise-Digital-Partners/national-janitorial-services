import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

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
    <Layout
      navigationStyle="standard"
      headerLinkColor=""
      headerHasBorder={false}
    >
      <SearchEngineOptimization
        title="Day Porter Services | Long Beach Janitorial"
        description="Nobody does day porter services like Long Beach Janitorial. We offer the cleaning you need right here in Long Beach, CA. Schedule a consultation!"
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroStacked
        image={data.heroStacked.childImageSharp.gatsbyImageData}
        backgroundFixed={true}
        imageMaxHeight="max-h-[468px]"
        heading="Long Beach Day Porter Services"
        subtext="Meeting your cleaning needs right where they are."
        textMaxWidth="max-w-4xl"
      />

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-12 items-center">
            <div>
              <h2>Day Porter Services You Can Rely On</h2>
              <p className="mb-0">
                Long Beach Janitorial’s day porters perform a wide variety of
                services to fulfill your requirements. No matter the size of
                your facility, our cleaning experts can handle it. Keep tenants
                and guests safe, satisfied, and supported with cleaning
                services that pay the utmost attention to detail. Our
                professional day porters help ensure that your facility runs
                smoothly and stays clean, so you can operate worry-free.
              </p>
            </div>
            <div>
              <GatsbyImage
                image={data.intro.childImageSharp.gatsbyImageData}
                alt="Day Porter Services You Can Rely On"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-18">
        <div className="container">
          <header className="md:text-center mb-6">
            <h3>What We Clean</h3>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
            <div>
              <ul className="styled-list">
                <li>Carpet</li>
                <li>Countertops</li>
                <li>Degreasing (exhaust fans, filters, ducts)</li>
                <li>Dumpster Area Cleaning</li>
                <li>Elevators</li>
                <li>Furniture</li>
              </ul>
            </div>
            <div>
              <ul className="styled-list">
                <li>Glass Surfaces (partitions, doors, windows)</li>
                <li>Kitchens & Break Rooms</li>
                <li>Lobbies</li>
                <li>Move-in/Move-out Cleaning</li>
                <li>Post-construction Cleanup</li>
                <li>Pressure Washing</li>
              </ul>
            </div>
            <div>
              <ul className="styled-list">
                <li>Trash & Recycling Removal</li>
                <li>Restrooms</li>
                <li>Floor Care</li>
                <li>Stairwells</li>
                <li>Warehouses</li>
                <li>... And more!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <About className="pt-16 md:pt-32 mb-16 md:mb-32" headingLevel="h2" />

      <Clients className="pb-16 md:pb-32" headingLevel="h2" />

      <Testimonials headingLevel="h2" />

      <WhyUs className="py-16 md:py-32" headingLevel="h2" />

      <CallToAction headingLevel="h2" />
    </Layout>
  );
};

export const query = graphql`
   {
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/Porter Services_FB.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/Porter Services_TW.jpg" }) {
         publicURL
      }
      heroStacked: file(relativePath: { eq: "services/porter-services/hero-desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      intro: file(relativePath: { eq: "services/porter-services/intro.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
   }
`;
export default Page;
