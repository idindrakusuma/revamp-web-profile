import React from 'react';

import Title from '../components/Title';
import WithSidebar from '../components/HOC/withSidebar';

import { section } from '../components/Layouts';

const ResumePage = () => {
  return (
    <WithSidebar>
      <div css={section} id="resume">
        <Title text="Resume Page" />
      </div>
    </WithSidebar>
  );
};

export default ResumePage;
