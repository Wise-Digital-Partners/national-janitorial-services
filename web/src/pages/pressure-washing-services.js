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

import styled from "@emotion/styled";
import tw from "twin.macro";
const StyledContent = styled.div`
  p,
  span,
  li {
    ${tw`md:text-xl`}
  }
  ul {
    ${tw`list-disc pl-7 mb-6 flex flex-col space-y-0.5`}
  }
  ol {
    ${tw`list-decimal pl-7 mb-6 flex flex-col space-y-0.5`}
  }
  strong {
    ${tw`font-bold`}
  }
  em {
    ${tw`italic`}
  }
  a {
    ${tw` text-primary underline `}
  }
  a: {
    ${tw` text-primary/50 underline `}
  }
`;
const Page = ({ data }) => {
  return (
    <Layout navigationStyle="standard" headerLinkColor="" headerHasBorder={false}>
      <SearchEngineOptimization
        title="Pressure Washing Services | Long Beach Janitorial"
        description="When you need professional pressure washing services, Long Beach Janitorial is here to help. See how we can help & get a consultation today!"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroStacked
        image={data.heroStacked.childImageSharp.gatsbyImageData}
        backgroundFixed={true}
        imageMaxHeight="max-h-[468px]"
        heading="Pressure Washing Services in Long Beach"
        subtext="Wash away years of grime!"
        textMaxWidth="max-w-4xl"
      />

      <section className="mb-16 pt-16 md:mb-32 md:pt-32">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-10 lg:gap-x-20">
            <div>
              <h2>Uncover Gorgeous Surfaces</h2>
              <p className="mb-0">
                What does the outside of your business say about you? A rundown, dirty facade can
                turn away customers. Make a great first impression with help from our pressure
                washing cleaning services! Maintaining your building’s exterior offers value beyond
                aesthetics; a clean facility is more environmentally friendly, with reduced
                potential safety hazards for customers and staff. Turn to Long Beach Janitorial when
                you’re ready to put your best foot forward!
              </p>
            </div>
            <div>
              <GatsbyImage
                image={data.intro.childImageSharp.gatsbyImageData}
                alt="Pressure Washing in Long Beach"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-18">
        <div className="container">
          <header className="mb-6 md:text-center">
            <h3>Our Pressure Wash Services Cover:</h3>
          </header>
          <div className="grid grid-cols-1 gap-x-12 md:grid-cols-3">
            <div>
              <ul className="styled-list">
                <li>Driveways</li>
                <li>Concrete walkways</li>
                <li>Building surfaces</li>
              </ul>
            </div>
            <div>
              <ul className="styled-list">
                <li>Parking garages</li>
                <li>Patio cleaning</li>
              </ul>
            </div>
            <div>
              <ul className="styled-list">
                <li>Storefront washing</li>
                <li>... And more!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <About className="mb-16 pt-16 md:mb-32 md:pt-32" headingLevel="h2" />

      <Clients className="pb-16 md:pb-32" headingLevel="h2" />

      <Testimonials headingLevel="h2" />

      <WhyUs className="py-16 md:py-32" headingLevel="h2" />

      <CallToAction headingLevel="h2" />
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
    heroStacked: file(relativePath: { eq: "services/pressure-washing/hero-desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    intro: file(relativePath: { eq: "services/pressure-washing/intro.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    toolGun: file(relativePath: { eq: "services/covid-cleaning/3.0-Tools-gun.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    toolBackpack: file(relativePath: { eq: "services/covid-cleaning/3.1-Tool-backpack.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
