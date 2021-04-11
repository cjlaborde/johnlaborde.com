<template>
  <ul class="text-gray-500 max-w-5xl mx-auto">
    <li
      v-for="article of articles"
      :key="article.slug"
      class="mb-12 bg-white rounded shadow pl-0 pt-0 sm:pl-10 sm:pt-10"
    >
      <nuxt-link
        :to="{ name: 'articles-slug', params: { slug: article.slug } }"
        class="flex-none sm:flex"
      >
        <img
          v-if="article.image"
          :src="article.image"
          :alt="article.alt"
          class="border rounded h-80 w-full sm:w-80 object-cover"
        />
        <div class="m-auto p-3">
          <h2 class="font-bold text-gray-900 text-2xl">
            {{ article.title }}
          </h2>
          <span class="font-semibold text-sm">
            published: {{ $dayjs(article.published).fromNow() }}
          </span>
          <p class="text-base mt-3">{{ article.description }}</p>
          <p class="font-bold text-green-400 mt-2">
            Read more<span class="text-green-400">&hellip;</span>
          </p>
        </div>
      </nuxt-link>
      <ul class="flex justify-end p-3">
        <li
          v-for="tag in article.tags"
          :key="tag"
          class="text-center mr-2 mb-2 p-1 border border-gray-200 rounded"
        >
          <nuxt-link
            :to="{ name: 'tags-tag', params: { tag: tag.toLowerCase() } }"
            class="text-sm hover:text-gray-800 text-gray-500"
            >{{ tag }}</nuxt-link
          >
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    articles: {
      type: Object,
      required: true,
    },
  },
});
</script>
