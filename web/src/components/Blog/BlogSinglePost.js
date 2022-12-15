import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

import BlogRecentPosts from "../Blog/BlogRecentPosts";

const StyledBlogPost = styled.div`
   p,
   li {
      ${tw`text-lg md:text-xl mb-12`}
   }
`;

const Blog = ({ featuredImage, title, category, date, content }) => {
   return (
      <div>
         <section className={`pt-10 md:pt-12 pb-12 md:pb-18`}>
            <div className="container">
               <header className="mb-12 md:mb-14 max-w-3xl mx-auto">
                  <h1>{title}</h1>
                  <div className="font-heading text-gray-700">
                     <span className="font-bold">{category} /</span> <span className="text-gray-700 text-opacity-50"> {date}</span>
                  </div>
               </header>
            </div>

            <GatsbyImage image={featuredImage} alt={title} />

            <div className="container">
               <div className="max-w-3xl mx-auto mt-12 md:mt-16">
                  <StyledBlogPost dangerouslySetInnerHTML={{ __html: content }} />
               </div>
            </div>
         </section>

         <section className={`mb-14 md:mb-28`}>
            <div className="container">
               <BlogRecentPosts />
            </div>
         </section>
      </div>
   );
};

export default Blog;
