import React from 'react';
import { render } from 'react-testing-library';

import MenuComponent from '../index';
import TestData from './__mocks__/menu.mocks';

const TestMenuComponent = <MenuComponent listMenu={TestData} />

describe('Menu Component Test..', () => {
  it('Should render component correctly', () => {
    const tree = render(TestMenuComponent);
    expect(tree).toMatchSnapshot();
  });

  it('Should render correct menu', () => {
    const { getByText } = render(TestMenuComponent);
    expect(getByText('Welcome')).toBeInTheDocument();
  });
});