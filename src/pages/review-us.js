import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";

const Page = ({ data }) => {
   return (
      <Layout navigationStyle="standard" headerLinkColor="dark" headerHasBorder={false}>
         <SearchEngineOptimization
            title=""
            // description=""
            // openGraphImage={data.openGraphImage.publicURL}
            // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <section className="bg-accent/10 pt-16 pb-20 md:pb-32 md:pt-20">
            <div className="container">
               <div className="mx-auto max-w-3xl">
                  <iframe
                     src="https://national-janitorial-services-reviews-platform.flywheelsites.com"
                     title="Reviews Platform"
                     width="100%"
                     height="1500px"
                     border="0"
                  />
               </div>
            </div>
         </section>
      </Layout>
   );
};

export const query = graphql`
   {
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/Global.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/Global.jpg" }) {
         publicURL
      }
   }
`;

export default Page;
