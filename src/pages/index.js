import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonUnderline from "../components/Button/ButtonUnderline";
import HeroFullWidth from "../components/Hero/HeroFullWidth";
import BackgroundImage from "../components/Background/BackgroundImage";
import About from "../components/Repeating/About";
import TestimonialBackgroundImage from "../components/Repeating/Testimonial/TestimonialBackgroundImage";
import WhyUs from "../components/Repeating/WhyUs";
import SliderOurProcess from "../components/Slider/SliderOurProcess";
import CTAFullWidth from "../components/CTA/CTAFullWidth";

const Page = ({ data }) => {
   const heroImages = withArtDirection(getImage(data.heroDesktop.childImageSharp.gatsbyImageData), [
      {
         media: "(max-width: 767px)",
         image: getImage(data.heroMobile.childImageSharp.gatsbyImageData),
      },
   ]);

   const introImages = withArtDirection(getImage(data.introDesktop.childImageSharp.gatsbyImageData), [
      {
         media: "(max-width: 767px)",
         image: getImage(data.introMobile.childImageSharp.gatsbyImageData),
      },
   ]);

   const ctaImages = withArtDirection(getImage(data.ctaDesktop.childImageSharp.gatsbyImageData), [
      {
         media: "(max-width: 767px)",
         image: getImage(data.ctaMobile.childImageSharp.gatsbyImageData),
      },
   ]);

   const bounceTransition = {
      y: {
         duration: 1,
         repeat: Infinity,
         repeatType: "mirror",
         ease: "easeInOut",
      },
   };

   return (
      <Layout headerStyle="overlap" headerLinkColor="white" headerHasBorder={false}>
         <SEO
            title=""
            description=""
            // openGraphImage={data.openGraphImage.publicURL}
            // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <HeroFullWidth
            backgroundImages={heroImages}
            backgroundSizeDesktop="cover"
            backgroundSizeMobile="cover"
            backgroundPositionDesktop="50% 50%"
            backgroundPositionMobile="50% 50%"
            paddingTopDesktop="265px"
            paddingTopMobile="155px"
            paddingBottomDesktop="235px"
            paddingBottomMobile="190px"
            textAlignmentDesktop="center"
            textAlignmentMobile="center"
         >
            <div className="max-w-2xl mx-auto relative">
               <p className="font-heading text-mobile-4xl md:text-5xl leading-tight md:leading-tighter font-light text-white mb-6">
                  Affordable Drafting & Design From Concept to Appruv'l
               </p>
            </div>
            <ButtonSolid href="/contact/" className="absolute md:relative w-full md:w-auto bottom-0 left-0" text="Get Started" />
            <svg
               width="22px"
               height="35px"
               viewBox="0 0 22 35"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               className="absolute bottom-0 left-0 right-0 mx-auto mb-18 md:mb-8"
            >
               <g id="hero-scroll-icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g transform="translate(-709.000000, -634.000000)">
                     <g transform="translate(710.000000, 635.000000)">
                        <rect id="Rectangle" stroke="#FFFFFF" x="0" y="0" width="20" height="33" rx="9"></rect>
                        <motion.circle
                           fill="#FFFFFF"
                           cx="10"
                           cy="21"
                           r="5"
                           transition={bounceTransition}
                           animate={{
                              y: ["2px", "-11px"],
                           }}
                        ></motion.circle>
                     </g>
                  </g>
               </g>
            </svg>
         </HeroFullWidth>

         <BackgroundImage
            backgroundImages={introImages}
            backgroundSizeDesktop="cover"
            backgroundSizeMobile="cover"
            backgroundPositionDesktop="50% 50%"
            backgroundPositionMobile="50% 50%"
            paddingTopDesktop="160px"
            paddingTopMobile="60px"
            paddingBottomDesktop="130px"
            paddingBottomMobile="90px"
            textAlignmentDesktop="left"
            textAlignmentMobile="left"
         >
            <div className="max-w-3xl mx-auto relative">
               <h1 className="md:mb-12">A Top Architectural Design & Drafting Firm in San Diego & Beyond</h1>
               <p className="md:text-2xl mb-0">
                  Design Appruv is SoCal’s one-stop shop for all your design, drafting, and building permit needs. We’re an expert firm of
                  architectural draftsmen, designers, and licensed architects with a unique approach to residential and commercial design. From custom
                  homes and ADUs to residential remodels and commercial spaces, we can get it done. And we’ll do it on your timeline and budget with
                  the design and flexibility that you want.
               </p>
            </div>
         </BackgroundImage>

         <About />

         <section className="bg-gray-100 py-22 md:py-32">
            <div className="container">
               <header className="mb-16 md:mb-26 max-w-4xl">
                  <h2>Our Specialties</h2>
                  <p className="text-xl md:text-2xl">
                     We specialize in Accessory Dwelling Units (ADUs), Residential Additions & Remodels, Custom Homes, Commercial Design & Drafting,
                     and Building Permits.
                  </p>
               </header>
               <div className="mb-20 md:mb-32">
                  <div className="grid md:grid-cols-12 gap-y-7 items-center ">
                     <div className="md:col-start-1 md:col-span-7">
                        <div className="relative group">
                           <GatsbyImage image={data.adu.childImageSharp.gatsbyImageData} alt="Accessory Dwelling Units (ADUs)" />
                           <div className="absolute bottom-0 w-full h-14 md:h-20 border-t border-solid border-white border-opacity-50 flex items-center">
                              <p className="font-heading text-white group-hover:text-black group-hover:text-opacity-50 text-xs md:text-sm font-bold tracking-wider uppercase pl-6 z-10 mb-0 transition-300-ease">
                                 <span className="text-white group-hover:text-black text-opacity-50 group-hover:text-opacity-100 block md:inline transition-300-ease">
                                    01 /
                                 </span>
                                 Accessory Dwelling Units
                              </p>
                              <div className="absolute right-0 flex items-center justify-center bg-primary w-14 md:w-20 h-full group-hover:w-full transition-500-ease">
                                 <i className="far fa-chevron-right text-black text-base md:text-2xl absolute right-0 pr-6 md:pr-8"></i>
                              </div>
                           </div>
                           <a href="/adu-design-permits/">
                              <span className="link-overlay"></span>
                           </a>
                        </div>
                     </div>
                     <div className="md:col-end-13 md:col-span-5 md:pl-10 lg:pl-18 xl:pl-26 transition-300-ease">
                        <h3>Accessory Dwelling Units (ADUs)</h3>
                        <p>
                           We’re ADU experts. Whether you want a granny flat, in-law quarters, companion unit, or guest house, we have the expertise
                           to make your idea a reality.
                        </p>
                        <ButtonUnderline href="/adu-design-permits/" text="Learn More" />
                     </div>
                  </div>
               </div>

               <div className="mb-20 md:mb-32">
                  <div className="grid md:grid-cols-12 gap-y-7 items-center">
                     <div className="order-2 md:order-1 md:col-start-1 md:col-span-5 md:pr-12 lg:pr-26">
                        <h3>Residential Additions & Remodels</h3>
                        <p>
                           Ready to upgrade your existing property? We can help you with home remodels, renovations, & additions. Just let us know
                           what you want and we’ll make it happen. We’ll even exceed your design expectations!
                        </p>
                        <ButtonUnderline href="/residential-additions-remodels-renovations/" text="Learn More" />
                     </div>
                     <div className="order-1 md:order-2 md:col-end-13 md:col-span-7">
                        <div className="relative group">
                           <GatsbyImage image={data.residentialAdditions.childImageSharp.gatsbyImageData} alt="Residential Additions & Remodels" />
                           <div className="absolute bottom-0 w-full h-14 md:h-20 border-t border-solid border-white border-opacity-50 flex items-center">
                              <p className="font-heading text-white group-hover:text-black group-hover:text-opacity-50 text-xs md:text-sm font-bold tracking-wider uppercase pl-6 z-10 mb-0 transition-300-ease">
                                 <span className="text-white group-hover:text-black text-opacity-50 group-hover:text-opacity-100 block md:inline transition-300-ease">
                                    02 /
                                 </span>
                                 Residential Additions & Remodels
                              </p>
                              <div className="absolute right-0 flex items-center justify-center bg-primary w-14 md:w-20 h-full group-hover:w-full transition-500-ease">
                                 <i className="far fa-chevron-right text-black text-base md:text-2xl absolute right-0 pr-6 md:pr-8"></i>
                              </div>
                           </div>
                           <a href="/residential-additions-remodels-renovations/">
                              <span className="link-overlay"></span>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="mb-20 md:mb-32">
                  <div className="grid md:grid-cols-12 gap-y-7 items-center ">
                     <div className="md:col-start-1 md:col-span-7">
                        <div className="relative group">
                           <GatsbyImage image={data.customHomeDesign.childImageSharp.gatsbyImageData} alt="Custom Home Design & Plans" />
                           <div className="absolute bottom-0 w-full h-14 md:h-20 border-t border-solid border-white border-opacity-50 flex items-center">
                              <p className="font-heading text-white group-hover:text-black group-hover:text-opacity-50 text-xs md:text-sm font-bold tracking-wider uppercase pl-6 z-10 mb-0 transition-300-ease">
                                 <span className="text-white group-hover:text-black text-opacity-50 group-hover:text-opacity-100 block md:inline transition-300-ease">
                                    03 /
                                 </span>
                                 Custom Home Design & Plans
                              </p>
                              <div className="absolute right-0 flex items-center justify-center bg-primary w-14 md:w-20 h-full group-hover:w-full transition-500-ease">
                                 <i className="far fa-chevron-right text-black text-base md:text-2xl absolute right-0 pr-6 md:pr-8"></i>
                              </div>
                           </div>
                           <a href="/custom-home-design/">
                              <span className="link-overlay"></span>
                           </a>
                        </div>
                     </div>
                     <div className="md:col-end-13 md:col-span-5 md:pl-10 lg:pl-18 xl:pl-26 transition-300-ease">
                        <h3>Custom Home Design & Plans</h3>
                        <p>
                           If you’re thinking of a new build, look no further. We can custom design your home from the ground up, leaving you with a
                           property that reflects what you want from concept to permit Appruv’l.
                        </p>
                        <ButtonUnderline href="/custom-home-design/" text="Learn More" />
                     </div>
                  </div>
               </div>

               <div className="mb-20 md:mb-32">
                  <div className="grid md:grid-cols-12 gap-y-7 items-center">
                     <div className="order-2 md:order-1 md:col-start-1 md:col-span-5 md:pr-12 lg:pr-26">
                        <h3>Commercial Design & Drafting</h3>
                        <p>
                           Need to make some rental property improvements? What about starting or expanding your place of business? Commercial Tenant
                           Improvements and new construction is our forte.
                        </p>
                        <ButtonUnderline href="/commercial-design-build-firm/" text="Learn More" />
                     </div>
                     <div className="order-1 md:order-2 md:col-end-13 md:col-span-7">
                        <div className="relative group">
                           <GatsbyImage image={data.commercialDesign.childImageSharp.gatsbyImageData} alt="Commercial Design & Drafting" />
                           <div className="absolute bottom-0 w-full h-14 md:h-20 border-t border-solid border-white border-opacity-50 flex items-center">
                              <p className="font-heading text-white group-hover:text-black group-hover:text-opacity-50 text-xs md:text-sm font-bold tracking-wider uppercase pl-6 z-10 mb-0 transition-300-ease">
                                 <span className="text-white group-hover:text-black text-opacity-50 group-hover:text-opacity-100 block md:inline transition-300-ease">
                                    04 /
                                 </span>
                                 Commercial Design & Drafting
                              </p>
                              <div className="absolute right-0 flex items-center justify-center bg-primary w-14 md:w-20 h-full group-hover:w-full transition-500-ease">
                                 <i className="far fa-chevron-right text-black text-base md:text-2xl absolute right-0 pr-6 md:pr-8"></i>
                              </div>
                           </div>
                           <a href="/commercial-design-build-firm/">
                              <span className="link-overlay"></span>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>

               <div>
                  <div className="grid md:grid-cols-12 gap-y-7 items-center ">
                     <div className="md:col-start-1 md:col-span-7">
                        <div className="relative group">
                           <GatsbyImage image={data.buildingPermit.childImageSharp.gatsbyImageData} alt="Building Permit Services" />
                           <div className="absolute bottom-0 w-full h-14 md:h-20 border-t border-solid border-white border-opacity-50 flex items-center">
                              <p className="font-heading text-white group-hover:text-black group-hover:text-opacity-50 text-xs md:text-sm font-bold tracking-wider uppercase pl-6 z-10 mb-0 transition-300-ease">
                                 <span className="text-white group-hover:text-black text-opacity-50 group-hover:text-opacity-100 block md:inline transition-300-ease">
                                    05 /
                                 </span>
                                 Building Permit Services
                              </p>
                              <div className="absolute right-0 flex items-center justify-center bg-primary w-14 md:w-20 h-full group-hover:w-full transition-500-ease">
                                 <i className="far fa-chevron-right text-black text-base md:text-2xl absolute right-0 pr-6 md:pr-8"></i>
                              </div>
                           </div>
                           <a href="/building-permit-services/">
                              <span className="link-overlay"></span>
                           </a>
                        </div>
                     </div>
                     <div className="md:col-end-13 md:col-span-5 md:pl-10 lg:pl-18 xl:pl-26 transition-300-ease">
                        <h3>Building Permit Services</h3>
                        <p>
                           SoCal building permits are one of our specialties. We’ll help you navigate this tricky process while maintaining your
                           project’s integrity and timeline.
                        </p>
                        <ButtonUnderline href="/building-permit-services/" text="Learn More" />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="py-22 md:py-32">
            <div className="container">
               <header className="mb-10 md:mb-26 max-w-4xl">
                  <h2>Our Process & Services </h2>
                  <p className="text-xl md:text-2xl">
                     With our “Flintstone Approach,” we put you in the driver seat while we push the car along. Make informed decisions as we provide
                     multiple design options at every turn.
                  </p>
               </header>

               <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-6 items-center">
                  <div className="md:col-start-1 md:col-span-3 relative z-20 flex items-end h-full">
                     <div className="hidden md:block">
                        <ButtonUnderline href="/our-process/" text="Our Process" className="mb-8" />
                     </div>
                  </div>
                  <div className="md:col-end-13 md:col-span-9">
                     <SliderOurProcess />
                     <div className="md:hidden">
                        <ButtonUnderline href="/our-process/" text="Our Process" />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <TestimonialBackgroundImage className="mb-20 md:mb-32" />

         <WhyUs className="mb-20 md:mb-32" />

         <CTAFullWidth
            backgroundImages={ctaImages}
            backgroundSizeDesktop="cover"
            backgroundSizeMobile="cover"
            backgroundPositionDesktop="50% 50%"
            backgroundPositionMobile="50% 50%"
            paddingTopDesktop="220px"
            paddingTopMobile="120px"
            paddingBottomDesktop="220px"
            paddingBottomMobile="160px"
            textAlignmentDesktop="center"
            textAlignmentMobile="center"
         >
            <div className="max-w-xl mx-auto">
               <div className="relative">
                  <h2 className="text-white font-bold text-mobile-6xl md:text-6xl">
                     Building Your <br /> Dreams Starts Here.
                  </h2>
                  <p className="text-white text-opacity-80 text-lg">
                     Ready to see how we can bring your project to life? Reach out today for a free, no-obligation consultation.
                  </p>
               </div>
               <ButtonSolid href="/contact/" className="absolute md:relative w-full md:w-auto bottom-0 left-0" text="Get Started" />
            </div>
         </CTAFullWidth>
      </Layout>
   );
};

