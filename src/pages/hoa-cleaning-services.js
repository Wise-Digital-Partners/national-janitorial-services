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
            title="HOA Cleaning Services | Janitorial Company Long Beach"
            description="For top HOA cleaning services in the Long Beach area, see why National Janitorial Services is an excellent choice. Learn more & schedule a consultation!"
            openGraphImage={data.openGraphImage.publicURL}
            twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <HeroStacked
            image={data.heroStacked.childImageSharp.gatsbyImageData}
            backgroundFixed={true}
            imageMaxHeight="max-h-[468px]"
            heading="HOA Cleaning Services"
            subtext="Keeping tenants safe and your property sought after."
            textMaxWidth="max-w-4xl"
         />

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-10 lg:gap-x-20 items-center">
                  <div>
                     <h2>Top HOA Cleaning Services in Long Beach</h2>
                     <p className="mb-0">
                        Keep tenants happy and attract future residents with the right cleaning services for your commercial rental property. Our HOA
                        janitorial services help keep your property pristine, from the lobby and common areas to parking structures and stairways.
                        Increase your property’s value when you invest in regular deep cleaning and sanitation. Set yourself up for success.
                     </p>
                  </div>
                  <div>
                     <GatsbyImage image={data.intro.childImageSharp.gatsbyImageData} alt="Top HOA Cleaning Services in Long Beach" />
                  </div>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-18">
            <div className="container">
               <h3>HOA Areas We Clean</h3>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
                  <div>
                     <p className="md:mb-0">
                        At NJS, we conduct site visits and work closely with you to develop a cleaning plan. Our certified cleaning experts handle
                        dusting, wiping, vacuuming, disinfection, and more for the following areas.
                     </p>
                  </div>
                  <div>
                     <ul className="styled-list">
                        <li>Lobbies</li>
                        <li>Offices</li>
                        <li>Fitness rooms</li>
                        <li>Common areas</li>
                     </ul>
                  </div>
                  <div>
                     <ul className="styled-list">
                        <li>Business centers</li>
                        <li>Staff work areas</li>
                        <li>Restroom</li>
                        <li>Kitchens and breakrooms</li>
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
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/HOA_FB.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/HOA_TW.jpg" }) {
         publicURL
      }
      heroStacked: file(relativePath: { eq: "industries/hoa/1.0 HOA Hero Desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      intro: file(relativePath: { eq: "industries/hoa/2.0 HOA cleaning.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
   }
`;
export default Page;
