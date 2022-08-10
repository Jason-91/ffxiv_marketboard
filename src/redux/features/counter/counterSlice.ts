import { createSlice } from '@reduxjs/toolkit'

export const currentView = createSlice({
    name: 'currentView',
    initialState: {
        value: 'cross-world-view',
    },
    reducers: {
        setCurrentView: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setCurrentView } = currentView.actions
export default currentView.reducer