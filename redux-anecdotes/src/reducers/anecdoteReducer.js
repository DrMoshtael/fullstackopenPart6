import { createSlice } from '@reduxjs/toolkit'

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    votingAction(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : changedAnecdote)
    },
    createAnecdote(state, action) {
      const content = action.payload
      state.push({
        content,
        votes: 0,
        id: getId()
      })
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

// const anecdoteReducer = (state = initialState, action) => {
//   console.log('state now: ', state)
//   console.log('action', action)
//   switch (action.type) {
//     case 'VOTE': {
//       const id = action.payload.id
//       const anecdoteToChange = state.find(a => a.id === id)
//       const changedAnecdote = {
//         ...anecdoteToChange,
//         votes: anecdoteToChange.votes + 1
//       }
//       return state.map(anecdote => 
//         anecdote.id !== id ? anecdote : changedAnecdote)
//     }
//     case 'New_Anecdote': {
//       return [...state, action.payload]
//     }
//     default:
//       return state
//   }
// }

// export const votingAction = (id) => {
//   return {
//     type: 'VOTE',
//     payload: { id }
//   }
// }

// export const createAnecdote = ( anecdote ) => {
//   return {
//     type: 'New_Anecdote',
//     payload: {
//       content: anecdote,
//       id: getId(),
//       votes: 0
//     }
//   }
// }

export const { createAnecdote, votingAction, setAnecdotes } = anecdoteSlice.actions

export default anecdoteSlice.reducer