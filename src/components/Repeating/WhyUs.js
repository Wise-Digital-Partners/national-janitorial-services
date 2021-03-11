import React from "react";
import { useStaticQuery, graphql } from "gatsby"

const Services = ({className, contentAlignment, heading}) => {

    const data = useStaticQuery(graphql`
        {
			cheaperFaster: file(relativePath: {eq: "repeating/why-us/Cheaper Faster.svg"}) {
				publicURL
			} 
			clientFocused: file(relativePath: {eq: "repeating/why-us/Client Focused.svg"}) {
				publicURL
			} 
			experiencedLicensed: file(relativePath: {eq: "repeating/why-us/Experienced & Licensed.svg"}) {
				publicURL
			} 			
			communicative: file(relativePath: {eq: "repeating/why-us/Communicative.svg"}) {
				publicURL
			} 
			transparent: file(relativePath: {eq: "repeating/why-us/Transparent.svg"}) {
				publicURL
			}
			wideServiceArea: file(relativePath: {eq: "repeating/why-us/Wide Service Area.svg"}) {
				publicURL
			} 			
        }
	`)   
	// experiencedLicensed: file(relativePath: {eq: "repeating/why-us/Experienced & Licensed.svg"}) {
	// 	publicURL
	// }

    return (

    <section className={`${className}`}>
        <div className="container">
			{/* { heading ?
				<header className="mb-14 md:mb-18 md:text-center">
					<h2>{heading}</h2>
				</header>
			: null 
			} */}
			<header className="mb-16 md:mb-20 max-w-3xl">
				<h2>The Design Appruv Guarantee</h2>
				<p className="text-xl md:text-2xl">Here at Design Appruv, you get what you’ve paid for. Here’s how we’ve set ourselves apart from our competitors.</p>
			</header>

			<div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-12 gap-y-12 md:gap-y-16 ${contentAlignment}`}>
				<div>
					<img className={`mb-4 ${contentAlignment}`} src={data.cheaperFaster.publicURL} alt="Cheaper & Faster" />
					<p className="text-lg font-heading text-gray-900 font-bold mb-3 md:mb-5">Cheaper & Faster</p>
					<p className="mb-0">Get five-star design and drafting without the cost, timeline, or ego of a licensed architectural firm.</p>
				</div>
				<div>
					<img className={`mb-4 ${contentAlignment}`} src={data.wideServiceArea.publicURL} alt="Wide Service Area" />
					<p className="text-lg font-heading text-gray-900 font-bold mb-3 md:mb-5">Wide Service Area</p>
					<p className="mb-0">We serve SoCal clients from San Diego County up to Long Beach, and as far east as Palm Springs.</p>
				</div>
				<div>
					<img className={`mb-4 ${contentAlignment}`} src={data.experiencedLicensed.publicURL} alt="Experienced & Licensed" />
					<p className="text-lg font-heading text-gray-900 font-bold mb-3 md:mb-5">Experienced & Licensed</p>
					<p className="mb-0">Our turn-key local design, drafting & expert building permit team is fully licensed with over 80 years of combined experience.</p>
				</div>
				<div>
					<img className={`mb-4 ${contentAlignment}`} src={data.communicative.publicURL} alt="Communicative" />
					<p className="text-lg font-heading text-gray-900 font-bold mb-3 md:mb-5">Communicative</p>
					<p className="mb-0">Our Design Development Experts will be in touch weekly to assure your receiving a 5-star experience.</p>
				</div>
				<div>
					<img className={`mb-4 ${contentAlignment}`} src={data.transparent.publicURL} alt="Transparent" />
					<p className="text-lg font-heading text-gray-900 font-bold mb-3 md:mb-5">Transparent</p>
					<p className="mb-0">We make sure you’re 100% knowledgeable about what, how and why we make the decisions we do!</p>
				</div>
				<div>
					<img className={`mb-4 ${contentAlignment}`} src={data.clientFocused.publicURL} alt="Client Focused" />
					<p className="text-lg font-heading text-gray-900 font-bold mb-3 md:mb-5">Client Focused</p>
					<p className="mb-0">At Design Appruv, our experts always put your construction budget first and design to meet your lifestyle.</p>
				</div>										
			</div>
        </div>
      </section>
    );
}

export default Services;