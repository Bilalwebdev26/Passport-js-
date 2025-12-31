import { configureStore } from '@reduxjs/toolkit'
import authReducers from '../store/slices/user.slice.js'
export const store = configureStore({
  reducer: {
    auth:authReducers
  },
})