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
      author: `National Janitorial Services`,
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
            develop: true,
            tailwind: true,
            purgeOnly: ["node_modules/@fortawesome/fontawesome-pro/css/all.min.css"],
         },
      },
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `National Janitorial Services`,
            short_name: `NJS`,
            start_url: `/`,
            background_color: `#53AF3B`,
            theme_color: `#53AF3B`,
            display: `standalone`,
            icon: `static/images/favicon.png`,
         },
      },
      {
         resolve: "gatsby-plugin-google-tagmanager",
         options: {
            id: "GTM-P8S9BNM",
            includeInDevelopment: false,
            // defaultDataLayer: { platform: "gatsby" },
            // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
            // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
            // dataLayerName: "YOUR_DATA_LAYER_NAME",
         },
      },
   ],
};
