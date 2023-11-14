<template>
  <div class="text-gray-800">
    <div class="container max-w-4xl mx-auto sm:pt-10">
      <h1
        class="text-3xl sm:text-4xl font-bold text-gray-700 leading-none pb-12"
      >
        Publications
      </h1>
      <section class="text-gray-700 pb-12 space-y-8">
        <ContentList v-slot="{ list }" :query="query">
          <li
            v-for="publication in list"
            :key="publication._path"
            class="list-none"
          >
            <div class="flex sm:space-x-5">
              <div class="hidden sm:inline w-1/4">
                <img
                  :src="`/images/publications/${publication.image}.webp`"
                  :alt="publication.alt"
                  class="aspect-[5/8]"
                />
              </div>
              <div class="sm:w-3/4">
                <div class="flex mb-2 sm:mb-0">
                  <div class="sm:hidden w-1/4 mr-4 sm:mr-5">
                    <img
                      :src="`/images/publications/${publication.image}.webp`"
                      :alt="publication.alt"
                      class="aspect-[5/8]"
                    />
                  </div>
                  <div class="w-3/4 sm:w-full">
                    <h3
                      class="text-xl sm:text-xl font-bold tracking-wide group-hover:text-pink-800 transition-colors duration-150 ease-in mb-2"
                    >
                      {{ publication.title }}
                    </h3>
                    <h4 class="font-bold tracking-wide">Description:</h4>
                    <p class="sm:mb-2 line-clamp-3">
                      {{ publication.description }}
                    </p>
                  </div>
                </div>
                <h4 class="font-bold tracking-wide inline sm:block">
                  Publication Date:
                </h4>
                <p class="inline sm:block text-sm mb-2">
                  {{
                    new Date(publication.publicationDate).toLocaleDateString(
                      "en-GB",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }
                    )
                  }}
                </p>
                <div class="inline-flex sm:block">
                  <h4 class="font-bold tracking-wide inline sm:block">
                    Available at:
                  </h4>

                  <NuxtLink
                    v-for="distributor in publication.distributors"
                    :key="distributor.key"
                    :to="distributor.link"
                    target="_blank"
                    class="sm:py-2 sm:px-1 group inline-flex items-center sm:block"
                  >
                    <img
                      :src="`/images/distributors/${distributor.key}.svg`"
                      :alt="distributor.alt"
                      class="hidden sm:inline w-20 duration-200 group-hover:scale-105"
                    />

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      width="24px"
                      height="24px"
                      class="ml-2 w-4 h-4 mr-1 fill-pink-800 sm:hidden"
                    >
                      <rect fill="none" height="24" width="24" />
                      <path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z" />
                    </svg>
                    <span class="sm:hidden text-pink-800">
                      {{ distributor.alt }}</span
                    >
                  </NuxtLink>
                </div>
              </div>
            </div>
          </li>
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
  title: "Publications",
  meta: [
    {
      name: "description",
      content: "Published works by Kilian Kukelka",
    },
  ],
}));

const query: QueryBuilderParams = {
  path: "/publications",
  limit: 10,
  sort: [{ publishedDate: -1 }],
};
</script>
