<template>
  <div v-if="searchQuery && articles">
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

<script>
export default {
  data() {
    return {
      articles: [],
    };
  },
  computed: {
    searchQuery() {
      return this.$route.query.keyword;
    },
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content('articles')
        .only(['title', 'description', 'image', 'slug', 'published', 'tags'])
        .sortBy('published', 'desc')
        .search(searchQuery)
        .fetch();
    },
  },
  async mounted() {
    this.articles = await this.$content('articles')
      .only(['title', 'description', 'image', 'slug', 'published', 'tags'])
      .sortBy('published', 'desc')
      .search(this.searchQuery)
      .fetch();
  },
};
</script>
