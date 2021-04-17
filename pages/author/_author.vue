<template>
  <div v-if="articles">
    <NuxtLink to="/articles" class="font-bold text-gray-800 text-xl mb-10">
      Back to All Articles
    </NuxtLink>
    <!-- {{ author }} -->
    <Author :author="articles[0].author" class="text-left px-4 lg:px-1/4" />
    <ArticleList :articles="articles" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .where({
        'author.name': {
          $regex: [params.author, 'i'],
        },
      })
      .without('body')
      .sortBy('createdAt', 'asc')
      .fetch();

    return {
      articles,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    },
  },
};
</script>
