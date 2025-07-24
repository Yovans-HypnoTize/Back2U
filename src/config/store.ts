import { configureStore } from '@reduxjs/toolkit'
import { useDispatch,useSelector } from 'react-redux'
import AuthenticationReducer from "../pages/auth/AuthSlice"

export const store = configureStore({
  reducer: {
    auth:AuthenticationReducer,
  },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()