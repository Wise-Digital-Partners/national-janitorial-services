import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { getInsuranceUrl } from "../../lib/helpers";
// import PortableText from "./portableText";
// import { format } from "date-fns";

function InsurancePostPreview(props) {
  return (
    <AniLink
      fade
      to={getInsuranceUrl(props.slug.current)}
      className="no-underline text-gray-900 hover:text-primary_600"
    >
      {/* <div className="group bg-secondary-50 rounded-xl pt-4 px-4 pb-12 h-full">
        <div className="overflow-hidden rounded-md mb-3.5">
          {props.image && props.image.asset && (
            <GatsbyImage image={props.image.asset.gatsbyImageData} />
          )}
        </div>
        <div>
          {props.categories && (
            <>
              {props.categories.slice(0, 1).map((category) => (
                <div
                  className="text-primary_600 font-black text-sm uppercase mb-1"
                  key={category._id}
                >
                  {category.title}
                </div>
              ))}
            </>
          )}
          <p className="font-heading text-xl font-semibold mb-0">
            {props.title}
            <p>{props.nav}</p>
          </p>
        </div>
      </div> */}
      <p>{props.nav}</p>
    </AniLink>
  );
}

export default InsurancePostPreview;
