import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import GraphQLErrorList from "../Blog/graphql-error-list";
import {
  mapEdgesToNodes,
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
} from "../../lib/helpers";
import BlogPostPreview from "../Blog/BlogPostPreview";

const RecentBlogPosts = ({ node, headingLevel, className }) => {
  const data = useStaticQuery(graphql`
    {
      posts: allSanityBlogs(
        sort: { fields: [publishedAt], order: DESC }
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
        limit: 3
      ) {
        edges {
          node {
            id
            publishedAt
            featuredImage {
              asset {
                gatsbyImageData
              }
            }
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const errors = node;

  if (errors) {
    return <GraphQLErrorList errors={errors} />;
  }

  const blogNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  const HeadingTag = headingLevel || "h2";

  return (
    <>
      <section className={` ${className || "pb-20 md:pb-32"}`}>
        <div className="container">
          <header className="mb-12 text-center md:mb-16">
            <HeadingTag>
              {" "}
              <h2 className="bg-secondary-900  top-10 left-0 z-10 flex w-full flex-col space-y-4 rounded-b-3xl border-none px-8 pb-4 text-4xl  md:relative md:top-0 md:mb-16 md:flex-row md:space-y-0 md:space-x-10 md:rounded-none md:bg-transparent md:p-0 md:after:absolute md:after:top-14 md:after:-bottom-4 md:after:left-0 md:after:h-1 md:after:w-14 md:after:bg-primary-900 ">
                Blog
              </h2>
            </HeadingTag>
          </header>
          <div className="grid gap-y-10 md:grid-cols-3 md:gap-x-6 lg:gap-x-8">
            {blogNodes.length > 0 &&
              blogNodes.map((node) => (
                <div key={node.id}>
                  <BlogPostPreview {...node} isInList />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentBlogPosts;
