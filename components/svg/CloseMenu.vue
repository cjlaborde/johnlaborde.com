<template>
  <svg
    x-description="Icon when menu is open. Heroicon name: outline/x"
    x-state:on="Menu open"
    x-state:off="Menu closed"
    class="h-6 w-6"
    :class="{ block: !open, hidden: !open }"
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
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'CloseMenu',
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
