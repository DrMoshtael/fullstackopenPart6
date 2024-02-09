import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        newNotification(state, action) {
            return action.payload
        }
    }
    // reducers: {
    //     newNotification: {
    //         reducer(state, action) {
    //             console.log('before', JSON.parse(JSON.stringify(state)))
    //             return action.payload
    //         },
    //         prepare: (text) => {
    //             return {
    //                 payload: text
    //             }
    //         }}
    // }
})

export const { newNotification } = notificationSlice.actions

let timeoutID

export const setNotification = (text, seconds) => {
    return dispatch => {
        clearTimeout(timeoutID)
        dispatch(newNotification(text))
        timeoutID = setTimeout(() => dispatch(newNotification('')), seconds * 1000)
    }
}

export default notificationSlice.reducer