import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroStacked from "../components/Hero/HeroStacked";
import Testimonials from "../components/Repeating/Testimonials";
import Clients from "../components/Repeating/Clients";
import WhyUs from "../components/Repeating/WhyUs";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";

const Page = ({ data }) => {
   return (
      <Layout navigationStyle="standard" headerLinkColor="" headerHasBorder={false}>
         <SearchEngineOptimization
            title="Car Dealership Cleaning Services in Long Beach, CA"
            description="Car dealership cleaning services in Long Beach. Showroom detailing, service bay cleaning, customer lounge care, and floor care that protects your assets."
            openGraphImage={data.openGraphImage.publicURL}
            twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
         />

         <HeroStacked
            image={data.heroStacked.childImageSharp.gatsbyImageData}
            backgroundFixed={true}
            imageMaxHeight="max-h-[468px]"
            heading="Car Dealership Cleaning Services"
            subtext="Keeping your dealership fresher than a brand new car. "
            textMaxWidth="max-w-4xl"
         />

<section className="py-12 md:py-20 "><div className="container"><div className=""><div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"><div><h2>{"Keeping Your Dealership Fresher Than a Brand New Car"}</h2>
<p>{"Showcase the best your dealership has to offer and increase sales with consistent car dealership cleaning services from Long Beach Janitorial. Our reliable team of cleaning experts uses EPA-registered products to keep your entire dealership looking sharp. From the showroom floor to your service bays, offices, and customer lounge, we leave no detail unchecked. Let us handle your dealership's janitorial needs so you can close more sales, delight more customers, and keep your business a safe and welcoming place."}</p>
<p>{"Schedule a 30 Minute Site Consultation and we'll build a cleaning plan around how your dealership actually operates, showroom and service side alike."}</p><ButtonSolid as="button" modal="modal-contact" text="Schedule a 30 Minute Site Consultation" /></div><GatsbyImage image={data.intro.childImageSharp.gatsbyImageData} alt="Car dealership cleaning in Long Beach" /></div></div></div></section>

<section className="py-12 md:py-20 bg-gray-50"><div className="container"><div className="max-w-4xl mx-auto"><h2>{"Why Dealerships Need a Cleaning Partner That Understands Both Sides of the Business"}</h2>
<p>{"A car dealership isn't one cleaning job, it's two. The showroom is a sales environment where a smudged window or a scuffed floor undercuts the presentation of a vehicle that costs tens of thousands of dollars. The service bay is a working environment where grease, oil, and brake dust accumulate daily and need industrial-grade cleaning, not showroom polish. A cleaning crew that treats both areas the same way tends to under-clean one side or over-clean the other."}</p>
<p>{"That is the gap our car dealership cleaning services close. We build a cleaning plan that treats your showroom and your service bays as the distinct environments they are, backed by a site visit and a plan built around your specific layout and traffic patterns."}</p></div></div></section>

<section className="py-12 md:py-20 "><div className="container"><div className="max-w-4xl mx-auto"><h2>{"What Our Car Dealership Cleaning Services Include"}</h2>
<p>{"Car dealership cleaning services cover every customer-facing and operational area of a dealership, from the showroom floor to service bays to customer-facing offices, cleaned with EPA-registered disinfectants and equipment matched to each area's actual use. Our certified cleaning experts handle dusting, wiping, vacuuming, disinfection, and more for the following areas:"}</p><ul className="styled-list"><li>{"Showroom"}</li><li>{"Service bays"}</li><li>{"Offices"}</li><li>{"Lobbies and customer lounges"}</li><li>{"Bathrooms"}</li><li>{"Walls and floors"}</li><li>{"Trash removal"}</li><li>{"Exterior cleaning"}</li></ul></div></div></section>

<section className="py-12 md:py-20 bg-gray-50"><div className="container"><div className="max-w-4xl mx-auto"><h2>{"Showroom vs Service Bay Cleaning: Two Different Standards"}</h2>
<p>{"Showroom cleaning is presentation-grade, focused on glass, flooring, and product staging areas that directly affect how a customer perceives your inventory, while service bay cleaning is industrial-grade, focused on degreasing, safety compliance, and managing oil and fluid residue. Treating these as the same job produces the wrong result on both sides."}</p>
<p>{"In the showroom, we focus on streak-free glass, polished or waxed flooring, dust-free vehicle staging areas, and fingerprint-free surfaces on doors and displays, since these are the details a customer notices while walking the floor. In the service bay, we focus on degreasing floors, cleaning up oil and fluid spills, and maintaining a safe walking surface in an area where slip hazards carry real liability. Our crews use different products and equipment for each area, rather than running one cleaning process across both."}</p></div></div></section>

<section className="py-12 md:py-20 "><div className="container"><div className="max-w-4xl mx-auto"><h2>{"Detail Area Maintenance"}</h2>
<p>{"Detail area maintenance covers the wash bays, product prep stations, and finishing areas where vehicles are cleaned and prepped before hitting the showroom floor or a customer handoff. These areas accumulate their own residue, wax buildup, tire shine overspray, chemical runoff, that a general facility cleaning pass doesn't address."}</p>
<p>{"We clean and maintain detail area surfaces, drains, and equipment staging zones as part of a dealership cleaning plan, so the area where you prep your product for sale doesn't become a maintenance liability of its own."}</p></div></div></section>

<section className="py-12 md:py-20 bg-gray-50"><div className="container"><div className="max-w-4xl mx-auto"><h2>{"Customer Lounge Cleanliness"}</h2>
<p>{"Customer lounge cleanliness covers waiting areas, coffee and refreshment stations, and any adjacent restrooms where customers spend time during a sale or a service visit. This is where a customer sits for the longest uninterrupted stretch of their visit, whether they're waiting on financing paperwork or a service appointment, and it shapes their impression of your dealership as directly as the showroom floor does."}</p>
<p>{"We keep lounge seating, tables, and refreshment areas cleaned and restocked, and treat adjacent restrooms with the same restroom maintenance standard we apply dealership-wide, disinfected fixtures, restocked supplies, and odor control, checked on a schedule that matches your customer traffic, not a flat once-daily visit."}</p></div></div></section>

<section className="py-12 md:py-20 "><div className="container"><div className="max-w-4xl mx-auto"><h2>{"Asset Preservation ROI for Dealership Owners"}</h2>
<p>{"Consistent cleaning is a facility asset protection strategy, not just a presentation expense, since showroom flooring, fixtures, and finishes cost real money to replace and last measurably longer with regular, correctly matched maintenance. A showroom floor that gets waxed and maintained on a consistent schedule resists scuffing and wear far longer than one cleaned inconsistently or with the wrong products, which delays the cost of a full floor refinish or replacement."}</p>
<p>{"The same logic applies dealership-wide. Glass that's cleaned correctly resists streaking and etching over time. Service bay flooring maintained on a consistent degreasing schedule holds up better against oil staining and surface breakdown.  For showroom floor specifically, our floor care services include waxing and finish maintenance built to protect that flooring investment over the long term, and we coordinate showroom floor waxing directly with your dealership cleaning schedule rather than as a separate, disconnected service."}</p></div></div></section>

<section className="py-12 md:py-20 bg-gray-50"><div className="container"><div className="max-w-4xl mx-auto"><h2>{"Our Process for Dealership Cleaning"}</h2>
<ol className="list-decimal pl-6"><li className="mb-4">{"Site visit and cleaning plan development. We walk your full dealership, showroom and service side, and build a plan that treats each area according to its actual use."}</li><li className="mb-4">{"Scheduled showroom and customer-area cleaning. Presentation-grade cleaning of the showroom, lobby, and customer lounge, scheduled around your open hours."}</li><li className="mb-4">{"Scheduled service bay and detail area cleaning. Industrial-grade degreasing and safety-focused cleaning of service bays and detail areas, on a separate standard from the showroom."}</li><li className="mb-4">{"Floor care coordination. Showroom floor waxing and finish maintenance scheduled alongside routine cleaning, not as a disconnected add-on."}</li><li className="mb-4">{"Ongoing plan review. We adjust the cleaning schedule as your inventory turnover, service volume, or seasonal traffic changes."}</li></ol></div></div></section>

<section className="py-12 md:py-20 "><div className="container"><div className="max-w-4xl mx-auto"><h2>{"Why Long Beach Dealerships Choose Our Cleaning Team"}</h2>
<p>{"Our certified cleaning experts use EPA-registered products across every area of your dealership, from the showroom floor to service bay surfaces to customer restrooms. We build a custom cleaning plan around your specific layout, rather than applying a generic commercial cleaning schedule that treats a showroom the same as a warehouse."}</p></div></div></section>

<section className="py-12 md:py-20 bg-gray-50"><div className="container"><div className="max-w-4xl mx-auto"><h2>{"Related Long Beach Janitorial Services"}</h2>
<p>{"Car dealership cleaning is one part of our broader commercial cleaning capability. Related services include:"}</p><ul className="styled-list"><li><a className="underline" href="/commercial-cleaning-services/">{"Commercial Cleaning"}</a>{": our full range of ongoing commercial janitorial services for offices, retail, and automotive facilities."}</li><li><a className="underline" href="/floor-waxing-services/">{"Floor Care Services"}</a>{": showroom floor waxing, finish maintenance, and our LBJ Floor Protection Standard for high-traffic showroom and service bay flooring."}</li><li><a className="underline" href="/construction-cleaning-services/">{"Post-Construction Cleaning"}</a>{": cleanup services for dealership renovations, showroom remodels, or new facility builds."}</li></ul></div></div></section>

<section className="py-12 md:py-20 "><div className="container"><div className="max-w-4xl mx-auto"><h2>{"Frequently Asked Questions"}</h2>
<h3>{"What's included in car dealership cleaning services?"}</h3><p>{"Car dealership cleaning services typically include showroom cleaning, service bay degreasing, office and lobby cleaning, customer lounge maintenance, restroom service, and exterior cleaning, scheduled around your dealership's operating hours."}</p><h3>{"Do you clean the showroom and service bays differently?"}</h3><p>{"Yes. Showroom cleaning is presentation-grade, focused on glass, flooring, and staging areas, while service bay cleaning is industrial-grade, focused on degreasing and safety-compliant surface maintenance. We use different products and processes for each."}</p><h3>{"Can you handle showroom floor waxing and finish maintenance?"}</h3><p>{"Yes. Our floor care services include showroom floor waxing and finish maintenance, coordinated directly with your dealership cleaning schedule rather than billed as a separate, disconnected service."}</p><h3>{"How does consistent cleaning protect our dealership's assets?"}</h3><p>{"Regularly maintained flooring, glass, and fixtures resist wear, staining, and surface breakdown longer than facilities cleaned inconsistently, which delays the cost of refinishing or replacing those surfaces."}</p><h3>{"Do you clean customer lounges and waiting areas?"}</h3><p>{"Yes. We maintain lounge seating, refreshment stations, and adjacent restrooms on a schedule matched to your customer traffic, since this is often where customers spend the longest uninterrupted time during a visit."}</p><h3>{"Do you use EPA-registered cleaning products?"}</h3><p>{"Yes. Our certified cleaning experts use EPA-registered products across the showroom, service bays, offices, and customer areas as a standard part of every dealership cleaning plan."}</p></div></div></section>

<section className="py-12 md:py-20 bg-gray-50"><div className="container"><div className="max-w-4xl mx-auto"><h2>{"The Standard We Hold Every Area To"}</h2>
<p>{"A dealership only shows as well as its least-maintained area, whether that's a streaky showroom window, a service bay floor breaking down from oil buildup, or a customer lounge that looks tired by mid-afternoon. Treating the showroom and service side as the distinct environments they are, and coordinating floor care directly with routine cleaning, is what keeps every part of your dealership at the standard your customers actually notice."}</p>
<p>{"That's the plan we build during the site visit, specific to your layout and your traffic, not a generic commercial cleaning template applied to an automotive facility."}</p></div></div></section>

<section className="py-12 md:py-20 "><div className="container"><div className="max-w-4xl mx-auto"><h2>{"Ready for a Dealership That Shows Better?"}</h2>
<p>{"Give your showroom, service bays, and customer areas the cleaning standard each one actually needs, backed by a plan built specifically for your dealership."}</p>
<p>{"Schedule a 30 Minute Site Consultation or Get a Free Estimate to build a cleaning plan for your dealership."}</p><ButtonSolid as="button" modal="modal-contact" text="Schedule a 30 Minute Site Consultation" /></div></div></section>

         <Clients className="pb-16 md:pb-32" headingLevel="h2" />

         <Testimonials headingLevel="h2" />

         <WhyUs className="py-16 md:py-32" headingLevel="h2" />

         <CallToAction headingLevel="h2" />
      </Layout>
   );
};

export const query = graphql`
   {
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/Car Dealerships_FB.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/Car Dealerships_TW.jpg" }) {
         publicURL
      }
      heroStacked: file(relativePath: { eq: "industries/car-dealerships/1.0 Car Dealerships Hero Desktop.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
      intro: file(relativePath: { eq: "industries/car-dealerships/2.0 dealer cleaning.jpg" }) {
         childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
         }
      }
   }
`;
export default Page;
