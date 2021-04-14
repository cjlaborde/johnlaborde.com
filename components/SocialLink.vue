<template>
  <div class="flex space-x-6 md:order-2">
    <Facebook :facebook="facebook" />
    <Instagram :instagram="instagram" />
    <Twitter :twitter="twitter" />
    <Github :github="github" />
    <LinkedIn :linked-in="linkedIn" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import global from '@/utils/global';
import Github from '~/components/svg/Github.vue';
import LinkedIn from '~/components/svg/LinkedIn.vue';
import Twitter from '~/components/svg/Twitter.vue';
import Facebook from '~/components/svg/Facebook.vue';
import Instagram from '~/components/svg/Instagram.vue';

export default defineComponent({
  name: 'SocialLink',
  components: {
    Github,
    LinkedIn,
    Twitter,
    Facebook,
    Instagram,
  },
  setup() {
    const github = ref(global.github);
    const linkedIn = ref(global.linkedIn);
    const facebook = ref(global.facebook);
    const instagram = ref(global.instagram);
    const twitter = ref(global.twitter);

    return {
      github,
      linkedIn,
      twitter,
      facebook,
      instagram,
    };
  },
});
</script>
