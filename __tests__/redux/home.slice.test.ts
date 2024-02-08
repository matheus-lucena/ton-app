import reducer, {
  increment,
  decrement,
  HomeState,
} from '../../src/redux/home/slice';
import {store} from '../../src/redux/store';

describe('authSlice', () => {
  const initialState: HomeState = {
    buyItems: [],
    purchedResponse: undefined,
    items: undefined,
  };

  it('increment', async () => {
    const item = {
      value: 20,
      active: 'true',
      image_url: 'https://image',
      sn: 'new-t3-1-001',
      name: 'Maquininha T3',
    };
    const action = {
      type: increment.type,
      payload: item,
    };
    const state = reducer(initialState, action);

    expect(state.buyItems).toEqual([{...item, count: 1}]);
  });

  it('decrement', async () => {
    const item = {
      value: 20,
      active: 'true',
      image_url: 'https://image',
      sn: 'new-t3-1-001',
      name: 'Maquininha T3',
    };
    initialState.buyItems.push({
      ...item,
      count: 5,
    });

    const action = {
      type: decrement.type,
      payload: item,
    };

    const state = reducer(initialState, action);
    expect(state.buyItems).toEqual([{...item, count: 4}]);
  });
});
