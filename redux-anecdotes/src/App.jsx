import AnecdoteForm from './components/AcecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import anecdoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService.getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [])
  
  return (
    <div>
      <h2>Anecdotes</h2>
      {useSelector(state => state.notification) !== '' && <Notification />}
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App