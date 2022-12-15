import BlogPostPreview from "./BlogPostPreview";
// import Link from 'gatsby-plugin-transition-link';
import React from "react";

function BlogPostGrid(props) {
  return (
    <>
      {props.nodes &&
        props.nodes.map((node) => (
          <div key={node.id}>
            <BlogPostPreview {...node} buttonText={props.buttonText} isInList />
          </div>
        ))}
    </>
  );
}

BlogPostGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostGrid;
