<script setup lang="ts">
import PokemonCard from '@/components/PokemonCard.vue';
</script>

<template>
  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <h1 class="text-4xl mb-4 text-center text-[#ffcb05] [text-shadow:1px_2px_#2a75bb]">
      PokeGuessr
    </h1>
    <PokemonCard />
  </div>
</template>
