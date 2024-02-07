import 'react-native';
import React from 'react-native';
import Login from '../../src/screens/Login';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

import {render} from '@testing-library/react-native';

describe('<Button/>', () => {
  const component = <Login />;

  it('Renders successfully', () => {
    expect(render(component)).toBeDefined();
  });
});
