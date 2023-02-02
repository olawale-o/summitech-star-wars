<template>
  <div class="movielist-container" :class="{active: active}">
    <ul class="movielist">
      <MovieItem
        v-for="(movie, i) in movies"
        :key="i" :movie="movie"
        @movie-selected="$emit('movieSelected', movie.url)"
      />
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
      active: {
        type: Boolean,
      }
    },
    emits: ['movieSelected'],
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
  max-height: 0;
  overflow-y: scroll;
}

.movielist-container.active .movielist{
  max-height: 200px;
}
</style>