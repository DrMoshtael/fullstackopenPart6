import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, updateAnecdote } from './requests'
import { useContext } from 'react'
import NotificationContext from './components/notificationContext'
// import { useCustomDispatch } from './components/notificationContext'

const App = () => {
  const [noteText, notiDispatcher] = useContext(NotificationContext)
  // const notiDispatcher = useCustomDispatch()
  console.log(notiDispatcher)

  const queryClient = useQueryClient()

  const updateMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    }
  })

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: 1
  })

  // console.log(JSON.parse(JSON.stringify(result)))

  if (result.isError) {
    return <div>anecdote service not available due to problems in server</div>
  } else if (result.isLoading) {
    return <div>loading data...</div>
  }

  const handleVote = (anecdote) => {
    updateMutation.mutate(anecdote)
    notiDispatcher({type: 'VOTE', payload: anecdote.content})
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
