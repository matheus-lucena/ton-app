import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import home from './home/slice';
import auth from './auth/slice';

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const allReducers = combineReducers({home, auth});
export const store = configureStore({
  reducer: allReducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
