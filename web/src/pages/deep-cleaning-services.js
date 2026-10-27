import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CitablePassage from "../components/Repeating/CitablePassage";
import HeroStacked from "../components/Hero/HeroStacked";
import Testimonials from "../components/Repeating/Testimonials";
import About from "../components/Repeating/About";
import Clients from "../components/Repeating/Clients";
import WhyUs from "../components/Repeating/WhyUs";
import CallToAction from "../components/Repeating/CTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Commercial Deep Cleaning",
  "description": "Commercial deep cleaning is the intensive, comprehensive sanitation of high-touch surfaces, hard-to-reach structural elements, and facility equipment. Operating with over 5 years of industry experience and 100+ accounts served, Long Beach Janitorial provides licensed and insured cleaning teams utilizing EPA-registered agents to meet stringent commercial health standards.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Long Beach Janitorial",
    "url": "https://longbeachjanitorial.com/deep-cleaning-services/"
  }
};

const Page = ({ data }) => {
   return (
      <Layout navigationStyle="standard" headerLinkColor="" headerHasBorder={false}>
         <SearchEngineOptimization
            title="Commercial Deep Cleaning Services in Long Beach | LBJ"
            description="Deep cleaning services for Long Beach commercial facilities. Fully licensed and insured janitorial staff. Schedule a 30 Minute Site Consultation!"
            openGraphImage={data.openGraphImage.publicURL}
            twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
            jsonLd={jsonLd}
         />

         <HeroStacked
            image={data.heroStacked.childImageSharp.gatsbyImageData}
            backgroundFixed={true}
            imageMaxHeight="max-h-[468px]"
            heading="Long Beach Deep Cleaning Services"
            subtext="Going beyond surface-level clean for your peace of mind."
            textMaxWidth="max-w-4xl"
         />

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-12 items-center">
                  <div>
                     <h2>Keeping Long Beach Businesses Clean</h2>
                     <p className="mb-0">
                        For the deep clean your business deserves, partner with Long Beach Janitorial. Our local and experienced cleaning
                        experts work with businesses to meet their cleaning needs, from daily janitorial services to deep cleaning. We use only
                        EPA-registered disinfectants and a thorough evaluation of your space to ensure we attend to every corner and surface. We deep
                        clean offices, commercial buildings, and facilities of all sizes without compromising on quality.
                     </p>
                  </div>
                  <div>
                     <GatsbyImage image={data.intro.childImageSharp.gatsbyImageData} alt="Keeping Long Beach Businesses Clean" />
                  </div>
               </div>
            </div>
         </section>

         <CitablePassage itemType="https://schema.org/Service">
           <p className="mb-0" itemProp="description">
             Commercial deep cleaning is the intensive, comprehensive sanitation of high-touch surfaces, hard-to-reach structural elements, and facility equipment. Operating with over 5 years of industry experience and 100+ accounts served,{" "}
             <a href="https://longbeachjanitorial.com/deep-cleaning-services/" className="text-link font-bold">Long Beach Janitorial</a> provides licensed and insured cleaning teams utilizing EPA-registered agents to meet stringent commercial health standards.
           </p>
         </CitablePassage>

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
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/Deep Cleaning_FB.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/Deep Cleaning_TW.jpg" }) {
         publicURL
      }
      heroStacked: file(relativePath: { eq: "services/deep-cleaning/hero-desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      intro: file(relativePath: { eq: "services/deep-cleaning/intro.png" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
   }
`;
export default Page;
