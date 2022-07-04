<script setup lang="ts">
import PokemonCard from '@/components/PokemonCard.vue';
import { usePokemon } from '@/hooks/usePokemon';

const { pokemon, isLoading, error } = usePokemon();
</script>

<template>
  <div>PokeGuessr</div>

  <div v-if="isLoading">Loading...</div>

  <div v-if="error">{{ error.message }}</div>

  <div v-if="pokemon" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <PokemonCard />
  </div>
</template>
