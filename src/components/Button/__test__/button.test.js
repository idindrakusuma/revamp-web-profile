import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Button from '../index';

const TestButton = <Button text="Test Button" icon="check" />

describe(`Button Component`, () => {
  it('Button render correctly', () => {
    const tree = render(TestButton);
    expect(tree).toMatchSnapshot();
  });

  it('Render Button with correct text', () => {
    const { getByText } = render(TestButton);
    expect(getByText('Test Button')).toBeInTheDocument();
  });
});
