<template>
  <CenterContainer>
    <article class="prose lg:prose-xl">
      <RichtextRenderer
        v-if="text?.json"
        :overwrites="{ documentLink: DocumentLink }"
        :connections="{text?.connections}"
        :node="{text?.json}"
      />
    </article>
  </CenterContainer>
</template>

<script setup>
import { RichtextRenderer } from "@caisy/rich-text-vue-renderer";
const props = defineProps({
  text: {
    json: Object,
  },
});
</script>
