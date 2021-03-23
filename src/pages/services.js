import React from "react";
// import { graphql } from "gatsby";
import Services from "../components/Repeating/Services";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Covid from "../components/Repeating/Covid";

const Page = ({ data }) => {
   return (
      <Layout headerStyle="overlap" headerLinkColor="" headerHasBorder={false}>
         <SEO
            title=""
            description=""
            // openGraphImage={data.openGraphImage.publicURL}
            // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <section className="pt-24 md:pt-36 pb-20 md:pb-26">
            <div className="container">
               <header className="text-center max-w-3xl mx-auto">
                  <h1>Our Commercial Cleaning Services </h1>
                  <p className="text-2xl mb-0">
                     When your business needs professional cleaning, disinfecting, and reliable maintenance, we have what you need. Learn more about
                     how we help businesses like yours stay clean, compliant, and client-focused.
                  </p>
               </header>
            </div>
         </section>

         <Covid headingLevel="h2" />

         <Services padding="py-20 md:py-32" cardHeadingLevel="h3" />
      </Layout>
   );
};

// export const query = graphql``;
export default Page;
