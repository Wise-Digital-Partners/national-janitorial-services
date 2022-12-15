import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { differenceInDays, formatDistance, format } from "date-fns";
import styled from "@emotion/styled";
import tw from "twin.macro";
// import Link from "gatsby-plugin-transition-link";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

// import {
//   filterOutDocsPublishedInTheFuture,
//   filterOutDocsWithoutSlugs,
//   mapEdgesToNodes,
// } from "../../lib/helpers";
import PortableText from "./portableText";
// import Newsletter from "../Form/Newsletter";
// import BlogPostPreview from "./BlogPostPreview";
import RecentBlogPosts from "../Repeating/RecentBlogPosts";
import CTA from "../Repeating/CTA2";
// import ButtonSolid from "../Button/ButtonSolid";

const StyledContent = styled.div`
  p,
  span,
  li {
    ${tw`md:text-xl`}
  }
  ul {
    ${tw`list-disc pl-7 mb-6 flex flex-col space-y-0.5`}
  }
  ol {
    ${tw`list-decimal pl-7 mb-6 flex flex-col space-y-0.5`}
  }
  strong {
    ${tw`font-bold`}
  }
  em {
    ${tw`italic`}
  }
`;

function BlogPost(props) {
  const {
    siteMetadata,
    // next,
    // prev,
    slug,
    _rawBody,
    author,
    // categories,
    title,
    featuredImage,
    publishedAt,
  } = props;

  // const data = useStaticQuery(graphql`
  //   {
  //     posts: allSanityBlogs(
  //       sort: { fields: [publishedAt], order: DESC }
  //       filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
  //     ) {
  //       edges {
  //         node {
  //           id
  //           publishedAt
  //           featuredImage {
  //             asset {
  //               gatsbyImageData
  //             }
  //           }
  //           categories {
  //             _id
  //             title
  //           }
  //           title
  //           slug {
  //             current
  //           }
  //           _rawBody(resolveReferences: { maxDepth: 5 })
  //         }
  //       }
  //     }
  //   }
  // `);

  // const currentPostCategory =
  //   categories.length > 0 &&
  //   categories.slice(0, 1).map((category) => category.title);

  // let postNodes = [];

  // categories.length > 0
  //   ? (postNodes = (data || {}).posts
  //       ? mapEdgesToNodes(data.posts)
  //           .filter(filterOutDocsWithoutSlugs)
  //           .filter(filterOutDocsPublishedInTheFuture)
  //           .filter((items) =>
  //             items.categories.find(
  //               (item) => item.title === currentPostCategory
  //             )
  //           )
  //       : [])
  //   : (postNodes = (data || {}).posts
  //       ? mapEdgesToNodes(data.posts)
  //           .filter(filterOutDocsWithoutSlugs)
  //           .filter(filterOutDocsPublishedInTheFuture)
  //       : []);

  return (
    <>
      <section className="mb-10 pt-12 md:mb-12 md:pt-20">
        <div className="container relative">
          <div className="mx-auto max-w-[800px]">
            <header className="mb-4">
              <h1>{title}</h1>
            </header>

            <div className="flex items-center justify-between space-y-8">
              <div>
                <div className="flex items-center space-x-3.5">
                  {author && author.image && (
                    <GatsbyImage
                      image={author.image.asset.gatsbyImageData}
                      loading="lazy"
                      className="z-0 h-12 w-12 rounded-full"
                    />
                  )}

                  <div>
                    <div>
                      {author && (
                        <div className="text-sm text-typography-heading">
                          By <b>{author.name}</b>
                        </div>
                      )}
                    </div>

                    {publishedAt && (
                      <div className="text-sm text-typography-heading/70">
                        {differenceInDays(new Date(publishedAt), new Date()) > 3
                          ? formatDistance(new Date(publishedAt), new Date())
                          : format(new Date(publishedAt), "MMMM d, yyyy")}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div className="hidden items-center space-x-7 md:flex">
                  <FacebookShareButton
                    url={`${siteMetadata.siteUrl}/${slug.current}/`}
                    quote={title}
                    className="no-underline"
                  >
                    <i className="fab fa-facebook-f text-xl text-primary transition-colors duration-300 ease-linear hover:text-primary/50"></i>
                  </FacebookShareButton>

                  <LinkedinShareButton
                    url={`${siteMetadata.siteUrl}/${slug.current}/`}
                    title={title}
                    className="no-underline"
                  >
                    <i className="fab fa-linkedin-in hover:text-primary/50 text-xl text-primary transition-colors duration-300 ease-linear"></i>
                  </LinkedinShareButton>

                  <TwitterShareButton
                    url={`${siteMetadata.siteUrl}/${slug.current}/`}
                    title={title}
                    className="no-underline"
                  >
                    <i className="fab fa-twitter text-xl text-primary transition-colors duration-300 ease-linear hover:text-primary/50"></i>
                  </TwitterShareButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="mb-20 md:mb-32">
        <div className="container">
          <div className="mx-auto max-w-[800px]">
            {featuredImage && featuredImage.asset && (
              <div className="mb-12 md:mb-16">
                <GatsbyImage
                  image={props.featuredImage.asset.gatsbyImageData}
                  loading="lazy"
                />
              </div>
            )}

            <StyledContent>
              {_rawBody && <PortableText blocks={_rawBody} />}
            </StyledContent>

            <div className="mt-14 md:mt-16">
              {/* <div className="mb-2.5 text-center text-sm font-bold uppercase tracking-wider text-primary-900">
                Share
              </div> */}
              <div className="flex items-center justify-center space-x-6">

              </div>
            </div>

            {/* <div className="mt-16 flex justify-between">
              {prev ? (
                <Link
                  
                  to={`/${prev.slug.current}/`}
                  className="group inline-flex items-center justify-center space-x-2.5 font-bold text-primary hover:text-primary/50"
                >
                  <i className="far fa-arrow-left relative right-0 text-xl transition-all duration-300 ease-linear group-hover:right-1.5"></i>{" "}
                  <span>Previous</span>
                </Link>
              ) : (
                <div></div>
              )}
              {next ? (
                <Link
                  
                  to={`/${next.slug.current}/`}
                  className="group inline-flex items-center justify-center space-x-2.5 font-bold text-primary hover:text-primary/50"
                >
                  <span>Next</span>
                  <i className="far fa-arrow-right relative left-0 text-xl transition-all duration-300 ease-linear group-hover:left-1.5"></i>
                </Link>
              ) : (
                <div></div>
              )}
            </div> */}
          </div>
        </div>
      </article>

      {/* <section className="pb-20 md:pb-32">
        <div className="container">
          <div className="mb-8 flex items-center justify-between md:mb-10">
            <h2 className="mb-0">Recent Articles</h2>
            <ButtonSolid
              altStyle={3}
              href="/small-business-accounting-blog/"
              text="Read All Articles"
              className="hidden md:inline-flex"
            />
          </div>

          {postNodes && postNodes.length > 0 && (
            <div className="mb-10 md:mb-0">
              {postNodes.slice(0, 2).map((node) => (
                <div key={node.id}>
                  <BlogPostPreview {...node} isInList />
                </div>
              ))}
            </div>
          )}

          <ButtonSolid
            altStyle={3}
            href="/small-business-accounting-blog/"
            text="Read All Articles"
            className="md:hidden"
          />
        </div>
      </section> */}
<RecentBlogPosts/>
      <CTA class="pt-16 md:pt-32 mb-16 md:mb-32" />
    </>
  );
}

export default BlogPost;
