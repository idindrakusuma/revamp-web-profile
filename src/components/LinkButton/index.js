import React from 'react';
import { string } from 'prop-types';

import { linkButton } from './styles';

const LinkButton = ({ text }) => {
  return (
    <button css={linkButton}>{text}</button>
  );
};

LinkButton.propTypes = {
  text: string.isRequired,
}

export default LinkButton;