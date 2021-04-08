<template>
  <div>
    <div
      class="prose prose-lg text-gray-500 px-5 md:px-0 rounded mx-auto text-left"
    >
      <nuxt-content :document="content" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  useFetch,
  ref,
} from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const { $content } = useContext();
    const content = ref();

    useFetch(async () => {
      content.value = await $content('projects').fetch();
    });

    return { content };
  },
});
</script>
