import React, { useState } from "react";
import { graphql } from "gatsby";
import Services from "../components/Repeating/Services";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Covid from "../components/Repeating/Covid";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel, AccordionItemState } from "react-accessible-accordion";

const Page = ({ data }) => {
   const [accordionOpen1, setAccordionOpen1] = useState(""),
      [accordionOpen2, setAccordionOpen2] = useState(""),
      [accordionOpen3, setAccordionOpen3] = useState("");
   return (
     <Layout
       navigationStyle="overlap"
       headerLinkColor=""
       headerHasBorder={false}
     >
       <SearchEngineOptimization
         title="Commercial Cleaning Services Long Beach | LBJ"
         description="When you need top commercial cleaning services in Long Beach, Long Beach Janitorial is here to help. Browse our services & get a consultation today!"
         openGraphImage={data.openGraphImage.publicURL}
         twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
       />

       <section className="pt-24 md:pt-36 pb-16 md:pb-26">
         <div className="container">
           <header className="text-center max-w-3xl mx-auto">
             <h1>Our Commercial Cleaning Services </h1>
             <p className="text-2xl mb-0">
               When your business needs professional cleaning, disinfecting, and
               reliable maintenance, we have what you need. Learn more about how
               we help businesses like yours stay clean, compliant, and
               client-focused.
             </p>
           </header>
         </div>
       </section>

       <Covid headingLevel="h2" />

       <section className="pt-16 md:pt-32 mb-16 md:mb-32">
         <div className="container">
           <h2>Payment Terms</h2>
           <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-12 lg:gap-x-20 gap-y-10">
             <div className="md:col-start-1 md:col-span-5">
               <p className="mb-0">
                 In order to maintain our competitive pricing, and to
                 accommodate our client’s standard accounting policies, Long
                 Beach Janitorial offers two billing choices.
               </p>
             </div>
             <div className="md:col-end-13 md:col-span-7">
               <Accordion allowZeroExpanded={true}>
                 <AccordionItem
                   className="mb-4 bg-gray-50 px-6 md:px-10 py-4"
                   uuid="1"
                 >
                   <AccordionItemButton className="flex items-center justify-between focus:outline-none">
                     <AccordionItemState>
                       {({ expanded }) => {
                         const state = expanded ? "expanded" : "collapsed";
                         setAccordionOpen1(
                           state === "expanded" ? "rotate-180" : "rotate-0"
                         );
                       }}
                     </AccordionItemState>
                     <h4 className="text-lg md:text-xl text-gray-400 uppercase mb-0">
                       Standard Billing
                     </h4>
                     <i
                       className={`fas fa-caret-down transform ${accordionOpen1} transition-all duration-300 ease-linear`}
                     ></i>
                   </AccordionItemButton>
                   <AccordionItemPanel className="pt-4 animate-fadeIn">
                     <p className="mb-0">
                       LBJ invoices you at the beginning of the month for that
                       coming month's service (e.g February total invoice is
                       sent to client on Feb 1). Terms are Net 30. Interest is
                       charged at 1.5% monthly on the outstanding balance on
                       accounts over 30 days.
                     </p>
                   </AccordionItemPanel>
                 </AccordionItem>

                 <AccordionItem
                   className="mb-4 bg-gray-50 px-6 md:px-10 py-4"
                   uuid="2"
                 >
                   <AccordionItemButton className="flex items-center justify-between focus:outline-none">
                     <AccordionItemState>
                       {({ expanded }) => {
                         const state = expanded ? "expanded" : "collapsed";
                         setAccordionOpen2(
                           state === "expanded" ? "rotate-180" : "rotate-0"
                         );
                       }}
                     </AccordionItemState>
                     <h4 className="text-lg md:text-xl text-gray-400 uppercase mb-0">
                       Financed Billing{" "}
                     </h4>
                     <i
                       className={`fas fa-caret-down transform ${accordionOpen2} transition-all duration-300 ease-linear`}
                     ></i>
                   </AccordionItemButton>
                   <AccordionItemPanel className="pt-4 animate-fadeIn">
                     <p className="mb-0">
                       LBJ invoices you at the beginning of the following month
                       for the previous month's service (e.g February total
                       invoice is sent to client on March 1). Terms are Net 15.
                       Interest is charged at 1.5% monthly on the outstanding
                       balance on accounts over 15 days.
                     </p>
                   </AccordionItemPanel>
                 </AccordionItem>

                 <AccordionItem
                   className="bg-gray-50 px-6 md:px-10 py-4"
                   uuid="3"
                 >
                   <AccordionItemButton className="flex items-center justify-between focus:outline-none">
                     <AccordionItemState>
                       {({ expanded }) => {
                         const state = expanded ? "expanded" : "collapsed";
                         setAccordionOpen3(
                           state === "expanded" ? "rotate-180" : "rotate-0"
                         );
                       }}
                     </AccordionItemState>
                     <h4 className="text-lg md:text-xl text-gray-400 uppercase mb-0">
                       Extra Services
                     </h4>
                     <i
                       className={`fas fa-caret-down transform ${accordionOpen3} transition-all duration-300 ease-linear`}
                     ></i>
                   </AccordionItemButton>
                   <AccordionItemPanel className="pt-4 animate-fadeIn">
                     <p className="mb-0">
                       If needed, we are happy to provide additional services
                       beyond the current scope of work. Any time a request for
                       extra work is received we will provide a quote prior to
                       commencing work, so that approval is clear and in
                       writing.
                     </p>
                   </AccordionItemPanel>
                 </AccordionItem>
               </Accordion>
             </div>
           </div>
         </div>
       </section>

       <Services className="pb-16 md:pb-32" cardHeadingLevel="h3" />
     </Layout>
   );
};

export const query = graphql`
   {
      openGraphImage: file(relativePath: { eq: "open-graph/facebook/Services_FB.jpg" }) {
         publicURL
      }
      twitterOpenGraphImage: file(relativePath: { eq: "open-graph/twitter/Services_TW.jpg" }) {
         publicURL
      }
   }
`;
export default Page;
