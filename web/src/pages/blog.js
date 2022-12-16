import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import BlogPostPreview from "../components/Blog/BlogPostGrid";
import GraphQLErrorList from "../components/Blog/graphql-error-list";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage-Reviews.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage-Reviews.jpg" }
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
const ArchivePage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = (data || {}).blogs
    ? mapEdgesToNodes(data.blogs)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <Layout navigationStyle="standard" headerLinkColor="" headerHasBorder={false}>
      <SearchEngineOptimization
        title="Janitorial Services Blog | NJS"
        description="Read the National Janitorial Services blog for all kinds of tips and more. We offer top commercial cleaning for local businesses. Learn more!"
      // openGraphImage={data.openGraphImage.publicURL}
      // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <section className="bg-navy py-16 md:py-20">
        <div className="container">
          <div className="max-w-[617px] mx-auto text-center">
            <h1 className="mb-4 text-primary">Straight From The Experts</h1>
            <div className="divider"></div>
            <p className="">
              Get great cleaning tips for your local business, courtesy of a top commercial janitorial company in Long Beach!Get great cleaning tips for your local business, courtesy of a top commercial janitorial company in Long Beach!
            </p>
          </div>
        </div>
      </section>
      <section className="mb-20 md:mb-32">
        <div className="container">
          {postNodes && postNodes.length > 0 && (
            <BlogPostPreview nodes={postNodes} />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ArchivePage;
