import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "gatsby-plugin-transition-link";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroStacked from "../components/Hero/HeroStacked";
import Testimonials from "../components/Repeating/Testimonials";
import About from "../components/Repeating/About";
import Clients from "../components/Repeating/Clients";
import WhyUs from "../components/Repeating/WhyUs";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
  return (
    <Layout navigationStyle="standard" headerLinkColor="" headerHasBorder={false}>
      <SearchEngineOptimization
        title="Commercial Disinfection Services in Long Beach, CA | LBJ"
        description="EPA-registered commercial disinfection for Long Beach businesses. Certified experts, transparent billing. Schedule your free 30-minute site consultation."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroStacked
        image={data.heroStacked.childImageSharp.gatsbyImageData}
        backgroundFixed={true}
        imageMaxHeight="max-h-[468px]"
        heading="Commercial Disinfection Services in Long Beach, CA"
        subtext="EPA-registered, CDC-aligned disinfection for offices, medical facilities, schools, and hospitality venues across Long Beach and the surrounding cities."
        textMaxWidth="max-w-4xl"
      />

      <section className="py-16 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-10 lg:gap-x-20">
            <div>
              <h2>Why Cleaning Isn't Enough for Long Beach Businesses Today</h2>
              <p className="mb-0">
                Commercial disinfection is a regulated sanitation process. It reduces pathogens on
                surfaces to a level that protects employee and visitor health, a different, higher
                standard than routine cleaning, which removes visible dirt and debris but doesn't
                reliably reduce pathogen load. That distinction matters the moment a Long Beach
                business faces a real exposure risk. A staff member tests positive at a professional
                office. Flu season sweeps through a classroom. A health inspector flags a restaurant
                kitchen. Or an HOA board fields complaints about a shared lobby.
              </p>
            </div>
            <div>
              <GatsbyImage
                image={data.intro.childImageSharp.gatsbyImageData}
                alt="Commercial Disinfection Services in Long Beach, CA"
              />
            </div>
          </div>
          <div className="mt-12 max-w-4xl md:mt-16">
            <p>
              This page covers our dedicated EPA- and CDC-aligned disinfection program, the standing
              protocol layered on top of our{" "}
              <Link fade to="/commercial-cleaning-services/" className="text-link font-bold">
                routine commercial cleaning
              </Link>{" "}
              and COVID-response services.
            </p>
            <p>
              In each of these situations, mopping and dusting solve the visible problem but leave
              the underlying one, cross-contamination on high-touch surfaces, unaddressed. A law
              office exposed to a COVID-positive visitor doesn't need a tidier waiting room; it
              needs verified pathogen reduction before staff return. A dental practice can't reopen
              on "it looks clean." A{" "}
              <Link fade to="/dispensary-cleaning-services/" className="text-link font-bold">
                dispensary
              </Link>{" "}
              can't tell customers to browse and purchase without worry if air filters and product
              shelves haven't been properly sanitized.
            </p>
            <p>
              <Link fade to="/commercial-cleaning-company/" className="text-link font-bold">
                Long Beach Janitorial
              </Link>{" "}
              (formerly National Janitorial Services) closes that gap with certified experts. We
              treat disinfection as a distinct, EPA-governed service, not an add-on to a
              mop-and-bucket contract, because that's what actually reduces the risk of infection
              for the people who work in and visit your facility.
            </p>
            <p className="mb-0">
              Property managers face a related but distinct version of this problem. An{" "}
              <Link fade to="/hoa-cleaning-services/" className="text-link font-bold">
                HOA board
              </Link>{" "}
              or commercial landlord in Long Beach is responsible for shared spaces, lobbies,
              elevators, parking structures, stairways, where liability exposure is harder to
              contain than in a single tenant's office. A cleaning crew that treats a lobby
              thoroughly but skips a stairwell hasn't actually reduced the property's risk; it's
              shifted the gap somewhere less visible. That's why our scope documentation covers
              every shared area a property manager names during the site consultation, not just the
              spaces that are easiest to reach.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2 className="mb-4">
              What Our Commercial Disinfection Service in Long Beach Includes
            </h2>
            <p className="mb-0">
              Long Beach Janitorial's commercial disinfection service applies EPA-registered
              disinfecting agents, including Multi-Clean Chlorinated Disinfecting Tablets, in
              accordance with CDC Guidelines. Instead of a generic approach, we conduct site visits
              to develop a custom cleaning plan targeting the high-touch surfaces specific to your
              facility type.
            </p>
          </header>
          <h3 className="heading-four mb-6">Areas We Clean</h3>
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            <div>
              <p className="mb-1 font-heading font-bold text-gray-700">Offices and workstations</p>
              <p className="mb-0">
                Desks, shared equipment, door handles, and break room surfaces where staff contact
                is highest.
              </p>
            </div>
            <div>
              <p className="mb-1 font-heading font-bold text-gray-700">
                Restrooms and common areas
              </p>
              <p className="mb-0">
                Full disinfection of fixtures, partitions, and high-touch hardware, not just visible
                surface wiping.
              </p>
            </div>
            <div>
              <p className="mb-1 font-heading font-bold text-gray-700">
                Service bays and showrooms
              </p>
              <p className="mb-0">
                For car dealerships and auto service centers, disinfection that keeps
                customer-facing spaces "showroom sharp" between visits.
              </p>
            </div>
            <div>
              <p className="mb-1 font-heading font-bold text-gray-700">
                Sanctuaries and fellowship halls
              </p>
              <p className="mb-0">
                For churches and houses of worship, disinfection that respects the space while
                protecting the congregation.
              </p>
            </div>
            <div>
              <p className="mb-1 font-heading font-bold text-gray-700">
                Classrooms and shared learning spaces
              </p>
              <p className="mb-0">
                Desks, shared supplies, and high-traffic corridors treated on a schedule that fits
                the school calendar.
              </p>
            </div>
            <div>
              <p className="mb-1 font-heading font-bold text-gray-700">
                Parking structures and stairwells
              </p>
              <p className="mb-0">
                For HOA and property management clients, disinfection extended to shared circulation
                spaces that a lobby-only contract would miss.
              </p>
            </div>
            <div>
              <p className="mb-1 font-heading font-bold text-gray-700">
                DJ booths, bars, and dance floors
              </p>
              <p className="mb-0">
                For nightlife venues, disinfection scheduled around operating hours so it never
                interrupts business.
              </p>
            </div>
          </div>
          <p className="mb-0 mt-10">
            Every treatment area is documented in the scope we build during your site consultation,
            so a property manager, healthcare administrator, or restaurant owner can see exactly
            what was covered, not just take our word for it. Why does EPA registration matter for
            liability? We use EPA-registered disinfectants that are effective against pathogens like
            Staphylococcus aureus, Norovirus, and the novel coronavirus, keeping your business
            clean, compliant, and client-focused while providing peace of mind to your staff and
            guests.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="mb-12 max-w-3xl">
            <h2>How a 30 Minute Site Consultation Works</h2>
          </header>
          <div className="grid grid-cols-1 gap-y-8">
            <div className="flex items-start">
              <span className="mr-6 mt-1 font-heading text-3xl font-black text-primary">01</span>
              <p className="mb-0">
                <strong>30 Minute Site Consultation.</strong> A certified expert walks your
                facility, identifies high-touch and high-risk zones specific to your industry, and
                reviews your current protocols. What's included: a facility-type assessment, a
                proposed disinfection scope, and a review of billing options, standard Net 30 for
                ongoing monthly service, or a Net 15 Financed Billing option, invoiced the month
                after service, to accommodate our clients' standard accounting policies.
              </p>
            </div>
            <div className="flex items-start">
              <span className="mr-6 mt-1 font-heading text-3xl font-black text-primary">02</span>
              <p className="mb-0">
                <strong>Scope and Schedule Confirmation.</strong> We confirm the treatment areas,
                frequency (one-time exposure response vs. recurring service), and whether
                electrostatic application is appropriate for your space.
              </p>
            </div>
            <div className="flex items-start">
              <span className="mr-6 mt-1 font-heading text-3xl font-black text-primary">03</span>
              <p className="mb-0">
                <strong>Certified Application.</strong> Our technicians apply EPA-registered agents,
                including Multi-Clean Chlorinated Disinfecting Tablets, following manufacturer
                contact-time requirements, not a rushed wipe-down.
              </p>
            </div>
            <div className="flex items-start">
              <span className="mr-6 mt-1 font-heading text-3xl font-black text-primary">04</span>
              <p className="mb-0">
                <strong>Documentation and Handoff.</strong> You receive confirmation of what was
                treated and when, so you have a record on hand if compliance questions come up
                later.
              </p>
            </div>
            <div className="flex items-start">
              <span className="mr-6 mt-1 font-heading text-3xl font-black text-primary">05</span>
              <p className="mb-0">
                <strong>Ongoing or One-Time Follow-Up.</strong> Recurring clients move to a standing
                schedule; one-time exposure-response clients get a clear recommendation on whether
                follow-up treatment is warranted.
              </p>
            </div>
          </div>
          <p className="mb-0 mt-10">
            For emergency exposure events, Long Beach Janitorial prioritizes same-day or next-day
            scheduling, the consultation and application steps above still apply, just on a
            compressed timeline.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2>The Partnership Game vs. the Price Game</h2>
            <p className="mb-0">
              Most commercial cleaning vendors compete on the price game: lowest bid, rotating
              crews, minimal accountability. Long Beach Janitorial competes on the partnership game,
              a framework built on three pillars that a facility manager can actually verify, not
              just adjectives we claim about ourselves.
            </p>
          </header>
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-3">
            <div>
              <p className="mb-1 font-heading font-bold text-gray-700">
                Certified Experts using EPA-registered agents
              </p>
              <p className="mb-0">
                Every technician is trained on EPA-registered disinfecting products and application
                methods, including Multi-Clean Chlorinated Disinfecting Tablets, so the agent used
                matches the pathogen-reduction claim on the label.
              </p>
            </div>
            <div>
              <p className="mb-1 font-heading font-bold text-gray-700">
                Licensed and insured accountability
              </p>
              <p className="mb-0">
                Long Beach Janitorial carries the licensing and insurance a commercial client needs
                before allowing a team into a medical facility, school, or restaurant kitchen, a
                non-negotiable trust factor we state upfront rather than leaving to assumption.
              </p>
            </div>
            <div>
              <p className="mb-1 font-heading font-bold text-gray-700">
                Local, Long Beach-rooted responsiveness
              </p>
              <p className="mb-0">
                Long Beach Janitorial, formerly known as National Janitorial Services, rebuilt its
                identity around local accountability specifically because a national call center
                can't offer the same on-call responsiveness as a certified expert who is around the
                corner, delivering on-time, on-budget, and on-point service every visit. That local
                footprint now serves more than 100 businesses across Long Beach.
              </p>
            </div>
          </div>
          <p className="mb-0 mt-10">
            Together, these three pillars support what we mean by asset preservation: a facility
            that receives consistent, professional cleaning not only reduces the risk of infection
            for everyone inside, but also protects the long-term lifespan of heavy-use assets like
            commercial flooring.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2>Proven Results for Long Beach Commercial Facilities</h2>
          </header>
          <div className="max-w-4xl">
            <p>
              Long Beach Janitorial has served more than 100 businesses across Long Beach and the
              surrounding area, spanning healthcare, education, hospitality, property management,
              and professional services. That volume reflects repeat, recurring relationships built
              on the partnership model described above, not one-off jobs won on price.
            </p>
            <p>
              One example: when a Long Beach law office needed an emergency response after a staff
              exposure event, Long Beach Janitorial's certified team completed full disinfection of
              the office in under an hour, client Hilary V. cited that response time directly as the
              reason the firm was able to reopen without extended downtime. That's the standard we
              hold every emergency exposure job to, whether the client is a two-person office or a
              multi-floor medical building.
            </p>
            <p className="mb-0">
              That same standard carries over to recurring clients across other verticals. A Long
              Beach church that brought Long Beach Janitorial on for ongoing sanctuary and
              fellowship-hall disinfection has kept the same service schedule for multiple years,
              the kind of retained relationship the price game rarely produces, because a vendor
              competing purely on cost has little reason to maintain consistency once the contract
              is signed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <header className="mb-10 max-w-3xl">
            <h2>Explore Disinfection Services by Industry and Specialty</h2>
            <p className="mb-0">
              Long Beach Janitorial tailors its commercial disinfection protocols to the specific
              compliance and operational needs of your industry. Start with your sector, or go
              directly to a specialized service below.
            </p>
          </header>
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            <div>
              <p className="mb-4 font-heading font-bold uppercase text-gray-700">By Industry</p>
              <ul className="styled-list">
                <li>
                  <span>
                    <strong>Medical Facility Disinfection Services</strong> — Thorough sanitation
                    and disinfection for hospitals, medical offices, and dental practices, where a
                    rigorously sanitized environment is crucial to reduce the risk of infection.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>School &amp; Education Facility Sanitization</strong> — Classroom and
                    shared-space disinfection scheduled around the academic calendar, including
                    flu-season programs.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Hospitality &amp; Retail Disinfection</strong> — Sanitization for
                    restaurants, bars, dealerships, and dispensaries that protects both health
                    outcomes and customer experience.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Property Management &amp; HOA Disinfection</strong> — Common-area and
                    shared-space disinfection that supports asset preservation across an entire
                    property portfolio.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Geo-Targeted Commercial Disinfection</strong> — Full commercial
                    disinfection coverage for businesses in{" "}
                    <Link fade to="/downey-janitorial-services/" className="text-link font-bold">
                      Downey
                    </Link>
                    ,{" "}
                    <Link fade to="/lakewood-janitorial-services/" className="text-link font-bold">
                      Lakewood
                    </Link>
                    ,{" "}
                    <Link
                      fade
                      to="/santa-fe-springs-janitorial-services/"
                      className="text-link font-bold"
                    >
                      Santa Fe Springs
                    </Link>
                    ,{" "}
                    <Link fade to="/commerce-janitorial-services/" className="text-link font-bold">
                      Commerce
                    </Link>
                    , and{" "}
                    <Link fade to="/vernon-janitorial-services/" className="text-link font-bold">
                      Vernon
                    </Link>
                    .
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4 font-heading font-bold uppercase text-gray-700">
                Specialized Services
              </p>
              <ul className="styled-list">
                <li>
                  <span>
                    <strong>Electrostatic Disinfection Services</strong> — Advanced electrostatic
                    application for faster, more even coverage across large or complex spaces.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>COVID &amp; Disinfection Services</strong> — Same-day, rapid-response
                    deep cleaning to protect your business from pathogens following a confirmed
                    exposure event.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>EPA-Registered Disinfection Protocols</strong> — A closer look at how
                    EPA registration standards shape every job we do.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Church &amp; House of Worship Sanitization</strong> — Disinfection that
                    respects the sanctity of the space while protecting the congregation.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="mb-12 max-w-3xl">
            <h2>Frequently Asked Questions About Commercial Disinfection in Long Beach</h2>
          </header>
          <div className="grid max-w-4xl grid-cols-1 gap-y-10">
            <div>
              <h4 className="heading-six mb-2">
                How much does commercial disinfection cost for a Long Beach office?
              </h4>
              <p className="mb-0">
                Cost depends on square footage, treatment frequency, and whether the job is a
                one-time exposure response or recurring service. To ensure you get exactly what your
                facility requires, we offer a 30 Minute Site Consultation where we conduct a site
                visit and work closely with you to develop a custom cleaning plan.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Does Long Beach Janitorial serve businesses outside Long Beach proper?
              </h4>
              <p className="mb-0">
                Yes. In addition to Long Beach, we serve commercial clients in{" "}
                <Link fade to="/downey-janitorial-services/" className="text-link font-bold">
                  Downey
                </Link>
                ,{" "}
                <Link fade to="/lakewood-janitorial-services/" className="text-link font-bold">
                  Lakewood
                </Link>
                ,{" "}
                <Link
                  fade
                  to="/santa-fe-springs-janitorial-services/"
                  className="text-link font-bold"
                >
                  Santa Fe Springs
                </Link>
                ,{" "}
                <Link fade to="/commerce-janitorial-services/" className="text-link font-bold">
                  Commerce
                </Link>
                , and{" "}
                <Link fade to="/vernon-janitorial-services/" className="text-link font-bold">
                  Vernon
                </Link>{" "}
                under the same certified disinfection standards.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                What's the difference between Net 30 and Net 15 billing?
              </h4>
              <p className="mb-0">
                We offer a Net 30 standard billing term for monthly recurring service, as well as a
                Net 15 financed billing option for the previous month's service, to best accommodate
                your specific accounting needs.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">What makes a disinfecting agent EPA-registered?</h4>
              <p className="mb-0">
                To help protect your business and stop the spread, our certified cleaning experts
                use EPA-registered products, including Multi-Clean Chlorinated Disinfecting Tablets,
                which are proven effective against specific pathogens.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                How often should a commercial facility be disinfected?
              </h4>
              <p className="mb-0">
                We tailor our cleaning services to your specific industry needs. From daily
                janitorial services for medical and dental offices to regular maintenance for
                private workspaces, we conduct a site visit and work closely with you to develop the
                right cleaning plan.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Does Long Beach Janitorial handle emergency exposure events?
              </h4>
              <p className="mb-0">
                When a confirmed exposure event happens, our team acts fast. When a local law firm
                experienced a staff COVID diagnosis, we were available that same day and
                successfully sprayed down their entire office in less than an hour.
              </p>
            </div>
            <div>
              <h4 className="heading-six mb-2">
                Is electrostatic disinfection included in standard commercial service, or is it
                separate?
              </h4>
              <p className="mb-0">
                Whether your facility requires standard disinfection or specialized sanitation
                equipment to spray down your office, we tailor our services to your specific needs.
                We confirm the right approach for your facility during a 30 Minute Site
                Consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="container">
          <h2 className="mb-6">Key Takeaways</h2>
          <ul className="styled-list max-w-4xl">
            <li>
              Commercial disinfection reduces pathogens to a documented health standard, a different
              (and higher) bar than routine cleaning.
            </li>
            <li>
              Long Beach Janitorial's process starts with a free 30 Minute Site Consultation that
              assesses your facility and reviews Net 30 or Net 15 billing options.
            </li>
            <li>
              Every job uses EPA-registered agents, including Multi-Clean Chlorinated Disinfecting
              Tablets, applied by our certified, licensed, and insured commercial cleaning team in
              accordance with CDC Guidelines.
            </li>
            <li>
              The Partnership Game vs. Price Game framework is why Long Beach Janitorial competes on
              consistency and accountability rather than the lowest bid.
            </li>
            <li>
              Long Beach Janitorial has served 100+ businesses across Long Beach, Downey, Lakewood,
              Santa Fe Springs, Commerce, and Vernon.
            </li>
            <li>Emergency exposure response is available with same-day or next-day scheduling.</li>
          </ul>
          <p className="mb-0 mt-10 max-w-4xl">
            Peace of mind starts with knowing exactly what's being done to protect your facility,
            not a guess, and not a guarantee we can't back up.{" "}
            <Link fade to="/commercial-cleaning-company/" className="text-link font-bold">
              Long Beach Janitorial's certified experts
            </Link>{" "}
            will walk your space, recommend a disinfection scope specific to your industry, and give
            you a straightforward Net 30 or Net 15 billing option before you commit to anything.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div className="container">
          <header className="max-w-4xl">
            <h2>Schedule Your Long Beach Site Consultation Today</h2>
            <p className="mb-0">
              Long Beach Janitorial provides commercial disinfection services in Long Beach for
              medical facilities, schools, hospitality venues, property managers, and professional
              offices that need more than standard commodity cleaning. We're a certified
              disinfection partner, not a low-bid vendor, using only EPA-registered disinfectants
              applied by our fully trained cleaning experts, delivering the highest cleaning
              standards your industry requires.
            </p>
          </header>
        </div>
      </section>

      <About className="mb-16 pt-16 md:mb-32 md:pt-32" headingLevel="h2" />

      <Clients className="pb-16 md:pb-32" headingLevel="h2" />

      <Testimonials headingLevel="h2" />

      <WhyUs className="py-16 md:py-32" headingLevel="h2" />

      <CallToAction heading="Schedule a 30 Minute Site Consultation" headingLevel="h2" />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(relativePath: { eq: "open-graph/facebook/Disinfectant Services_FB.jpg" }) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Disinfectant Services_TW.jpg" }
    ) {
      publicURL
    }
    heroStacked: file(
      relativePath: { eq: "services/disinfectant-services/commercial-disinfection.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    intro: file(relativePath: { eq: "services/disinfectant-services/intro.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
