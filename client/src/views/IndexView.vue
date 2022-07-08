<script setup lang="ts">
import { ref } from 'vue';
import PokemonCard from '@/components/PokemonCard.vue';
import ScoreBar from '@/components/ScoreBar.vue';

const correctChoices = ref(0);
const incorrectChoices = ref(0);

const onSelectChoice = (isCorrectChoice: boolean) => {
  if (isCorrectChoice) {
    correctChoices.value++;
  } else {
    incorrectChoices.value++;
  }
};
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center items-center space-y-4 py-4">
    <h1 class="text-4xl text-center text-[#ffcb05] [text-shadow:1px_2px_#2a75bb]">PokeGuessr</h1>
    <PokemonCard @select-choice="onSelectChoice" />
    <ScoreBar :correct-choices="correctChoices" :incorrect-choices="incorrectChoices" />
  </div>
</template>
