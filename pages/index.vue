<template>
  <div class="p-8">
    <div class="lg:flex mx-auto">
      <div
        class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8"
        x-max="1"
      >
        <div class="flex-none sm:flex">
          <!-- Image -->
          <img
            class="h-32 w-32 lg:h-48 lg:w-48 mx-auto mb-5 md:grayscale md:hover:filter-reset md:focus:filter-reset transition-all duration-200 ease-in"
            :src="avatar"
            alt="display picture"
          />
          <div class="pl-5 lg:pl-15">
            <div class="space-y-4">
              <div class="text-lg leading-6 font-medium space-y-1 md:text-left">
                <h3 class="text-2xl">{{ author }}</h3>
                <p class="text-gray-600 text-lg">Full Stack Developer</p>
              </div>
              <div class="text-lg text-left prose text-gray-500">
                <nuxt-content :document="about" />
                <WebDevelopmentTools />

                <h4 class="font-medium mt-10">Contact me at</h4>
              </div>
              <div class="flex justify-left space-x-6 md:order-2">
                <SocialLink />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  useAsync,
  ref,
} from '@nuxtjs/composition-api';
import global from '@/utils/global';

export default defineComponent({
  name: 'About',

  setup() {
    const { $content } = useContext();
    const author = ref(global.author);
    const about = useAsync(() => $content('about').fetch());
    const avatar = ref(global.avatar);

    return { author, about, avatar };
  },
});
</script>

<style scoped>
/* @variants hover, focus, responsive {
  .grayscale {
    filter: grayscale(100%);
  }

  .filter-reset {
    filter: none;
  }
} */
</style>
