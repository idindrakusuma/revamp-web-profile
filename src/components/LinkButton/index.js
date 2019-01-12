import React from 'react';
import { string } from 'prop-types';

import { linkButton, arrowEffect } from './styles';

const LinkButton = ({ text, link }) => {
  return (
    <a css={[linkButton, arrowEffect]} href={link}>{text}</a>
  );
};

LinkButton.propTypes = {
  link: string.isRequired,
  text: string.isRequired,
}

export default LinkButton;