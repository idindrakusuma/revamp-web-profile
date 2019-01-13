import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Title from '../index';
const TestTitle = <Title text="Text Test" />;

afterEach(cleanup);

describe('Title Component', () => {
  it('Should render correctly', () => {
    const tree = render(TestTitle);
    expect(tree).toMatchSnapshot();
  });

  it('Should render text title correctly', () => {
    const { getByText } = render(TestTitle);
    expect(getByText('Text Test')).toBeInTheDocument();
  });
});