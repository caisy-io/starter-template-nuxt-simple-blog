export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
      caisyProjectId:
        process.env.CAISY_PROJECT_ID,
      caisyApiKey:
        process.env.CAISY_API_KEY,
    public: {
      showOnboardingToast:
      process.env.SHOW_ONBOARDING_TOAST,
    },
  },
});
