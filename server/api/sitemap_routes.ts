import { getAllBlogArticles } from "~~/services/content/getAllBlogArticle";
import { getAllPages } from "~~/services/content/getAllPages";

export default defineEventHandler(async (event) => {
  const [articles, pages] = await Promise.all([
    getAllBlogArticles({ after: undefined }),
    getAllPages({ after: undefined }),
  ]);

  const articleRoutes = articles.map((article) => `/blog/${article.slug}`);
  const pageRoutes = pages.map((page) => `/${page.slug}`);

  return [...articleRoutes, ...pageRoutes];
});
