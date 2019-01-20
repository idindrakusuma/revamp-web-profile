import React from 'react';
import { render } from 'react-testing-library';

import Resume from '../resume';

const TestResumePage = <Resume />;

describe('Resume Section Component', () => {
  it('Should render correctly', () => {
    const tree = render(TestResumePage);
    expect(tree).toMatchSnapshot();
  });
});
