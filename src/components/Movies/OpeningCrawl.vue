<template>
  <p>{{ openingCrawl }}</p>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'OpeningCrawl',
  props: {
    openingCrawl: {
      type: String,
    },
  },
  setup() {
    return {}
  },
});
</script>

<style scoped>
  p {
    font-size: 1.5rem;
  }
</style>