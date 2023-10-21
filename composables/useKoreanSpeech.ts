import { ref, onMounted } from 'vue'

export const useKoreanSpeech = () => {
  const synth = ref()
  const voices = ref()
  const voice = ref()
  onMounted(() => {
    synth.value = window.speechSynthesis
    voices.value = synth.value
      .getVoices()
      .filter((k: { lang: string }) => k.lang === 'ko')
    voice.value =
      voices.value.find((k: { name: string }) => k.name.includes('female')) ||
      voices.value[1]
  })

  const sayStringInKorean = (string: string | undefined) => {
    const spokenString = new SpeechSynthesisUtterance(string)
    spokenString.voice = voice.value
    spokenString.lang = 'ko'

    synth.value.speak(spokenString)

    return new Promise((resolve) => {
      spokenString.onend = resolve
    })
  }

  return { synth, voices, voice, sayStringInKorean }
}
