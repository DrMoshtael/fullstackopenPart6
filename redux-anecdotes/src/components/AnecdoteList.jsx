import { votingAction } from "../reducers/anecdoteReducer"
import { useDispatch, useSelector } from "react-redux"
import { newNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
    const anecdotes = useSelector(state => 
        state.anecdotes.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase())))
    const dispatch = useDispatch()

    const vote = (id, text) => {
      dispatch(votingAction(id))
      dispatch(newNotification(`You voted for '${text}'`))
      setTimeout(()=>{dispatch(newNotification(''))}, 5000)
    }

    return (
        <div>
            {anecdotes
                .sort((a1, a2) => a2.votes - a1.votes)
                .map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default AnecdoteList