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
            // backgroundSize=""
            // backgroundPosition=""
            // backgroundRepeat=""
            backgroundFixed={true}
            imageMaxHeight="468px"
            padding="pt-6 md:pt-14"
            headingLevel="h1"
            heading="Hospital Cleaning Services"
            subtext="Thorough sanitation and disinfection for your hospital and medical facility."
            subtextSize="text-2xl-mobile md:text-2xl"
            // textAlignment=""
            textMaxWidth="max-w-3xl"
         >
            <header className="relative">
               <h1>Long Beach Janitorial Services</h1>
               <p className="mb-0">Working hard to keep your workspace clean so you don’t have to.</p>
            </header>
         </HeroStacked>

         <section className="py-20 md:py-32">
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20 items-center">
                  <div>
                     <h2>Keeping Long Beach Businesses Clean</h2>
                     <p className="mb-0">
                        Your business is unique and so should your cleaning services. Not only do we tailor our cleaning and disinfecting to your
                        specific industry requirements, we go above and beyond. Our professional and reliable commercial cleaning experts use only
                        EPA-registered disinfectants and provide thorough cleaning for your office, building, and more. Make great first impressions,
                        prevent illness, and maintain a hygienic and welcoming environment with our Long Beach janitorial services.
                     </p>
                  </div>
                  <div>
                     <GatsbyImage image={data.intro.childImageSharp.gatsbyImageData} />
                  </div>
               </div>
            </div>
         </section>

         <CovidSplit padding="mb-20 md:mb-32" />

         <Clients padding="pb-20 md:pb-32" headingLevel="h2" />

         <Testimonials headingLevel="h2" />

         <WhyUs padding="py-20 md:py-32" headingLevel="h2" />

         <CTA headingLevel="h2" />
      </Layout>
   );
};

export const query = graphql`
   {
      heroStacked: file(relativePath: { eq: "industries/hospitals/hero.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
         }
      }
      intro: file(relativePath: { eq: "industries/hospitals/intro.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
         }
      }
   }
`;
export default Page;
