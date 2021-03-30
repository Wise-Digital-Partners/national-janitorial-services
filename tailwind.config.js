module.exports = {
   purge: ["./src/**/*.js"],
   theme: {
      container: {
         center: true,
         padding: {
            DEFAULT: "1rem",
            md: "1.5rem",
         },
         screens: {
            DEFAULT: "77rem",
         },
      },
      fontFamily: {
         heading: ["Barlow, sans-serif"],
         display: ["Impact, sans-serif"],
         body: ["Barlow, sans-serif"],
      },
      extend: {
         animation: {
            fadeIn: "fadeIn 0.5s ease-in",
         },
         boxShadow: {
            "3xl": "0px 4px 20px #D6DFE6",
         },
         colors: {
            gray: {
               900: "#1A1A1A",
               800: "#13252F",
               700: "#243A47",
               // 600: "",
               // 500: "",
               400: "#647782",
               300: "#9CA7AD",
               200: "#D6DFE6",
               100: "#C8C8C8",
               50: "#F7F7F7",
            },
            // primary_dark: '',
            primary: "#53AF3B",
            // primary_light: "",
            // accent_dark: '',
            accent: "#007041",
            // accent_light: '',
         },
         fontSize: {
            "2xs": ".625rem",
            md: ".9375rem",
            lg: ["1.125rem", "1.375rem"], // [fontSize, lineHeight]
            xl: ["1.25rem", "1.5rem"],
            "2xl": ["1.375rem", "1.875rem"],
            "3xl": ["1.5rem", "1.813rem"],
            "4xl": ["1.875rem", "2.25rem"],
            "5xl": ["2.25rem", "2.688rem"],
            "6xl": ["2.625rem", "3.125rem"],
            "7xl": ["3rem", "3.688rem"],
            // "8xl": "",
            "mobile-lg": ["1.125rem", "1.375rem"],
            "mobile-xl": ["1.25rem", "1.5rem"],
            "mobile-2xl": ["1.375rem", "1.875rem"],
            "mobile-3xl": ["1.5rem", "1.813rem"],
            "mobile-4xl": ["1.875rem", "2.25rem"],
            "mobile-5xl": ["1.875rem", "2.25rem"],
            "mobile-6xl": ["2rem", "2.4rem"],
            "mobile-7xl": ["3rem", "3.688rem"],
            // "mobile-8xl": "",
         },
         height: {
            "50vh": "50vh",
            "50vw": "50vw",
            "75vh": "75vh",
            "75vw": "75vw",
         },
         keyframes: {
            fadeIn: {
               "0%": { opacity: 0 },
               "100%": { opacity: 1 },
            },
         },
         spacing: {
            18: "4.5rem",
            22: "5.5rem",
            26: "6.5rem",
            30: "7.5rem",
         },
         width: {
            "50vw": "50vw",
            "75vw": "75vw",
         },
      },
   },
   plugins: [require("@tailwindcss/forms")],
};
