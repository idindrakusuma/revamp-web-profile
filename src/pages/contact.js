import React from 'react';

import Title from '../components/Title';
import WithSidebar from '../components/HOC/withSidebar';

import { section } from '../components/Layouts';

const ContactPage = () => {
  return (
    <WithSidebar>
      <div css={section} id="contact">
        <Title text="Contact Page" />
      </div>
    </WithSidebar>
  );
};

export default ContactPage;
