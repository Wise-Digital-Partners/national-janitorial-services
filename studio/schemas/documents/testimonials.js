import reviewPlatforms from "../objects/reviewPlatforms";

export default {
   title: "Testimonials",
   name: "testimonials",
   type: "document",

   fields: [
      {
         title: "Date",
         name: "date",
         type: "date",
         validation: (Rule) => Rule.required(),
      },
      {
         title: "Name",
         name: "name",
         type: "string",
      },
      {
         title: "Profile Picture",
         name: "profilePicture",
         type: "image",
      },
      {
         title: "Business Name / Title",
         name: "businessNameTitle",
         type: "string",
      },
      {
         title: "Stars",
         name: "stars",
         type: "number",
         validation: (Rule) => Rule.min(1).max(5).integer().required(),
      },
      {
         title: "Review",
         name: "review",
         type: "text",
      },
      {
         title: "Platform",
         name: "platform",
         type: "string",
         options: {
            list: [...reviewPlatforms],
         },
      },
      {
         title: "Make this testimonial featured",
         description: "Will appear in the repeated testimonials module",
         name: "featured",
         type: "boolean",
      },
      // {
      //    title: "Categories",
      //    name: "categories",
      //    type: "array",
      //    of: [
      //       {
      //          title: "Reference to Testimonial Categories",
      //          type: "reference",
      //          to: {
      //             type: "testimonialCategories",
      //          },
      //       },
      //    ],
      // },
      {
         title: "Order",
         name: "order",
         type: "number",
         hidden: true,
      },
   ],
   orderings: [
      {
         title: "Manual order",
         name: "manualOrder",
         by: [{ field: "order", direction: "asc" }],
      },
   ],
   preview: {
      select: {
         title: "name",
         review: "review",
         media: "profilePicture",
      },
      prepare({ title = "No title", review, media }) {
         return {
            title,
            subtitle: review,
            media,
         };
      },
   },
};
