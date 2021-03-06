<script setup lang="ts">
import { ref, watch } from 'vue';
import axios from 'axios';
import CardButton from '@/components/CardButton.vue';
import { usePokemon } from '@/composables/usePokemon';
import SkeletonButton from '@/components/SkeletonButton.vue';

const emit = defineEmits(['selectChoice']);

const sprite = ref('');
const showPokemon = ref(false);
const selectedAnswer = ref('');

const { pokemonList, pokemon, fetchData } = usePokemon();

const fetchNewPokemon = () => {
  selectedAnswer.value = '';
  showPokemon.value = false;
  sprite.value = '';

  pokemonList.value = [];
  pokemon.value = null;

  fetchData();
};

const onClick = (pokemonId: string) => {
  emit('selectChoice', pokemonId === pokemon.value?.id);

  selectedAnswer.value = pokemonId;
  showPokemon.value = true;

  setTimeout(() => {
    fetchNewPokemon();
  }, 2500);
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
    class="flex flex-col rounded-2xl shadow-md p-6 w-[370px] space-y-6 bg-gradient-to-br from-slate-400 to-slate-700 md:w-96"
  >
    <div
      v-html="sprite"
      aria-hidden="true"
      class="flex justify-center items-center h-80 [&>svg]:w-full [&>svg]:h-full"
      :class="{ '[&>svg>g>path]:fill-black': !showPokemon }"
    ></div>
    <ul v-if="pokemonList.length > 0 && sprite !== ''" class="space-y-4">
      <li v-for="_pokemon in pokemonList" :key="_pokemon.id">
        <CardButton
          @click="() => onClick(_pokemon.id)"
          :id="_pokemon.id"
          :is-chosen="_pokemon.chosen"
          :selected-answer="selectedAnswer"
        >
          {{ _pokemon.name }}
        </CardButton>
      </li>
    </ul>
    <ul v-else class="space-y-4">
      <li v-for="index in Array(4)" :key="index">
        <SkeletonButton />
      </li>
    </ul>
  </div>
</template>
