import jwt from 'jsonwebtoken'
import { RtmTokenBuilder } from 'agora-access-token'
import { getBearerToken } from '~/libs/auth'

export default async (req, res) => {
  const token = getBearerToken(req)
  const { username } = jwt.decode(token)

  const {
    AGORA_APP_ID,
    AGORA_APP_CERTIFICATE,
    AGORA_EXPIRATION_TIME_IN_SECONDS
  } = process.env
  const rtmToken = RtmTokenBuilder.buildToken(
    AGORA_APP_ID,
    AGORA_APP_CERTIFICATE,
    username,
    2,
    Math.floor(Date.now() / 1000) + parseInt(AGORA_EXPIRATION_TIME_IN_SECONDS, 10)
  )

  return res.json({ token: rtmToken })
}