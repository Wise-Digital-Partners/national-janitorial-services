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
            title="COVID Cleaning Services Long Beach | Long Beach Janitorial"
            description="Our COVID cleaning services help Long Beach businesses stop the spread. Learn more about our coronavirus cleaning process & schedule a consultation!"
            openGraphImage={data.openGraphImage.publicURL}
            twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <HeroStacked
            image={data.heroStacked.childImageSharp.gatsbyImageData}
            backgroundFixed={true}
            imageMaxHeight="max-h-[468px]"
            heading="COVID Cleaning Services"
            subtext="Our COVID cleaning services help Long Beach businesses stop the spread."
            textMaxWidth="max-w-4xl"
         />

         <section className="pt-16 md:pt-32 mb-16 md:mb-32">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-12 items-center">
                  <div>
                     <h2>COVID-19 Cleaning in Long Beach</h2>
                     <p className="mb-0">
                        We help Long Beach businesses do their part in stopping the spread of the coronavirus. Using only EPA-registered
                        disinfectants, our certified cleaning experts provide thorough sanitation and disinfection at your commercial space or
                        facility. From site visit to job completion, we offer an easy process to help business owners operate fuss-free. We pay
                        attention to your goals, do the dirty work, and deliver a consistent clean so that you don’t have to. Reduce the risk of
                        infection and provide peace of mind to your staff, clients, and guests with regular COVID cleaning services.
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
                  <h2>The Process</h2>
                  <p>
                     At LBJ, we’re serious about workplace disinfection. Our disinfection & COVID cleaning teams are certified and professionally
                     trained on the best practices in accordance with CDC Guidelines.
                  </p>
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
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/COVID Cleaning_FB.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/COVID Cleaning_TW.jpg" }) {
         publicURL
      }
      heroStacked: file(relativePath: { eq: "services/covid-cleaning/covid_cleaning.png" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      intro: file(relativePath: { eq: "services/covid-cleaning/covid_cleaning_intro.jpg" }) {
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
