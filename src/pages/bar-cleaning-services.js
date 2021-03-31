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
         <SEO title="" description="" openGraphImage={data.openGraphImage.publicURL} twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL} />

         <HeroStacked
            image={data.heroStacked.childImageSharp.gatsbyImageData}
            backgroundFixed={true}
            imageMaxHeight="max-h-[468px]"
            heading="Bar & Nightclub Cleaning Services"
            subtext="Keep the good times flowing with effective sanitation and disinfection."
            textMaxWidth="max-w-4xl"
         />

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-10 lg:gap-x-20 items-center">
                  <div>
                     <h2>Top Bar & Nightclub Cleaning Services in Long Beach</h2>
                     <p className="mb-0">
                        Your bar, nightclub, or pub can get messy at the end of every night. We handle the dirty work so you can bring the energy for
                        the next shift. Thorough cleaning and sanitation for every part of your club and watering hole shouldn’t be an afterthought.
                        Using only EPA- approved cleaning agents and disinfectants, our certified cleaning experts deliver a thorough cleaning to help
                        keep your patrons safe. Maintain a fun and hygienic space and keep regulars and new guests coming back.
                     </p>
                  </div>
                  <div>
                     <GatsbyImage image={data.intro.childImageSharp.gatsbyImageData} alt="Top Bar & Nightclub Cleaning Services in Long Beach" />
                  </div>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-18">
            <div className="container">
               <h3>Bar & Nightclub Areas We Clean</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
                  <div>
                     <p className="md:mb-0">
                        At NJS, we conduct site visits and work closely with you to develop a cleaning plan. Our certified cleaning experts handle
                        dusting, wiping, vacuuming, disinfection, and more for the following areas.
                     </p>
                  </div>
                  <div>
                     <ul className="styled-list">
                        <li>Bar area</li>
                        <li>DJ Booth</li>
                        <li>Seating area</li>
                     </ul>
                  </div>
                  <div>
                     <ul className="styled-list">
                        <li>Dance floors</li>
                        <li>Restroom sanitation</li>
                        <li>High touch surfaces</li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>

         <CovidSplit className="pt-16 md:pt-32 mb-16 md:mb-32" />

         <Clients className="pb-16 md:pb-32" headingLevel="h2" />

         <Testimonials headingLevel="h2" />

         <WhyUs className="py-16 md:py-32" headingLevel="h2" />

         <CTA headingLevel="h2" />
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
      heroStacked: file(relativePath: { eq: "industries/bars-nightclubs/1.0 Bars _ Night Hero Desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      intro: file(relativePath: { eq: "industries/bars-nightclubs/2.0 bar cleaning.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
   }
`;
export default Page;
