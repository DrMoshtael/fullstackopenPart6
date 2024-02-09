import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState:'',
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

export default notificationSlice.reducer