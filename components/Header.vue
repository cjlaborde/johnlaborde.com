<template>
  <div>
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex px-2 lg:px-0">
            <div class="flex-shrink-0 flex items-center">
              <h3 class="text-lg">{{ siteName }}</h3>
              <img
                class="ml-4 h-8 w-8 rounded-full"
                :src="avatar"
                :alt="avatarAlt"
              />
            </div>
            <div class="hidden lg:ml-6 lg:flex lg:space-x-8">
              <nuxt-link
                :to="{ name: 'index' }"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700"
                >About</nuxt-link
              >
              <nuxt-link
                :to="{ name: 'articles' }"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700"
                >Articles</nuxt-link
              >
              <nuxt-link
                :to="{ name: 'projects' }"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700"
                >Projects</nuxt-link
              >
            </div>
          </div>
          <div
            class="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end"
          >
            <Search />
          </div>
          <div class="flex items-center lg:hidden">
            <!-- Mobile menu button -->
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              x-bind:aria-expanded="open.toString()"
              @click="open = !open"
            >
              <span class="sr-only">Open main menu</span>
              <OpenMenu :open="open" />
              <CloseMenu :open="open" />
            </button>
          </div>
        </div>
      </div>

      <div
        v-if="open"
        id="mobile-menu"
        x-description="Mobile menu, show/hide based on menu state."
        class="lg:hidden"
      >
        <div class="pt-2 pb-3 space-y-1">
          <nuxt-link
            :to="{ name: 'index' }"
            class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 text-base font-medium"
            >About</nuxt-link
          >
          <nuxt-link
            :to="{ name: 'articles' }"
            class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 text-base font-medium"
            >articles</nuxt-link
          >
          <nuxt-link
            :to="{ name: 'projects' }"
            class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 text-base font-medium"
            >Projects</nuxt-link
          >
        </div>
        <div class="pt-4 pb-3 border-t border-gray-200">
          <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                :src="avatar"
                :alt="avatarAlt"
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">
                {{ siteName }}
              </div>
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
import OpenMenu from '~/components/svg/OpenMenu.vue';
import CloseMenu from '~/components/svg/CloseMenu.vue';

export default defineComponent({
  components: {
    OpenMenu,
    CloseMenu,
  },
  setup() {
    const open = ref(false);
    const siteName = ref(global.siteName);
    const email = ref(global.email);
    const avatar = ref(global.avatar);
    const avatarAlt = ref(global.avatarAlt);

    return { siteName, open, email, avatar, avatarAlt };
  },
});
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply border-green-400 text-gray-900 border-b-2;
}
</style>
