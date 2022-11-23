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
                  value: "https://github.com/Wise-Digital-Partners/ascent-roofing",
                  category: "Code",
               },
               {
                  title: "Frontend",
                  value: "https://ascent-roofing.netlify.app",
                  category: "apps",
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
                  name: "ascent-roofing-cms",
                  apiId: "172beed9-14d0-465f-9355-b0597f20e38c",
               },
               {
                  buildHookId: "https://api.netlify.com/build_hooks/631b57f41b45bd13f29c7d82",
                  title: "Website",
                  name: "ascent-roofing-mortgage",
                  apiId: "e0d6fbce-eed7-4f2c-9386-b181b99cf5a5",
               },
            ],
         },
      },
   ],
};
