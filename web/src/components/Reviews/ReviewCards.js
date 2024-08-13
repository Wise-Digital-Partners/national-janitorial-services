import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const ReviewCards = () => {
   const reviews = [
      {
         name: "Lisa Blanco",
         review:
            "Working with National Janitorial services has been a great experience. Professional, attentive, and dependable. Being in my field as a facilities manager and working directly with the owner has been great. I will most definitely be using their services for future projects. Thank you for all your hard work.",
         profilePicture: "",
         platform: "Google",
      },
      {
         name: "Kevin Montes",
         review:
            "Best cleaning service out there, they make sure they take care of you like family. The staff is amazing, super friendly, communicates effectively and always on time. They will never disappoint. Thank you guys for the amazing service!",
         profilePicture: "",
         platform: "Google",
      },
      {
         name: "Tarick Fouz",
         review:
            "Best company hands down!!! I have been getting cleaning service with this company for over 2 years now and I must say they are the best in SoCal!! I’m super happy with the efficiency and cleanliness the team provides! They do everything for such an affordable price. I had them clean my business as well as my apartment and they go above and beyond! Definitely recommended",
         profilePicture: "",
         platform: "Google",
      },
      {
         name: "Gifted From God",
         review:
            "I’m glad I came across National Janitorial Services. I’ve had issues in the past with cleaners but they provided a trustworthy experience and made sure the job was done up to my expectations. Thank you!",
         profilePicture: "",
         platform: "Google",
      },
      {
         name: "Calvin Williams",
         review:
            "Long Beach Janitorial has been cleaning our offices for more than a year. Their team is very reliable and management has always responded to and quickly resolved any issue we have had. We have recommended them to several other businesses.",
         profilePicture: "",
         platform: "Google",
      },
      {
         name: "Carlos A.",
         review:
            "Long Beach Janitorial was very professional and responsive when we needed them the most. And will really recommend them to anyone looking for janitorial services.",
         profilePicture: "",
         platform: "Yelp",
      },
      {
         name: "Maggie V.",
         review:
            "I hired Long Beach Janitorial to handle cleaning and disinfection of a triplex residential property I own as a safety precaution for my tenants. Anthony went above and beyond my expectations from scheduling, pricing and completing the job. I highly recommend Long Beach Janitorial to anyone needing these types of services, they did an excellent job!",
         profilePicture: "",
         platform: "Yelp",
      },
      {
         name: "Hilary V.",
         review:
            "My law firm hired Long Beach Janitorial to do some deep cleaning/disinfection after one of our staff was diagnosed with COVID. We called several businesses for pricing and availability for professional sanitation. Long Beach Janitorial was the best pricing and was available that same day. They were great. Two guys arrived, both had sanitation equipment and sprayed down the entire office in less than an hour. We had no more issues, and lucking no additional sick employees. Thank you.",
         profilePicture: "",
         platform: "Yelp",
      },
      {
         name: "GIA El-Shaddai Long Beach Church",
         review:
            "I’m glad I came across Long Beach Janitorial. I’ve had issues in the past with cleaners but they provided a trustworthy experience and made sure the job was done up to my expectations. Thank you!",
         profilePicture: "",
         platform: "Google",
      },
      {
         name: "St Joseph Church",
         review:
            "I appreciate the diligence and professionalism of Anthony and the crew member appointed to us. During these covid times they have taken the upmost care to provide the level of cleanliness and safeguarding measures needed to insure everyone's safety. The pricing is fair and we are happy with the great service!",
         profilePicture: "",
         platform: "Google",
      },
   ];

   const data = useStaticQuery(graphql`
      {
         yelp: file(relativePath: { eq: "reviews/yelp.png" }) {
            childImageSharp {
               gatsbyImageData(layout: FIXED, width: 70, placeholder: BLURRED, quality: 100)
            }
         }
         google: file(relativePath: { eq: "reviews/google.png" }) {
            childImageSharp {
               gatsbyImageData(layout: FIXED, width: 76, placeholder: BLURRED, quality: 100)
            }
         }
         facebook: file(relativePath: { eq: "reviews/facebook.png" }) {
            childImageSharp {
               gatsbyImageData(layout: FIXED, width: 95, placeholder: BLURRED, quality: 100)
            }
         }
         defaultProfilePicture: file(relativePath: { eq: "reviews/default-profile-picture.svg" }) {
            publicURL
         }
      }
   `);

   return (
      <>
         {reviews.map((review, i) => {
            return (
               <div className="mb-6 w-full break-inside-avoid rounded-lg bg-white py-8 px-6 border border-gray-200 md:mb-10 md:p-8" key={i}>
                  <div className="mb-4 flex items-center justify-between">
                     <div className="flex items-center space-x-3">
                        {review.profilePicture && review.profilePicture.asset ? (
                           <div className="mb-2 inline-flex justify-center rounded-full border border-white">
                              <GatsbyImage
                                 image={review.profilePicture.asset.gatsbyImageData}
                                 alt={`${review.name} profile headshot`}
                                 loading="lazy"
                                 width={40}
                                 height={40}
                                 className="z-0 rounded-full"
                              />
                           </div>
                        ) : (
                           <img src={data.defaultProfilePicture.publicURL} width="40" alt="Default profile headshot" />
                        )}

                        <div>
                           <span className="block font-bold text-gray-800">{review.name}</span>
                        </div>
                     </div>

                     {review.platform === "Google" && <GatsbyImage image={data.google.childImageSharp.gatsbyImageData} loading="lazy" />}
                     {review.platform === "Yelp" && <GatsbyImage image={data.yelp.childImageSharp.gatsbyImageData} loading="lazy" />}
                     {review.platform === "Facebook" && <GatsbyImage image={data.facebook.childImageSharp.gatsbyImageData} loading="lazy" />}
                  </div>
                  <blockquote>
                     <q className="mb-0 block font-normal before:hidden">{review.review}</q>
                  </blockquote>
               </div>
            );
         })}
      </>
   );
};

export default ReviewCards;
