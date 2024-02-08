import 'react-native';
import React from 'react-native';

import {renderWithProviders} from '../utils';
import {screen} from '@testing-library/react-native';
import Cart from '../../src/screens/Cart';

jest.mock('../../src/redux/store');

test('render cart', async () => {
  renderWithProviders(<Cart />, {
    preloadedState: {
      home: {
        purchedResponse: undefined,
        buyItems: [],
        items: {
          message: 'ok',
          data: [
            {
              value: 20,
              image_url:
                'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_48,q_auto/site-ton/maquininhas/new-t3-1',
              sn: 'new-t3-1-001',
              name: 'Maquininha T3',
            },
            {
              value: 16,
              image_url:
                'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_48,q_auto/site-ton/maquininhas/new-t1-1',
              sn: 'new-t1-1-001',
              name: 'Maquininha T1',
            },
          ],
        },
      },
    },
  });

  expect(screen.getByTestId('new-t3-1-001')).toBeDefined();
  expect(screen.getByTestId('new-t1-1-001')).toBeDefined();
});
