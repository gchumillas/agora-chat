import React from 'react'
import tw, { styled } from 'twin.macro'
import cn from 'tailwindcss-classnames'
import jwt from 'jsonwebtoken'
import Head from 'next/head'
import { useRtmClient } from '~/hooks/agora'
import { useAsyncFn } from '~/hooks/async'
import { getRtmToken } from '~/providers/rtm'
import Message from '~/components/Message'

export default function Home({ username }) {
  const client = useRtmClient(process.env.AGORA_APP_ID)
  const inputRef = React.useRef(null)
  const [channel, setChannel] = React.useState(null)
  const [text, setText] = React.useState('')
  const [messages, setMessages] = React.useState([]) // { sender: string, text: string, align: 'left' | 'right' }

  const addMessage = ({ sender, text, align }) => {
    setMessages(messages => [{ sender, text, align }, ...messages])
  }

  const submit = useAsyncFn(async () => {
    setText('')
    await channel.sendMessage({ text })
    addMessage({ sender: username, text, align: 'right' })
    inputRef.current?.focus()
  })

  const statusMessage = React.useMemo(() => {
    if (submit.loading) {
      return 'Loading...'
    }

    return submit.error ? 'Something went wrong :¬(' : ''
  }, [submit.loading, submit.error])

  React.useEffect(() => {
    inputRef.current?.focus()
  }, [inputRef])

  // when the client is ready connect to RTM
  React.useEffect(() => {
    if (!client) {
      return
    }

    const connectToRtm = async () => {
      // logs into rtm
      const { token } = await getRtmToken()
      await client.login({ uid: username, token })

      // creates or joins to the channel
      const channel = client.createChannel(process.env.AGORA_CHANNEL)
      channel.on('ChannelMessage', (data, uid) => {
        addMessage({ sender: uid, text: data.text, align: 'left' })
      })
      await channel.join()
      setChannel(channel)
    }

    connectToRtm()
  }, [client])

  return <div className="bg-grey-400">
    <Head>
      <title>Home</title>
      <meta name="description" content="Home page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="container mx-auto h-0 min-h-screen p-5 bg-white">
      <div className="flex flex-col h-full">
        <div className="flex-grow flex flex-col-reverse items-start py-5 gap-y-3">
          {messages.map((message, i) => <Message key={i} {...message} />)}
        </div>
        <div className="flex gap-x-3">
          <StyledInput
            ref={inputRef}
            type="text"
            value={text}
            placeholder={statusMessage}
            onChange={e => setText(e.target.value)}
            onKeyDown={e => e.key == 'Enter' && submit.fn()}
            className={cn('flex-grow')} />
          <StyledButton disabled={!channel} onClick={submit.fn}>send</StyledButton>
        </div>
      </div>
    </div>
  </div>
}

export const getServerSideProps = ({ req }) => {
  const token = req.cookies['token']

  let username
  try {
    const info = jwt.verify(token, process.env.SECRET_PHRASE)
    username = info.username
  } catch {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      username
    }
  }
}

const StyledInput = styled.input`
  &.error::placeholder {
    ${tw`text-red-a700`}
  }
`

const StyledButton = styled.button`
  &:disabled {
    ${tw`opacity-20 cursor-default`}
  }
`