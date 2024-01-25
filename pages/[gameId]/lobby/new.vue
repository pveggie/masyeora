<script setup lang="ts">
import { useRoute, navigateTo } from 'nuxt/app'
import { v4 as uuidv4 } from 'uuid'

const route = useRoute()
const gameId = (route.params.gameId as string) || ''
const newRoomId = uuidv4()
const isFormValid = ref(false)
const [, setPlayerName] = useLocalStorage('nunchi-playerName')

const roomUrl = `/${gameId}/rooms/${newRoomId}`

const formState = reactive({
  playerName: '',
})

const enterGameRoom = async () => {
  const { playerName = '' } = formState

  if (playerName) {
    setPlayerName(playerName)
    await navigateTo({
      path: roomUrl,
      query: { playerName: formState.playerName },
    })
  }
}

const rules = {
  required: (label: string) => {
    return [(value: string) => !!value || `${label} is required.`]
  },
}
</script>

<template>
  <v-container class="fill-height">
    <v-row class="justify-center">
      <v-col md="6">
        <v-card title="Start new game">
          <v-form v-model="isFormValid" @submit.prevent="enterGameRoom">
            <v-card-text>
              <v-text-field
                v-model="formState.playerName"
                :rules="rules.required('Player name')"
                label="Player name"
                required
                hide-details
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="secondary" href="/">Back</v-btn>
              <v-btn color="primary" type="submit" :disabled="!isFormValid"
                >Start Game</v-btn
              >
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
