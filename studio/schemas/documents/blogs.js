export default {
   title: "Blog Post",
   name: "blogs",
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
         validation: (Rule) => Rule.required(),
         options: {
            source: "title",
         },
      },
      {
         title: "Published at",
         name: "publishedAt",
         type: "datetime",
         validation: (Rule) => Rule.required(),
      },
      {
         title: "Make this post featured",
         name: "featured",
         type: "boolean",
      },
      {
         title: "SEO Title",
         name: "seoTitle",
         type: "string",
      },
      {
         title: "Meta Description",
         name: "metaDescription",
         type: "text",
      },
      {
         title: "Featured Image",
         name: "featuredImage",
         type: "image",
      },
      {
         title: "Author",
         name: "author",
         type: "reference",
         validation: (Rule) => Rule.required(),
         options: {
            disableNew: true,
         },
         to: [{ type: "blogAuthors" }],
      },
      {
         title: "Categories",
         name: "categories",
         type: "array",
         of: [
            {
               title: "Reference to Blog Categories",
               type: "reference",
               to: {
                  type: "blogCategories",
               },
            },
         ],
      },
      {
         title: "Body",
         name: "body",
         type: "bodyPortableText",
      },
   ],
   orderings: [
      {
         title: "Publishing date new–>old",
         name: "publishingDateDesc",
         by: [
            {
               field: "publishedAt",
               direction: "desc",
            },
            {
               field: "title",
               direction: "desc",
            },
         ],
      },
      {
         title: "Publishing date old->new",
         name: "publishingDateAsc",
         by: [
            {
               field: "publishedAt",
               direction: "asc",
            },
            {
               field: "title",
               direction: "asc",
            },
         ],
      },
   ],
   preview: {
      select: {
         title: "title",
         publishedAt: "publishedAt",
         slug: "slug",
         media: "featuredImage",
      },
      prepare({ title = "No title", slug = {}, media }) {
         return {
            title,
            subtitle: `/${slug.current}/`,
            media,
         };
      },
   },
};
