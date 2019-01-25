import React from 'react';

import SkillsInfo from '../components/Skills';
import Title from '../components/Title';
import WithSidebar from '../components/HOC/withSidebar';

import { section, row, intro, info, colXs6, colXs12 } from '../components/Layouts';
import { aboutMe, introduction as TextIntroduction } from '../api/aboutData';

const AboutPage = () => {
  return <WithSidebar>
      <div css={section} id="about-indra">
        <Title text="About Indra Kusuma" />
        <div css={row}>
          <p css={intro} dangerouslySetInnerHTML={{ __html: TextIntroduction }} />
        </div>
        <div css={row}>
          <ul css={info}>
            {aboutMe.map((me, index) => <li key={index}>
                <b>{me.question} :</b> {me.link === '' ? me.answer : <a href={me.link}>{me.answer}</a>}
              </li>)}
          </ul>
        </div>
        <div css={row}>
          <div css={colXs6}>
            <SkillsInfo title="HTML, CSS, PHP" ability={80} />
          </div>
          <div css={colXs6}>
            <SkillsInfo title="Git (Version Control)" ability={95} />
          </div>
        </div>
        <div css={row}>
          <div css={colXs6}>
            <SkillsInfo title="Design, Inkscape" ability={70} />
          </div>
          <div css={colXs6}>
            <SkillsInfo title="Teamwork" ability={90} />
          </div>
        </div>
        <div css={row}>
          <div css={colXs12}>
            <SkillsInfo title="Javascript, ReactJs, VueJs, NodeJs, Graphql" ability={90} />
          </div>
        </div>
      </div>
    </WithSidebar>;
}

export default AboutPage;
