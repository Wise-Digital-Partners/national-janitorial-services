import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroFullWidth from "../components/Hero/HeroFullWidth";
import Testimonials from "../components/Repeating/Testimonials";
import Clients from "../components/Repeating/Clients";
import WhyUs from "../components/Repeating/WhyUs";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
   const heroFullWidthImages = [
      getImage(data.heroFullWidthDesktop.childImageSharp.gatsbyImageData),
      {
         ...getImage(data.heroFullWidthMobile.childImageSharp.gatsbyImageData),
         media: `(max-width: 767px)`,
      },
   ];
   return (
      <Layout navigationStyle="standard" headerLinkColor="" headerHasBorder={false}>
         <SearchEngineOptimization
            title="About LBJ | Commercial Janitorial Services Company"
            description="With over 5 years and more than 100 accounts served, Long Beach Janitorial is your trusted partner in keeping your business spotless and safe."
            openGraphImage={data.openGraphImage.publicURL}
            twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <HeroFullWidth
            backgroundImages={heroFullWidthImages}
            padding="pt-24 md:pt-32 pb-40 md:pb-56"
            textAlignment="text-left"
            textMaxWidth="max-w-xl"
         >
            <h1>About Long Beach Janitorial</h1>
            <p className="mb-0">
               Over 5 years of experience. More than 100 accounts served, Long Beach Janitorial is your trusted partner in keeping your
               business spotless and safe. We use effective tools to ensure the best possible cleaning for your workplace, building, or facility. Our
               highly qualified team handles your business with the utmost professionalism and care for janitorial services you can rely on.
            </p>
         </HeroFullWidth>

         <div className="container">
            <section className="relative py-10 md:pt-12 pb-20 md:pb-24 px-6 md:px-12 lg:px-20 bg-white shadow-3xl rounded-xl overflow-hidden -mt-20 md:-mt-26 mb-24 md:mb-44">
               <header className="text-center mb-10 md:mb-16">
                  <h2>Our Core Values</h2>
               </header>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-10 items-center text-center">
                  <div>
                     <img src={data.integrity.publicURL} alt="Integrity" className="mx-auto mb-2" />
                     <p className="font-heading text-gray-700 text-xl uppercase font-bold mb-1">Integrity</p>
                     <p className="mb-0">At LBJ, our word is our bond. Count on our team to do what we say we will for quality you can trust.</p>
                  </div>
                  <div>
                     <img src={data.reliability.publicURL} alt="Reliability" className="mx-auto mb-2" />
                     <p className="font-heading text-gray-700 text-xl uppercase font-bold mb-1">Reliability</p>
                     <p className="mb-0">Our expert team gets the job done on time and up to the highest standards required for your industry.</p>
                  </div>
                  <div>
                     <img src={data.exceptional.publicURL} alt="Exceptional Service" className="mx-auto mb-2" />
                     <p className="font-heading text-gray-700 text-xl uppercase font-bold mb-1">Exceptional Service</p>
                     <p className="mb-0">We strive for nothing less than excellence and professionalism in everything we do.</p>
                  </div>
               </div>
            </section>
         </div>

         <section className="pb-16 md:pb-32">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 max-w-3xl mx-auto text-center">
                  <div>
                     <h2 className="mb-10 md:mb-16">Meet the Team</h2>
                     <GatsbyImage image={data.patrick.childImageSharp.gatsbyImageData} alt="Patrick Dillon - Owner" className="mb-5" />
                     <p className="font-heading text-gray-700 text-3xl font-bold mb-2.5">Patrick Dillon</p>
                     <p className="font-heading text-gray-400 text-3xl mb-0">Owner</p>
                  </div>
                  <div>
                     <GatsbyImage image={data.kris.childImageSharp.gatsbyImageData} alt="Kris Villareal - Office Manager" className="mb-5" />
                     <p className="font-heading text-gray-700 text-3xl font-bold mb-2.5">Kris Villareal</p>
                     <p className="font-heading text-gray-400 text-3xl mb-0">Office Manager</p>
                  </div>
               </div>
            </div>
         </section>

         <Testimonials headingLevel="h2" />

         <Clients className="pt-16 md:pt-32 mb-16 md:mb-32" headingLevel="h2" />

         <WhyUs className="pb-16 md:pb-32" headingLevel="h2" />

         <CallToAction headingLevel="h2" />
      </Layout>
   );
};

export const query = graphql`
   {
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/About_FB.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/About_TW.jpg" }) {
         publicURL
      }
      heroFullWidthDesktop: file(relativePath: { eq: "about/1.0 About Hero.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      heroFullWidthMobile: file(relativePath: { eq: "about/1.0 About Hero.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      exceptional: file(relativePath: { eq: "about/2.0 exceptional.svg" }) {
         publicURL
      }
      integrity: file(relativePath: { eq: "about/2.0 integrity.svg" }) {
         publicURL
      }
      reliability: file(relativePath: { eq: "about/2.0 reliability.svg" }) {
         publicURL
      }
      patrick: file(relativePath: { eq: "about/3.0 Patrick.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      kris: file(relativePath: { eq: "about/kris.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
   }
`;
export default Page;
