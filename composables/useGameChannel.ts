import * as Ably from 'ably'

const getClient = (roomId: string, playerName: string) => {
  const config = useRuntimeConfig()
  const client = new Ably.Realtime({
    authUrl: config.public.ablyAuthUrl,
    authMethod: 'POST',
    authParams: {
      playerName,
      roomId,
    },
  })
  return client
}

export const useGameChannel = (roomId: string, playerName: string) => {
  const client = getClient(roomId, playerName)
  return client
}
