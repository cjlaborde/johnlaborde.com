<template>
    <div class="prose prose-lg text-gray-500 p-5 rounded mx-auto">
        About page
      <nuxt-content :document="about" />
    </div>
</template>


<script lang="ts">
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api';

  export default defineComponent({
      setup() {
        const { $content } = useContext();
  
        const about = useAsync(() => $content('about').fetch());

        return { about };
      }
  });
</script>