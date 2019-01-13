import React from 'react'
import { render, cleanup } from 'react-testing-library';

import IndexComponent from '../index';

const TextIndexComponent = <IndexComponent />;

afterEach(cleanup);

describe('Pages/Index.js Component', () => {
  it('Should render correctly', () => {
    const tree = render(TextIndexComponent);
    expect(tree).toMatchSnapshot();
  });
});