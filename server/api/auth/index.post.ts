import * as Ably from 'ably'
const ABLY_API_KEY = process.env.ABLY_API_KEY

const options: Ably.Types.ClientOptions = { key: ABLY_API_KEY }
const restClient = new Ably.Rest(options)

interface RequestBody {
  roomId: string
  playerName: string
}

export default defineEventHandler(async (event) => {
  const body: RequestBody = await readBody(event)
  const { roomId, playerName } = body
  const tokenParams: Ably.Types.TokenParams = {
    clientId: `${roomId}-${playerName}`,
  }

  restClient.auth.createTokenRequest(tokenParams, (err, tokenRequest) => {
    if (err) {
      throw createError({
        statusCode: 500,
        statusMessage: `Error creating token: ${JSON.stringify(err)}`,
      })
    } else {
      return JSON.stringify(tokenRequest)
    }
  })
})
