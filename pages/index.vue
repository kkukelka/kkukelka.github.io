<template>
  <div class="text-gray-800">
    <div class="container max-w-4xl mx-auto pt-4 sm:pt-10 pb-12 sm:pb-24">
      <section class="flex items-start pb-12">
        <img
          class="rounded-xl w-24 sm:w-20 h-24 sm:h-20 flex-none mr-5 sm:mr-8"
          src="/images/profile-picture-1k-30perc.jpg"
          alt="Kilian Kukelka"
        />
        <div class="flex flex-col">
          <h1 class="text-3xl sm:text-4xl font-bold text-gray-700 leading-none">
            Kilian Kukelka
          </h1>
          <div class="text-lg text-gray-700 group-hover:text-pink-700 pr-3">
            Software Engineer & Writer
          </div>
        </div>
      </section>
      <section class="text-gray-700 pb-4">
        <h2 class="text-2xl mb-5">Experience</h2>
        <div class="flex flex-wrap text-gray-700">
          <div
            v-for="item in aboutData"
            :key="item.name"
            class="w-full sm:w-1/2 flex items-baseline mb-8"
          >
            <div class="border border-gray-500 w-3 h-3 mr-5 rounded-full"></div>
            <div class="flex flex-col">
              <div class="font-semibold text-lg">{{ item.name }}</div>
              <a
                v-for="(url, index) in item.urls"
                :key="url"
                :href="url"
                target="_blank"
                class="cursor-pointer underline underline-offset-4 decoration-transparent hover:decoration-pink-800 text-pink-800 inline-flex items-center transition-colors duration-150 ease-in"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  class="w-4 h-4 mr-1 inline fill-pink-800"
                >
                  <rect fill="none" height="24" width="24" />
                  <path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z" />
                </svg>
                {{ item.location[index] }}
              </a>
              <div class="">{{ item.when }}</div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-700 pb-12">
        <h2 class="text-2xl mb-5">Latest Blog Posts</h2>
        <div class="space-y-8">
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
                  new Date(article.date).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                }}
                - {{ article.length }} minute read
              </p>
            </NuxtLink>
          </ContentList>
        </div>
      </section>
      <section class="text-gray-700 pb-12">
        <h2 class="text-2xl mb-5">Illustrations</h2>
        <div class="grid sm:grid-cols-3 gap-4 text-gray-700 sm:justify-between">
          <a
            v-for="item in illustrations"
            :key="item.alias"
            :href="item.url"
            target="_blank"
            class="relative group"
          >
            <img
              :src="`/images/illustrations/${item.alias}.jpg`"
              :alt="item.alt"
              aspect-ratio="1/1"
              clas="w-full"
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="0.00256"
              class="fill-[#f9fafb] absolute right-0 top-0 m-2 group-hover:opacity-100 opacity-0 transition-opacity duration-150 ease-in"
            >
              <path
                d="M16.34 12.5C16.34 13.2595 16.1148 14.0019 15.6928 14.6334C15.2709 15.2649 14.6712 15.7571 13.9695 16.0477C13.2678 16.3383 12.4957 16.4144 11.7509 16.2662C11.006 16.118 10.3217 15.7523 9.78471 15.2153C9.24768 14.6783 8.88195 13.994 8.73378 13.2491C8.58562 12.5043 8.66166 11.7322 8.9523 11.0305C9.24294 10.3288 9.73513 9.7291 10.3666 9.30716C10.9981 8.88521 11.7405 8.66 12.5 8.66C13.5181 8.66116 14.4941 9.06611 15.214 9.786C15.9339 10.5059 16.3388 11.4819 16.34 12.5ZM24.5 7.22V17.78C24.498 19.5616 23.7893 21.2697 22.5295 22.5295C21.2697 23.7893 19.5616 24.498 17.78 24.5H7.22C5.43836 24.498 3.73028 23.7893 2.47047 22.5295C1.21066 21.2697 0.502018 19.5616 0.5 17.78V7.22C0.502018 5.43836 1.21066 3.73028 2.47047 2.47047C3.73028 1.21066 5.43836 0.502018 7.22 0.5H17.78C19.5616 0.502018 21.2697 1.21066 22.5295 2.47047C23.7893 3.73028 24.498 5.43836 24.5 7.22ZM18.26 12.5C18.26 11.3608 17.9222 10.2471 17.2893 9.29991C16.6563 8.35269 15.7568 7.61441 14.7043 7.17845C13.6518 6.74249 12.4936 6.62843 11.3763 6.85068C10.2589 7.07293 9.23262 7.62151 8.42706 8.42706C7.62151 9.23262 7.07293 10.2589 6.85068 11.3763C6.62843 12.4936 6.74249 13.6518 7.17845 14.7043C7.61441 15.7568 8.35269 16.6563 9.29991 17.2893C10.2471 17.9222 11.3608 18.26 12.5 18.26C14.0271 18.2583 15.4912 17.6509 16.571 16.571C17.6509 15.4912 18.2583 14.0271 18.26 12.5ZM20.18 6.26C20.18 5.97519 20.0955 5.69679 19.9373 5.45998C19.7791 5.22317 19.5542 5.0386 19.2911 4.92961C19.0279 4.82062 18.7384 4.79211 18.4591 4.84767C18.1797 4.90323 17.9232 5.04038 17.7218 5.24177C17.5204 5.44315 17.3832 5.69974 17.3277 5.97907C17.2721 6.2584 17.3006 6.54794 17.4096 6.81106C17.5186 7.07419 17.7032 7.29909 17.94 7.45732C18.1768 7.61555 18.4552 7.7 18.74 7.7C19.1219 7.7 19.4882 7.54829 19.7582 7.27823C20.0283 7.00818 20.18 6.64191 20.18 6.26Z"
              />
            </svg>
          </a>
        </div>
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
  title: "Home",
  meta: [
    {
      name: "description",
      content: "It's K's world",
    },
  ],
}));
const query: QueryBuilderParams = {
  path: "/blog",
  limit: 3,
  sort: [{ date: -1 }],
};

// vars
const aboutData = [
  {
    name: "Freelance",
    location: ["KodaDot", "My Vienna Austria"],
    urls: ["https://kodadot.xyz/", "https://myviennaaustria.at/"],
    when: "since 2021",
  },
  {
    name: "Frontend Developer",
    location: ["hokify"],
    urls: ["https://hokify.at/jobs"],
    when: "2019-2023",
  },
  {
    name: "B.Sc. Computer Science",
    location: ["University of Vienna"],
    urls: ["https://www.univie.ac.at/en/"],
    when: "since 2018",
  },
  {
    name: "B.A. Musicology",
    location: ["University of Vienna"],
    urls: ["https://www.univie.ac.at/en/"],
    when: "2015 - 2018",
  },
];

const illustrations = [
  {
    name: "Street Style 07",
    alias: "street-style-07",
    alt: "Street style study 07",
    url: "https://www.instagram.com/p/CpZ_WciMm_l/",
  },
  {
    name: "Karlie Kloss Portrait",
    alias: "karlie-kloss-portrait",
    alt: "Portrait study of model Karlie Kloss",
    url: "https://www.artstation.com/artwork/L3QWYk",
  },
  {
    name: "Street Style 06",
    alias: "street-style-06",
    alt: "Street style study 06",
    url: "https://www.instagram.com/p/CkDYCy2s_eS/",
  },
];
</script>
