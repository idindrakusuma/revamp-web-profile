import React from 'react';
import { string } from 'prop-types';

import { button } from './styles';

const Button = ({ text }) => {
  return (
    <button css={button} type="button">{ text }</button>
  );
};

Button.propTypes = {
  text: string.isRequired,
};

export default Button;