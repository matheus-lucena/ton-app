import reducer, {HomeState} from '../../src/redux/home/slice';
import {
  getInfoThunk,
  getTokenThunk,
  loginThunk,
  logoutThunk,
} from '../../src/redux/auth/thunk';
import {buy, fetchList, fetchPurchased} from '../../src/redux/home/thunk';

describe('authSlice', () => {
  describe('reducers', () => {
    const initialState: HomeState = {
      buyItems: [],
      purchedResponse: undefined,
      items: undefined,
    };

    it('fetchList', () => {
      const data = {
        message: 'ok',
        data: [
          {
            value: 20,
            active: 'true',
            image_url:
              'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_48,q_auto/site-ton/maquininhas/new-t3-1',
            sn: 'new-t3-1-001',
            name: 'Maquininha T3',
          },
          {
            value: 16,
            active: 'true',
            image_url:
              'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_48,q_auto/site-ton/maquininhas/new-t1-1',
            sn: 'new-t1-1-001',
            name: 'Maquininha T1',
          },
        ],
      };

      const action = {
        type: fetchList.fulfilled.type,
        payload: data,
      };
      const state = reducer(initialState, action);

      expect(state.items).toEqual(data);
    });

    it('buy', () => {
      const data = {
        message: 'ok',
        data: {
          total: 0,
          date: 1707364504283,
          id: '5681f946-55a9-4a55-b043-149862f81f2f',
          client_id: '2129781b-d0f8-46dc-b4bf-12ad39cd1cf2',
          products: [
            {
              name: 'te asljdklaste',
              count: 0,
              sn: '12378123812',
              value: 1,
              image_url: 'https://',
            },
            {
              name: 'te asljdklaste',
              count: 0,
              sn: '12378123812',
              value: 1,
              image_url: 'https://',
            },
          ],
        },
      };
      const action = {
        type: buy.fulfilled.type,
        payload: data,
      };
      const state = reducer(initialState, action);

      expect(state.buyItems.length).toEqual(0);
    });

    it('fetchPurchased', () => {
      const data = {
        message: 'ok',
        data: [
          {
            total: 45,
            date: 1707346370611,
            id: 'ac6805ef-3eb3-4d02-aec3-495ea0dc4bdb',
            client_id: '2129781b-d0f8-46dc-b4bf-12ad39cd1cf2',
            products: [
              {
                name: 'Maquininha T1 Chip',
                count: 1,
                active: 'true',
                sn: 'new-t1-chip-001',
                value: 20,
                image_url:
                  'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_48,q_auto/site-ton/maquininhas/new-t1-chip-1',
              },
              {
                name: 'Maquininha T2 +',
                count: 1,
                active: 'true',
                sn: 'new-t2-1-001',
                value: 25,
                image_url:
                  'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_48,q_auto/site-ton/maquininhas/new-t2-1',
              },
            ],
          },
        ],
      };
      const action = {
        type: fetchPurchased.fulfilled.type,
        payload: data,
      };
      const state = reducer(initialState, action);

      expect(state.purchedResponse).toEqual(data);
    });
  });
});
