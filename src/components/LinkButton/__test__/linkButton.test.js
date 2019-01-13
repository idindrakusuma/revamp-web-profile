import React from 'react';
import { render, cleanup } from 'react-testing-library';

import LinkButton from '../index';

const LinkButtonTest = <LinkButton text="Test Text" link="https://google.com" />

describe('LinkButton Components', () => {
  it('Should render correctly', () => {
    const tree = render(LinkButtonTest);
    expect(tree).toMatchSnapshot();
  });

  it('Should render text correctly', () => {
    const { getByText } = render(LinkButtonTest);
    expect(getByText('Test Text')).toBeInTheDocument();
  });
});