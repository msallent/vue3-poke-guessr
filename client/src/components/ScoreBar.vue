<script setup lang="ts">
defineProps<{
  correctChoices: number;
  incorrectChoices: number;
}>();
</script>

<template>
  <div class="flex w-[370px] md:w-96">
    <span class="font-bold text-green-600">{{ correctChoices }}</span>
    <div class="w-full flex mx-4 overflow-hidden -skew-x-[25deg] gap-2.5">
      <div
        class="bg-green-600 skew-x-[45deg] transition-all"
        :style="{
          width: `${(correctChoices * 100) / (correctChoices + incorrectChoices)}%`,
          display: correctChoices > 0 ? 'block' : 'none',
        }"
      ></div>
      <div
        class="bg-red-600 skew-x-[45deg] transition-all"
        :style="{
          width: `${(incorrectChoices * 100) / (correctChoices + incorrectChoices)}%`,
          display: incorrectChoices > 0 ? 'block' : 'none',
        }"
      ></div>
    </div>
    <span class="font-bold text-red-600">{{ incorrectChoices }}</span>
  </div>
</template>
