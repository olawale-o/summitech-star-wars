import { reactive, readonly } from 'vue';
import { getFilms } from '@/services';

const state = reactive({
  films: [],
});

export default async function useMovie(path) {
  try {
    const response = await getFilms(path);
    state.films = response.results.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
  } catch (error) {
    console.error(error);
  }
  return readonly({
    films: state.films,
  });
}
