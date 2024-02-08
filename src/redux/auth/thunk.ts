import {createAsyncThunk} from '@reduxjs/toolkit';
import type {RootState} from '../store';
import {MethodApi, apiService} from '../../services/api';
import {
  ASYNC_TOKEN_KEY,
  LOGIN_ENDPOINT,
  USER_INFO_ENDPOINT,
} from '../../constants/api';
import {LoginRequest, LoginResponse} from '../../entity/request/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      await AsyncStorage.setItem(ASYNC_TOKEN_KEY, response?.access_token);
      return response?.access_token;
    }
    return undefined;
  },
);

export const getInfoThunk = createAsyncThunk('auth/getInfo', async (_, {}) => {
  const token = await AsyncStorage.getItem(ASYNC_TOKEN_KEY);
  if (token) {
    return await apiService(
      USER_INFO_ENDPOINT,
      MethodApi.GET,
      undefined,
      token,
    );
  }
});

export const getTokenThunk = createAsyncThunk(
  'auth/getToken',
  async (_, {}) => {
    return await AsyncStorage.getItem(ASYNC_TOKEN_KEY);
  },
);

export const logoutThunk = createAsyncThunk(
  'auth/logoutThunk',
  async (_, {}) => {
    return await AsyncStorage.removeItem(ASYNC_TOKEN_KEY);
  },
);
