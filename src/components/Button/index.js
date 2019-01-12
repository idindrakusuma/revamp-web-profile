import React from 'react';
import { string, func } from 'prop-types';

import { button } from './styles';

const Button = ({ text, onAction }) => {
  return (
    <button css={button} type="button" onClick={onAction}>{ text }</button>
  );
};

Button.propTypes = {
  onAction: func,
  text: string.isRequired,
};

Button.defaultProps = {
  onAction: () => {},
};

export default Button;