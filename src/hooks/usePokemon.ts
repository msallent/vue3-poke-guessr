import axios, { AxiosError } from 'axios';
import { ref, type Ref } from 'vue';
import type { Pokemon } from '@/types/Pokemon';

const MAX_POKEMON = 905;
const API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';

export const usePokemon = () => {
  const error: Ref<AxiosError | null> = ref(null);
  const pokemon: Ref<Pokemon | null> = ref(null);
  const isLoading = ref(false);

  (async () => {
    isLoading.value = true;

    try {
      const pokemonId = Math.round(Math.random() * MAX_POKEMON);
      const { data } = await axios.get<Pokemon>(`${API_ENDPOINT}/${pokemonId}`);
      pokemon.value = data;
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
