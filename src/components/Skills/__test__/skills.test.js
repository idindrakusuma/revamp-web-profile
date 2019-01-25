import React from 'react';
import { render } from 'react-testing-library';

import Skills from '../index';

const TestSkillsComponent = <Skills title="test" ability={90} />

describe('Skills Component', () => {
  it('Should render correctly', () => {
    const tree = render(TestSkillsComponent);
    expect(tree).toMatchSnapshot();
  });

  it('Should render title props correctly', () => {
    const { getByText } = render(TestSkillsComponent);
    expect(getByText('test')).toBeInTheDocument();
  });

  it('Should render ability props correctly', () => {
    const { getByText } = render(TestSkillsComponent);
    expect(getByText('90%')).toBeInTheDocument();
  });
})