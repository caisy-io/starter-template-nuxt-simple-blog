export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      caisyProjectId:
        process.env.CAISY_PROJECT_ID || "b76210be-a043-4989-98df-ecaf6c6e68d8",
      caisyApiKey:
        process.env.CAISY_API_KEY || "aiYF7O2eIcIfcXe3zi2C0s8ftcsTbkst",
    },
  },
});
