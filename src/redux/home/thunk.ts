import {createAsyncThunk} from '@reduxjs/toolkit';
import {MethodApi, apiService} from '../../services/api';
import {
  ASYNC_TOKEN_KEY,
  BUY_PRODUCTS,
  LIST_PRODUCTS,
} from '../../constants/api';
import type {RootState} from '../store';
import {BuyProductsRequest} from '../../entity/request/product';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchList = createAsyncThunk('home/fetchList', async (_, {}) => {
  const token = await AsyncStorage.getItem(ASYNC_TOKEN_KEY);
  if (token) {
    return await apiService(LIST_PRODUCTS, MethodApi.GET, undefined, token);
  }
});

export const buy = createAsyncThunk('home/buy', async (_, {getState}) => {
  const rootState = getState() as RootState;

  const token = await AsyncStorage.getItem(ASYNC_TOKEN_KEY);
  if (token) {
    const {buyItems} = rootState.home;

    const buyProductsRequest: BuyProductsRequest = {
      products: buyItems,
    };

    return await apiService(
      BUY_PRODUCTS,
      MethodApi.POST,
      buyProductsRequest,
      token,
    );
  }
});

export const fetchPurchased = createAsyncThunk(
  'home/fetchBuy',
  async (_, {}) => {
    const token = await AsyncStorage.getItem(ASYNC_TOKEN_KEY);
    if (token) {
      return await apiService(BUY_PRODUCTS, MethodApi.GET, undefined, token);
    }
  },
);
