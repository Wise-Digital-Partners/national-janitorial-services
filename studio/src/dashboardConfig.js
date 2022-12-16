export default {
   widgets: [
      { name: "structure-menu" },
      {
         name: "project-info",
         layout: { width: "medium" },
         options: {
            data: [
               {
                  title: "PRODUCTION",
                  value: "https://longbeachjanitorial.com/",
                  category: "Website",
               },
               {
                  title: "STAGING",
                  value: "https://longbeachjanitorial-staging.netlify.app/",
                  category: "Website",
               },
               {
                  title: "GitHub repo",
                  value: "https://github.com/Wise-Digital-Partners/national-janitorial-services",
                  category: "Code",
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
               {
                  buildHookId: "631b57803caffe134f6b12b1",
                  title: "Sanity Studio",
                  name: "longbeachjanitorial-cms",
                  apiId: "9e9cadc6-e086-4425-8e89-50c45efa815a",
               },
               {
                  buildHookId: "63811857acf33a6bb7a9c686",
                  title: "Website [staging]",
                  name: "long-beach-janitorial",
                  apiId: "2399dcb8-b870-4f17-8a93-087821fe1941",
               },               
               {
                  buildHookId: "637e545a5289631d434dbf7a",
                  title: "Website [production]",
                  name: "long-beach-janitorial",
                  apiId: "42b57fd9-95bd-488b-9ce3-0ffdee090a18",
               },
            ],
         },
      },
   ],
};
