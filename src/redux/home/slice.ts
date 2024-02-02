import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Item from '../../entity/Item'

interface ItemState extends Item{
  count: number
}

export interface CounterState {
  items: ItemState[]
}

const initialState: CounterState = {
  items: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<Item>) => {
      const item: ItemState | undefined = state.items.find((_value) => _value.sn == action.payload.sn);
      if (item){
        const index: number = state.items.findIndex((_value) => _value.sn == item.sn)
        state.items[index].count += 1
      }else{
        state.items.push({
          ...action.payload,
          count: 1
        })
      }
    },
    decrement: (state, action: PayloadAction<Item>) => {
      const item: ItemState | undefined = state.items.find((_value) => _value.sn == action.payload.sn);
      if (item){
        const index: number = state.items.findIndex((_value) => _value.sn == item.sn)
        if (item.count > 0){
          state.items[index].count -= 1
        }else{
          state.items.splice(index, 1)
        }
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer