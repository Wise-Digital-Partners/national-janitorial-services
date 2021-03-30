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
            heading="Private Office Cleaning Services"
            subtext="Professional cleaning for private offices of all sizes."
            textMaxWidth="max-w-4xl"
         />

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-10 lg:gap-x-20 items-center">
                  <div>
                     <h2>Private Office Cleaning, Sanitation, and Disinfection in Long Beach</h2>
                     <p className="mb-0">
                        With specialized tools and a thorough process, our commercial cleaning services help keep your private office a safe
                        environment for employees and guests alike. Our qualified and experienced cleaning experts use only EPA-approved disinfectants
                        to protect your office from pathogens. From your reception area, breakrooms, hallways, walls and floors, we provide a thorough
                        and reliable clean. Boost employee satisfaction, stay compliant, and be confident that your office space is productive and
                        welcoming.
                     </p>
                  </div>
                  <div>
                     <GatsbyImage
                        image={data.intro.childImageSharp.gatsbyImageData}
                        alt="Private Office Cleaning, Sanitation, and Disinfection in Long Beach"
                     />
                  </div>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-18">
            <div className="container">
               <h3>Private Office Areas We Clean</h3>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
                  <div>
                     <p className="md:mb-0">
                        At NJS, we conduct site visits and work closely with you to develop a cleaning plan. Our certified cleaning experts handle
                        dusting, wiping, vacuuming, disinfection, and more for the following areas.
                     </p>
                  </div>
                  <div>
                     <ul className="styled-list">
                        <li>Work areas</li>
                        <li>Common areas</li>
                        <li>Cubicles</li>
                        <li>Restroom</li>
                     </ul>
                  </div>
                  <div>
                     <ul className="styled-list">
                        <li>Kitchens and breakrooms</li>
                        <li>Reception areas and lobbies</li>
                        <li>Walls and floors</li>
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
      heroStacked: file(relativePath: { eq: "industries/private-offices/1.0 Private Offices Hero Desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      intro: file(relativePath: { eq: "industries/private-offices/2.0 p office cleaning.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
   }
`;
export default Page;
