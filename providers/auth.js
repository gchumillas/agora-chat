import http from '~/libs/http'

export const login = async (username, password) => { // Promise<{ token }>
  const res = await http.post('/login', { username, password })

  return res.data
}