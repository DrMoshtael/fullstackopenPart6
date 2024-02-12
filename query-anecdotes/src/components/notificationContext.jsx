import { createContext, useContext, useReducer } from "react"

const NotificationContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'CREATE':
            return `anecdote '${action.payload}' created`
        case 'VOTE':
            return `anecdote '${action.payload}' voted`
        case 'ERROR':
            return 'anecdote is too short, must have length 5 or more'
        case 'NOTHING':
            return ''
        default:
            return ''
    }
}

// const customDispatch = (dispatch) => {
//     (action) => {
//         dispatch(action)
//         setTimeout(() => dispatch({ type: 'NOTHING' }), 5000)
//     }
// }

// export const useCustomDispatch = () => {
//     const [, customDispatcher] = useContext(NotificationContext)
//     return customDispatcher
// }

export const NotificationContextProvider = (props) => {
    const [text, dispatch] = useReducer(reducer, '')
    // const customDispatcher = customDispatch(dispatch)
    return (
        <NotificationContext.Provider value={[text, dispatch]}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext