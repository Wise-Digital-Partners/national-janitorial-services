import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Slider from "../../Slider/SliderTestimonials";

const StyledSlider = styled.div`
   ${tw`relative`}
   .slick-prev,
    .slick-next {
      ${tw`border-white`}
      i {
         ${tw`text-white`}
      }
   }
   .slick-dots {
      ${tw`left-0 relative! mt-6`}
      li {
         &.slick-active {
            button {
               ${tw`bg-white`}
            }
         }
      }
      button {
         ${tw`bg-white bg-opacity-40`}
      }
   }
   blockquote {
      ${tw`max-w-4xl mx-auto`}
   }
   q {
      ${tw`text-white mb-6 md:mb-10`}
   }
   footer {
      ${tw`mt-10`}
      @media (min-width: 768px) {
         ${tw`mt-22`}
      }
      span {
         ${tw`block text-white text-opacity-90 font-heading font-bold`}
      }
      cite {
         ${tw`text-sm md:text-base uppercase opacity-80 not-italic`}
      }
   }
`;

const StyledTestimonial = styled.div`
   ${tw`flex!`}
   padding-top: ${({ paddingTopMobile }) => {
      return paddingTopMobile;
   }};
   padding-bottom: ${({ paddingBottomMobile }) => {
      return paddingBottomMobile;
   }};
   @media (min-width: 768px) {
      padding-top: ${({ paddingTopDesktop }) => {
         return paddingTopDesktop;
      }};
      padding-bottom: ${({ paddingBottomDesktop }) => {
         return paddingBottomDesktop;
      }};
   }
   .gatsby-image-wrapper {
      ${tw`absolute!`}
   }
`;

const Testimonial = ({
   className,
   backgroundSize = "cover",
   backgroundPosition = "50% 50%",
   paddingTopDesktop = "125px",
   paddingTopMobile = "85px",
   paddingBottomDesktop = "125px",
   paddingBottomMobile = "85px",
}) => {
   const data = useStaticQuery(graphql`
      {
         ctaBannerDesktop: file(relativePath: { eq: "repeating/testimonials/Testimonials Background_Desktop.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, quality: 100)
            }
         }
         ctaBannerMobile: file(relativePath: { eq: "repeating/testimonials/Testimonials BG_Mobile.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, quality: 100)
            }
         }
         stars: file(relativePath: { eq: "repeating/testimonials/Stars.svg" }) {
            publicURL
         }
      }
   `);

   const backgroundImages = withArtDirection(getImage(data.ctaBannerDesktop.childImageSharp.gatsbyImageData), [
      {
         media: "(max-width: 767px)",
         image: getImage(data.ctaBannerMobile.childImageSharp.gatsbyImageData),
      },
   ]);

   return (
      <StyledTestimonial
         className={`relative ${className}`}
         paddingTopDesktop={paddingTopDesktop}
         paddingTopMobile={paddingTopMobile}
         paddingBottomDesktop={paddingBottomDesktop}
         paddingBottomMobile={paddingBottomMobile}
      >
         <GatsbyImage
            image={backgroundImages}
            className="absolute left-0 top-0 w-full h-full"
            objectFit={backgroundSize}
            objectPosition={backgroundPosition}
         />
         <div className="container">
            <StyledSlider>
               <div className="max-w-3xl mx-auto text-center">
                  <header className="mb-8 md:mb-10">
                     <img src={data.stars.publicURL} alt="5 Stars" className="mb-6 mx-auto" />
                     <h2 className="text-white font-bold">Design Tested, Client Appruv’d</h2>
                  </header>
                  <Slider>
                     <div>
                        <blockquote>
                           <q>
                              Highly recommend! Seth, the owner, was prompt, knowledgeable and clear. He gave us upfront and transparent pricing for
                              his firm as well as other expected costs along the way – no surprises. Design Appruv has been very responsive,
                              communicative and excellent to work with. Very happy with our partnership. Comment end{" "}
                           </q>
                           <footer>
                              <span>
                                 &mdash;&mdash;&mdash; <cite>Mr J | Thumbtack</cite>
                              </span>
                           </footer>
                        </blockquote>
                     </div>
                     <div>
                        <blockquote>
                           <q>
                              Once we heard about the new Accessory Dwelling Unit laws and reduced city fees, my wife and I became more interested in
                              building an ADU. We connected with Seth and Design Appruv, and they held our hands and answered a considerable amount of
                              questions for weeks prior to hiring their firm. They were always available, professional, and supportive. We are so
                              thrilled with the outcome! Thanks for your hard work!
                           </q>
                           <footer>
                              <span>
                                 &mdash;&mdash;&mdash; <cite>Andrew Lottinger</cite>
                              </span>
                           </footer>
                        </blockquote>
                     </div>
                     <div>
                        <blockquote>
                           <q>
                              We used Design Appruv for two projects: a large backyard and deck renovation and an ADU above our garage. Seth and his
                              team have been amazing....very responsive and efficient. They worked with us on revisions to ensure the plans were
                              exactly what we wanted, and also coached us through the process to ensure we could stay within our budget. We highly
                              recommend!
                           </q>
                           <footer>
                              <span>
                                 &mdash;&mdash;&mdash; <cite>Cody & Drew Jackson | Houzz</cite>
                              </span>
                           </footer>
                        </blockquote>
                     </div>
                  </Slider>
               </div>
            </StyledSlider>
         </div>
      </StyledTestimonial>
   );
};

export default Testimonial;
