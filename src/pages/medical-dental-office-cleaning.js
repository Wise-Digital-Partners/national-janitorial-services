import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HeroStacked from "../components/Hero/HeroStacked";
import Testimonials from "../components/Repeating/Testimonials";
import Clients from "../components/Repeating/Clients";
import WhyUs from "../components/Repeating/WhyUs";
import CTA from "../components/Repeating/CTA";
import CovidSplit from "../components/Repeating/CovidSplit";

const Page = ({ data }) => {
   return (
      <Layout headerStyle="standard" headerLinkColor="" headerHasBorder={false}>
         <SEO
            title=""
            description=""
            // openGraphImage={data.openGraphImage.publicURL}
            // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <HeroStacked
            image={data.heroStacked.childImageSharp.gatsbyImageData}
            backgroundFixed={true}
            imageMaxHeight="max-h-[468px]"
            heading="Medical & Dental Office Cleaning Services"
            subtext="Critical cleaning for your healthcare facility."
            textMaxWidth="max-w-4xl"
         />

         <section className="py-20 md:py-32">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-10 lg:gap-x-20 items-center">
                  <div>
                     <h2>Medical & Dental Office Cleaning, Sanitation, and Disinfection in Long Beach</h2>
                     <p className="mb-0">
                        For medical professionals and care providers, a sanitized and disinfected environment is of utmost importance. At National
                        Janitorial Services, our team of cleaning experts understand your cleanliness needs and goals. We provide healthcare
                        facilities with daily janitorial services to prevent cross-contamination and the spread of germs, viruses, and other
                        pathogens. Our reliable team uses only EPA-approved disinfectants for a deep and thorough clean you can trust.
                     </p>
                  </div>
                  <div>
                     <GatsbyImage image={data.intro.childImageSharp.gatsbyImageData} />
                  </div>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-18">
            <div className="container">
               <h3>Medical & Dental Office Areas We Clean</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
                  <div>
                     <p className="md:mb-0">
                        At NJS, we conduct site visits and work closely with you to develop a cleaning plan. Our certified cleaning experts handle
                        dusting, wiping, vacuuming, disinfection, and more for the following areas.
                     </p>
                  </div>
                  <div>
                     <ul className="styled-list">
                        <li>Lobbies and front desks</li>
                        <li>Trash removal</li>
                        <li>Floors and walls</li>
                        <li>Checking for debris</li>
                     </ul>
                  </div>
                  <div>
                     <ul className="styled-list">
                        <li>Waiting rooms</li>
                        <li>Restroom sanitation</li>
                        <li>High touch surfaces</li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>

         <CovidSplit className="pt-20 md:pt-32 mb-20 md:mb-32" />

         <Clients className="pb-20 md:pb-32" headingLevel="h2" />

         <Testimonials headingLevel="h2" />

         <WhyUs className="py-20 md:py-32" headingLevel="h2" />

         <CTA headingLevel="h2" />
      </Layout>
   );
};

export const query = graphql`
   {
      heroStacked: file(relativePath: { eq: "industries/medical dental/1.0 Medical _ Dental Hero Desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      intro: file(relativePath: { eq: "industries/medical dental/2.0 medical cleaning.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
   }
`;
export default Page;
