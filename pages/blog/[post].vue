<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <div class="container max-w-4xl mx-auto pb-20">
        <div
          id="post-head"
          class="pt-8 sm:pt-10 pb-6 border-b-2 border-pink-800 mb-8"
        >
          <h1 class="font-bold text-3xl sm:text-4xl text-pink-800">
            {{ doc.title }}
          </h1>
          <h2 class="font-normal text-2xl sm:text-3xl text-pink-800 mb-6">
            {{ doc.subtitle }}
          </h2>
          <img
            v-if="doc.image"
            :src="`/images/blog/${doc.image}.jpg`"
            alt="Blog post image"
            class="mb-6"
          />
          <div class="flex items-center">
            <img
              class="h-16 w-16 rounded-full mr-4"
              src="/images/profile-picture-128.jpg"
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

const localDateString = computed<string>((): string => {
  const date = new Date(data.value?.date);
  return date
    ? date.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      })
    : "";
});
</script>

<style>
.nuxt-content > p {
  margin-bottom: 1rem;
}
</style>
