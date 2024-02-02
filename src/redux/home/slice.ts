import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Item from '../../entity/Item'
import { fetchList } from './thunk'

interface ItemState extends Item{
  count: number
}

export interface HomeState {
  buyItems: ItemState[],
  items: Item[],
  total: number
}

const initialState: HomeState = {
  buyItems: [],
  items: [],
  total: 0
}

export const homeSlice = createSlice({
  name: 'homeState',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<Item>) => {
      const item: ItemState | undefined = state.buyItems.find((_value) => _value.sn == action.payload.sn);
      if (item){
        const index: number = state.buyItems.findIndex((_value) => _value.sn == item.sn)
        state.buyItems[index].count += 1
      }else{
        state.buyItems.push({
          ...action.payload,
          count: 1
        })
      }
      state.total += action.payload.value
    },
    decrement: (state, action: PayloadAction<Item>) => {
      const item: ItemState | undefined = state.buyItems.find((_value) => _value.sn == action.payload.sn);
      if (item){
        const index: number = state.buyItems.findIndex((_value) => _value.sn == item.sn)
        if (item.count > 0){
          state.buyItems[index].count -= 1
        }else{
          state.buyItems.splice(index, 1)
        }
        if((state.total - item.value) < 0){
          state.total = 0
        }else{
          state.total -= item.value
        }
      }
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchList.fulfilled, (state, action) => {
      state.items = action.payload
    })
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = homeSlice.actions

export default homeSlice.reducer