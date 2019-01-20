import React from 'react';

import Button from '../components/Button';
import LinkButton from '../components/LinkButton';
import Title from '../components/Title';
import CardExperience from '../components/CardExperience';
import WithSidebar from '../components/HOC/withSidebar';

import {
  colXs6,
  row,
  section,
} from '../components/Layouts';

const HomePage = () => {
  return (
    <WithSidebar>
      <div css={section} id="about-indra">
        <Title text="Indra Kusuma - Software Enginer" />
        <div css={row}>
          <div css={colXs6}>
            <CardExperience title="Software Enginer" date="dec 2018 - feb 2018" company="Suara Merdeka" />
          </div>
          <div css={colXs6}>
            <CardExperience title="Software Enginer" date="dec 2018 - feb 2018" company="Suara Merdeka" />
          </div>
        </div>
        <div css={row}>
          <Button text="Test Button" icon="check" onAction={() => { }} />
          <LinkButton text="Link Button Test" link="https://google.com" />
        </div>
      </div>
    </WithSidebar>
  )
}

export default HomePage;
