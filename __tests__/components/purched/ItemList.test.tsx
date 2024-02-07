/**
 * @format
 */

import 'react-native';
import React from 'react-native';
import ItemList from '../../../src/components/purchedHistory/ItemList';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

import {render} from '@testing-library/react-native';

describe('<ItemList/>', () => {
  const component = (
    <ItemList
      key="teste"
      item={{
        total: 100,
        id: 'teste',
        client_id: 'teste',
        products: [
          {
            count: 5,
            image_url: 'https://',
            name: 'teste',
            sn: 'teste',
            value: 20,
          },
        ],
      }}
    />
  );

  it('Renders successfully', () => {
    expect(render(component)).toBeDefined();
  });
});
