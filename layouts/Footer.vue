<template>
  <div class="flex items-center justify-center">
    <footer class="prose pb-10 pt-20 flex items-center justify-center">
      <RichTextRenderer v-if="content?.json" :node="content?.json" />
    </footer>
  </div>
</template>

<script setup>
import { RichTextRenderer } from "@caisy/rich-text-vue-renderer";
const props = defineProps({
  content,
});
</script>
