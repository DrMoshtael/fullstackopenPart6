import { useQueryClient, useMutation } from "@tanstack/react-query"
import { createAnecdote } from "../requests"
import { useContext } from "react"
import NotificationContext from "./notificationContext"

const AnecdoteForm = () => {
  const [noteText, noteDispatcher] = useContext(NotificationContext)

  const queryClient = useQueryClient()

  const creationError = () => {
    noteDispatcher({type: 'ERROR'})
  }

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
    },
    onError: creationError
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote')
    newAnecdoteMutation.mutate(content)
    noteDispatcher({type: 'CREATE', payload: content})
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
