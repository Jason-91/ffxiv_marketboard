import { configureStore } from '@reduxjs/toolkit'
import currentView from './features/counter/counterSlice'

export default configureStore({
  reducer: {
    currentView: currentView,
  },
});
