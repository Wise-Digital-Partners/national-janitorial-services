import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Blog = () => {
   const data = useStaticQuery(graphql`
      {
         blogPostThumbnail: file(relativePath: { eq: "blog/373x280.png" }) {
            childImageSharp {
               fluid(maxWidth: 373, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
      }
   `);

   return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-12 lg:gap-y-14 md:gap-x-6 lg:gap-x-10">
         <div>
            <div className="relative overflow-hidden mb-6">
               <AniLink fade to="/blog-post/">
                  <Img
                     fadeIn={true}
                     loading="eager"
                     className="transform scale-100 hover:scale-110 transition-all duration-500 ease-linear mb-0"
                     fluid={data.blogPostThumbnail.childImageSharp.fluid}
                     alt="Blog post thumbnail"
                  />
               </AniLink>
            </div>
            <span className="font-heading text-lg font-semibold text-gray-800 block mb-0">Blog Title Goes Here</span>
         </div>
         <div>
            <div className="relative overflow-hidden mb-6">
               <AniLink fade to="#">
                  <Img
                     fadeIn={true}
                     loading="eager"
                     className="transform scale-100 hover:scale-110 transition-all duration-500 ease-linear mb-0"
                     fluid={data.blogPostThumbnail.childImageSharp.fluid}
                     alt="Blog post thumbnail"
                  />
               </AniLink>
            </div>
            <span className="font-heading text-lg font-semibold text-gray-800 block mb-0">Blog Title Goes Here</span>
         </div>
         <div>
            <div className="relative overflow-hidden mb-6">
               <AniLink fade to="#">
                  <Img
                     fadeIn={true}
                     loading="eager"
                     className="transform scale-100 hover:scale-110 transition-all duration-500 ease-linear mb-0"
                     fluid={data.blogPostThumbnail.childImageSharp.fluid}
                     alt="Blog post thumbnail"
                  />
               </AniLink>
            </div>
            <span className="font-heading text-lg font-semibold text-gray-800 block mb-0">Blog Title Goes Here</span>
         </div>
      </div>
   );
};

export default Blog;
