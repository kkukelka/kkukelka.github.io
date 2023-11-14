<template>
  <div class="text-gray-800">
    <div class="container max-w-4xl mx-auto sm:pt-10 pb-12 sm:pb-24">
      <h1
        class="text-3xl sm:text-4xl font-bold text-gray-700 leading-none pb-12"
      >
        Blog
      </h1>
      <section class="text-gray-700 pb-12 space-y-8">
        <ContentList v-slot="{ list }" :query="query">
          <NuxtLink
            v-for="article in list"
            :key="article._path"
            :to="article._path"
            class="block pl-5 border-l-4 border-gray-600 group hover:border-pink-800 cursor-pointer transition-colors duration-150 ease-in"
          >
            <!-- <img
                :src="`/images/blog/${article.image}.jpg`"
                alt=""
                class="w-1/4"
              /> -->
            <h3
              class="text-lg font-bold tracking-wide group-hover:text-pink-800 transition-colors duration-150 ease-in"
            >
              {{ article.title }}
            </h3>
            <p class="mb-0.5">{{ article.subtitle }}</p>
            <p class="text-sm font-light">
              {{
                new Date(article.publishedDate).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              }}
              - {{ article.length }} minute read
            </p>
          </NuxtLink>
        </ContentList>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
definePageMeta({
  layout: "default",
});

useHead(() => ({
  title: "Blog",
  meta: [
    {
      name: "description",
      content: "A place to spout out my thoughts.",
    },
  ],
}));

const query: QueryBuilderParams = {
  path: "/blog",
  limit: 10,
  sort: [{ publishedDate: -1 }],
};
</script>
