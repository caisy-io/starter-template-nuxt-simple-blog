<template>
  <Layout
    :seo="props?.Page?.seo"
    :navigation="props?.Navigation"
    :footer="props?.Footer"
  >
    <template v-for="componentType in Page?.components">
      <ComponentSelector :componentType="componentType" />
    </template>
  </Layout>
</template>

<script setup>
import ComponentSelector from "./ComponentSelector.vue";
import Layout from "./Layout.vue";
const props = defineProps({
  Page: Object,
  Navigation: Object,
  Footer: Object,
});
</script>
