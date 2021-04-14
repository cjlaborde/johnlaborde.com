<template>
  <div>
    <div class="flex justify-center">
      <nuxt-link
        :to="{ name: 'articles' }"
        class="text-center text-lg mb-4 uppercase text-gray-700 font-semibold inline-block mx-auto px-2"
      >
        All Tags
      </nuxt-link>
    </div>
    <ul class="flex justify-center flex-wrap">
      <li
        v-for="tag in tags"
        :key="tag"
        class="text-center mr-2 mb-2 p-1 border border-gray-200"
      >
        <nuxt-link
          :to="{ name: 'tags-tag', params: { tag: tag.toLowerCase() } }"
          class="text-sm hover:text-gray-800 text-gray-500"
          >{{ tag }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  useAsync,
  computed,
} from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'Tag',
  setup() {
    const { $content } = useContext();

    function onlyUnique(value: string, index: number, self: Array<string>) {
      return self.indexOf(value) === index;
    }

    const articles = useAsync(
      async () => await $content('articles').only(['tags']).fetch()
    );

    const tags = computed(
      () =>
        articles.value
          ?.flatMap((article: { tags: string }) => article.tags)
          .filter(onlyUnique) ?? []
    );

    return { tags };
  },
});
</script>
