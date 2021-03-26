
<template>
    <div v-if="article" class="relative py-16 overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8 text-left">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="block text-base text-center text-green-400 font-semibold tracking-wide uppercase">{{ article.title }}</span>
            <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ article.description }}</span>
          </h1>
        </div>
        <div class="mt-6 prose prose-green prose-lg max-w-3xl text-gray-700 mx-auto">
      <nuxt-content :document="article" />
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, useContext, computed, useStatic } from '@nuxtjs/composition-api';

  export default defineComponent({
    setup() {
      const { $content, params } = useContext();
      const slug = computed(() => params.value.slug);

      const article = useStatic(async (slug) => $content('articles', slug).fetch<any>(), slug, 'articles');

      return { article };
    }
  });
</script>