import React from 'react'
import { string } from 'prop-types';

import { Company, Periode, Title, Wrapper } from './styles';

const CardExperience = ({ title, date, company }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Periode>{date}</Periode>
      <Company>{company}</Company>
    </Wrapper>
  );
};

CardExperience.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  company: string.isRequired,
};

export default CardExperience;