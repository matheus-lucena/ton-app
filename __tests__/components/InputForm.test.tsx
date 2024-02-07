/**
 * @format
 */

import 'react-native';
import React from 'react-native';
import InputForm from '../../src/components/InputForm';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

import {render} from '@testing-library/react-native';

describe('<Button/>', () => {
  const component = (
    <InputForm
      key="teste"
      value={'test'}
      placeholder={'teste'}
      style={{backgroundColor: 'red'}}
      secureTextEntry={false}
      onChangeText={() => {}}
    />
  );

  it('Renders successfully', () => {
    expect(render(component)).toBeDefined();
  });
});
