import React from 'react';

import Title from '../components/Title';
import WithSidebar from '../components/HOC/withSidebar';

import { section, row, intro, info } from '../components/Layouts';
import { aboutMe, introduction as TextIntroduction } from '../api/aboutData';

const AboutPage = () => {
  return (
    <WithSidebar>
      <div css={section} id="about-indra">
        <Title text="About Indra Kusuma" />
        <div css={row}>
          <p css={intro} dangerouslySetInnerHTML={{__html: TextIntroduction}} />
        </div>
        <div css={row}>
          <ul css={info}>
            { aboutMe.map((me, index) => (
              <li key={index}>
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
