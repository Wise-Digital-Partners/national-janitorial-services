import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { Link } from "gatsby";

function BlogPostPreview(props) {
  return (
    <Link
      to={`/${props.slug.current}/`}
      className="group block font-normal text-typography-body no-underline hover:text-typography-body"
    >
      {props.featuredImage && props.featuredImage.asset && (
        <div className="mb-6 overflow-hidden">
          <GatsbyImage
            image={props.featuredImage.asset.gatsbyImageData}
            loading="lazy"
            className="w-full scale-100 transform blur-none filter transition-all duration-500 ease-linear md:group-hover:scale-105"
          />
        </div>
      )}
      <div className="heading-five mb-0">{props.title}</div>
    </Link>
  );
}

export default BlogPostPreview;
