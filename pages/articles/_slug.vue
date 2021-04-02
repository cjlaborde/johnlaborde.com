<template>
  <div v-if="article" class="relative py-16 overflow-hidden">
    <div class="relative px-4 sm:px-6 lg:px-8 text-left">
      <div class="text-lg max-w-prose mx-auto">
        <h1>
          <span
            class="block text-base text-center text-green-400 font-semibold tracking-wide uppercase"
            >{{ article.title }}</span
          >
          <span
            class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >{{ article.description }}</span
          >
        </h1>
      </div>
      <div
        class="mt-6 prose prose-green prose-lg max-w-3xl text-gray-700 mx-auto"
      >
        <nuxt-content :document="article" />
      </div>

      <h3 class="px-1/12 lg:px-1/6 bold text-gray-800 my-8 text-lg">Tags:</h3>
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
  setup() {
    const { $content, params, route } = useContext();
    const slug = computed(() => params.value.slug);
    const article = useStatic(
      async (slug) => await $content('articles', slug).fetch<any>(),
      slug,
      'articles'
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
    return { article };
  },
  head: {},
});
</script>
