import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {loginThunk, getInfoThunk, getTokenThunk, logoutThunk} from './thunk';
import {UserAttributes} from '../../entity/request/user';

export interface AuthState {
  isAutenticated: boolean | undefined;
  email?: string;
  password?: string;
  user_attributes?: UserAttributes[];
}

const initialState: AuthState = {
  isAutenticated: undefined,
  email: '',
  password: '',
  user_attributes: [],
};

export const authSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    updateLoginEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updateLoginPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      if (action.payload) {
        state.email = undefined;
        state.password = undefined;
        state.isAutenticated = true;
      }
    });
    builder.addCase(getInfoThunk.fulfilled, (state, action) => {
      state.user_attributes = action.payload?.data?.UserAttributes;
    });
    builder.addCase(getTokenThunk.fulfilled, (state, action) => {
      state.isAutenticated = action.payload ? true : false;
    });
    builder.addCase(logoutThunk.fulfilled, state => {
      state.isAutenticated = false;
    });
  },
});

export const {updateLoginEmail, updateLoginPassword} = authSlice.actions;

export default authSlice.reducer;
