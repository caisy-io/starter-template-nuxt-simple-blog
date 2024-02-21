<template><Page v-bind="props" /></template>

<script setup>
import { EPageType, getProps } from "~~/services/content/getProps";
import Page from "~~/layouts/Page.vue";

const {data : props } = await useAsyncData("home", () => getProps({ pageType: EPageType.Index }));

if (props.is404) navigateTo("/404");
</script>
