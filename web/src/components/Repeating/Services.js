import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

import Header from "../Header/Header";
import CardsWithZoom from "../Cards/CardsWithZoom";

const Services = ({ className, headingLevel, cardHeadingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      floorWax: file(relativePath: { eq: "common/9_floorwaxing_services_hub.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
        }
      }
      floorStrip: file(relativePath: { eq: "common/8_floorstripping_services_hub.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
        }
      }
      windowClean: file(relativePath: { eq: "common/10_windowcleaning_services_hub.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
        }
      }
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
      disinfectatServices: file(
        relativePath: { eq: "repeating/services/disinfectat-services.jpg" }
      ) {
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
      covidServices: file(relativePath: { eq: "repeating/services/Janitorial Services.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
        }
      }
      constructionCleanup: file(
        relativePath: { eq: "repeating/services/construction-cleanup.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
        }
      }
      pressureWashing: file(relativePath: { eq: "repeating/services/pressure-washing.jpg" }) {
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
      link: "/janitorial-cleaning-company/",
    },
    // {
    //   id: 2,
    //   image: data.covidServices.childImageSharp.gatsbyImageData,
    //   heading: "COVID Cleaning Services",
    //   text: "Stop the spread and protect your business with our specialized COVID cleaning services. ",
    //   link: "/covid-cleaning-services/",
    // },

    {
      id: 3,
      image: data.officeCleaning.childImageSharp.gatsbyImageData,
      heading: "Office Cleaning",
      text: "Whether your office is big or small, we’ll keep your space safe for your employees.",
      link: "/office-cleaning-services/",
    },
    {
      id: 4,
      image: data.porterServices.childImageSharp.gatsbyImageData,
      heading: "Porter Services",
      text: "Perfect for HOAs, nursing homes, care providers, event spaces, hotels, and much more.",
      link: "/day-porter-services/",
    },
    {
      id: 5,
      image: data.deepCleaning.childImageSharp.gatsbyImageData,
      heading: "Deep Cleaning",
      text: "We offer thorough, one-time cleaning efforts that we can repeat as needed throughout the year.",
      link: "/deep-cleaning-services/",
    },
    {
      id: 6,
      image: data.commercialCleaning.childImageSharp.gatsbyImageData,
      heading: "Commercial Cleaning",
      text: "From warehouses to other workspaces, we offer first-class facility cleaning and management.",
      link: "/commercial-cleaning-company/",
    },

    {
      id: 7,
      image: data.disinfectatServices.childImageSharp.gatsbyImageData,
      heading: "Disinfectant Services",
      text: "Bring your workspace into cleanliness and compliance with professional disinfectant services.",
      link: "/disinfection-services/",
    },
    {
      id: 5,
      image: data.floorWax.childImageSharp.gatsbyImageData,
      heading: "Floor Waxing",
      text: "We offer thorough, one-time cleaning efforts that we can repeat as needed throughout the year.",
      link: "/floor-waxing-services/",
    },
    {
      id: 6,
      image: data.floorStrip.childImageSharp.gatsbyImageData,
      heading: "Floor Stripping",
      text: "From warehouses to other workspaces, we offer first-class facility cleaning and management.",
      link: "/floor-stripping-services/",
    },

    {
      id: 7,
      image: data.windowClean.childImageSharp.gatsbyImageData,
      heading: "Window Cleaning",
      text: "Safeguard the lifespan of your windows while enjoying unobstructed views.",
      link: "/window-cleaning-services/",
    },
    {
      id: 8,
      image: data.constructionCleanup.childImageSharp.gatsbyImageData,
      heading: "Construction Cleanup",
      text: "Don’t be left with a mess! Leave the sanitation and debris removal to us.",
      link: "/construction-cleaning-services/",
    },
    {
      id: 9,
      image: data.pressureWashing.childImageSharp.gatsbyImageData,
      heading: "Pressure Washing",
      text: "Make outdoor surfaces and structures look as good as new!",
      link: "/pressure-washing-services/",
    },
  ];

  return (
    <section className={`${className || ""}`}>
      <div className="container">
        <Header
          headingLevel={headingLevel}
          heading="Other Commercial Cleaning Services"
          subtext=""
          subtextSize=""
          textAlignment="text-center mx-auto"
          textMaxWidth="max-w-3xl"
          textMargin="mb-14 md:mb-16"
        />

        <CardsWithZoom
          columnCount="grid-cols-1 md:grid-cols-3 lg:gap-y-2 lg:grid-cols-4"
          columnGap="gap-y-10 md:gap-y-16 gap-x-6 md:gap-x-10"
          cards={cardContent.sort((a, b) => {
            if (a.heading && b.heading) {
              return a.heading.localeCompare(b.heading);
            }
            return 0;
          })}
          cardHeadingLevel={cardHeadingLevel}
          cardHeadingSize="text-3xl"
        />
      </div>
    </section>
  );
};

Services.propTypes = {
  className: PropTypes.string,
  headingLevel: PropTypes.string,
  cardHeadingLevel: PropTypes.string.isRequired,
};

export default Services;
