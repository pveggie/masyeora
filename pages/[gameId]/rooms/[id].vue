<script setup lang="ts">
import { useRoute } from 'nuxt/app'

const route = useRoute()
const { id: roomId } = route.params
const queryPlayerName = (route.query.playerName as string) || ''
const [storedPlayerName, setPlayerName] = useLocalStorage('nunchi-playerName')
const playerName = storedPlayerName || queryPlayerName || ''

console.log(roomId)
console.log(playerName)

onMounted(() => {
  if (playerName !== storedPlayerName) {
    setPlayerName(playerName)
  }
})
</script>

<template>
  <v-container class="fill-height text-center">
    <v-row>
      <v-col>
        <nunchi-game></nunchi-game>
      </v-col>
    </v-row>
  </v-container>
</template>
