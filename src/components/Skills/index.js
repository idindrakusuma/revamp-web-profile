import React, { Fragment } from 'react';
import { string, number } from 'prop-types';

import { pullLeft, pullRight, skillsInfo, clearFix, progress, ProgressBar } from './styles';

const Skills = ({ title, ability }) => {
  return (
    <Fragment>
      <div css={[skillsInfo, clearFix]}>
        <h3 css={pullLeft}>{title}</h3>
        <span css={pullRight}>{ability}%</span>
      </div>
      <br />
      <div css={progress}>
        <ProgressBar
          width={ability}
          role="progressbar"
          aria-valuenow={ability}
          aria-valuemin={0}
          aria-valuemax={100} />
      </div>
    </Fragment>
  );
}

Skills.propTypes = {
  title: string.isRequired,
  ability: number.isRequired,
};

export default Skills;