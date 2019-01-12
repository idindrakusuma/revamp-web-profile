import React from 'react';
import { string } from 'prop-types';

import { TitleStyle, Wrapper } from './styles';

const Title = ({ text }) => {
  return (
    <Wrapper>
      <TitleStyle>{text}</TitleStyle>
    </Wrapper>
  );
}

Title.propTypes = {
  text: string.isRequired,
};

export default Title;