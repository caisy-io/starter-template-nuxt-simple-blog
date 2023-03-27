import { getAllBlogArticles } from "./services/content/getAllBlogArticle";
import { getAllPages } from "./services/content/getAllPages";

export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@funken-studio/sitemap-nuxt-3"],
  sitemap: {
    hostname: "http://localhost:3000/",
    routes: async () => {
      const [articles, pages] = await Promise.all([
        getAllBlogArticles({ after: undefined }),
        getAllPages({ after: undefined }),
      ]);

      const articleRoutes = articles.map((article) => `/blog/${article.slug}`);
      const pageRoutes = pages.map((page) => `/${page.slug}`);

      return [...articleRoutes, ...pageRoutes];
    },
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
