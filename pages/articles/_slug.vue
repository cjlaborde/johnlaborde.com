<template>
  <div v-if="article" class="relative py-16 overflow-hidden">
    <div class="relative px-4 sm:px-6 lg:px-8 text-left">
      <div class="text-lg max-w-prose mx-auto">
        <h1>
          <span
            class="block text-base text-4xl text-center text-black font-semibold tracking-wide capitalize"
            >{{ article.title }}</span
          >
          <span class="block font-semibold text-xs text-green-400 text-center">
            published: {{ $dayjs(article.published).fromNow() }}
          </span>
          <span
            class="mt-2 block text-lg text-center leading-8 font-medium tracking-tight text-gray-600"
            >{{ article.description }}</span
          >
        </h1>
      </div>
      <div
        class="mt-6 prose prose-green prose-lg max-w-3xl text-gray-700 mx-auto"
      >
        <nuxt-content :document="article" />
      </div>

      <h3
        class="px-1/12 lg:px-1/6 bold text-gray-800 my-8 text-lg font-semibold"
      >
        Tags:
      </h3>
      <ul class="flex justify-start px-1/12 lg:px-1/6">
        <li
          v-for="tag in article.tags"
          :key="tag"
          class="text-center mr-2 mb-2 p-1 border border-gray-200 rounded"
        >
          <nuxt-link
            :to="{ name: 'tags-tag', params: { tag: tag.toLowerCase() } }"
            class="text-sm hover:text-gray-800 text-gray-500"
            >{{ tag }}</nuxt-link
          >
        </li>
      </ul>
      <Author :author="article.author" />
      <RelatedArticle :related-articles="relatedArtices" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  computed,
  useStatic,
  useMeta,
} from '@nuxtjs/composition-api';
import global from '@/utils/global';
import getSiteMeta from '@/utils/getSiteMeta';
export default defineComponent({
  name: 'Article',
  setup() {
    const { $content, params, route } = useContext();
    const slug = computed(() => params.value.slug);
    const article = useStatic(
      async (slug) => await $content('articles', slug).fetch<any>(),
      slug,
      'articles'
    );
    const tag = computed(() => article.value?.tags[0]);
    const articlesByTags = useStatic(
      async (tag: string) =>
        await $content('articles')
          .where({ tags: { $contains: [tag] } })
          // .where({ slug: { $ne: params.value.slug } })
          .only(['title', 'description', 'image', 'slug', 'published', 'tags'])
          .sortBy('published', 'desc')
          .limit(4)
          .fetch(),
      tag,
      'articles'
    );
    const relatedArtices = computed(
      () =>
        articlesByTags.value?.filter(
          (articlesByTag: { slug: string }) =>
            articlesByTag.slug !== route.value.params.slug
        ) ?? []
    );
    const metaData = {
      type: 'article',
      title: article.value?.title,
      description: article.value?.description,
      url: `${global.siteUrl}/articles/${route.value.params.slug}`,
      mainImage: article.value?.image,
    };
    const meta = computed(() => getSiteMeta(metaData));
    useMeta(() => ({
      title: article.value?.title,
      meta: [
        ...meta.value,
        {
          property: 'article:published_time',
          content: article.value?.createdAt,
        },
        {
          property: 'article:modified_time',
          content: article.value?.updatedAt,
        },
        {
          property: 'article:tag',
          content: article.value?.tags ? article.value?.tags.toString() : '',
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: global.author || '' },
        { name: 'twitter:label2', content: 'Filed under' },
        {
          name: 'twitter:data2',
          content: article.value?.tags ? article.value?.tags.toString() : '',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${global.siteUrl}/articles/${route.value.params.slug}`,
        },
      ],
    }));
    return { article, relatedArtices };
  },
  head: {},
});
</script>
