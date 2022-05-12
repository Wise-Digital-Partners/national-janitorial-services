import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Background from "../Background/Background";
import Slider from "../Slider/SliderStandard";
import { GatsbyImage } from "gatsby-plugin-image";

const StyledSlider = styled.div`
   .slick-prev,
   .slick-next {
      i {
         ${tw`text-white`}
      }
   }
   /* .slick-dots {
      ${tw`relative! mt-6`}
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
   } */
   blockquote {
      ${tw`max-w-4xl mx-auto`}
   }
   q {
      ${tw`text-xl text-white`}
   }
   footer {
      ${tw`mt-10 md:mt-12`}
      span {
         ${tw`block text-gray-50`}
      }
      cite {
         ${tw`text-sm md:text-base opacity-80 not-italic`}
      }
   }
`;

const Testimonial = ({ className, headingLevel }) => {
   const data = useStaticQuery(graphql`
      {
         backgroundDesktop: file(relativePath: { eq: "repeating/testimonials/background.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
         backgroundMobile: file(relativePath: { eq: "repeating/testimonials/background.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
         google: file(relativePath: { eq: "repeating/testimonials/google.png" }) {
            childImageSharp {
               gatsbyImageData(layout: FIXED, width: 95, quality: 100)
            }
         }
         yelp: file(relativePath: { eq: "reviews/yelp.png" }) {
            childImageSharp {
               gatsbyImageData(layout: FIXED, width: 70, quality: 100)
            }
         }
      }
   `);

   const backgroundImages = [
      getImage(data.backgroundDesktop.childImageSharp.gatsbyImageData),
      {
         ...getImage(data.backgroundMobile.childImageSharp.gatsbyImageData),
         media: `(max-width: 767px)`,
      },
   ];

   const HeadingTag = headingLevel;

   return (
      <Background
         className={className}
         backgroundImages={backgroundImages}
         backgroundSize=""
         backgroundPosition=""
         backgroundRepeat=""
         padding="pt-20 md:pt-24 pb-12 md:pb-16"
      >
         <StyledSlider className="relative">
            <div className="max-w-3xl mx-auto text-center">
               <header className="mb-10 md:mb-12">
                  <HeadingTag className="text-white">Hear from Satisfied Clients</HeadingTag>
               </header>
               <Slider>
                  <div>
                     <blockquote>
                        <q>
                           I appreciate the diligence and professionalism of Anthony and the crew member appointed to us. During these covid times
                           they have taken the upmost care to provide the level of cleanliness and safeguarding measures needed to insure everyone's
                           safety. The pricing is fair and we are happy with the great service!
                        </q>
                        <footer>
                           <span>
                              <cite>St. Joseph Church</cite>
                              <GatsbyImage image={data.google.childImageSharp.gatsbyImageData} alt="Google logo" className="mt-4 mx-auto" />
                           </span>
                        </footer>
                     </blockquote>
                  </div>
                  <div>
                     <blockquote>
                        <q>
                           My law firm hired National Janitorial to do some deep cleaning/disinfection after one of our staff was diagnosed with
                           COVID. We called several businesses for pricing and availability for professional sanitation. National was the best pricing
                           and was available that same day. They were great. Two guys arrived, both had sanitation equipment and sprayed down the
                           entire office in less than an hour.
                        </q>
                        <footer>
                           <span>
                              <cite>Hilary V.</cite>
                              <GatsbyImage image={data.yelp.childImageSharp.gatsbyImageData} alt="Yelp logo" className="mt-4 mx-auto" />
                           </span>
                        </footer>
                     </blockquote>
                  </div>
                  <div>
                     <blockquote>
                        <q>
                           I hired National Janitorial to handle cleaning and disinfection of a triplex residential property I own as a safety
                           precaution for my tenants. Anthony went above and beyond my expectations from scheduling, pricing and completing the job. I
                           highly recommend National to anyone needing these types of services, they did an excellent job!
                        </q>
                        <footer>
                           <span>
                              <cite>Maggie V.</cite>
                              <GatsbyImage image={data.yelp.childImageSharp.gatsbyImageData} alt="Yelp logo" className="mt-4 mx-auto" />
                           </span>
                        </footer>
                     </blockquote>
                  </div>
                  <div>
                     <blockquote>
                        <q>
                           National janitorial was very professional and responsive when we needed them the most. We will recommend them to anyone
                           looking for janitorial services.
                        </q>
                        <footer>
                           <span>
                              <cite>Carlos A.</cite>
                              <GatsbyImage image={data.yelp.childImageSharp.gatsbyImageData} alt="Yelp logo" className="mt-4 mx-auto" />
                           </span>
                        </footer>
                     </blockquote>
                  </div>
               </Slider>
            </div>
         </StyledSlider>
      </Background>
   );
};

export default Testimonial;
