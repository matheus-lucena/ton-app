/* istanbul ignore file */
import React from 'react-native';
import {render} from '@testing-library/react-native';
import type {RenderOptions} from '@testing-library/react-native';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import type {AppStore, RootState} from '../src/redux/store';
// As a basic setup, import your same slice reducers
import authReducer from '../src/redux/auth/slice';
import homeReducer from '../src/redux/home/slice';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: any,
  {
    preloadedState = {
      home: {
        buyItems: [],
        purchedResponse: undefined,
        items: undefined,
      },
      auth: {
        isAutenticated: undefined,
        email: '',
        password: '',
        user_attributes: [],
      },
    },
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: combineReducers({home: homeReducer, auth: authReducer}),
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({children}: any): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}
