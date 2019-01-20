import React from 'react';
import { render, cleanup } from 'react-testing-library';

import CardExperience from '../index';

const TestCardExperience = <CardExperience title="Software Engineer" date="November 2017" company="Markir" />;

afterEach(cleanup);

describe('CardExperience Component', () => {
  it('Should render correctly', () => {
    const tree = render(TestCardExperience);
    expect(tree).toMatchSnapshot();
  });

  it('Should render Title', () => {
    const { getByText } = render(TestCardExperience);
    expect(getByText('Software Engineer')).toBeInTheDocument();
  });
  
  it('Should render Date', () => {
    const { getByText } = render(TestCardExperience);
    expect(getByText('November 2017')).toBeInTheDocument();
  });

  it('Should render Company', () => {
    const { getByText } = render(TestCardExperience);
    expect(getByText('Markir')).toBeInTheDocument();
  });
});