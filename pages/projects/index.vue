<template>
  <div>
    <div
      class="prose prose-lg text-gray-500 px-5 md:px-0 rounded mx-auto text-left"
    >
      <nuxt-content :document="projects" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const { $content } = useContext();
    const projects = useAsync(() => $content('projects').fetch());

    return { projects };
  },
});
</script>
