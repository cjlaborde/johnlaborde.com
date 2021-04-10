<template>
  <div v-if="articles">
    <div class="mb-10">
      <Tag />
      <h2
        class="text-center text-3xl mb-4 capitalize text-gray-700 inline-block mx-auto px-2"
      >
        Articles: ({{ articles.length }})
      </h2>
    </div>
    <ArticleList :articles="articles" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  useFetch,
  ref,
} from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'ArticleListPage',
  setup() {
    const { $content } = useContext();
    const articles = ref();

    useFetch(async () => {
      articles.value = await $content('articles')
        .only(['title', 'description', 'image', 'slug', 'published'])
        .sortBy('published', 'desc')
        .fetch();
    });

    return { articles };
  },
});
</script>
