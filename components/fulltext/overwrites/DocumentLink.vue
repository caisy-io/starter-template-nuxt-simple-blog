<template>
  <Asset
    v-for="component in connections"
    v-if="
      component?.__typename == 'Asset' &&
      node?.attrs?.documentId == component.id
    "
    :src="component?.src"
    :description="component?.description"
  />
</template>

<script setup>
const props = defineProps({
  node: Object,
  connections: [Object],
});

console.log(props.node, props.connections);
</script>
