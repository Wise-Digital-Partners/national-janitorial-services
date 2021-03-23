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

const Testimonial = ({ ...props }) => {
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
      }
   `);

   const backgroundImages = [
      getImage(data.backgroundDesktop.childImageSharp.gatsbyImageData),
      {
         ...getImage(data.backgroundMobile.childImageSharp.gatsbyImageData),
         media: `(max-width: 767px)`,
      },
   ];

   const HeadingTag = props.headingLevel;

   return (
      <Background
         className={`${props.className ? props.className : ""}`}
         backgroundImages={backgroundImages}
         backgroundSize=""
         backgroundPosition=""
         backgroundRepeat=""
         padding="pt-48 md:pt-24 pb-12 md:pb-16"
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
                           Proin quis ullamcorper nulla iaculis ut mi praesent eu pharetra nullam nisl quam gravida vitae risus, magnis enim
                           condimentum viverra dui fringilla varius tempor volutpat orci tristique ipsum varius tempor sed aliquet id faucibus sodales
                           pellentesque sit sapien tortor sit aenean ipsum turpis sit tincidunt
                        </q>
                        <footer>
                           <span>
                              <cite>Jane Doe</cite>
                              <GatsbyImage image={data.google.childImageSharp.gatsbyImageData} className="mt-4 mx-auto" />
                           </span>
                        </footer>
                     </blockquote>
                  </div>
                  <div>
                     <blockquote>
                        <q>
                           Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat
                           vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed
                           lectus vestibulum mattis ullamcorper velit sed ullamcorper
                        </q>
                        <footer>
                           <span>
                              <cite>Jack Doe</cite>
                              <GatsbyImage image={data.google.childImageSharp.gatsbyImageData} className="mt-4 mx-auto" />
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
