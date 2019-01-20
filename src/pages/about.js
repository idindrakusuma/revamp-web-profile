import React from 'react';

import Title from '../components/Title';
import WithSidebar from '../components/HOC/withSidebar';

import { section } from '../components/Layouts';

const AboutPage = () => {
  return (
    <WithSidebar>
      <div css={section} id="about-indra">
        <Title text="About Page" />
      </div>
    </WithSidebar>
  );
}

export default AboutPage;
