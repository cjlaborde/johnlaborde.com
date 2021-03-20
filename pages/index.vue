<template>
  <div class="container">
    {{ articles }}
  </div>
</template>


<script lang="ts">
import { defineComponent, useContext, useAsync } from '@nuxtjs/composition-api';

  export default defineComponent({
      setup() {
        const { $content } = useContext();
  
        const articles = useAsync(() => $content('index').fetch());

        return { articles };
      }
  });
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
