<script setup lang="ts">
import { ref } from 'vue';
import CardButton from './CardButton.vue';

const sprite = ref('');

fetch(
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/124.svg'
).then((res) => res.text().then((res) => (sprite.value = res)));

const onClick = () => console.log('click');
</script>

<template>
  <div
    class="inline-flex flex-col rounded-md shadow-md p-6 w-11/12 space-y-6 bg-gradient-to-br from-slate-400 to-slate-700 md:w-96"
  >
    <div
      v-html="sprite"
      class="flex justify-center items-center text-black"
      aria-hidden="true"
    ></div>
    <ul class="space-y-4">
      <li>
        <CardButton @click="onClick">Pokemon 1</CardButton>
      </li>
      <li>
        <CardButton @click="onClick">Pokemon 2</CardButton>
      </li>
      <li>
        <CardButton @click="onClick">Pokemon 3</CardButton>
      </li>
      <li>
        <CardButton @click="onClick">Pokemon 4</CardButton>
      </li>
    </ul>
  </div>
</template>
