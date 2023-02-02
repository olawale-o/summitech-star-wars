<template>
  <div class="movielist-container">
    <ul class="movielist">
      <MovieItem v-for="(movie, i) in movies" :key="i" :movie="movie" />
    </ul>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import MovieItem from '@/components/Movies/Movie.vue';
  export default defineComponent({
    name: 'MovieList',
    components: {
      MovieItem,
    },
    props: {
      movies: {
        type: Array,
        required: true,
      },
    },
    setup() {
    
    return {}   
    
    },
  });
</script>

<style scoped>
.movielist-container {
  width: 100%;
}
.movielist {
  width: 100%;
  max-height: 200px;
  overflow-y: scroll;
}
</style>