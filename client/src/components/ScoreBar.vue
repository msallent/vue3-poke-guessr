<script setup lang="ts">
defineProps<{
  correctChoices: number;
  incorrectChoices: number;
}>();
</script>

<template>
  <div class="flex">
    <span class="font-bold text-green-600">{{ correctChoices }}</span>
    <div class="w-full flex mx-4 overflow-hidden -skew-x-[25deg]">
      <div
        class="bg-green-600 skew-x-[45deg] transition-all"
        :style="{ width: `${(correctChoices * 100) / (correctChoices + incorrectChoices)}%` }"
      ></div>
      <div
        class="bg-red-600 skew-x-[45deg] transition-all"
        :style="{ width: `${(incorrectChoices * 100) / (correctChoices + incorrectChoices)}%` }"
      ></div>
    </div>
    <span class="font-bold text-red-600">{{ incorrectChoices }}</span>
  </div>
</template>
