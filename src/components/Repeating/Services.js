import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../Header/Header";
import CardsWithZoom from "../Cards/CardsWithZoom";

const Services = ({ ...props }) => {
   const data = useStaticQuery(graphql`
      {
         janitorialServices: file(relativePath: { eq: "repeating/services/janitorial-services.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
         commercialCleaning: file(relativePath: { eq: "repeating/services/commercial-cleaning.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
         deepCleaning: file(relativePath: { eq: "repeating/services/deep-cleaning.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
         disinfectatServices: file(relativePath: { eq: "repeating/services/disinfectat-services.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
         officeCleaning: file(relativePath: { eq: "repeating/services/office-cleaning.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
         porterServices: file(relativePath: { eq: "repeating/services/porter-service(s).jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
      }
   `);

   const cardContent = [
      {
         id: 1,
         image: data.janitorialServices.childImageSharp.gatsbyImageData,
         heading: "Janitorial Services",
         text: "Get the regular cleaning your workspace demands with the highest standards of cleanliness.",
         link: "/janitorial-services/",
      },
      {
         id: 2,
         image: data.commercialCleaning.childImageSharp.gatsbyImageData,
         heading: "Commercial Cleaning",
         text: "From warehouses to other workspaces, we offer first-class facility cleaning and management.",
         link: "#",
      },
      {
         id: 3,
         image: data.officeCleaning.childImageSharp.gatsbyImageData,
         heading: "Office Cleaning",
         text: "Whether your office is big or small, we’ll keep your space safe for your employees.",
         link: "#",
      },
      {
         id: 4,
         image: data.porterServices.childImageSharp.gatsbyImageData,
         heading: "Porter Service(s)",
         text: "Perfect for HOAs, nursing homes, care providers, event spaces, hotels, and much more.",
         link: "#",
      },
      {
         id: 5,
         image: data.deepCleaning.childImageSharp.gatsbyImageData,
         heading: "Deep Cleaning",
         text: "We offer thorough, one-time cleaning efforts that we can repeat as needed throughout the year.",
         link: "#",
      },
      {
         id: 6,
         image: data.disinfectatServices.childImageSharp.gatsbyImageData,
         heading: "Disinfectant Services",
         text: "Bring your workspace into cleanliness and compliance with professional disinfectant services.",
         link: "#",
      },
   ];

   return (
      <section className={`${props.className ? props.className : ""}`}>
         <div className="container">
            <Header
               headingLevel={props.headingLevel}
               heading="Other Commercial Cleaning Services"
               subtext=""
               subtextSize=""
               textAlignment="text-center mx-auto"
               maxWidth="max-w-3xl"
               margin="mb-12 md:mb-16"
            />

            <CardsWithZoom
               columns="grid-cols-1 md:grid-cols-3"
               columnGap="gap-y-12 md:gap-y-16 gap-x-6 md:gap-x-10"
               cards={cardContent}
               cardHeadingLevel={props.cardHeadingLevel}
               cardHeadingSize="text-3xl"
            />
         </div>
      </section>
   );
};

export default Services;
