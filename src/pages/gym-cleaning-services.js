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
            title="Gym Cleaning Services | Janitorial Company Long Beach"
            description="Keep your fitness center clean with gym cleaning services courtesy of Long Beach Janitorial. We serve Long Beach & surrounding areas. Learn more!"
            openGraphImage={data.openGraphImage.publicURL}
            twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <HeroStacked
            image={data.heroStacked.childImageSharp.gatsbyImageData}
            backgroundFixed={true}
            imageMaxHeight="max-h-[468px]"
            heading="Gym Cleaning Services"
            subtext="Make regular cleaning part of your gym regimen."
            textMaxWidth="max-w-4xl"
         />

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-10 lg:gap-x-20 items-center">
                  <div>
                     <h2>Top Gym & Fitness Center Cleaning Services in Long Beach</h2>
                     <p className="mb-0">
                        At Long Beach Janitorial, we meet and exceed your gym’s cleaning needs. We keep your gym, fitness center, and health
                        club in tip-top shape with daily janitorial services and deep cleaning. Sanitation should be the least of your members’
                        worries when they work out. With routine janitorial services, ensure sanitized equipment, spaces, and surfaces to keep your
                        members safe as they work toward their goals. We use only EPA-approved disinfectants that are effective against germs,
                        bacteria, and viruses. Partner with Long Beach Janitorial to increase member retention and satisfaction with a fresh
                        and welcoming environment.
                     </p>
                  </div>
                  <div>
                     <GatsbyImage image={data.intro.childImageSharp.gatsbyImageData} alt="Top Gym & Fitness Center Cleaning Services in Long Beach" />
                  </div>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-18">
            <div className="container">
               <h3>Gym & Fitness Center Areas We Clean</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
                  <div>
                     <p className="md:mb-0">
                        At LBJ, we conduct site visits and work closely with you to develop a cleaning plan. Our certified cleaning experts handle
                        dusting, wiping, vacuuming, disinfection, and more for the following areas.
                     </p>
                  </div>
                  <div>
                     <ul className="styled-list">
                        <li>Front desks</li>
                        <li>Weight rooms</li>
                        <li>Mirrors</li>
                        <li>Walls</li>
                     </ul>
                  </div>
                  <div>
                     <ul className="styled-list">
                        <li>Locker rooms and showers</li>
                        <li>Bathrooms</li>
                        <li>Trash removal</li>
                        <li>Offices</li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>

         <CovidSplit className="pt-16 md:pt-32 mb-16 md:mb-32" />

         <Clients className="pb-16 md:pb-32" headingLevel="h2" />

         <Testimonials headingLevel="h2" />

         <WhyUs className="py-16 md:py-32" headingLevel="h2" />

         <CallToAction headingLevel="h2" />
      </Layout>
   );
};

export const query = graphql`
   {
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/Gyms _ Fitness_FB.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/Gyms _ Fitness_TW.jpg" }) {
         publicURL
      }
      heroStacked: file(relativePath: { eq: "industries/gyms/1.0 Gyms _ Firtness Hero Desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      intro: file(relativePath: { eq: "industries/gyms/2.0 gym cleaning.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
   }
`;
export default Page;
