import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HeroFullWidth from "../components/Hero/HeroFullWidth";
import Covid from "../components/Repeating/Covid";
import Services from "../components/Repeating/Services";
import Testimonials from "../components/Repeating/Testimonials";
import About from "../components/Repeating/About";
import Clients from "../components/Repeating/Clients";
import WhyUs from "../components/Repeating/WhyUs";
import CTA from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonGhost from "../components/Button/ButtonGhost";

const Page = ({ data }) => {
   const heroFullWidthImages = [
      getImage(data.heroFullWidthDesktop.childImageSharp.gatsbyImageData),
      {
         ...getImage(data.heroFullWidthMobile.childImageSharp.gatsbyImageData),
         media: `(max-width: 767px)`,
      },
   ];
   return (
      <Layout headerStyle="overlap" headerLinkColor="" headerHasBorder={false}>
         <SEO
            title="Orange County Janitorial Services | Commercial Cleaning"
            description="For Orange County janitorial services you can depend on, choose National Janitorial Services. We offer top commercial cleaning for your business. Learn more!"
            openGraphImage={data.openGraphImage.publicURL}
            twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <HeroFullWidth
            backgroundImages={heroFullWidthImages}
            padding="pt-40 md:pt-64 pb-18 md:pb-64 pr-6 md:mr-0"
            textAlignment="text-left"
            textMaxWidth="max-w-4xl"
         >
            <p className="text-mobile-7xl md:text-7xl font-display font-black text-accent uppercase mb-6 md:mb-2">
               Orange County Janitorial Services
            </p>
            <p className="text-xl md:text-3xl text-accent mb-7 md:mb-10">Keeping workspaces clean, employees safe, and your mind at peace.</p>
            <div className="grid  gap-y-6 md:flex md:items-center">
               <ButtonSolid as="button" modal="modal-contact" text="Get a Free Estimate" className="md:mr-6" />
               <ButtonGhost href="tel:+1-424-260-7369" text="(424) 260-7369" />
            </div>
         </HeroFullWidth>

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-10 lg:gap-x-20 gap-y-10 items-center">
                  <div className="md:col-start-1 md:col-span-5 order-2 md:order-1">
                     <GatsbyImage
                        image={data.introDesktop.childImageSharp.gatsbyImageData}
                        alt="A Top Commercial Janitorial Services Company in Orange County"
                        className="hidden md:block"
                     />
                     <GatsbyImage
                        image={data.introMobile.childImageSharp.gatsbyImageData}
                        alt="A Top Commercial Janitorial Services Company in Orange County"
                        className="md:hidden"
                     />
                  </div>
                  <div className="md:col-end-13 md:col-span-7 order-1 md:order-2">
                     <h1>A Top Commercial Janitorial Services Company in Orange County</h1>
                     <p className="mb-0">
                        In a COVID-19 world, professional cleaning is more important than ever before. Keep your business spotless and safe for your
                        customers and employees with National Janitorial Services. Our commercial janitorial services company serves Orange County and
                        beyond while following the highest cleaning standards your industry requires. Leave the building maintenance and sanitation to
                        us so you can focus on growing your business.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <Covid headingLevel="h2" />

         <Services className="py-16 md:py-32" headingLevel="h2" cardHeadingLevel="h3" />

         <Testimonials headingLevel="h2" />

         <About className="pt-16 md:pt-32 mb-16 md:mb-32" headingLevel="h2" />

         <Clients className="mb-16 md:mb-32" headingLevel="h2" />

         <WhyUs className="pb-16 md:pb-32" headingLevel="h2" />

         <CTA headingLevel="h2" heading="Comprehensive Janitorial Services for Orange County Businesses" />

         <section className="py-16 md:py-32">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-10 items-center">
                  <div>
                     <h2>Why We Love Orange County</h2>
                     <p className="mb-0">
                        Orange County is home to the Happiest Place on Earth, Disneyland. It’s also home to many thriving businesses, from resorts at
                        beach towns, restaurants, retail, and more. Enjoy sunny skies and the great outdoors, or roam around the urban parks and
                        appreciate art, good food, and more. NJS is proud to offer Orange County businesses for their commercial cleaning needs.
                     </p>
                  </div>
                  <div>
                     <GatsbyImage image={data.whyWeLove.childImageSharp.gatsbyImageData} alt="Why We Love Orange County" />
                  </div>
               </div>
            </div>
         </section>
      </Layout>
   );
};

export const query = graphql`
   {
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/Homepage_FB.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/Homepage_TW.jpg" }) {
         publicURL
      }
      heroFullWidthDesktop: file(relativePath: { eq: "home/1.0-hero-desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      heroFullWidthMobile: file(relativePath: { eq: "home/1.0-hero-mobile.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      introDesktop: file(relativePath: { eq: "home/2.0 Intro Desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      introMobile: file(relativePath: { eq: "home/2.0 Intro Mobile.png" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      whyWeLove: file(relativePath: { eq: "cities/OC.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
   }
`;
export default Page;
