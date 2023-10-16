import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroStacked from "../components/Hero/HeroStacked";
import Testimonials from "../components/Repeating/Testimonials";
import Clients from "../components/Repeating/Clients";
import WhyUs from "../components/Repeating/WhyUs";
import CallToAction from "../components/Repeating/CTA";
import CovidSplit from "../components/Repeating/CovidSplit";

const Page = ({ data }) => {
  return (
    <Layout navigationStyle="standard" headerLinkColor="" headerHasBorder={false}>
      <SearchEngineOptimization
        title="Restaurant Cleaning Services | Long Beach Janitorial"
        description="Long Beach Janitorial offers top restaurant and hospitality cleaning services throughout the area & beyond. Learn more & schedule a consultation today!"
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroStacked
        image={data.heroStacked.childImageSharp.gatsbyImageData}
        backgroundFixed={true}
        imageMaxHeight="max-h-[468px]"
        heading="Restaurant & Hospitality Cleaning Services"
        subtext="We’ll help you keep things hospitable! Keep things clean, healthy, and safe for all!"
        textMaxWidth="max-w-4xl"
      />

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-10 lg:gap-x-20">
            <div>
              <h2>Together, We’re the Hospitable Dream Team</h2>
              <p className="mb-0">
                Your dedication to quality service and customer satisfaction, paired with our
                attention to clean detail, means a business that stands above the rest. Our
                certified Long Beach Janitorial experts are equipped to handle any hospitality
                cleaning need, including hotel, resort, and restaurant deep cleaning services.
                Ensure your welcoming space stays hygienic and eye-catching by contacting us today.
              </p>
            </div>
            <div>
              <GatsbyImage
                image={data.intro.childImageSharp.gatsbyImageData}
                alt="Top Restaurant & Hospitality Cleaning Services in Long Beach"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-18">
        <div className="container">
          <h3>A Clean That’s Customizable</h3>
          <div className="grid grid-cols-1 gap-x-12 md:grid-cols-3">
            <div>
              <p className="md:mb-0">
                Here at Long Beach Janitorial, we know your cleaning needs are as unique as your
                hospitality business itself. We’ll work with you to develop a comprehensive cleaning
                plan that best serves both your needs and your customers. Then, our certified
                cleaning experts will get to work with eco-friendly products, tackling things like:
              </p>
            </div>
            <div>
              <ul className="styled-list">
                <li>Front of house</li>
                <li>High touch surfaces</li>
                <li>Restroom sanitation</li>
                <li>Vacuuming and dusting</li>
              </ul>
            </div>
            <div>
              <ul className="styled-list">
                <li>Trash removal</li>
                <li>Breakrooms</li>
                <li>Kitchens</li>
                <li>And anything else in your custom cleaning plan!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <CovidSplit className="mb-16 pt-16 md:mb-32 md:pt-32" /> */}

      <Clients className="pb-16 md:pb-32" headingLevel="h2" />

      <Testimonials headingLevel="h2" />

      <WhyUs className="py-16 md:py-32" headingLevel="h2" />

      <CallToAction headingLevel="h2" />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(relativePath: { eq: "open-graph/facebook/Bars _ Night_FB.jpg" }) {
      publicURL
    }
    twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/Bars _ Night_TW.jpg" }) {
      publicURL
    }
    heroStacked: file(relativePath: { eq: "industries/restaurant-hospitality/hero-desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    intro: file(relativePath: { eq: "industries/restaurant-hospitality/intro.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
