<template>
  <div class="max-w-lg w-full lg:max-w-xs">
    <label for="search" class="sr-only">Search</label>
    <div class="relative">
      <div
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      ></div>
      <input
        id="search"
        v-model="searchQuery"
        type="search"
        autocomplete="off"
        placeholder="Search Articles"
        name="search"
        class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-400 focus:border-green-400 sm:text-sm"
        @keyup.enter="submit"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: [],
    };
  },
  methods: {
    submit() {
      this.$router.push({
        name: 'search',
        query: { keyword: this.searchQuery },
      });
    },
  },
};
</script>
