<template>
  <Html lang="en">
    <Head>
      <Meta charset="UTF-8" />
      <Meta name="viewport" content="width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <Meta property="og:locale" content="en_US" />
      <Meta property="og:type" content="website" />
      <Title>{{ seo?.title ?? "" }}</Title>

      <template v-if="seo?.title">
        <Meta property="og:title" :content="seo?.title ?? ''" />
        <Meta name="twitter:title" :content="seo?.title ?? ''" />
      </template>

      <template v-if="seo?.description">
        <Meta name="twitter:description" :content="seo?.description ?? ''" />
        <Meta name="description" :content="seo?.description ?? ''" />
        <Meta property="og:description" :content="seo?.description ?? ''" />
      </template>

      <template v-if="ogImageSrc">
        <Meta property="og:image:type" content="image/jpeg" />
        <Meta property="og:image:width" content="630" />
        <Meta property="og:image:height" content="1200" />
        <Meta
          property="og:image"
          :content="`${ogImageSrc}?f'
          ='jpeg&w'
          ='1200&h'
          ='630`"
        />
        <Meta
          property="og:image:secure_url"
          :content="`${ogImageSrc}?f'
          ='jpeg&w'
          ='1200&h'
          ='630`"
        />
        <Meta
          name="twitter:image"
          :content="`${ogImageSrc}?f'
          ='jpeg&w'
          ='1200&h'
          ='630`"
        />
      </template>
      <Meta v-if="ogImageAlt" property="og:image:alt" :content="ogImageAlt" />

      <Meta name="twitter:card" content="summary_large_image" />
    </Head>
    <Body>
      <Toast v-if="showToast" />
      <Navigation
        :entries="navigation.entries"
        :homePage="navigation.homePage"
      />
      <main>
        <slot />
      </main>
      <Footer :content="footer.content" />
    </Body>
  </Html>
</template>

<script setup data-server-rendered="true">
import Toast from "~/components/Toast.vue";
import Footer from "./Footer.vue";
import Navigation from "./Navigation.vue";

const props = defineProps({
  seo: Object,
  navigation: Object,
  footer: Object,
});

const runtimeConfig = useRuntimeConfig();
const showOnboardingToast = runtimeConfig.public.showOnboardingToast;
const showToast = `${showOnboardingToast}` !== "false";
const ogImageSrc = props.seo?.ogImage?.src;
const ogImageAlt = props.seo?.ogImage?.description;

</script>
