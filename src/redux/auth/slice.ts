import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {loginThunk, getInfoThunk} from './thunk';
import {LoginResponse, UserAttributes} from '../../entity/request/user';

export interface HomeState {
  email?: string;
  password?: string;
  token: LoginResponse | undefined;
  user_attributes?: UserAttributes[];
}

const initialState: HomeState = {
  token: undefined,
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
    logout: state => {
      state.email = '';
      state.password = '';
      state.token = undefined;
    },
  },
  extraReducers(builder) {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.token = action.payload;
      state.email = undefined;
      state.password = undefined;
    });
    builder.addCase(getInfoThunk.fulfilled, (state, action) => {
      state.user_attributes = action.payload?.data?.UserAttributes;
    });
  },
});

export const {updateLoginEmail, updateLoginPassword, logout} =
  authSlice.actions;

export default authSlice.reducer;
