export const getBearerToken = (req) => {
  const prefix = 'Bearer '
  const bearerToken = req.headers['authorization']

  return bearerToken && bearerToken.indexOf(bearerToken) > -1 ? bearerToken.substr(prefix.length) : ''
}