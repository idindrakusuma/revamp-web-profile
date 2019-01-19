import { css } from '@emotion/core';

export const navigation = css`
  display: block;

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 0 10px;
  }

  li {
    padding: 0 0 10px;
  }

  a {
    color: #bebebe;
    font-family: montserrat,sans-serif;
    font-size: 12px;
    font-weight: 700;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    transition: all .3s ease-in-out;
  }

  @media only screen and (max-height: 600px) {
    padding-bottom: 10px;
  }
`;