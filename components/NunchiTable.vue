<script setup lang="ts">
const props = defineProps({
  currentCardValue: { type: Number, default: 1 },
})
const emit = defineEmits<{
  updateCurrentCardValue: [value: number]
}>()

const updateValue = (value: number) => emit('updateCurrentCardValue', value)
</script>

<template>
  <v-row class="nunchi-table justify-center">
    <number-card
      :value="props.currentCardValue"
      @update-value="updateValue"
    ></number-card>
  </v-row>
</template>
