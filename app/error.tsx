'use client'

interface Props {
  error: Error
  reset: () => void
}

const ErrorNotes = ({ error, reset }: Props) => {
  console.error('error Log:', error)
  return (
    <div>
      <h1>Oops..some error</h1>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default ErrorNotes
