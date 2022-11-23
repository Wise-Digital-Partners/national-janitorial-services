import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Blog = () => {
   const data = useStaticQuery(graphql`
      {
         blogPostThumbnail: file(relativePath: { eq: "blog/373x280.png" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
      }
   `);

   return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-12 lg:gap-y-14 md:gap-x-6 lg:gap-x-10">
         <div>
            <div className="relative overflow-hidden mb-6">
               <a href="/blog-post/">
                  <Img
                     image={data.blogPostThumbnail.childImageSharp.gatsbyImageData}
                     className="transform scale-100 hover:scale-110 transition-all duration-500 ease-linear mb-0"
                     alt="Blog post thumbnail"
                  />
               </a>
            </div>
            <span className="font-heading text-lg font-semibold text-gray-700 block mb-0">Blog Title Goes Here</span>
         </div>
         <div>
            <div className="relative overflow-hidden mb-6">
               <a href="# ">
                  <GatsbyImage
                     image={data.blogPostThumbnail.childImageSharp.gatsbyImageData}
                     className="transform scale-100 hover:scale-110 transition-all duration-500 ease-linear mb-0"
                     alt="Blog post thumbnail"
                  />
               </a>
            </div>
            <span className="font-heading text-lg font-semibold text-gray-700 block mb-0">Blog Title Goes Here</span>
         </div>
         <div>
            <div className="relative overflow-hidden mb-6">
               <a href="# ">
                  <Img
                     image={data.blogPostThumbnail.childImageSharp.gatsbyImageData}
                     className="transform scale-100 hover:scale-110 transition-all duration-500 ease-linear mb-0"
                     alt="Blog post thumbnail"
                  />
               </a>
            </div>
            <span className="font-heading text-lg font-semibold text-gray-700 block mb-0">Blog Title Goes Here</span>
         </div>
      </div>
   );
};

export default Blog;
