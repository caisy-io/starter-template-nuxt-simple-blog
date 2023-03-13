<template>
  <component
    :is="COMPONENTS[componentType.__typename]"
    v-bind="componentType"
  ></component>
</template>

<script setup>
import Headline from "~~/components/Headline.vue";
import Fulltext from "~~/components/fulltext/Fulltext.vue";
import BlogArticleGrid from "~~/components/blog-article-grid/BlogArticleGrid.vue";
import NewsletterSignup from "~~/components/NewsletterSignup.vue";
import FullwidthBlogTeaser from "~~/components/FullwidthBlogTeaser.vue";
import ContactForm from "~~/components/ContactForm.vue";

const COMPONENTS = {
  Headline,
  Fulltext,
  BlogArticleGrid,
  NewsletterSignup,
  FullwidthBlogTeaser,
  ContactForm,
};

const props = defineProps({
  componentType,
});
</script>
