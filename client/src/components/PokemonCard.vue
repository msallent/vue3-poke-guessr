<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import type { Pokemon } from '@/types/Pokemon';
import CardButton from '@/components/CardButton.vue';

const props = defineProps<{
  pokemon: Pokemon;
  options: Array<Pokemon>;
}>();

const sprite = ref('');
axios.get(props.pokemon.image).then(({ data }) => {
  sprite.value = data;
});

const onClick = (pokemonId: number) => {
  if (pokemonId === props.pokemon.id) {
    console.log('CORRECT!');
  } else {
    console.log('Try again.');
  }
};
</script>

<template>
  <div
    class="inline-flex flex-col rounded-md shadow-md p-6 w-11/12 space-y-6 bg-gradient-to-br from-slate-400 to-slate-700 md:w-96"
  >
    <div
      v-html="sprite"
      class="flex justify-center items-center text-black h-80 [&>svg]:w-full [&>svg]:h-full"
      aria-hidden="true"
    ></div>
    <ul class="space-y-4">
      <li v-for="pokemon in options" :key="pokemon.id">
        <CardButton @click="() => onClick(pokemon.id)">{{ pokemon.name }}</CardButton>
      </li>
    </ul>
  </div>
</template>
