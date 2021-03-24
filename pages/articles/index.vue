<template>
  <div>
    <ArticleList :articles="articles" />
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api';

  export default defineComponent({
    setup() {
      const { $content } = useContext();

      const articles = useAsync(() => $content('articles')
        .only(['title', 'description', 'image', 'slug', 'published'])
        .sortBy('published', 'desc')
        .fetch());

      return { articles };
    }
  });
</script>