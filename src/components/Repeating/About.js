import React, { useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { animate } from "framer-motion";
// import { motion, animate, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

import SliderLogos from "../Slider/SliderLogos";

const About = ({ className }) => {
   const data = useStaticQuery(graphql`
      {
         logo1: file(relativePath: { eq: "repeating/industry-partners/color/white/1st Choice Logo PNG-02.png" }) {
            childImageSharp {
               fluid(maxWidth: 189, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  ...GatsbyImageSharpFluidLimitPresentationSize
               }
            }
         }
         logo2: file(relativePath: { eq: "repeating/industry-partners/color/white/alive.san.png" }) {
            childImageSharp {
               fluid(maxWidth: 86, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  ...GatsbyImageSharpFluidLimitPresentationSize
               }
            }
         }
         logo3: file(relativePath: { eq: "repeating/industry-partners/color/white/AS_LOGO_FULL_V3.png" }) {
            childImageSharp {
               fluid(maxWidth: 59, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  ...GatsbyImageSharpFluidLimitPresentationSize
               }
            }
         }
         logo4: file(relativePath: { eq: "repeating/industry-partners/color/white/CalHomeCo-Construction-transparent-logo.png" }) {
            childImageSharp {
               fluid(maxWidth: 81, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  ...GatsbyImageSharpFluidLimitPresentationSize
               }
            }
         }
         logo5: file(relativePath: { eq: "repeating/industry-partners/color/white/Get Structural - Logo-01.png" }) {
            childImageSharp {
               fluid(maxWidth: 121, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  ...GatsbyImageSharpFluidLimitPresentationSize
               }
            }
         }
         logo6: file(relativePath: { eq: "repeating/industry-partners/color/white/Group 18.png" }) {
            childImageSharp {
               fluid(maxWidth: 97, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  ...GatsbyImageSharpFluidLimitPresentationSize
               }
            }
         }
         logo7: file(relativePath: { eq: "repeating/industry-partners/color/white/Hensel Consulting Engineers-01.png" }) {
            childImageSharp {
               fluid(maxWidth: 164, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  ...GatsbyImageSharpFluidLimitPresentationSize
               }
            }
         }
         logo8: file(relativePath: { eq: "repeating/industry-partners/color/white/LovelaceEng2.png" }) {
            childImageSharp {
               fluid(maxWidth: 99, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  ...GatsbyImageSharpFluidLimitPresentationSize
               }
            }
         }
         logo9: file(relativePath: { eq: "repeating/industry-partners/color/white/MAIN_LOGO_square.png" }) {
            childImageSharp {
               fluid(maxWidth: 132, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  ...GatsbyImageSharpFluidLimitPresentationSize
               }
            }
         }
         logo10: file(relativePath: { eq: "repeating/industry-partners/color/white/ModernGrannyFlat PNG black.png" }) {
            childImageSharp {
               fluid(maxWidth: 64, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  ...GatsbyImageSharpFluidLimitPresentationSize
               }
            }
         }
      }
   `);

   // const [refCounter1, inViewCounter1] = useInView({ threshold: 0.5 }),
   //    [refCounter2, inViewCounter2] = useInView({ threshold: 0.5 }),
   //    [refCounter3, inViewCounter3] = useInView({ threshold: 0.5 }),
   //    [refCounter4, inViewCounter4] = useInView({ threshold: 0.5 });

   // const animationCounter1 = useAnimation(),
   //   animationCounter2 = useAnimation(),
   //   animationCounter3 = useAnimation(),
   //   animationCounter4 = useAnimation();

   function Counter({ from, to }) {
      const nodeRef = useRef();
      useEffect(() => {
         const node = nodeRef.current;
         // if (inViewCounter1) {
         const controls = animate(from, to, {
            duration: 1,
            onUpdate(value) {
               node.textContent = value.toFixed();
            },
         });
         // }

         return () => controls.stop();
      }, [from, to]);

      return <span ref={nodeRef} />;
   }

   return (
      <section className={`bg-gray-900 pt-16 md:pt-32 pb-22 md:pb-32 ${className}`}>
         <div className="container">
            <svg
               className="mx-auto"
               width="100%"
               viewBox="0 0 892 128"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               style={{ maxWidth: "897px" }}
            >
               <g
                  id="Desktop"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  fontFamily="Mulish"
                  fontSize="170"
                  fontWeight="900"
                  opacity="0.05"
               >
                  <g transform="translate(-268.000000, -1535.000000)" fill="#FFFFFF">
                     <g transform="translate(0.000000, 1410.000000)">
                        <text id="APPRUV’d">
                           <tspan x="272" y="251">
                              APPRUV’d
                           </tspan>
                        </text>
                     </g>
                  </g>
               </g>
            </svg>
            <div className="mb-22 md:mb-40">
               <div className="grid md:grid-cols-4 gap-y-18 gap-x-16 text-center mt-18 md:-mt-10">
                  <div>
                     <span className="font-heading text-mobile-7xl md:text-7xl leading-none text-white font-black block mb-4 md:mb-7">
                        <Counter from={0} to={114} />
                     </span>
                     <span className="font-heading text-md font-semibold text-white text-opacity-80">Permits Appruv’d in 2020</span>
                  </div>
                  <div>
                     <span className="font-heading text-mobile-7xl md:text-7xl leading-none text-white font-black block mb-4 md:mb-7">
                        <Counter from={0} to={47} />
                     </span>
                     <span className="font-heading text-md font-semibold text-white text-opacity-80">ADUs Appruv’d in 2020</span>
                  </div>
                  <div>
                     <span className="font-heading text-mobile-7xl md:text-7xl leading-none text-white font-black block mb-4 md:mb-7">
                        <Counter from={0} to={28} />
                     </span>
                     <span className="font-heading text-md font-semibold text-white text-opacity-80">Code Violations Appruv’d</span>
                  </div>
                  <div>
                     <span className="font-heading text-mobile-7xl md:text-7xl leading-none text-white font-black block mb-4 md:mb-7">
                        <Counter from={0} to={100} />%
                     </span>
                     <span className="font-heading text-md font-semibold text-white text-opacity-80">Client Satisfaction</span>
                  </div>
               </div>
            </div>

            <div className="flex items-center justify-between text-center mb-16 md:mb-20">
               <span className="bg-white bg-opacity-20 h-px w-40 md:w-full mr-2"></span>
               <h2 className="heading-three text-white mb-0 w-full">Our Industry Partners</h2>
               <span className="bg-white bg-opacity-20 h-px w-40 md:w-full ml-2"></span>
            </div>

            <SliderLogos>
               <div>
                  <Img fadeIn={false} loading="eager" fluid={data.logo1.childImageSharp.fluid} />
               </div>
               <div>
                  <Img fadeIn={false} loading="eager" fluid={data.logo2.childImageSharp.fluid} />
               </div>
               <div>
                  <Img fadeIn={false} loading="eager" fluid={data.logo3.childImageSharp.fluid} />
               </div>
               <div>
                  <Img fadeIn={false} loading="eager" fluid={data.logo4.childImageSharp.fluid} />
               </div>
               <div>
                  <Img fadeIn={false} loading="eager" fluid={data.logo5.childImageSharp.fluid} />
               </div>
               <div>
                  <Img fadeIn={false} loading="eager" fluid={data.logo6.childImageSharp.fluid} />
               </div>
               <div>
                  <Img fadeIn={false} loading="eager" fluid={data.logo7.childImageSharp.fluid} />
               </div>
               <div>
                  <Img fadeIn={false} loading="eager" fluid={data.logo8.childImageSharp.fluid} />
               </div>
               <div>
                  <Img fadeIn={false} loading="eager" fluid={data.logo9.childImageSharp.fluid} />
               </div>
               <div>
                  <Img fadeIn={false} loading="eager" fluid={data.logo10.childImageSharp.fluid} />
               </div>
            </SliderLogos>
         </div>
      </section>
   );
};

export default About;
