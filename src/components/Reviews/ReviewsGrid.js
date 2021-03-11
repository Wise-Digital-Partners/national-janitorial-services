import React from "react";
// import Img from "gatsby-image"
import Masonry from "react-masonry-component";
import styled from "@emotion/styled";
import tw from "twin.macro";

import ReviewCards from "./ReviewCards";

export const Reviews = ({ gridLayout }) => {
   const StyledReviews = styled.div`
      .masonry-grid {
         ${tw`-mb-8`}
         @media (min-width: 768px) {
            ${tw`-mx-3 -mb-10`}
         }
         @media (min-width: 1024px) {
            ${tw`-mx-5 -mb-12`}
         }
      }
   `;
   const masonryOptions = {
      itemSelector: ".masonry-item",
      horizontalOrder: true,
   };

   let gridClass = null;

   if (gridLayout === "masonry") {
      gridClass = "masonry-grid";
   } else if (gridLayout === "standard") {
      gridClass = "grid";
   }

   return (
      <div>
         <StyledReviews>
            <Masonry className={`${gridClass}`} options={masonryOptions}>
               <ReviewCards gridLayout={gridLayout} />
            </Masonry>
         </StyledReviews>
      </div>
   );
};

export default Reviews;
