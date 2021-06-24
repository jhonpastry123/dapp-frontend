/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isEmpty } from 'utils/form-validation'
import { AuthState } from '../types'

const initialState: AuthState = {
  isAuthenticated: false,
  userEmail: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = !isEmpty(action.payload)
      state.userEmail = action.payload
    },
  },
})

// Actions
export const { setAuth } = authSlice.actions

export default authSlice.reducer
