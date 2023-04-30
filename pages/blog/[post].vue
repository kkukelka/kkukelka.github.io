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
        <!-- 
        <nuxt-link to="/blog" class="hover:text-pink-800 hover:underline">
          <BackIcon
            class="w-4 h-4 mr-1 inline text-gray-800 fill-current"
          />back
        </nuxt-link> -->
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
