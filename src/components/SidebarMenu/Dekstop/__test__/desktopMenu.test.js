import React from 'react'
import { render } from 'react-testing-library';

import DesktopMenu from '../index';

const TestDesktopMenu = <DesktopMenu />;

describe('Desktop Menu Test Case', () => {
  it('Should render correctly', () => {
    const tree = render(TestDesktopMenu);
    expect(tree).toMatchSnapshot();
  });
});