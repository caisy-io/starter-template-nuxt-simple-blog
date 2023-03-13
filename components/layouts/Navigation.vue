<template>
  <header class="flex flex-wrap m-10 z-50 bg-white text-sm">
    <nav class="mx-auto" aria-label="Global">
      <div class="flex items-end flex-col justify-between flex-end">
        <div
          class="flex gap-5 flex-row flex-wrap items-center justify-center mt-0"
        >
          <template v-for="entry in entries">
            <a
              v-if="
                entry.connection?.slug === slug ||
                (slug === undefined &&
                  entry.connection?.slug === homePage?.slug)
              "
              class="font-medium text-blue-500"
              :href="`/${entry.connection?.slug}`"
              aria-current="page"
            >
              {{ entry?.title }}
            </a>

            <a
              v-else
              class="font-medium text-gray-600 hover:text-gray-400"
              :href="`/${entry.connection?.slug}`"
            >
              {{ entry?.title }}
            </a>
          </template>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const route = useRoute();
const { slug } = route.params;
const props = declareProps({
  entries,
  homePage,
});
</script>
