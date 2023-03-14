<template>
  <CenterContainer>
    <div class="mb-8 flex flex-col justify-start items-center gap-2.5">
      <h1 v-if="headline" class="text-4xl font-bold text-left text-slate-900">
        {{ headline }}
      </h1>
      <h4 v-if="subheadline" class="mt-2 text-xl text-center text-gray-400">
        {{ subheadline }}
      </h4>
    </div>
  </CenterContainer>
</template>

<script setup>
const props = defineProps({
  headline: String,
  subheadline: String,
});
</script>
