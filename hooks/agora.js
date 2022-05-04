import React from 'react'

/**
 * Use the Agora services.
 *
 * @returns {import("agora-rtm-sdk").default}
 */
export const useRtm = () => {
  const [rtm, setRtm] = React.useState(null)
  const loadLib = async () => {
    setRtm(await import('agora-rtm-sdk'))
  }

  React.useEffect(() => {
    loadLib()
  }, [])

  return rtm
}

/**
 * Use the Agora RTM Client to login and connect to a channel.
 *
 * @param {string} appId
 * @returns {import("agora-rtm-sdk").RtmClient}
 */
export const useRtmClient = (appId) => {
  const rtm = useRtm()
  const [client, setClient] = React.useState(null)

  React.useEffect(() => {
    if (!rtm) {
      return
    }

    setClient(rtm.createInstance(appId))
  }, [rtm])

  return client
}
