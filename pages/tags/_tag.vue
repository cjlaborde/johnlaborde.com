<template>
  <div>
    <Tag />
    <div class="flex justify-center">
      <h2
        class="text-center text-3xl mb-4 capitalize text-gray-700 inline-block mx-auto px-2"
      >
        Tag: {{ routeTag }}
      </h2>
    </div>
    <ArticleList :articles="articlesByTag" />
  </div>
</template>

<script lang="ts">
import global from '@/utils/global';
import {
  defineComponent,
  useContext,
  useAsync,
  computed,
  useMeta,
} from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const { $content, route } = useContext();
    const routeTag = route.value.params.tag;

    function capitalize(text: string) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }

    const articles = useAsync(
      async () =>
        await $content('articles')
          .only(['title', 'description', 'image', 'slug', 'published', 'tags'])
          .sortBy('published', 'desc')
          .fetch<Object>()
    );

    const articlesByTag = computed(() =>
      articles.value?.filter((article: { tags: string[] }) => {
        const articleTags = article.tags.map((tag) => tag.toLowerCase());
        return articleTags.includes(routeTag);
      })
    );

    useMeta(() => ({
      title: `Articles Tagged - ${capitalize(routeTag)}`,
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${global.siteUrl}/tags/${routeTag}`,
        },
      ],
    }));

    return { routeTag, articlesByTag };
  },
  head: {},
});
</script>
