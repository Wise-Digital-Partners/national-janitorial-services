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
            title="Floor Stripping Services | Long Beach Janitorial"
            description="When you need professional floor stripping services, Long Beach Janitorial is here to help. See how we can help & get a consultation today!"
            // openGraphImage={data.openGraphImage.publicURL}
            // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <HeroStacked
            image={data.heroStacked.childImageSharp.gatsbyImageData}
            backgroundFixed={true}
            imageMaxHeight="max-h-[468px]"
            heading="Long Beach Floor Stripping Services"
            subtext="Get back to the shine by removing the grime!"
            textMaxWidth="max-w-4xl"
         />

         <section className="pt-16 md:pt-32 mb-16 md:mb-32">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-12 items-center">
                  <div>
                     <h2>Keeping Long Beach Businesses Clean</h2>
                     <p className="mb-0">
What’s an often overlooked yet important aspect of a thorough clean? Floor stripping! High-traffic areas are especially prone to accumulating dirt and grime over the years, causing them to lose their lustrous shine. Using only EPA-registered disinfectants and cleaning agents, our professional floor stripping services quickly remove buildup, making it easy to maintain a clean, welcoming environment for all your customers.
                     </p>

                  </div>
                  <div>
                     <GatsbyImage image={data.intro.childImageSharp.gatsbyImageData} alt="COVID-19 Cleaning in Long Beach" />
                  </div>
               </div>
            </div>
         </section>

         <section className="pb-16 md:pb-20">
            <div className="container">
               <header className="mb-24 max-w-3xl">
                          <h2>Floors We Can Strip</h2>
                     <StyledContent>
                     <ul>
<li>Hardwood</li>
<li>Terra Cotta</li>
<li>Tile</li>
<li>Vinyl</li>
<li>And more!</li>
</ul>

                     </StyledContent>
               </header>
               <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-10 items-center">
                  <div className="md:col-start-1 md:col-span-3">
                     <GatsbyImage image={data.toolGun.childImageSharp.gatsbyImageData} alt="COVID cleaning & disinfection tool" />
                  </div>
                  <div className="md:col-start-4 md:col-span-4">
                     <p className="heading-two">The Tools</p>
                     <p className="mb-0">
                        We invest in the best new equipment and cleaning systems to keep your workplace safe and secure for anyone that enters.{" "}
                     </p>
                  </div>
                  <div className="md:col-end-13 md:col-span-5">
                     <GatsbyImage image={data.toolBackpack.childImageSharp.gatsbyImageData} alt="COVID cleaning & disinfection tool" />
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
                        <li>Elevators</li>
                        <li>Furniture</li>
                     </ul>
                  </div>
                  <div>
                     <ul className="styled-list">
                        <li>Glass Surfaces (partitions, doors, windows)</li>
                        <li>Kitchens & Break Rooms</li>
                        <li>Lobbies</li>
                        <li>Restrooms</li>
                     </ul>
                  </div>
                  <div>
                     <ul className="styled-list">
                        <li>Restrooms</li>
                        <li>Floor Care</li>
                        <li>Stairwells</li>
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
      # openGraphImage: file(relativePath: { eq: "open-graph/facebook/COVID Cleaning_FB.jpg" }) {
      #    publicURL
      # }
      # twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/COVID Cleaning_TW.jpg" }) {
      #    publicURL
      # }
      heroStacked: file(relativePath: { eq: "common/1.0 Floor Stripping Hero Desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      intro: file(relativePath: { eq: "common/8_floorstripping_services_intro.png" }) {
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
