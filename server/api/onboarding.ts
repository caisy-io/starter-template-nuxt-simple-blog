// feel free to delete this after the onboarding is complete

export default defineEventHandler((event) => {
  return Response.redirect(
    `https://app.caisy.io/app/project/home?project_id=${
      import.meta.env.CAISY_PROJECT_ID
    }?verify_onboarding=true`
  );
});
