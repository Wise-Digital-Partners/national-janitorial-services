// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas
import blogs from "./documents/blogs";
import blogAuthors from "./documents/blogAuthors";
import blogCategories from "./documents/blogCategories";
import testimonials from "./documents/testimonials";
import testimonialCategories from "./documents/testimonialCategories";
import services  from "./documents/services";
// Object types
import bodyPortableText from "./objects/bodyPortableText";
import youtube from "./objects/youtube";
import iframe from "./objects/iframe";
import image from "./objects/image";
import accordion from "./objects/accordion";
import navLinks from "./objects/navLinks";
// import headingText from "./objects/headingText";
import list from "./objects/list";
import link from "./objects/link";
import coordinates from "./objects/coordinates";
import category from "./documents/category";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
   // We name our schema
   name: "blog",
   // Then proceed to concatenate our our document type
   // to the ones provided by any plugins that are installed
   types: schemaTypes.concat([
      // The following are document types which will appear
      // in the studio.
      blogs,
      blogCategories,
      blogAuthors,
      testimonials,
      testimonialCategories,
      services,
      category,
      // When added to this list, object types can be used as
      // { type: 'typename' } in other document schemas
      bodyPortableText,
      youtube,
      iframe,
      image,
      accordion,
      navLinks,
      // headingText,
      list,
      link,
      coordinates,
   ]),
});
