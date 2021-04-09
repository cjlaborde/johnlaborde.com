<template>
  <svg
    x-description="Icon when menu is closed. Heroicon name: outline/menu"
    x-state:on="Menu open"
    x-state:off="Menu closed"
    class="block h-6 w-6"
    :class="{ hidden: open, block: open }"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
    ></path>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'OpenMenu',
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
