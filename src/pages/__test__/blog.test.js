import React from 'react';
import { render, cleanup } from 'react-testing-library';

import BlogPage from '../blog';

const TestBlogPage = <BlogPage />;

afterEach(cleanup);

describe('Blog Section Component', () => {
  it('Should render correctly', () => {
    const tree = render(TestBlogPage);
    expect(tree).toMatchSnapshot();
  });
});
