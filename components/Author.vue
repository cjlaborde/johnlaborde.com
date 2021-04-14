<template>
  <div class="flex lg:px-1/6 my-4">
    <div class="w-32 min-w-max-content">
      <NuxtLink :to="`/author/${author.name}`">
        <img
          :src="author.image"
          class="h-12 w-12 md:h-16 md:w-16 rounded-full"
        />
      </NuxtLink>
    </div>
    <div class="px-3">
      <NuxtLink :to="`/author/${author.name}`">
        <h4 class="text-gray-500">Written By</h4>
        <h3 class="text-gray-700 font-bold text-xl">{{ author.name }}</h3>
        <p class="text-gray-600 font-semibold text-sm">
          {{ author.profession }}
        </p>
      </NuxtLink>
      <p class="py-5 pr-0 md:pr-8 text-sm md:text-base text-gray-700">
        {{ author.bio }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'Author',
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
});
</script>
