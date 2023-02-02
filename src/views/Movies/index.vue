<template>
  <div class="movies-dropdown">
    <div class="button-container">
      <button
        type="button"
        class="dropdown-toggle"
        @click="toggleButton"
        :class="{active: active}"
      >
        {{  dropdownTitle  }}
      </button>
    </div>
    <template v-if="movies.length > 0">
      <MovieList :movies="movies" @movie-selected="movieSelected" :active="active" />
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
    const dropdownTitle = ref('Choose a star wars movies');
    const active = ref(false);
    const movies = ref([
      {title: 'A New Hope', release_date: '1977-05-25', url: 'https://swapi.dev/api/films/1/'},
      {title: 'The Empire Strikes Back', release_date: '1980-05-17', url: 'https://swapi.dev/api/films/2/'},
    ]);
    const movie = reactive({
      movie: {},
    });
    const characters = ref([]);
    // const fetchCharacters = async (url) => {
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   return data;
    // };
    const movieSelected = async (url) => {
      console.log(url);
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   // console.log(data);
    //   movie.movie = data;
    //   Promise.all(data.characters.map((url) => fetchCharacters(url)))
    //     .then((data) => {
    //       console.log(data);
    //       characters.value = data;
    //     }).catch((error) => {
    //       console.log(error);
    //     });
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
      characters,
      dropdownTitle,
      toggleButton: () => {
        active.value = !active.value;
        console.log('toggle button');
      },
      active,
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
  margin-bottom: 10px;
  position: relative;
}

.button-container {
  width: 100%;
  position: relative;
  text-align: left;
  background: yellow;
}

.dropdown-toggle {
  display: block;
  background: transparent;
  padding: 1rem;
  font-size: 1.2rem;
  outline: none;
  border: none;
}

.dropdown-toggle::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  border-top: 0.5rem solid black;
  transition: all 0.3s ease;
}

.dropdown-toggle.active::after {
  transform: translateY(-50%) rotate(180deg);
}
</style>