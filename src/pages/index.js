import React from 'react';

import Title from '../components/Title';
import WithSidebar from '../components/HOC/withSidebar';

import { section } from '../components/Layouts';

const HomePage = () => {
  return (
    <WithSidebar>
      <div css={section} id="Indra Kusuma">
        <Title text="Welcome" />
      </div>
    </WithSidebar>
  );
};

export default HomePage;
