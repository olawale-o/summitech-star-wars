<template>
  <div class="movies-dropdown">
    <button
      type="button"
      class="dropdown-toggle"
    >
      Choose a star wars movies
    </button>
    <template v-if="movies.length > 0">
      <MovieList :movies="movies" @movie-selected="movieSelected" />
    </template>
  </div>
  <OpeningCrawl v-if="movie.movie.opening_crawl" :openingCrawl="movie.movie.opening_crawl"/>
  <!-- <template v-if="movie.movie.characters"> -->
  <CharacterTable :characters="characters" />
  <!-- </template> -->
</template>

<script>
import { onMounted, ref, reactive } from 'vue';
import MovieList from '@/components/Movies/MovieList.vue';
import OpeningCrawl from '@/components/Movies/OpeningCrawl.vue';
import CharacterTable from '@/components/Movies/CharacterTable.vue';

export default {
  name: 'MoviesView',
  components: {
    MovieList,
    OpeningCrawl,
    CharacterTable,
  },
  setup() {
    const movies = ref([]);
    const movie = reactive({
      movie: {},
    });
    const characters = ref([]);
    const fetchCharacters = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    };
    const movieSelected = async (url) => {
      console.log(url);
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      movie.movie = data;
      Promise.all(data.characters.map((url) => fetchCharacters(url)))
        .then((data) => {
          console.log(data);
          characters.value = data;
        }).catch((error) => {
          console.log(error);
        });
    };
    onMounted(() => {
    //   fetch('https://swapi.dev/api/films/')
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //       const sortedData = data.results.sort((a, b) => {
    //         return new Date(a.release_date) - new Date(b.release_date);
    //       });
    //       movies.value = sortedData;
    //     }).catch((error) => {
    //       console.log(error);
    //     })
    });
    return {
      movies,
      movie,
      movieSelected,
      characters
    } 
  },
};
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