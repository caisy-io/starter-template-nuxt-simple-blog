<template>
  <Page v-bind="props" />
</template>

<script setup>
import { EPageType, getProps } from "~~/services/content/getProps";
import Page from "~~/layouts/Page.vue";

const props = await getProps({ pageType: EPageType.NotFound });
</script>
