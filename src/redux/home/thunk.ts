import {createAsyncThunk} from '@reduxjs/toolkit';
import {MethodApi, apiService} from '../../services/api';
import {BUY_PRODUCTS, LIST_PRODUCTS} from '../../constants/api';
import {RootState} from '../store';
import {BuyProductsRequest} from '../../entity/request/product';

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

export const buy = createAsyncThunk('home/buy', async (_, {getState}) => {
  const rootState = getState() as RootState;

  const {token} = rootState.auth;
  const {buyItems} = rootState.home;

  const buyProductsRequest: BuyProductsRequest = {
    products: buyItems,
  };

  return await apiService(
    BUY_PRODUCTS,
    MethodApi.POST,
    buyProductsRequest,
    token?.access_token,
  );
});

export const fetchPurchased = createAsyncThunk(
  'home/fetchBuy',
  async (_, {getState}) => {
    const rootState = getState() as RootState;

    const {token} = rootState.auth;

    return await apiService(
      BUY_PRODUCTS,
      MethodApi.GET,
      undefined,
      token?.access_token,
    );
  },
);
