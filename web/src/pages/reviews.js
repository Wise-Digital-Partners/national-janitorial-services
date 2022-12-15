import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ButtonSolid from "../components/Button/ButtonSolid";
import ReviewCards from "../components/Reviews/ReviewCards";

const Page = ({ data }) => {
   return (
      <Layout navigationStyle="standard" headerLinkColor="dark" headerHasBorder={false}>
         <SearchEngineOptimization
            title=""
            description=""
         // openGraphImage={data.openGraphImage.publicURL}
         // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />
         <section className="relative overflow-hidden py-16 md:py-24">
            <div className="absolute left-0 top-0 h-full w-full ">
               <StaticImage src="../images/reviews/Hero.jpg" loading="eager" className="h-full" />
            </div>
            <div className="container">
               <div className="relative mx-auto max-w-[800px] text-center">
                  <h1 className="text-white">Our Ambassadors</h1>
                  <p className="text-white text-lg md:text-2xl">
                     Read feedback from our valued clients. And if you’re already working with us, please take a moment to share!
                  </p>

                  <ButtonSolid href="/review-us/" text="Leave a Review" />
               </div>
            </div>
         </section>

         <section className="bg-primary-50 pt-16 pb-12 md:pt-20 md:pb-16">
            <div className="container">
               <div className="mb-16 md:mb-22 md:columns-2 md:gap-x-12">
                  <ReviewCards />
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
