import React from 'react';

import Title from '../components/Title';
import WithSidebar from '../components/HOC/withSidebar';

import { section, row, intro, info } from '../components/Layouts';
import { aboutMe } from '../api/aboutData';

const AboutPage = () => {
  return (
    <WithSidebar>
      <div css={section} id="about-indra">
        <Title text="About Indra Kusuma" />
        <div css={row}>
          <p css={intro}>
            Hello! My name is Indra Kusuma. I am an optimistic and type of person of learn by doing who have an interest in Software Engineering, specifically about Web Development.
          </p>
        </div>
        <div css={row}>
          <ul css={info}>
            { aboutMe.map(me => (
              <li>
                <b>{me.question} :</b> {me.answer}
              </li>
            )) }
          </ul>
        </div>
      </div>
    </WithSidebar>
  );
}

export default AboutPage;
