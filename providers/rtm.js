import http from '~/libs/http'

export const getRtmToken = async () => { // Promise<{ token }>
  const res = await http.get('/rtm/token')

  return res.data
}