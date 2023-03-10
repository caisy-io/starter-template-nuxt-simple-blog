<template>
  <div
    v-if="src"
    class="flex items-center justify-center overflow-hidden flex-wrap mt-6 mb-6 not-prose"
  >
    <img
      loading="lazy"
      :src="`${src}?w=1920&h=960`"
      :srcset="`${src}?w=3840&h=1920 1920w, ${src}?w=1920&h=960 1280w,
    ${src}?w=1280&h=640 640w`"
      :alt="description ?? ''"
      class="rounded-lg"
    />

    <label
      v-if="description"
      class="text-gray-400 mt-3 text-center block text-xs"
      >{{ description }}</label
    >
  </div>
  <slot />
</template>

<script setup>
const props = defineProps({
  src: String,
  description: String,
});
</script>
