<template>
  <template v-if="!!props">
    <Layout
      :seo="props?.BlogArticle?.seo"
      :navigation="props.Navigation"
      :footer="props.Footer"
    >
      <Fulltext v-if="props.BlogArticle?.text" :text="props.BlogArticle.text" />
      <DefaultSpacer />
    </Layout>
  </template>
</template>

<script setup>
import Layout from "~~/layouts/Layout.vue";
import { EPageType, getProps } from "~~/services/content/getProps";

const route = useRoute();
const { slug } = route.params;

const props = await getProps({ slug, pageType: EPageType.Blog });

if (props.is404) navigateTo("/404");
</script>
