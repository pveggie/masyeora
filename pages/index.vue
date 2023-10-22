<script setup lang="ts">
const games = [
  {
    id: 'nunchi',
    title: 'Nunchi Game',
    description:
      'A simple counting game where you need to read the other players.',
    rules: [
      'Players can touch the number card to play it.',
      'If only one player plays the number, they get a point',
      'If two or more players play the number, they all lose a point',
      'After the last card is played, the player with the most points wins.',
    ],
  },
]
</script>

<template>
  <v-container class="fill-height">
    <v-row class="w-100">
      <v-col class="text-center">
        <p>Choose a game</p>
      </v-col>
    </v-row>
    <v-row class="w-100 mb-auto">
      <v-col v-for="game in games" :key="game.id" md="6" lg="4">
        <v-card>
          <v-card-title>{{ game.title }}</v-card-title>
          <v-card-text class="text-left">
            {{ game.description }}
          </v-card-text>
          <v-card-text class="text-left">
            <ul>
              <li v-for="(rule, id) in game.rules" :key="id">
                {{ rule }}
              </li>
            </ul>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="primary" :href="`/${game.id}/lobby/new`"
              >New Game</v-btn
            >
            <v-btn color="primary" :href="`/${game.id}/lobby/join`"
              >Join Game</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
