import {createAsyncThunk} from '@reduxjs/toolkit';
import type {RootState} from '../store';
import {MethodApi, apiService} from '../../services/api';
import {LOGIN_ENDPOINT, USER_INFO_ENDPOINT} from '../../constants/api';
import {LoginRequest, LoginResponse} from '../../entity/request/user';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (_, {getState}) => {
    const rootState = getState() as RootState;
    const {email, password} = rootState.auth;
    if (email && password) {
      const data: LoginRequest = {
        email: email,
        password: password,
      };
      const response: LoginResponse = await apiService(
        LOGIN_ENDPOINT,
        MethodApi.POST,
        data,
      );
      return response;
    }
    return undefined;
  },
);

export const getInfoThunk = createAsyncThunk(
  'auth/getInfo',
  async (_, {getState}) => {
    const rootState = getState() as RootState;
    const {token} = rootState.auth;
    return await apiService(
      USER_INFO_ENDPOINT,
      MethodApi.GET,
      undefined,
      token?.access_token,
    );
  },
);
