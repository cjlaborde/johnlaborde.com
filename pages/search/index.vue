<template>
  <div>
    <div v-if="$fetchState.pending">Loading Search</div>
    <div v-else>
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

    const { fetchState, fetch } = useFetch(async () => {
      articles.value = [];
      if (searchQuery.value) {
        articles.value = await $content('articles')
          .only(['title', 'description', 'image', 'slug', 'published', 'tags'])
          .sortBy('published', 'desc')
          .search(searchQuery.value)
          .fetch();
      }
    });

    watch(searchQuery, () => {
      fetch();
    });

    return { articles, fetchState };
  },
});
</script>
