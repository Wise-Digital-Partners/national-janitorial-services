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
        title="Window Cleaning Services | Long Beach Janitorial"
        description="Long Beach Janitorial offers professional window cleaning services throughout the area & beyond. Learn more & schedule a consultation today!"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroStacked
        image={data.heroStacked.childImageSharp.gatsbyImageData}
        backgroundFixed={true}
        imageMaxHeight="max-h-[468px]"
        heading="Long Beach Window Cleaning Services"
        subtext="Ensuring you always have a beautiful view."
        textMaxWidth="max-w-4xl"
      />

      <section className="mb-16 pt-16 md:mb-32 md:pt-32">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-10 lg:gap-x-20">
            <div>
              <h2>Keeping Long Beach Businesses Clean</h2>
              <p className="mb-0">
                Professional window cleaning is a must for maintaining the appearance of your
                business space and enhancing it. It’s no secret that Long Beach is a city that has
                air pollutants, and those pollutants can build up on your windows over time. So
                don’t get stuck with a dirty view; schedule window cleaning in Long Beach today!
              </p>
            </div>
            <div>
              <GatsbyImage
                image={data.intro.childImageSharp.gatsbyImageData}
                alt="COVID-19 Cleaning in Long Beach"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-18">
        <div className="container">
          <header className="mb-6 md:text-center">
            <h3>We Cover All Your Needs</h3>
          </header>
          <div className="grid grid-cols-1 gap-x-12 md:grid-cols-3">
            <div>
              <ul className="styled-list">
                <li>Interior</li>
                <li>Exterior</li>
                <li>Hi-Rises</li>
                <li>Hard Water Removal</li>
              </ul>
            </div>
            <div>
              <ul className="styled-list">
                <li>Emergency Cleaning</li>
                <li>Glass Doors</li>
                <li>Window Screens</li>
                <li>Skylights</li>
              </ul>
            </div>
            <div>
              <ul className="styled-list">
                <li>Mirrors</li>
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
    heroStacked: file(relativePath: { eq: "common/1.0 Window Cleaning Hero Desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    intro: file(relativePath: { eq: "common/10_windowcleaning_services_intro.png" }) {
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
