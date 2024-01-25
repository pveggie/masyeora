<script setup lang="ts">
const currentCardValue = ref(1)
const maxCardValue = ref(10)

const updateCurrentCardValue = (value: number) => {
  currentCardValue.value = value
}

const isGameOver = computed(() => {
  return maxCardValue.value < currentCardValue.value
})

const resetGame = () => {
  currentCardValue.value = 1
}
</script>

<template>
  <div class="nunchi-game">
    <nunchi-table
      :current-card-value="currentCardValue"
      :max-card-value="maxCardValue"
      @update-current-card-value="updateCurrentCardValue"
    ></nunchi-table>

    <v-dialog v-model="isGameOver" width="auto">
      <v-card width="50vw" height="50vh">
        <v-card-text> Game finished. </v-card-text>
        <v-card-actions>
          <v-btn block color="primary" @click="resetGame">Reset</v-btn>
        </v-card-actions>
      </v-card>
      <v-card> </v-card>
    </v-dialog>
  </div>
</template>
