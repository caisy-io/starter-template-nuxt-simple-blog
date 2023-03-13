<template>
  <Layout
    :seo="props?.Page?.seo"
    :navigation="props?.Navigation"
    :footer="props?.Footer"
  >
    <ComponentSelector
      v-for="componentType in Page?.components"
      :componentType="componentType"
    />
  </Layout>
</template>

<script setup>
import ComponentSelector from "./ComponentSelector.vue";
const props = defineProps({
  Page,
  Navigation,
  Footer,
});
</script>
