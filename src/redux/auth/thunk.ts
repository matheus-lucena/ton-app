import {createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from '../store';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (_, {getState}) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _rootState = getState() as RootState;
    return true;
  },
);
