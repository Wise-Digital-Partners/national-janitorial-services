import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import BlogPostGrid from "../components/Blog/BlogPostGrid";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import CallToAction from "../components/Repeating/CTA";

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "Open Graph/Facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "Open Graph/Twitter/Homepage.jpg" }
    ) {
      publicURL
    }
    blogs: allSanityBlogs(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
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
          categories {
            _id
            title
          }
          title
          slug {
            current
          }
          _rawBody(resolveReferences: { maxDepth: 5 })
        }
      }
    }
  }
`;

const Page = ({ data }) => {
  const postNodes =
    data &&
    data.blogs &&
    mapEdgesToNodes(data.blogs)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture);

  return (
    <Layout>
      <SearchEngineOptimization
        title="Roofing Blog | San Diego | Ascent Roofing"
        description="The Ascent Roofing blog brings you all kinds of tips on commericial & residential roofing, maintenance, repair, and other information that can help you."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="bg-navy py-16 md:py-20">
        <div className="container">
          <div className="max-w-[617px]">
            <h1 className="mb-4 text-white">Roofing Tips From the Experts</h1>
            <div className="divider"></div>
            <p className="text-white">
              See what we’re up in the Ascent Roofing blog, covering all things
              roof repair and replacement.
            </p>
          </div>
        </div>
      </section>

      <div className="relative mb-20 md:mb-24">
        <StaticImage
          src="../images/1.0 Homepage/1.2 Accent.jpg"
          loading="lazy"
          className="h-8"
        />
      </div>

      <section className="mb-20 md:mb-32">
        <div className="container">
          {postNodes && postNodes.length > 0 && (
            <BlogPostGrid nodes={postNodes} />
          )}
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
};

export default Page;
