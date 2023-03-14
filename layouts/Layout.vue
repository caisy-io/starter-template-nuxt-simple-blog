<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <title>{{ seo?.title ?? "" }}</title>

      <template v-if="seo?.title">
        <meta property="og:title" :content="seo?.title ?? ''" />
        <meta name="twitter:title" :content="seo?.title ?? ''" />
      </template>

      <template v-if="seo?.description">
        <meta name="twitter:description" :content="seo?.description ?? ''" />
        <meta name="description" :content="seo?.description ?? ''" />
        <meta property="og:description" :content="seo?.description ?? ''" />
      </template>

      <template v-if="ogImageSrc">
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="630" />
        <meta property="og:image:height" content="1200" />
        <meta
          property="og:image"
          :content="`${ogImageSrc}?f'
          ='jpeg&w'
          ='1200&h'
          ='630`"
        />
        <meta
          property="og:image:secure_url"
          :content="`${ogImageSrc}?f'
          ='jpeg&w'
          ='1200&h'
          ='630`"
        />
        <meta
          name="twitter:image"
          :content="`${ogImageSrc}?f'
          ='jpeg&w'
          ='1200&h'
          ='630`"
        />
      </template>
      <meta v-if="ogImageAlt" property="og:image:alt" :content="ogImageAlt" />

      <meta name="twitter:card" content="summary_large_image" />
    </head>
    <body>
      <Toast />
      <Navigation
        :entries="navigation.entries"
        :homePage="navigation.homePage"
      />
      <main>
        <slot />
      </main>
      <Footer :content="footer.content" />
    </body>
  </html>
</template>

<script setup>
import Footer from "./Footer.vue";
import Navigation from "./Navigation.vue";
const props = defineProps({
  seo: Object,
  navigation: Object,
  footer: Object,
});

const ogImageSrc = props.seo?.ogImage?.src;
const ogImageAlt = props.seo?.ogImage?.description;
</script>
