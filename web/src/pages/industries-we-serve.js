import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Header from "../components/Header/Header";
import CardsWithZoom from "../components/Cards/CardsWithZoom";

const Page = ({ data }) => {
   const cardContent = [
      {
         id: 1,
         image: data.hospitals,
         heading: "Hospitals",
         text: "We adhere to CDC guidelines and use hospital-grade disinfectants to keep your patients safe.",
         link: "/hospital-cleaning-services/",
      },
      {
         id: 2,
         image: data.hoa,
         heading: "HOA",
         text: "Maintain a safe and clean space for your residents. We tailor our cleaning services to your specific needs.",
         link: "/hoa-cleaning-services/",
      },
      {
         id: 3,
         image: data.privateOffices,
         heading: "Private Offices",
         text: "Help keep your employees safe with our professional private office cleaning and sanitation services.",
         link: "/commercial-office-cleaning/",
      },
      {
         id: 4,
         image: data.officeBuildings,
         heading: "Office Buildings",
         text: "We clean and maintain office buildings and commercial spaces of all sizes with our services.",
         link: "/office-building-cleaning/",
      },
      {
         id: 5,
         image: data.churches,
         heading: "Churches",
         text: "Our cleaning team maintains your place of worship to help keep your sacred space and community safe.",
         link: "/church-cleaning-services/",
      },
      {
         id: 6,
         image: data.schools,
         heading: "Schools",
         text: "Provide peace of mind for your kids, teachers, staff, and parents with our cleaning and maintenance.",
         link: "/school-cleaning-services/",
      },
      {
         id: 7,
         image: data.carDealers,
         heading: "Car Dealerships",
         text: "From your showroom to your office and restrooms, keep your dealership looking sharp with our help.",
         link: "/car-dealership-cleaning/",
      },
      {
         id: 8,
         image: data.movie,
         heading: "Movie Theaters",
         text: "Regardless of your theater’s size, we ensure you provide a safe and excellent viewing experience.",
         link: "/movie-theater-cleaning/",
      },
      {
         id: 9,
         image: data.bars,
         heading: "Bars & Nightclubs",
         text: "Help keep your patrons safe with effective sanitation and disinfection, so you can keep the good times flowing.",
         link: "/bar-cleaning-services/",
      },
      {
         id: 10,
         image: data.gyms,
         heading: "Gyms & Fitness",
         text: "We deliver deep cleaning and regular disinfecting for your gym or fitness facility, where hygiene is a priority.",
         link: "/gym-cleaning-services/",
      },
      {
         id: 11,
         image: data.medical,
         heading: "Medical & Dental",
         text: "From the lobby to the exam rooms, we help you care for your patients with a safe and clean office.",
         link: "/medical-dental-office-cleaning/",
      },
      {
         id: 12,
         image: data.dispensaries,
         heading: "Dispensaries",
         text: "We thoroughly clean cannabis facilities and dispensaries so customers can browse and purchase without worry.",
         link: "/dispensary-cleaning-services/",
      },
   ];

   return (
      <Layout navigationStyle="overlap" headerLinkColor="" headerHasBorder={false}>
         <SearchEngineOptimization
            title="Industries We Serve | Commercial Janitorial Services"
            description="Long Beach Janitorial is one cleaning company serving many industries. Learn about the industries we serve and how we can help your business here."
            openGraphImage={data.openGraphImage}
            twitterOpenGraphImage={data.twitterOpenGraphImage}
         />

         <section className="pt-24 md:pt-36 pb-16 md:pb-26">
            <div className="container">
               <Header
                  headingLevel="h1"
                  heading="Industries We Serve"
                  subtext="Long Beach Janitorial is one professional cleaning company serving many industries. We keep businesses in the following lines of work spotless and safe for staff and customers."
                  subtextSize=""
                  textAlignment=""
                  textMaxWidth="max-w-4xl"
                  textMargin="mb-16 md:mb-20"
               />

               <CardsWithZoom
                  columnCount="grid-cols-1 md:grid-cols-3"
                  columnGap="gap-y-10 md:gap-y-12 gap-x-6 md:gap-x-10"
                  cards={cardContent}
                  cardHeadingLevel="h3"
                  cardHeadingSize="text-3xl"
               />
            </div>
         </section>
      </Layout>
   );
};

export const query = graphql`
   {
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/Industries_FB.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/Industries_TW.jpg" }) {
         publicURL
      }
      hospitals: file(relativePath: { eq: "industries/hub/1.0 hospitals.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      hoa: file(relativePath: { eq: "industries/hub/1.1 HOA.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      privateOffices: file(relativePath: { eq: "industries/hub/1.2 private offices.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      officeBuildings: file(relativePath: { eq: "industries/hub/1.3 Office buildings.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      churches: file(relativePath: { eq: "industries/hub/1.4 Churches.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      schools: file(relativePath: { eq: "industries/hub/1.5 Schools.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      carDealers: file(relativePath: { eq: "industries/hub/1.6 Car-dealers.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      movie: file(relativePath: { eq: "industries/hub/1.7 Movie.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      bars: file(relativePath: { eq: "industries/hub/1.8 Bars-Night.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      gyms: file(relativePath: { eq: "industries/hub/1.9 Gyms.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      medical: file(relativePath: { eq: "industries/hub/1.10 Medical.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      dispensaries: file(relativePath: { eq: "industries/hub/1.11 Dispensaries.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
   }
`;
export default Page;
