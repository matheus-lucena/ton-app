import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {loginThunk} from './thunk';
import {LoginResponse} from '../../entity/request/user';

export interface HomeState {
  email?: string;
  password?: string;
  token: LoginResponse | undefined;
}

const initialState: HomeState = {
  token: undefined,
  email: 'teste@teste.com',
  password: 'teste@123D',
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
    logout: state => {
      state.token = undefined;
    },
  },
  extraReducers(builder) {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.token = action.payload;
      state.email = undefined;
      state.password = undefined;
    });
  },
});

export const {updateLoginEmail, updateLoginPassword, logout} =
  authSlice.actions;

export default authSlice.reducer;
