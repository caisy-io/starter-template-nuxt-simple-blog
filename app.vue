<template>
  <Page v-bind="props" />
</template>

<script setup>
import Page from "./layouts/Page.vue";
import { EPageType, getProps } from "~~/services/content/getProps";

const props = await getProps({ pageType: EPageType.Index });
if (props.is404) navigateTo("/404");
</script>
