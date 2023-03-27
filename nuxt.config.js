import dynamicRoutes from "./helpers/dynamicRoutes";

export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [["@funken-studio/sitemap-nuxt-3", { generateOnBuild: true }]],
  sitemap: {
    hostname: process.env.HOST_NAME || "http://localhost:3000/",
    routes: dynamicRoutes,
  },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    caisyProjectId: process.env.CAISY_PROJECT_ID,
    caisyApiKey: process.env.CAISY_API_KEY,
    public: {
      showOnboardingToast: process.env.SHOW_ONBOARDING_TOAST,
    },
  },
});
