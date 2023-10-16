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
        title="Construction Cleaning Services | Long Beach Janitorial"
        description="Long Beach Janitorial offers professional construction cleaning services throughout the area & beyond. Learn more & schedule a consultation today!"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroStacked
        image={data.heroStacked.childImageSharp.gatsbyImageData}
        backgroundFixed={true}
        imageMaxHeight="max-h-[468px]"
        heading="Long Beach Construction Cleanup Services"
        subtext="Leave the heavy lifting to us!"
        textMaxWidth="max-w-4xl"
      />

      <section className="mb-16 pt-16 md:mb-32 md:pt-32">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-10 lg:gap-x-20">
            <div>
              <h2>From Dust to Debris, We Have You Covered</h2>
              <p className="mb-0">
                Don’t be left with a mess in a potentially dangerous site – turn to Long Beach
                Janitorial for post-construction cleaning services. As skilled construction
                cleaners, the Long Beach Janitorial team can safely navigate your clearing and
                cleaning needs, leaving you with a spotless space. We’ll declutter, sanitize, and
                prep the site so you can wrap up the project with your finishing touches!
              </p>
            </div>
            <div>
              <GatsbyImage
                image={data.intro.childImageSharp.gatsbyImageData}
                alt="Construction Cleaning in Long Beach"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-18">
        <div className="container">
          <header className="mb-6 md:text-center">
            <h3>Our Construction Cleaning Services Cover:</h3>
          </header>
          <div className="grid grid-cols-1 gap-x-12 md:grid-cols-3">
            <div>
              <ul className="styled-list">
                <li>Cleaning walls of dust, scuff, and smudges</li>
                <li>Pressure washing outside surfaces</li>
                <li>Baseboard washing</li>
              </ul>
            </div>
            <div>
              <ul className="styled-list">
                <li>Door frame polishing</li>
                <li>Cleaning remaining fixtures</li>
                <li>Window washing</li>
              </ul>
            </div>
            <div>
              <ul className="styled-list">
                <li>Trash and debris removal</li>
                <li>Scrubbing floors</li>
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
    heroStacked: file(relativePath: { eq: "services/construction-cleaning/hero-desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    intro: file(relativePath: { eq: "services/construction-cleaning/intro.png" }) {
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
