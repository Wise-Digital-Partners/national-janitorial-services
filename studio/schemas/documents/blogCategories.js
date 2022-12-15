export default {
   title: "Blog Category",
   name: "blogCategories",
   type: "document",
   fields: [
      {
         title: "Title",
         name: "title",
         type: "string",
      },
      {
         title: "Slug",
         description: "Exclude leading and trailing backslashes",
         name: "slug",
         type: "slug",
         options: {
            source: "title",
         },
         validation: (Rule) => Rule.required(),
      },
   ],
   orderings: [
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
