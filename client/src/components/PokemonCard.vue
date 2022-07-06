<script setup lang="ts">
import { ref, watch } from 'vue';
import axios from 'axios';
import CardButton from '@/components/CardButton.vue';
import { usePokemon } from '@/composables/usePokemon';
import SkeletonButton from '@/components/SkeletonButton.vue';

const { pokemonList, pokemon } = usePokemon();

const sprite = ref('');

const onClick = (pokemonId: number) => {
  if (pokemonId === pokemon.value?.id) {
    console.log('CORRECT!');
  } else {
    console.log('Try again.');
  }
};

watch(pokemon, () => {
  if (pokemon.value) {
    axios.get(pokemon.value.image).then(({ data }) => {
      sprite.value = data;
    });
  }
});
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
    <ul v-if="pokemonList.length > 0 && sprite !== ''" class="space-y-4">
      <li v-for="pokemon in pokemonList" :key="pokemon.id">
        <CardButton @click="() => onClick(pokemon.id)">{{ pokemon.name }}</CardButton>
      </li>
    </ul>
    <ul v-else class="space-y-4">
      <li v-for="index in Array(4)" :key="index">
        <SkeletonButton />
      </li>
    </ul>
  </div>
</template>
