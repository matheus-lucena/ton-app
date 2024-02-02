import 'react-native';
import React from 'react-native';
import ItemList from '../../../src/components/home/ItemList';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

import {render} from '@testing-library/react-native';
import Item from '../../../src/entity/Item';

const item: Item = {
  image_url: 'image_url',
  name: 'teste',
  sn: '123456789',
  value: 12.12,
};

describe('<Button/>', () => {

  it('Renders successfully', () => {
    expect(
      render(
        <ItemList
          key="teste"
          count={1}
          item={item}
          onPressAdd={() => {}}
          onPressSub={() => {}}
        />,
      ),
    ).toBeDefined();
  });

  it('Renders without count successfully', () => {
    expect(
      render(
        <ItemList
          key="teste"
          item={item}
          onPressAdd={() => {}}
          onPressSub={() => {}}
        />,
      ),
    ).toBeDefined();
  });
});
