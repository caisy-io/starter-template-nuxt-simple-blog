<template>
  <CenterContainer>
    <article class="prose lg:prose-xl">
      <RichTextRenderer
        v-if="text?.json"
        :blockMap="{ documentLink: DocumentLink }"
        :node="text?.json"
        :connections="text?.connections"
      />
    </article>
  </CenterContainer>
</template>

<script setup>
import { RichTextRenderer } from "@caisy/rich-text-vue-renderer";
import DocumentLink from "./overwrites/DocumentLink.vue";

const props = defineProps({
  text: {
    json: Object,
    connections: [Object],
  },
});
</script>
