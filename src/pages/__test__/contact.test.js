import React from 'react';
import { render } from 'react-testing-library';

import ContactPage from '../contact';

const ContactPageTest = <ContactPage />;

describe('Contact Section Component', () => {
  it('Should render correctly', () => {
    const tree = render(ContactPageTest);
    expect(tree).toMatchSnapshot();
  });
});
