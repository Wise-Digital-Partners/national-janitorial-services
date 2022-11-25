import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";

import doubleArrows from "../../images/1.0 Homepage/double-arrows.svg";

const CTA = ({
    heading,
    headingLevel,

    className,
}) => {
    const HeadingTag = headingLevel || "h2";

    return (
        <section className={`relative bg-gray-50 py-10 md:py-0 ${className}`}>
            <div className="container">
                <div className="grid items-center md:min-h-[352px] md:grid-cols-2">
                    <div>
                        <div className="absolute left-0 top-0 hidden h-full w-1/2 md:block">
                            <StaticImage
                                src="../../images/0.0 Repeated Modules/CTA/CTA.jpg"
                                loading="lazy"
                                width={960}
                                className="h-full w-full"
                                imgClassName="object-top"
                            />
                        </div>
                    </div>
                    <div className="md:pl-16 lg:pl-28">
                        <div className="mb-3 flex items-start space-x-2 md:max-w-[334px]">
                            <img src={doubleArrows} />

                            <HeadingTag className="heading-three">
                                {heading || "Get in touch today for a free estimate"}
                            </HeadingTag>
                        </div>

                        <div className="inline-grid flex-wrap items-center space-y-4 md:flex md:flex-nowrap md:space-y-0 md:space-x-4">
                            <ButtonGhost href="tel:619-494-3702" text="(619) 494-3702" />
                            <ButtonSolid href="/roofing-estimate/" text="Free Estimate" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
