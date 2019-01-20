import React from 'react';

import Title from '../components/Title';
import WithSidebar from '../components/HOC/withSidebar';

import { section } from '../components/Layouts';

const AboutSection = () => {
  return (
    <WithSidebar>
      <div css={section} id="blog">
        <Title text="Blog" />
      </div>
    </WithSidebar>
  );
}

export default AboutSection;
