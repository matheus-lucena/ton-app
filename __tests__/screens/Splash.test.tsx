import 'react-native';
import React from 'react-native';

import {renderWithProviders} from '../utils';
import Splash from '../../src/screens/Splash';
import {screen} from '@testing-library/react-native';

jest.mock('../../src/redux/store');

test('render splash', async () => {
  renderWithProviders(<Splash />);

  expect(screen.getByText('Splash').type).toEqual('Text');
});
