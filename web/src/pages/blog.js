import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import BlogPostGrid from "../components/Blog/BlogPostGrid";
import CTA from "../components/Repeating/CTA2";
import {
    filterOutDocsPublishedInTheFuture,
    filterOutDocsWithoutSlugs,
    mapEdgesToNodes,
} from "../lib/helpers";



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
          title="Janitorial Services Blog | NJS"
          description="Read the National Janitorial Services blog for all kinds of tips and more. We offer top commercial cleaning for local businesses. Learn more!"
            // openGraphImage={data.openGraphImage}
            // twitterOpenGraphImage={data.twitterOpenGraphImage}
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
                        <BlogPostGrid nodes={postNodes} />
                    )}
                </div>
            </section>
        <CTA class="pt-16 md:pt-32 mb-16 md:mb-32" />

        </Layout>
    );
};

export default Page;
