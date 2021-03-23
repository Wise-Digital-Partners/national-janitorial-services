import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

const ReviewCards = ({ gridLayout }) => {
   const StyledReviewCards = styled.div`
      .masonry-item {
         ${tw`w-full border border-solid border-gray-300 border-opacity-30 md:mx-3 lg:mx-5 mb-8 md:mb-10 p-6 md:p-10`}
         @media (min-width: 768px) {
            width: calc(50% - 1.5rem);
         }
         @media (min-width: 1024px) {
            width: calc(50% - 2.5rem);
         }
      }
   `;
   const data = useStaticQuery(graphql`
      {
         yelp: file(relativePath: { eq: "reviews/yelp.png" }) {
            childImageSharp {
               fixed(width: 70, quality: 100) {
                  ...GatsbyImageSharpFixed
               }
            }
         }
         google: file(relativePath: { eq: "reviews/google.png" }) {
            childImageSharp {
               fixed(width: 76, quality: 100) {
                  ...GatsbyImageSharpFixed
               }
            }
         }
         facebook: file(relativePath: { eq: "reviews/facebook.png" }) {
            childImageSharp {
               fixed(width: 95, quality: 100) {
                  ...GatsbyImageSharpFixed
               }
            }
         }
         houzz: file(relativePath: { eq: "reviews/houzz.png" }) {
            childImageSharp {
               fixed(width: 98, quality: 100) {
                  ...GatsbyImageSharpFixed
               }
            }
         }
         thumbtack: file(relativePath: { eq: "reviews/thumbtack.png" }) {
            childImageSharp {
               fixed(width: 124, quality: 100) {
                  ...GatsbyImageSharpFixed
               }
            }
         }
         headshot: file(relativePath: { eq: "reviews/User.svg" }) {
            publicURL
         }
      }
   `);

   let gridItemClass = null;

   if (gridLayout === "masonry") {
      gridItemClass = "masonry-item";
   } else if (gridLayout === "standard") {
      gridItemClass = "grid-item";
   }

   return (
      <StyledReviewCards>
         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-700 font-heading font-bold">Patrick Dillon</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  I recently worked with Design Appruv to develop construction plans for a home addition. This company is amazing. They made the
                  process so simple, and helped us get through the approval process very smoothly. I would recommend them, especially if you're going
                  through this for the first time!
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
            </div>
         </div>
      </StyledReviewCards>
   );
};

export default ReviewCards;
