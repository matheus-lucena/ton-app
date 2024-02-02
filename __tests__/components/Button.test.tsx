/**
 * @format
 */

import 'react-native';
import React from 'react-native';
import Button from '../../src/components/Button';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

import {render} from '@testing-library/react-native';

describe('<Button/>', () => {
  const component = (
    <Button
      key="teste"
      text={'test'}
      style={{backgroundColor: 'red'}}
      text_style={{color: 'blue'}}
      onPress={() => {}}
    />
  );

  it('Renders successfully', () => {
    expect(render(component)).toBeDefined();
  });
});
