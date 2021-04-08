<template>
  <div>
    <div class="mb-10">
      <Tag />
    </div>
    <ArticleList :articles="articles" />
    <infinite-loading spinner="circles" @infinite="infiniteScroll">
      <div slot="no-more"></div>
    </infinite-loading>
  </div>
</template>

<script>
export default {
  name: 'ArticleListPage',
  data() {
    return {
      perPage: 3,
      articles: [],
      pastLegth: 0,
      searchQuery: '',
    };
  },
  async fetch() {
    this.articles = await this.$content('articles')
      .only(['title', 'description', 'image', 'slug', 'published'])
      .sortBy('published', 'desc')
      .limit(this.perPage)
      .fetch();
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch();
    },
  },
  methods: {
    infiniteScroll($state) {
      setTimeout(() => {
        $state.loaded();
        if (this.articles.length > this.pastLegth) {
          this.perPage += 2;
          this.pastLegth = this.articles.length;
          this.$fetch();
          setTimeout(() => {
            $state.loaded();
          }, 1000);
        } else {
          $state.complete();
        }
      }, 1000);
    },
  },
};
</script>
