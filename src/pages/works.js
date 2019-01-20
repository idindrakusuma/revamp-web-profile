import React from 'react';

import Title from '../components/Title';
import WithSidebar from '../components/HOC/withSidebar';

import { section } from '../components/Layouts';

const WorksPage = () => {
  return (
    <WithSidebar>
      <div css={section} id="works">
        <Title text="Works Page" />
      </div>
    </WithSidebar>
  );
};

export default WorksPage;