export const query = graphql`
   {
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/FB_Global.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/Twitter_Global.jpg" }) {
         publicURL
      }
      heroDesktop: file(relativePath: { eq: "home/1.0 Homepage Hero_Desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
         }
      }
      heroMobile: file(relativePath: { eq: "home/1.0 Homepage Hero_Mobile.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
         }
      }
      introDesktop: file(relativePath: { eq: "home/2.0 Intro_BG_Desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
         }
      }
      introMobile: file(relativePath: { eq: "home/2.0 Intro BG_Mobile.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
         }
      }
      adu: file(relativePath: { eq: "home/4.0 ADUs.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
         }
      }
      residentialAdditions: file(relativePath: { eq: "home/4.1 Residential Remodel.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
         }
      }
      customHomeDesign: file(relativePath: { eq: "home/4.2 Custom Homes.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
         }
      }
      commercialDesign: file(relativePath: { eq: "home/4.3 Commecial Design.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
         }
      }
      buildingPermit: file(relativePath: { eq: "home/4.4 Building Permit Services.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
         }
      }
      ctaDesktop: file(relativePath: { eq: "repeating/cta/CTA_Desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
         }
      }
      ctaMobile: file(relativePath: { eq: "repeating/cta/CTA_Desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
         }
      }
   }
`;
export default Page;
