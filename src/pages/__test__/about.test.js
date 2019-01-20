import React from 'react';
import { render, cleanup } from 'react-testing-library';

import AboutPage from '../about';

const TestAboutPage = <AboutPage />;

afterEach(cleanup);

describe('About Section Component', () => {
  it('Should render correctly', () => {
    const tree = render(TestAboutPage);
    expect(tree).toMatchSnapshot();
  });
});
