const {
   NODE_ENV,
   URL: NETLIFY_SITE_URL = "https://nest-ui-kit.netlify.app/",
   DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
   CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
   siteMetadata: {
      siteUrl,
      author: `WISE Digital Partners`,
   },
   plugins: [
      `gatsby-plugin-netlify`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-postcss`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-offline`,
      {
         resolve: "gatsby-plugin-robots-txt",
         options: {
            resolveEnv: () => NETLIFY_ENV,
            env: {
               production: {
                  policy: [{ userAgent: "*" }],
               },
               "branch-deploy": {
                  policy: [{ userAgent: "*", disallow: ["/"] }],
                  sitemap: null,
                  host: null,
               },
               "deploy-preview": {
                  policy: [{ userAgent: "*", disallow: ["/"] }],
                  sitemap: null,
                  host: null,
               },
            },
         },
      },
      {
         resolve: "gatsby-plugin-anchor-links",
         options: {
            offset: -100,
         },
      },
      {
         resolve: `gatsby-transformer-remark`,
         options: {
            plugins: [
               {
                  resolve: `gatsby-remark-relative-images`,
                  options: {
                     name: `uploads`,
                  },
               },
               {
                  resolve: `gatsby-remark-images`,
                  options: {
                     maxWidth: 1440,
                     quality: 100,
                  },
               },
               {
                  resolve: `gatsby-remark-copy-linked-files`,
                  options: {
                     destinationDir: `static`,
                  },
               },
            ],
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            path: `${__dirname}/static/images`,
            name: `uploads`,
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            path: `${__dirname}/src/images`,
            name: `images`,
         },
      },
      {
         resolve: `gatsby-plugin-styled-components`,
         options: {
            displayName: false,
         },
      },
      {
         resolve: `gatsby-plugin-sass`,
         options: {
            postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
         },
      },
      {
         resolve: `gatsby-plugin-emotion`,
         options: {
            // Accepts all options defined by `babel-plugin-emotion` plugin.
         },
      },
      {
         resolve: `gatsby-plugin-purgecss`,
         options: {
            tailwind: true,
            ignore: ["node_modules/slick-carousel/slick/slick-theme.css", "node_modules/slick-carousel/slick/slick.css"],
         },
      },
      {
         resolve: `gatsby-source-instagram`,
         options: {
            username: `9474257617`,
         },
      },
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `nest UI Kit`,
            short_name: `nest UI Kit`,
            start_url: `/`,
            background_color: `#289f44`,
            theme_color: `#289f44`,
            display: `standalone`,
            icon: `static/images/favicon.png`,
         },
      },
      {
         resolve: "gatsby-omni-font-loader",
         options: {
            mode: "async",
            enableListener: true,
            preconnect: ["https://fonts.gstatic.com"],
            custom: [
               {
                  name: ["Font Awesome 5 Brands", "Font Awesome 5 Pro"],
                  file: "/fonts/fontawesome-pro/css/all.min.css",
               },
            ],
            web: [
               {
                  name: "Barlow",
                  file: "https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;900&display=swap",
               },
            ],
         },
      },
      // {
      //    resolve: `gatsby-plugin-recaptcha`,
      //    options: {
      //       async: true,
      //       defer: true,
      //    },
      // },
      // {
      //    resolve: "gatsby-plugin-google-tagmanager",
      //    options: {
      //       // id: "",
      //       includeInDevelopment: false,
      //       // defaultDataLayer: { platform: "gatsby" },
      //       // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
      //       // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
      //       // dataLayerName: "YOUR_DATA_LAYER_NAME",
      //    },
      // },
   ],
};
