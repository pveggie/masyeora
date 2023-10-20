<script setup lang="ts">
import { ref, computed } from 'vue'

const currentCardValue = ref(1)
const maxCardValue = ref(10)

const updateCurrentCardValue = (value: number) => {
  currentCardValue.value = value
}

const isGameOver = computed(() => {
  return maxCardValue.value <= currentCardValue.value
})
</script>

<template>
  <div class="nunchi-game">
    <nunchi-table
      :current-card-value="currentCardValue"
      :max-card-value="maxCardValue"
      @update-current-card-value="updateCurrentCardValue"
    ></nunchi-table>

    <v-dialog v-model="isGameOver">
      <v-card> Game finished. Reset? </v-card>
    </v-dialog>
  </div>
</template>
