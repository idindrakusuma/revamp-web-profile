import React from 'react';
import { func, string } from 'prop-types';
import { isEmpty } from 'lodash';

import { button } from './styles';

const Button = ({ text, onAction, icon }) => {
  return (
    <button css={button} type="button" onClick={onAction}>
      {!isEmpty(icon) && <i className={`fa fa-${icon}`}></i>} { text }
    </button>
  );
};

Button.propTypes = {
  icon: string,
  onAction: func,
  text: string.isRequired,
};

Button.defaultProps = {
  icon: null,
  onAction: () => {},
};

export default Button;