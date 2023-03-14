export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  ssr: false,
  runtimeConfig: {
    public: {
      caisyProjectId:
        process.env.CAISY_PROJECT_ID,
      caisyApiKey:
        process.env.CAISY_API_KEY,
    },
  },
});
