import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import Product, {ProductItemState} from '../../entity/product';
import {fetchList, buy, fetchPurchased} from './thunk';
import {ProductsResponse} from '../../entity/request/product';
import {PurchedResponse} from '../../entity/shop';

export interface HomeState {
  buyItems: ProductItemState[];
  purchedResponse: PurchedResponse | undefined;
  items: ProductsResponse | undefined;
}

const initialState: HomeState = {
  buyItems: [],
  purchedResponse: undefined,
  items: undefined,
};

export const homeSlice = createSlice({
  name: 'homeState',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<Product>) => {
      const item: ProductItemState | undefined = state.buyItems.find(
        _value => _value.sn === action.payload.sn,
      );
      if (item) {
        const index: number = state.buyItems.findIndex(
          _value => _value.sn === item.sn,
        );
        state.buyItems[index].count += 1;
      } else {
        state.buyItems.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    decrement: (state, action: PayloadAction<Product>) => {
      const item: ProductItemState | undefined = state.buyItems.find(
        _value => _value.sn === action.payload.sn,
      );
      if (item) {
        const index: number = state.buyItems.findIndex(
          _value => _value.sn === item.sn,
        );
        if (item.count > 0) {
          state.buyItems[index].count -= 1;
        } else {
          state.buyItems.splice(index, 1);
        }
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchList.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(buy.fulfilled, state => {
      state.buyItems = [];
    });
    builder.addCase(fetchPurchased.fulfilled, (state, action) => {
      state.purchedResponse = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement} = homeSlice.actions;

export default homeSlice.reducer;
