import React from 'react'

export const useAsyncFn = asyncFunction => {
  const [loading, setLoading] = React.useState(false)
  const [value, setValue] = React.useState(null)
  const [error, setError] = React.useState(null)

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const fn = React.useCallback(() => {
    setLoading(true)
    setValue(null)
    setError(null)

    return asyncFunction()
      .then(res => {
        setValue(res)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [asyncFunction])

  return { fn, loading, value, error }
}

// Similar to useAsyncFn, but executes [asyncFunction] immediately.
export const useAsync = asyncFunction => {
  const { fn, ...rest } = useAsync(asyncFunction)

  React.useEffect(() => fn(), [fn])

  return { ...rest }
}
