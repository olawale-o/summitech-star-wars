import { reactive, readonly } from 'vue';
import { getFilms } from '@/services';

const state = reactive({
  movies: [],
});

export default async function useMovie(path) {
  const getMovies = async (path) => {
    try {
      const response = await getFilms(path);
      state.movies = response.results.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    } catch (error) {
      console.error(error);
    }
  };
  await getMovies(path);
  return readonly({
    films: state.movies,
  });
}
