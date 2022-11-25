import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Slider from "../Slider/SliderLogos";

const StyledSlider = styled.div`
  .slick-slide {
    ${tw`text-center`}
    > div {
      ${tw`flex items-center justify-between space-x-4`}
    }
  }
  .slick-dots {
    ${tw`justify-center items-center space-x-3 flex! -bottom-12!`}
    li {
      ${tw`h-3 w-3 bg-primary  mr-0 rounded-full transition-colors duration-300 ease-linear`}
      &.slick-active {
        ${tw`bg-primary`}
      }
    }
  }
`;

const Accolades = ({ className}) => {
  const data = useStaticQuery(graphql`
    {
      icon1: file(relativePath: { eq: "repeating/clients/client-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 167
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      icon2: file(relativePath: { eq: "repeating/clients/client-2.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 167
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      icon3: file(relativePath: { eq: "repeating/clients/client-3.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 167
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      icon4: file(relativePath: { eq: "repeating/clients/client 4.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 167
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      icon5: file(relativePath: { eq: "repeating/clients/client-5.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 167
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      icon6: file(relativePath: { eq: "repeating/clients/group-13.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 167
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      icon7: file(relativePath: { eq: "repeating/clients/group-14.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 167
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      icon8: file(relativePath: { eq: "repeating/clients/group-15.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 167
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      icon9: file(relativePath: { eq: "repeating/clients/group-16.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 167
            placeholder: BLURRED
            quality: 100
          )
        }
      }      
      icon10: file(relativePath: { eq: "repeating/clients/group-17.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 167
            placeholder: BLURRED
            quality: 100
          )
        }
      }
    }
  `);

  return (
    <section className={`overflow-x-hidden ${className || "pb-20 md:pb-32"}`}>
      <div className="container">
        <header className="text-center mb-4 md:mb-18">
          <h2>Some of Our Happy Clients</h2>
        </header>
        <StyledSlider className="relative">
          <Slider>
            <div>
              <GatsbyImage
                image={data.icon1}
                className="mx-auto"
                alt="ShowGrow logo"
              />
            </div>

            <div>
              <GatsbyImage
                image={data.icon2}
                className="mx-auto"
                alt="SGS logo"
              />
            </div>

            <div>
              <GatsbyImage
                image={data.icon3}
                className="mx-auto"
                alt="PDS logo"
              />
            </div>
            <div>
              <GatsbyImage
                image={data.icon4}
                className="mx-auto"
                alt="NORTION LILLY logo"
              />
            </div>
            <div>
              <GatsbyImage
                image={data.icon5}
                className="mx-auto"
                alt="ST.JOSEPH CATHOLIC CHRUCH logo"
              />
            </div>
            <div>
              <GatsbyImage
                image={data.icon6}
                className="mx-auto"
                alt="URGENTMED logo"
              />
            </div>
            <div>
              <GatsbyImage
                image={data.icon7}
                className="mx-auto"
                alt="FILANC logo"
              />
            </div>
            <div>
              <GatsbyImage
                image={data.icon8}
                className="mx-auto"
                alt="TOTAL VISION logo"
              />
            </div>
            <div>
              <GatsbyImage
                image={data.icon9}
                className="mx-auto"
                alt="SCHG logo"
              />
            </div>        
            <div>
              <GatsbyImage
                image={data.icon10}
                className="mx-auto"
                alt="Welsh logo"
              />
            </div>
          </Slider>
        </StyledSlider>
        <div className="flex items-center justify-between space-x-4 text-center md:space-x-5"></div>
      </div>
    </section>
  );
};

export default Accolades;
