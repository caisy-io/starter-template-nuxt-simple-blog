// feel free to delete this after the onboarding is complete
export default defineEventHandler((event) => {
  return sendRedirect(event, `https://app.caisy.io/app/project/home?project_id=${process.env.CAISY_PROJECT_ID}&verify_template_setup=true`, 302)
});
