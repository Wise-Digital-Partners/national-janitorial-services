import React from "react";

import RecentPosts from "../Blog/BlogRecentPosts";

const Blog = () => {
   return (
      <section className={``}>
         <div className="container">
            <header className="md-8 md:mb-16">
               <h2>Lorem Ipsum</h2>
               <p className="text-xl md:text-2xl font-heading text-gray-800 font-light">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum</p>
            </header>
            <RecentPosts />
         </div>
      </section>
   );
};

export default Blog;
