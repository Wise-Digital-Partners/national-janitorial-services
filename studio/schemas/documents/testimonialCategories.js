export default {
   title: "Testimonial Category",
   name: "testimonialCategories",
   type: "document",
   fields: [
      {
         title: "Title",
         name: "title",
         type: "string",
      },
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
      {
         title: "A>Z",
         name: "alphabeticalAsc",
         by: [
            {
               field: "title",
               direction: "asc",
            },
         ],
      },
      {
         title: "Z->A",
         name: "alphabeticalDesc",
         by: [
            {
               field: "title",
               direction: "desc",
            },
         ],
      },
   ],
};
