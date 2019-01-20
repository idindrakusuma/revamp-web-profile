import React from 'react';
import { render } from 'react-testing-library';

import WorksPage from '../works';

const TestWorksPage = <WorksPage />;

describe('Works Section Component', () => {
  it('Should render correctly', () => {
    const tree = render(TestWorksPage);
    expect(tree).toMatchSnapshot();
  });
});
