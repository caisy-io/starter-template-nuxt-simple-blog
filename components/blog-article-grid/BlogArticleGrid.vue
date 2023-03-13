<template>
  <FullContainer>
    <div
      class="flex flex-col justify-start items-center self-stretch overflow-hidden gap-14"
    >
      <div
        class="flex flex-col justify-start items-center self-stretch relative gap-2.5"
      >
        <h1 class="text-4xl font-bold text-left text-slate-900">
          {{ headline || "" }}
        </h1>
        <h3 v-if="subheadline" class="text-base text-left text-gray-600">
          {{ subheadline }}
        </h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ArticleCard
          v-for="article in articles"
          :teaserHeadline="article.teaserHeadlines"
          :teaserDesciption="artcile.teaserDescription"
          :teaserImage="article.teaserImage"
        />
      </div>
    </div>
  </FullContainer>
</template>

<script setup>
const props = defineProps({
  headline: String,
  articles: [Object],
  subheadline: String,
});
</script>
