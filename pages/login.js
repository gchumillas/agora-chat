import React from 'react'
import { useAsyncFn } from 'react-use'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { login } from '~/providers/auth'

const Page = () => {
  const router = useRouter()
  const usernameRef = React.useRef(null)
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  React.useEffect(() => {
    const usernameEl = usernameRef.current
    usernameEl.focus()
  }, [usernameRef])

  const [state, doSubmit] = useAsyncFn(async () => {
    const { token } = await login(username, password)
    Cookies.set('token', token)
    await router.push('/')
  }, [username, password])

  return <div>
    <Head>
      <title>Login</title>
    </Head>
    <main className="flex justify-center items-center min-h-screen bg-grey-400">
      <div className="max-w-lg flex flex-col p-5 border border-grey-500 rounded-lg bg-white">
        <label className="flex flex-col mb-5">
          <span>Username</span>
          <input
            ref={usernameRef}
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)} />
        </label>
        <label className="flex flex-col mb-5">
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)} />
        </label>
        <div className="flex flex-col items-center gap-y-5">
          <button disabled={state.loading} onClick={doSubmit}>Login</button>
          {state.loading
            ? <div>Loading...</div>
            : state.error && <div className="text-red-900 font-bold">Invalid username or password</div>}
        </div>
      </div>
    </main>
  </div>
}

export default Page