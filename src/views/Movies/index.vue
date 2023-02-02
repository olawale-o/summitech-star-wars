<template>
  <div class="movies-dropdown">
    <button
      type="button"
      class="dropdown-toggle"
    >
      Choose a star wars movies
    </button>
    <MovieList :movies="movies" />
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import MovieList from '@/components/Movies/MovieList.vue';

export default defineComponent({
  name: 'MoviesView',
  components: {
    MovieList,
  },
  setup() {
    const movies = ref([]);
    onMounted(() => {
      fetch('https://swapi.dev/api/films/')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const sortedData = data.results.sort((a, b) => {
            return new Date(a.release_date) - new Date(b.release_date);
          });
          movies.value = sortedData;
        }).catch((error) => {
          console.log(error);
        })
    });
    return {
      movies
    } 
  },
});
</script>

<style scoped>
.movies-dropdown {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dropdown-toggle {
  display: block;
  background: yellow;
  padding: 1rem;
  font-size: 1.5rem;
  outline: none;
  border: none;
}
</style>