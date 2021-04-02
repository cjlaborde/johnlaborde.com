<template>
  <div v-if="articles">
    <NuxtLink to="/articles" class="font-bold text-gray-800 text-xl mb-10">
      Back to All Articles
    </NuxtLink>
    <Author :author="articles[0].author" class="text-left px-4 lg:px-1/4" />
    <ArticleList :articles="articles" />
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const { $content, route } = useContext();

    const articles = useAsync(() =>
      $content('articles')
        .where({ 'author.name': route.value.params.author })
        .without('body')
        .sortBy('createdAt', 'asc')
        .fetch<object>()
    );

    return { articles };
  },
});
</script>
