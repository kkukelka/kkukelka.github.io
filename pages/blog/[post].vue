<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <div class="container max-w-4xl mx-auto pb-20">
        <div
          id="post-head"
          class="sm:pt-10 pb-6 border-b-2 border-pink-800 mb-8"
        >
          <h1 class="font-bold text-3xl sm:text-4xl text-pink-800">
            {{ doc.title }}
          </h1>
          <h2 class="font-normal text-2xl sm:text-3xl text-pink-800 mb-6">
            {{ doc.subtitle }}
          </h2>
          <figure class="mb-6">
            <img
              v-if="doc.image"
              width="640"
              height="426"
              :src="`/images/blog/${doc.image}.webp`"
              :alt="doc.alt || 'Blog post image'"
            />
            <figcaption
              v-if="doc.attribution"
              class="text-gray-500 text-xs text-right font-light mt-1.5"
              v-html="doc.attribution"
            />
          </figure>
          <div class="flex items-center">
            <img
              width="64"
              height="64"
              class="h-16 w-16 rounded-full mr-4"
              src="/images/profile-picture-128.webp"
              alt="Author image"
            />
            <div class="flex flex-col">
              <div class="text-gray-800">
                by
                <span class="font-bold">{{ doc.author }}</span>
              </div>
              <div class="text-gray-800 font-light">
                {{ localDateString }} - {{ doc.length }} min read
              </div>
            </div>
            <!-- <div class="tags">
              <span v-for="tag in post.tags" :key="tag.id">
                <nuxt-link :to="'/tag/' + tag">\#{{ tag }}</nuxt-link>
              </span>
            </div>-->
          </div>
        </div>
        <ContentRenderer :value="doc" class="nuxt-content" />
        <section class="flex justify-center mt-8">
          <NuxtLink
            to="https://paypal.me/kiliankukelka?country.x=AT&locale.x=de_DE"
            target="_blank"
            class="bg-pink-700 text-white font-bold px-4 py-2 rounded-md hover:bg-pink-600"
          >
            Tip Jar
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 group-hover:fill-pink-800 inline transition-colors duration-150 ease-in"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>
          </NuxtLink>
        </section>
        <NuxtLink
          to="/blog"
          class="group hover:text-pink-800 transition-colors duration-150 ease-in"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
            width="18px"
            height="18px"
            class="group-hover:fill-pink-800 inline align-text-bottom transition-colors duration-150 ease-in"
          >
            <rect fill="none" height="24" width="24" />
            <path
              d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"
            />
          </svg>
          back
        </NuxtLink>
      </div>
    </ContentDoc>
  </main>
</template>

<script lang="ts" setup>
const { path } = useRoute();

const { data } = await useAsyncData(path, () => {
  return queryContent().where({ _path: path }).findOne();
});

const localDateString = computed(() => {
  const date = new Date(data.value?.publishedDate);
  return date
    ? date.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      })
    : "";
});

const scructuredData = computed(() => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.value?.title,
    image: `/images/blog/${data.value?.image}.jpg`,
    datePublished: data.value?.publishedDate,
    dateModified: data.value?.updatedAt,
    description: data.value?.description,
    author: data.value?.author,
    wordCount: data.value?.wordCount,
  };
});

useHead(() => ({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(scructuredData.value),
    },
  ],
}));

useSeoMeta({
  title: data.value?.title,
  ogTitle: data.value?.title,
  description: data.value?.description,
  ogDescription: data.value?.description,
  ogImage: () => `/images/blog/${data.value?.image}.jpg`,
  twitterCard: "summary_large_image",
});
</script>

<style>
.nuxt-content h3 {
  @apply text-xl tracking-wide mb-2 text-pink-800;
}
.nuxt-content p {
  @apply mb-5;
}
.nuxt-content blockquote {
  @apply border-l-4 border-gray-400 pl-4 italic ml-4 my-8;
}
.nuxt-content ol {
  @apply list-decimal ml-6;
}
.nuxt-content ul {
  @apply list-disc ml-6;
}
.nuxt-content code {
  @apply bg-gray-300 px-1 font-mono rounded border border-gray-400;
}
.nuxt-content hr {
  @apply my-8;
}
</style>
