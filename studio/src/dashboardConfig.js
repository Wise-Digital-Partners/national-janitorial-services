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
               {
                  title: "STAGING",
                  value: "https://longbeachjanitorial-staging.netlify.app/",
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
               {
                  buildHookId: "https://api.netlify.com/build_hooks/631b57803caffe134f6b12b1",
                  title: "Sanity Studio",
                  name: "longbeachjanitorial-cms",
                  apiId: "9e9cadc6-e086-4425-8e89-50c45efa815a",
               },
               {
                  buildHookId: "https://api.netlify.com/build_hooks/63811857acf33a6bb7a9c686",
                  title: "Website [staging]",
                  name: "long-beach-janitorial [staging]",
                  apiId: "2399dcb8-b870-4f17-8a93-087821fe1941",
               },
            ],
         },
      },
   ],
};
