<script setup lang="ts">
defineProps<{
  id: string;
  isChosen?: boolean;
  selectedAnswer: string;
}>();
</script>

<template>
  <button
    type="button"
    class="rounded-md p-2.5 w-full shadow-md font-bold capitalize border default"
    :class="{
      'selected-choice': selectedAnswer !== '',
      'correct-choice': selectedAnswer !== '' && isChosen,
      'incorrect-choice': selectedAnswer === id && !isChosen,
    }"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.default {
  @apply border-white bg-white text-black 
    hover:border-black hover:bg-black hover:text-white 
    active:border-gray-900 active:bg-gray-900 active:text-white active:shadow-none;
}

.selected-choice {
  @apply pointer-events-none;
}

.correct-choice {
  @apply border-green-600 bg-green-600 text-white hover:border-green-600 hover:bg-green-600 hover:cursor-default;
}

.incorrect-choice {
  @apply border-red-600 bg-red-600 text-white hover:border-red-600 hover:bg-red-600 hover:cursor-default;
}
</style>
