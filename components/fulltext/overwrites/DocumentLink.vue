<template>
  <template v-for="component in node?.connections">
    <Asset
      v-if="
        component?.__typename == 'Asset' &&
        node?.attrs?.documentId == component.id
      "
      :src="component?.src"
      :description="component?.description"
    />
  </template>
  <slot />
</template>

<script setup>
const props = defineProps({
  node: Object,
});
</script>
