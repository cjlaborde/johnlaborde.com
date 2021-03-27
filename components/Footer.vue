<template>
    <footer class="bg-white shadow-inner">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div class="space-x-6 md:order-2 flex">
          <SocialLink />
        </div>
        <div class="mt-8 md:mt-0 md:order-1">
          <p class="text-center text-base text-gray-500 font-bold">
            <small>&copy; {{ new Date().getFullYear() }} Copyright {{ siteName }}</small>
          </p>
        </div>
        </div>
      </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import global from '@/utils/global';

  export default defineComponent({
      setup() {
      const siteName = ref(global.siteName);

      return { siteName };
      }
  });
</script>