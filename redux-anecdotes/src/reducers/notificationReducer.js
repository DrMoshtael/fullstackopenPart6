import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState:'Test message',
    reducers: {
        newNotification(state, action) {
            state.notification = action.payload
        }
    }
})

export const { newNotification } = notificationSlice.actions

export default notificationSlice.reducer