<script setup lang="ts">
import { usePokemon } from '@/hooks/usePokemon';
const { pokemon, isLoading, error } = usePokemon();
</script>

<template>
  <div>PokeGuessr</div>

  <div v-if="isLoading">Loading...</div>

  <div v-if="error">{{ error.message }}</div>

  <ul v-if="!isLoading && !error">
    <li v-for="(_pokemon, index) in pokemon" :key="_pokemon.name">
      {{ `${_pokemon.name} (id: ${index + 1})` }}
    </li>
  </ul>
</template>
