<template>
    <div>
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex px-2 lg:px-0">
            <div class="flex-shrink-0 flex items-center">
              <h3 class="text-lg"> {{ siteName }}</h3>
                <img class="ml-4 h-8 w-8 rounded-full" :src="avatar" :alt="avatarAlt">
            </div>
            <div class="hidden lg:ml-6 lg:flex lg:space-x-8">
              <nuxt-link :to="{ name: 'index' }" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700">About</nuxt-link>
              <nuxt-link :to="{ name: 'articles' }" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700">Articles</nuxt-link>
             <nuxt-link :to="{ name: 'projects' }" class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700">Projects</nuxt-link>
            </div>
          </div>
          <div class="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div class="max-w-lg w-full lg:max-w-xs">
              <label for="search" class="sr-only">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <input id="search" name="search" class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-400 focus:border-green-400 sm:text-sm" placeholder="Search" type="search">
              </div>
            </div>
          </div>
          <div class="flex items-center lg:hidden">
            <!-- Mobile menu button -->
            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" @click="open = !open" aria-expanded="false" x-bind:aria-expanded="open.toString()">
              <span class="sr-only">Open main menu</span>
              <svg x-description="Icon when menu is closed. Heroicon name: outline/menu" x-state:on="Menu open" x-state:off="Menu closed" class="block h-6 w-6" :class="{ 'hidden': open, 'block': open }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg x-description="Icon when menu is open. Heroicon name: outline/x" x-state:on="Menu open" x-state:off="Menu closed" class="h-6 w-6" :class="{ 'block': !open, 'hidden': !open }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>              
            </button>
          </div>
        </div>
      </div>

      <div x-description="Mobile menu, show/hide based on menu state." class="lg:hidden" id="mobile-menu" v-if="open">
        <div class="pt-2 pb-3 space-y-1">
          <nuxt-link :to="{ name: 'index' }" class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 text-base font-medium">About</nuxt-link>
          <nuxt-link :to="{ name: 'articles' }" class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 text-base font-medium">articles</nuxt-link>
          <nuxt-link :to="{ name: 'projects' }" class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 text-base font-medium">Projects</nuxt-link>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-200">
          <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="avatar" :alt="avatarAlt">
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">{{ siteName }}</div>
              <div class="text-sm font-medium text-gray-500">{{ email }}</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import global from '@/utils/global';

  export default defineComponent({
    setup() {
      const open = ref(false);
      const siteName = ref(global.siteName);
      const email = ref(global.email);
      const avatar = ref(global.avatar);
      const avatarAlt = ref(global.avatarAlt);

      return { siteName, open, email, avatar, avatarAlt };
    }
  });
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply border-green-400 text-gray-900 border-b-2;
}
</style>