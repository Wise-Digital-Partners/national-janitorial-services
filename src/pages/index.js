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
            title=""
            description=""
            // openGraphImage={data.openGraphImage.publicURL}
            // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <HeroFullWidth
            backgroundImages={heroFullWidthImages}
            // backgroundSize=""
            // backgroundPosition=""
            // backgroundRepeat=""
            padding="pt-48 md:pt-64 pb-12 md:pb-64"
            textAlignment="text-left"
            textMaxWidth="max-w-3xl"
         >
            <header className="relative">
               <p className="text-mobile-6xl md:text-6xl font-display font-black text-gray-800 uppercase mb-4">Reliable. Local. Professional.</p>
               <p className="text-mobile-2xl md:text-2xl text-gray-900 mb-10">Keeping workspaces clean, employees safe, and your mind at peace.</p>
               <div className="grid md:flex gap-y-6 md:items-center">
                  <ButtonSolid data="modal-contact" text="Get a Free Estimate" className="md:mr-6" />
                  <ButtonGhost href="tel:+1-123-456-7890" text="123-456-7890" />
               </div>
            </header>
         </HeroFullWidth>

         <section className="py-20 md:py-32">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-10 lg:gap-x-20 gap-y-10 items-center">
                  <div className="md:col-start-1 md:col-span-5 order-2 md:order-1">
                     <GatsbyImage image={data.intro.childImageSharp.gatsbyImageData} />
                  </div>
                  <div className="md:col-end-13 md:col-span-7 order-1 md:order-2">
                     <h1>A Top Commercial Janitorial Services Company In Long Beach</h1>
                     <p className="mb-0">
                        In a COVID-19 world, professional cleaning is more important than ever before. Keep your business spotless and safe for your
                        customers and employees with National Janitorial Services. Our commercial janitorial services company serves Long Beach and
                        beyond while following the highest cleaning standards your industry requires. Leave the building maintenance and sanitation to
                        us so you can focus on growing your business.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <Covid headingLevel="h2" />

         <Services padding="py-20 md:py-32" headingLevel="h2" cardHeadingLevel="h3" />

         <Testimonials headingLevel="h2" />

         <About padding="py-20 md:py-32" headingLevel="h2" />

         <Clients headingLevel="h2" />

         <WhyUs padding="py-20 md:py-32" headingLevel="h2" />

         <CTA headingLevel="h2" />
      </Layout>
   );
};

export const query = graphql`
   {
      heroFullWidthDesktop: file(relativePath: { eq: "home/hero.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      heroFullWidthMobile: file(relativePath: { eq: "home/hero.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      intro: file(relativePath: { eq: "home/intro.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
   }
`;
export default Page;
