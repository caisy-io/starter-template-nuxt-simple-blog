<template>
  <CenterContainer>
    <article class="prose lg:prose-xl">
      <RichTextRenderer
        v-if="text?.json"
        :overwrites="{ documentLink: DocumentLink }"
        :connections="text?.connections"
        :node="text?.json"
      />
    </article>
  </CenterContainer>
</template>

<script setup>
import { RichTextRenderer } from "@caisy/rich-text-vue-renderer";
const props = defineProps({
  text: {
    json: Object,
  },
});
</script>
