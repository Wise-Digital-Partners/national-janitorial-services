export default {
   widgets: [
      { name: "structure-menu" },
      {
         name: "project-info",
         layout: { width: "medium" },
         options: {
            data: [
               {
                  title: "GitHub repo",
                  value: "https://github.com/Wise-Digital-Partners/national-janitorial-services",
                  category: "Code",
               },
               {
                  title: "Frontend",
                  value: "https://longbeachjanitorial.com/",
                  category: "Website",
               },
            ],
         },
      },
      { name: "project-users", layout: { width: "small" } },
      {
         name: "netlify",
         layout: { width: "medium" },
         options: {
            title: "Netlify deploys",
            sites: [
               // {
               //    buildHookId: "https://api.netlify.com/build_hooks/631b57803caffe134f6b12b1",
               //    title: "Sanity Studio",
               //    name: "ascent-roofing-cms",
               //    apiId: "172beed9-14d0-465f-9355-b0597f20e38c",
               // },
               {
                  buildHookId: "https://api.netlify.com/build_hooks/637e545a5289631d434dbf7a",
                  title: "Website",
                  name: "long-beach-janitorial",
                  apiId: "42b57fd9-95bd-488b-9ce3-0ffdee090a18",
               },
            ],
         },
      },
   ],
};
