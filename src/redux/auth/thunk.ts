import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "../store"

export const loginThunk = createAsyncThunk('auth/login', async (_, {getState}) => {
    const rootState = getState() as RootState
    const { email, password } = rootState.auth
    return true
})
