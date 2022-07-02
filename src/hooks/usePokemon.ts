import axios, { AxiosError } from 'axios';
import { ref, type Ref } from 'vue';
import type { Pokemon } from '@/types/Pokemon';

const API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';

interface Data {
  count: number;
  next: string;
  previous: string;
  results: Array<Pokemon>;
}

export const usePokemon = (limit = 60, offset = 0) => {
  const error: Ref<AxiosError | null> = ref(null);
  const pokemon: Ref<Array<Pokemon>> = ref([]);
  const isLoading = ref(false);

  (async () => {
    isLoading.value = true;

    try {
      const { data } = await axios.get<Data>(`${API_ENDPOINT}?limit=${limit}&offset=${offset}`);
      pokemon.value = data.results;
    } catch (err) {
      error.value = err as AxiosError;
    } finally {
      isLoading.value = false;
    }
  })();

  return {
    error,
    pokemon,
    isLoading,
  };
};
