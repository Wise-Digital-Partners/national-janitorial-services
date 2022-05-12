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
            title="Hospital Cleaning Services | Janitorial Company Long Beach"
            description="When you need top hospital cleaning services in Long Beach, National Janitorial Services is here to help. See how we can help & get a consultation today!"
            openGraphImage={data.openGraphImage.publicURL}
            twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <HeroStacked
            image={data.heroStacked.childImageSharp.gatsbyImageData}
            backgroundFixed={true}
            imageMaxHeight="max-h-[468px]"
            heading="Hospital Cleaning Services"
            subtext="Thorough sanitation and disinfection for your hospital and medical facility."
            textMaxWidth="max-w-4xl"
         />

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-10 lg:gap-x-20 items-center">
                  <div>
                     <h2>Top Hospital Cleaning Services in Long Beach</h2>
                     <p className="mb-0">
                        Maintaining a rigorously sanitized environment is crucial to reduce the risk of hospital-acquired infections. At National
                        Janitorial Services, we provide thorough and medical-grade cleaning to help keep your patients and staff safe. Our
                        professional cleaning experts capture airborne pathogens and disinfect surfaces without cross-contamination.
                     </p>
                  </div>
                  <div>
                     <GatsbyImage image={data.intro.childImageSharp.gatsbyImageData} alt="Top Hospital Cleaning Services in Long Beach" />
                  </div>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-18">
            <div className="container">
               <h3>Hospital Areas We Clean</h3>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
                  <div>
                     <p className="md:mb-0">
                        At NJS, we conduct site visits and work closely with you to develop a cleaning plan. Our certified cleaning experts handle
                        dusting, wiping, vacuuming, disinfection, and more for the following areas.
                     </p>
                  </div>
                  <div>
                     <ul className="styled-list">
                        <li>Lobbies and waiting areas</li>
                        <li>Patient rooms</li>
                        <li>Exam rooms</li>
                        <li>Offices</li>
                     </ul>
                  </div>
                  <div>
                     <ul className="styled-list">
                        <li>Cafeteria and break rooms</li>
                        <li>Bathrooms</li>
                        <li>Stairwells</li>
                        <li>And more!</li>
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
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/Hospitals_FB.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/Hospitals_TW.jpg" }) {
         publicURL
      }
      heroStacked: file(relativePath: { eq: "industries/hospitals/1.0 Hospital Hero Desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      intro: file(relativePath: { eq: "industries/hospitals/2.0 Hospital cleaning.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
   }
`;
export default Page;
