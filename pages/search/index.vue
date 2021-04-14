<template>
  <div>
    <div>
      <h3 class="font-semibold text-gray-600 text-lg mb-10">
        Search results: ({{ articles.length }})
      </h3>
    </div>
    <div v-if="articles.length > 0">
      <ArticleList :articles="articles" />
    </div>
    <div v-else>
      <h3 class="text-gray-500 text-sm">No Search result</h3>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  useFetch,
  useRoute,
  computed,
  watch,
  ref,
} from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'SearchPage',
  setup() {
    const { $content } = useContext();
    const articles = ref<any>([]);
    const route = useRoute();

    const searchQuery = computed(() => route.value.query.keyword);

    const { fetch } = useFetch(async () => {
      if (!searchQuery.value) {
        articles.value = [];
        return;
      }
      articles.value = await $content('articles')
        .only(['title', 'description', 'image', 'slug', 'published', 'tags'])
        .sortBy('published', 'desc')
        .search(searchQuery.value)
        .fetch();
    });

    watch(searchQuery, () => {
      fetch();
    });

    return { articles };
  },
});
</script>
