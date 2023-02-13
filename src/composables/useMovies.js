import { reactive, readonly, watch } from 'vue';
// import { fetchCharacters } from '@/services';

const state = reactive({
  movie: {},
  characters: [],
});

export default function useMovies() {
  const onMovieSelected = async (path) => {
    const response = await fetch(path);
    const data = await response.json();
    state.movie = data;
    // console.log(data);
    // Promise.all(data.characters.map((url) => fetchCharacters(url)))
    //   .then((data) => {
    //     state.characters = data.filter((character) => character.height !== 'unknown' && character.height !== 'n/a');
    //   }).catch((error) => {
    //     console.log(error);
    //   });
  };
  watch(state, (value) => {
    console.log('watching movie');
    state.movie = value.movie;
  }
  , { deep: true });
  return readonly({
    onMovieSelected,
    film: state.movie,
    casts: state.characters,
  });
}
