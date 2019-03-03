import React from 'react';

import WithSidebar from '../components/HOC/withSidebar';
import HomeSlider from '../components/HomeSlider';

import { images, quoteText} from '../api/sliderData';

const HomePage = () => {
  return (
    <WithSidebar>
      <HomeSlider items={images} quote={quoteText} />
    </WithSidebar>
  );
};

export default HomePage;
