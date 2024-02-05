import {createAsyncThunk} from '@reduxjs/toolkit';
import {MethodApi, apiService} from '../../services/api';
import {LIST_PRODUCTS} from '../../constants/api';
import {RootState} from '../store';

export const fetchList = createAsyncThunk(
  'home/fetchList',
  async (_, {getState}) => {
    const rootState = getState() as RootState;
    const {token} = rootState.auth;

    return await apiService(
      LIST_PRODUCTS,
      MethodApi.GET,
      undefined,
      token?.access_token,
    );
  },
);
