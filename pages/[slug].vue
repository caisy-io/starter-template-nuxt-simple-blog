<template>
  <Page v-bind="props" />
</template>

<script setup>
import { getProps } from "~~/services/content/getProps";
import Page from "~~/layouts/Page.vue";

const route = useRoute();
const { slug } = route.params;
const { data: props } = await useAsyncData(`${slug}`, () => getProps({ slug }));

if (props.is404) navigateTo("/404");
</script>
