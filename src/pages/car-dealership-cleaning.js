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
            heading="Car Dealership Cleaning Services"
            subtext="Keeping your dealership fresher than a brand new car. "
            textMaxWidth="max-w-4xl"
         />

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-10 lg:gap-x-20 items-center">
                  <div>
                     <h2>Car Dealership Cleaning, Sanitation, and Disinfection in Long Beach</h2>
                     <p className="mb-0">
                        Showcase the best your dealership has to offer and increase sales with consistent cleaning services. Our reliable team of
                        cleaning experts use EPA-approved products to keep your entire dealership looking sharp. From lobbies to your offices and
                        service bays, we leave no detail unchecked. Let us handle your dealership’s janitorial needs so you can close more sales,
                        delight more customers, and keep your business a safe and welcoming place.
                     </p>
                  </div>
                  <div>
                     <GatsbyImage
                        image={data.intro.childImageSharp.gatsbyImageData}
                        alt="Car Dealership Cleaning, Sanitation, and Disinfection in Long Beach"
                     />
                  </div>
               </div>
            </div>
         </section>

         <section className="bg-gray-50 py-14 md:py-18">
            <div className="container">
               <h3>Car Dealership Areas We Clean</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
                  <div>
                     <p className="md:mb-0">
                        At NJS, we conduct site visits and work closely with you to develop a cleaning plan. Our certified cleaning experts handle
                        dusting, wiping, vacuuming, disinfection, and more for the following areas.
                     </p>
                  </div>
                  <div>
                     <ul className="styled-list">
                        <li>Showroom</li>
                        <li>Service bays</li>
                        <li>Offices</li>
                        <li>Lobbies</li>
                     </ul>
                  </div>
                  <div>
                     <ul className="styled-list">
                        <li>Bathrooms</li>
                        <li>Walls and floors</li>
                        <li>Trash removal</li>
                        <li>Exterior cleaning</li>
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
      heroStacked: file(relativePath: { eq: "industries/car-dealerships/1.0 Car Dealerships Hero Desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      intro: file(relativePath: { eq: "industries/car-dealerships/2.0 dealer cleaning.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
   }
`;
export default Page;
