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
      <Layout navigationStyle="standard" headerLinkColor="" headerHasBorder={false}>
         <SearchEngineOptimization
            title="Long Beach Commercial Cleaning Company | Janitorial Services"
            description="Long Beach commercial cleaning experts. High-quality cleaning for your business, specializing in healthy workspaces. Get your free quote today!"
            openGraphImage={data.openGraphImage.publicURL}
            twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <HeroStacked
            image={data.heroStacked.childImageSharp.gatsbyImageData}
            backgroundFixed={true}
            imageMaxHeight="max-h-[468px]"
            heading="Long Beach Commercial Cleaning Company"
            subtext="High-caliber cleaning for your commercial space."
            textMaxWidth="max-w-4xl"
         />

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-12 items-center">
                  <div>
                     <h2>Professional Cleaning Services for Your Business</h2>
                     <p className="mb-0">
                     We are a Long Beach commercial cleaning company specializing in keeping your workplace clean and healthy. Our experienced and insured cleaners use top-notch disinfectants and cleaning products to provide high-quality services for all types of commercial spaces, from hospitals and HOAs to private offices. Whether you need regular preventative maintenance cleaning or a deep clean, we have the expertise to get the job done right. We are committed to providing our clients with a clean, healthy, and productive work environment.  We are proud to be trusted by clients in various industries such as healthcare, education, and property management.
                     </p>
                  </div>
                  <div>
                     <GatsbyImage image={data.intro.childImageSharp.gatsbyImageData} alt="Commercial Cleaning for Spotless Businesses" />
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
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/Commercial Cleaning_FB.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/Commercial Cleaning_TW.jpg" }) {
         publicURL
      }
      heroStacked: file(relativePath: { eq: "services/commercial-cleaning/hero-desktop.jpg" }) {
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
