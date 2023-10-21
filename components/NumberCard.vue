<script setup lang="ts">
import { computed, ref } from 'vue'
import { useKoreanSpeech } from '../composables/useKoreanSpeech'
const props = defineProps({
  value: { type: Number, default: 1 },
})

const isPlayDisabled = ref(false)

const { sayStringInKorean } = useKoreanSpeech()

interface CardNumber {
  value: number
  latin: string
  sino: string
}

const cardNumbers: CardNumber[] = [
  { value: 1, latin: '1', sino: '일' },
  { value: 2, latin: '2', sino: '이' },
  { value: 3, latin: '3', sino: '삼' },
  { value: 4, latin: '4', sino: '사' },
  { value: 5, latin: '5', sino: '오' },
  { value: 6, latin: '6', sino: '육' },
  { value: 7, latin: '7', sino: '칠' },
  { value: 8, latin: '8', sino: '팔' },
  { value: 9, latin: '9', sino: '구' },
  { value: 10, latin: '10', sino: '십' },
]

const cardNumber = computed(() => {
  const cardNumber =
    cardNumbers.find((k) => k.value === props.value) || cardNumbers[0]

  return cardNumber
})

const cardNumberString = computed(() => cardNumber.value.sino)

const emit = defineEmits<{
  updateValue: [value: number]
}>()

const playCard = async () => {
  const newValue = props.value + 1
  isPlayDisabled.value = true
  await sayStringInKorean(cardNumberString.value)

  emit('updateValue', newValue)
  isPlayDisabled.value = false
}
</script>

<template>
  <v-col sm="8" md="4" lg="2">
    <div class="number-card">
      <v-card
        :hover="!isPlayDisabled"
        class="number-card__content h-100 w-100 d-flex align-center"
        @[!isPlayDisabled&&`click`]="playCard"
      >
        <v-card-text class="number-card__text">{{
          cardNumberString
        }}</v-card-text>
      </v-card>
    </div>
  </v-col>
</template>

<style lang="scss">
@use 'sass:math';
$aspect-ratio: math.div(55, 36);

.number-card {
  position: relative;
  padding-bottom: percentage($number: $aspect-ratio);
}

.number-card__content {
  position: absolute !important;
  font-size: 20%;
}

.number-card__text {
  font-size: 50px;
}
</style>
