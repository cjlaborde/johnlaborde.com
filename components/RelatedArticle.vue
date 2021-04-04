<template>
  <div v-if="relatedArticles.length > 0">
    <h3 class="px-1/12 lg:px-1/6 bold text-gray-800 my-8 text-lg font-semibold">
      Related Articles:
    </h3>
    <ul v-for="article of relatedArticles" :key="article.slug">
      <li class="flex lg:px-1/6 my-4">
        <div class="min-w-max-content">
          <NuxtLink :to="`/author/${article.name}`">
            <img :src="article.image" class="h-12 w-12 md:h-16 md:w-16" />
          </NuxtLink>
        </div>
        <div class="px-3">
          <NuxtLink :to="`/articles/${article.slug}`">
            <h3 class="text-gray-700 font-bold text-lg">{{ article.title }}</h3>
            <span class="font-semibold text-xs text-gray-600">
              published: {{ $dayjs(article.published).fromNow() }}
            </span>
            <p class="text-gray-600 text-sm">
              {{ article.description }}
            </p>
          </NuxtLink>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    relatedArticles: {
      type: Array,
      required: true,
    },
  },
});
</script>
