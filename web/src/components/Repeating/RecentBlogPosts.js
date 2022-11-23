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
          <header className="mb-12 md:mb-16">
            <HeadingTag>Roofing Tips From the Experts</HeadingTag>
            <div className="divider"></div>
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
