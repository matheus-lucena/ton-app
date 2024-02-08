import 'react-native';
import React from 'react-native';

import {renderWithProviders} from '../utils';
import {screen} from '@testing-library/react-native';
import PurchedHistory from '../../src/screens/PurchedHistory';

jest.mock('../../src/redux/store');

test('render purched', async () => {
  renderWithProviders(<PurchedHistory />, {
    preloadedState: {
      home: {
        purchedResponse: {
          message: 'ok',
          data: [
            {
              total: 45,
              id: 'ac6805ef-3eb3-4d02-aec3-495ea0dc4bdb',
              client_id: '2129781b-d0f8-46dc-b4bf-12ad39cd1cf2',
              products: [
                {
                  name: 'Maquininha T1 Chip',
                  count: 1,
                  sn: 'new-t1-chip-001',
                  value: 20,
                  image_url:
                    'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_48,q_auto/site-ton/maquininhas/new-t1-chip-1',
                },
              ],
            },
            {
              total: 0,
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
              ],
            },
          ],
        },
        buyItems: [],
        items: undefined,
      },
    },
  });

  expect(
    screen.getByTestId('ac6805ef-3eb3-4d02-aec3-495ea0dc4bdb'),
  ).toBeDefined();
  expect(
    screen.getByTestId('5681f946-55a9-4a55-b043-149862f81f2f'),
  ).toBeDefined();
});
