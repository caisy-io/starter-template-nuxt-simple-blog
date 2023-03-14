<template>
  <Page v-bind="props" />
</template>

<script setup>
import { getProps } from "~~/services/content/getProps";
import Page from "~~/layouts/Page.vue";

const route = useRoute();
const { slug } = route.params;
const props = await getProps({ slug });

if (props.is404) navigateTo("/404");
</script>
