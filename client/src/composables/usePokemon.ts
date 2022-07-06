import axios, { AxiosError } from 'axios';
import { ref, type Ref } from 'vue';
import type { Pokemon } from '@/types/Pokemon';

const API_ENDPOINT = 'http://localhost:8080';

export const usePokemon = () => {
  const error: Ref<AxiosError | null> = ref(null);
  const pokemonList: Ref<Array<Pokemon>> = ref([]);
  const pokemon: Ref<Pokemon | null> = ref(null);
  const isLoading = ref(false);

  (async () => {
    isLoading.value = true;

    try {
      const { data } = await axios.get<Array<Pokemon>>(`${API_ENDPOINT}/quiz`);

      const randomIndex = Math.floor(Math.random() * data.length);
      pokemon.value = data[randomIndex];
      pokemonList.value = data;
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
    pokemonList,
  };
};
