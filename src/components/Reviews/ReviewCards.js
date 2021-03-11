import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

const ReviewCards = ({ gridLayout }) => {
   const StyledReviewCards = styled.div`
      .masonry-item {
         ${tw`mb-8 w-full border border-solid border-gray-300 border-opacity-30 p-6`}
         @media (min-width: 768px) {
            ${tw`mx-3 mb-10 p-10`}
            width: calc(50% - 1.5rem);
         }
         @media (min-width: 1024px) {
            ${tw`mx-5 mb-10`}
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
                     <span className="text-gray-800 font-heading font-bold">Patrick Dillon</span>
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

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Mikie Dubs</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.houzz.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  My experience working with the Design Appruv team has been exceptional. The team was able to bring my vision to life and inject
                  innovative engineering and design elements that made sure my concept stayed on brand and on budget. The team brings a creative
                  energy and an ability to problem solve that is truly unmatched. The value and service they provide for the price is second to none.
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.houzz.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Gene Wentz</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  My experience working with the Design Appruv team has been exceptional. The team was able to bring my vision to life and inject
                  innovative engineering and design elements that made sure my concept stayed on brand and on budget. The team brings a creative
                  energy and an ability to problem solve that is truly unmatched. The value and service they provide for the price is second to none.
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Zalmy W.</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  Seth is phenomenal! knowledgeable, straightforward and transparent. I look forward to doing business with you again! i recommend his
                  service
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Christine Hughes</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.yelp.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  Seth is one of the good guys. I think when we launch a project, we all wonder if we are getting coerced to spend more then we need
                  to. In today's challenging world, we just want the truth and want to work with an ethical person. (And of course a person of great
                  talent!) Look no further.
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.yelp.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src="https://st.hzcdn.com/simgs/56c319780d6b3727_0-7559/_.jpg" alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Modern Granny Flat</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.houzz.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  I connected with Design Appruv through their Instagram account and I was immediately impressed by their stellar communication and
                  their willingness to answer any and all of my questions. My Architecture Firm specializes in Granny Flats and Accessory Dwelling
                  Units in San Diego, California. Seth and the Design Appruv team took my project which was just wrapping up architectural design,
                  prepared my designs for permit submission and submitted them to the County of SD for me hasslefree! Design Appruv went as far to
                  assist us with pricing out the ADU project with their in-network General Contractors and builders. I would highly recommend Design
                  Appruv for all of your drafting, design and building permit management needs. We are looking forward to a lasting collaborative
                  relationship with Design Appruv!
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.houzz.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Cody & Drew Jackson</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.houzz.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  We used Design Appruv for two projects: 1) A large backyard and deck renovation and 2) ADU for over our garage. For both projects,
                  Seth and his team (we worked with Jason) have been amazing....very responsive, very efficient and provided plans that exceeded our
                  expectations. They worked with us on making revisions to ensure the plans were exactly what we wanted and also coached us through
                  the process and options to ensure we could stay within our budget. We highly recommend Seth and his team!
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.houzz.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Andrew Grigorian</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  We love working with Dessign Appruv. They are more on the higher quality side of design firms. The staff is professional and
                  delightful to work with.
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Drew Jackson</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  We used Design Appruv for two projects: 1) A large backyard and deck renovation and 2) ADU for over our garage. For both projects,
                  Seth and his team (we worked with Jason) have been amazing....very responsive, very efficient and provided plans that exceeded our
                  expectations. They worked with us on making revisions to ensure the plans were exactly what we wanted and also coached us through
                  the process and options to ensure we could stay within our budget. We highly recommend Seth and his team!
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Ramin Parsi</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.houzz.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  We love working alongside Design Appruv. Seth and Devin are a great team and all of the projects we have worked on together have be
                  well coordinated and ultimately make for a seamless integration of trades and design. We look forward to working on many more
                  projects together.
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.houzz.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Ashley C.</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.thumbtack.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">Seth was really easy to talk to and very helpful. Would recommend for others projects for sure!</q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.thumbtack.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Timothy P.</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.yelp.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  I needed to repermit a Townhome I managed from a 2 bedroom to a 3 bedroom. I own a vacation management company but had never done
                  anything like this before. I was very nervous and interviewed multiple design companies. Design Appruv did a fantastic job. They
                  were prompt and finished ahead of time. I feel their pricing was fair and the main thing they got the job done.I would recommend
                  Seth and Design Appruv to anyone and I would use them again without hesitation.
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.yelp.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img
                     className="rounded-full"
                     src="https://s3-media0.fl.yelpcdn.com/photo/wFaW7mwt299Od7YkOMvfKA/60s.jpg"
                     alt="User Headshot"
                     width="40"
                  />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Brenan K.</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.yelp.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  When it came time to find draftsman for my permits, I spoke to a friend of mine who had recently gone through the same process. He
                  recommended Design Appruv, who helped him straighten out a code enforcement violation. I'm glad I went to Design Appruv first!
                  Within a few weeks they were able to take care of everything and get the building permits issued. No one wants to deal with code
                  enforcement violations. Design Appruv was super helpful and their process made everything easy.
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.yelp.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Anthony Morgante</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  Design Appruv was knowledgeable and very creative with our remodel and accessory dwelling unit we plan to build above our garage. We
                  had several issues with the County of San Diego prohibiting us from doing certain things due to our fire zone. My job captain got
                  everything ironed out and actually enhanced the design using the counties’ restrictions. My drafting and design recommendation will
                  be Design Appruv for the years to come!
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Neila F.</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.yelp.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  I was convinced at the Home & Garden show that it was time to give my kitchen a new look. Seth actually answered his phone the first
                  time I called and came out for a free site visit the same day! Working with his team has proven to be an painless process with
                  little time wasted! They are very receptive to outside feedback and are always available to answer questions. I highly recommend
                  Design Appruv for your kitchen remodeling needs!
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.yelp.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img
                     className="rounded-full"
                     src="https://s3-media0.fl.yelpcdn.com/photo/q2zsOfwCkLd0XS7DDij3PA/60s.jpg"
                     alt="User Headshot"
                     width="40"
                  />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Anthony M.</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.yelp.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  Design Appruv was knowledgeable and very creative with our remodel and accessory dwelling unit we plan to build above our garage. We
                  had several issues with the County of San Diego prohibiting us from doing certain things due to our fire zone. My job captain got
                  everything ironed out and actually enhanced the design using the counties' restrictions. My drafting and design recommendation will
                  be Design Appruv for the years to come!
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.yelp.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Samuel S.</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.yelp.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  Seth and his team were very knowledgeable and always available to help us and answer our questions. We decided to go with Design
                  Appruv after shopping around and are thrilled with their product. They worked out our granny flat design in 6 weeks and went above
                  and beyond to save us thousands on construction costs. I highly recommend using their company!
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.yelp.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Stephanie Baker</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.yelp.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  Finding Seth and his team was the best thing that happened to our condo development in Oceanside. We had been turned around several
                  times at the city permit office several times which was incredibly disheartening. Unlike many of the other firms we contacted,
                  Design Appruv always answers their phone and calls back within the hour when they don't. This project was a serious undertaking as
                  our HOA board is not easy to deal and they pushed it through and wrapped it up by their deadline as promised. You will be in good
                  hands if you choose Design Appruv!
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.yelp.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Aspen Scharff</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  I am an interior designer in the middle of a commercial restaurant remodel, the project came to a standstill UNTIL I found
                  DesignAppruv on Thumbtack this past month! Ever since our project has gone from an idea into a moving plan with a beautiful end
                  goal! DesignAppruv thank you for your dedication, attentiveness, and fast responses! Looking forward to collaborating on more
                  projects with the amazing architects and designers on their team! 10/10 recommend DesignAppruv !!
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">John Burns</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  I really wanted a small space for my elderly mother and Design Appruv helped us design exactly what we needed within our limited
                  budget. We did not even consider building an attachment to our existing home until Seth and his team gave us a 3D view of the
                  design. Permits we’re a breeze but the City of San Diego took quite a while to get them back to us, as expected. Seth and the Design
                  Appruv team was very responsive, professional, prompt and met their deadlines. Not much more we could ask for!
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Mike Osterfeld</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  Seth and his team are great to work with. They're deliberate in their decision making and well versed in their entire line of
                  business. I would highly recommend them to anyone looking for team who can deliver excellent quality and service for their next
                  construction project.
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Greg Chapman</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  We love working with Seth and the rest of the Design Appruv team! They are always quick to respond and have an excellent mind
                  towards customer service and executing their tasks in a timely manner!
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Brian Scalone</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  I wish I had called Seth and knew about Design Appruv earlier. I am out thousands because I didn't. Incredibly helpful, and spent a
                  good chunk of his day talking over an issue I had, without hesitation. Thanks Seth, I really appreciate i
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Theophile Ellaleo</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.facebook.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">Brilliant and carefully deliberate designs and service!</q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.facebook.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Andrew Lottinger</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  Once we heard about the new Accessory Dwelling Unit laws and reduced city fees my wife and I became more and more interested in
                  building an ADU. We connected with Seth and Design Appruv and they held our hands and answered a considerable amount of questions
                  for weeks prior to hiring their firm. Seth and his team were always available, professional and supportive as we got closer to
                  permit submittal they even had 2 contractors from their network come by and give us quotes. Our attention to detail HAD to be
                  frustrating but Seth was patient and dove farther into the level of detail we needed to. We are so thrilled with the outcome!!
                  Thanks for your hard work.
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Samuel Sherman</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  Seth and his team were very knowledgeable and always available to help us. We decided to go with Design Appruv after shopping around
                  and are thrilled with their product. They worked out our granny flat design in 6 weeks and went above and beyond to save us
                  thousands on construction costs. I highly recommend using their company!
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Graham Cooper</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  Design Appruv helped get the process moving in the right direction with our remodel! They did all of the work in getting our design
                  and permitting squared away. They made the process incredibly easy and quick. .
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Nathalie Radtke</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  Design Appruv helped my husband and I with a granny flat for my mother-in-law on our 2.5 acre property in San Marcos. Seth and his
                  team helped us through our design, allowing for us to get the most out of our limited budget. Their pricing was fair and they were
                  able to save us money on engineering and city fees also! I would highly recommend Design Appruv if you are looking for someone to
                  help you with your granny flat design and deal with city permits.
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Marcus Anderson</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  Of course we waited until the last minute before our code enforcement violation expired when we found Design Appruv. They called our
                  code enforcement officer and got us an extension with the city permit office before we even made our first payment. A draftsman came
                  out within days to get the blueprints started and Seth had our project completed and submitted before our extension expired. I would
                  highly recommend using them!
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Dyllan Basiloy</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  After getting half way through the permit process with my hand-drawn Garage plans, it seemed getting these drawings approved would
                  be impossible. Someone at the city mentioned hiring a draftsperson so we found Design Appruv online. Seth came out to our home and
                  his team turned our project around in only 3 weeks to get my remaining approvals. They are very knowledgeable and I would definitely
                  recommend using them!
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Theophile E.</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.thumbtack.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  Professional courteous and punctual service. Design Appruv is a top notch firm. Thank you for your job well done.
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.thumbtack.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Thumbtack Customer</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  Design Appruv helped get the process moving in the right direction with our remodel! They did all of the work in getting our design
                  and permitting squared away. They made the process incredibly easy and quick. .
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Thumbtack Customer</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.thumbtack.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  Design Appruv helped my husband and I with a granny flat for my mother-in-law on our 2.5 acre property in San Marcos. Seth and his
                  team helped us through our design, allowing for us to get the most out of our limited budget. Their pricing was fair and they were
                  able to save us money on engineering and city fees also! I would highly recommend Design Appruv if you are looking for someone to
                  help you with your granny flat design and deal with city permits.
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.thumbtack.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Thumbtack Customer</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.thumbtack.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  Of course we waited until the last minute before our code enforcement violation expired when we found Design Appruv. They called our
                  code enforcement officer and got us an extension with the city permit office before we even made our first payment. A draftsman came
                  out within days to get the blueprints started and Seth had our project completed and submitted before our extension expired. I would
                  highly recommend using them!
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.thumbtack.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Thumbtack Customer</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.thumbtack.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  After getting half way through the permit process with my hand-drawn Garage plans, it seemed getting these drawings approved would
                  be impossible. Someone at the city mentioned hiring a draftsperson so we found Design Appruv online. Seth came out to our home and
                  his team turned our project around in only 3 weeks to get my remaining approvals. They are very knowledgeable and I would definitely
                  recommend using them!
               </q>
            </blockquote>
            <div className="block md:hidden">
               <Img fadeIn={false} loading="eager" fixed={data.thumbtack.childImageSharp.fixed} />
            </div>
         </div>

         <div className={`${gridItemClass}`}>
            <div className="flex justify-between mb-8">
               <div className="flex items-center">
                  <img className="rounded-full" src={data.headshot.publicURL} alt="User Headshot" width="40" />
                  <div className="ml-4">
                     <span className="text-gray-800 font-heading font-bold">Nathalie R.</span>
                  </div>
               </div>
               <div className="hidden md:block">
                  <Img fadeIn={false} loading="eager" fixed={data.google.childImageSharp.fixed} />
               </div>
            </div>
            <blockquote>
               <q className="block mb-6 md:mb-0">
                  Design Appruv helped my husband and I with a granny flat for my mother-in-law on our 2.5 acre property. Seth and his draftsman had
                  great design ideas, allowing for us to get the most out of our experience and budget. They had VERY fair and reasonable prices. They
                  were the least expensive out of all 5 companies we received quotes from. They also came out for a free site consultation compared to
                  $150!! I would highly recommend Seth and his company if you are looking for someone to help you with your permit and design process.
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
