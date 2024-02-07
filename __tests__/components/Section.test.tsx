/**
 * @format
 */

import 'react-native';
import React from 'react-native';
import Section from '../../src/components/Section';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

import {render} from '@testing-library/react-native';

describe('<Button/>', () => {
  const component = <Section key="teste" title={'test'} />;

  it('Renders successfully', () => {
    expect(render(component)).toBeDefined();
  });
});
