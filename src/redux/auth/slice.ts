import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { loginThunk } from './thunk'

export interface HomeState {
  isSignedIn: boolean
  email?: string
  password?: string
}

const initialState: HomeState = {
  isSignedIn: false,
  email: '',
  password: ''
}

export const authSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    updateLoginEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    updateLoginPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    logout: (state) => {
      state.isSignedIn = false
    }
  },
  extraReducers(builder) {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.isSignedIn = action.payload
      state.email = undefined
      state.password = undefined
    })
  },
})

export const {updateLoginEmail, updateLoginPassword, logout } = authSlice.actions

export default authSlice.reducer