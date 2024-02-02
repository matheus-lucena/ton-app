import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import homeSliceReducer from './home/slice'
import authSliceReducer from './auth/slice'
import { persistCombineReducers, persistStore, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';



export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistCombineReducers(persistConfig,
  {
    home: homeSliceReducer,
    auth: authSliceReducer
  }
)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)
