import { css } from '@emotion/core';

export const avatar = css`
  margin-top: 10px;
  margin-left: 1em;
  overflow: hidden;
  width: 165px;
  height: 165px;
  border-radius: 50%;
`;

export const name = css`
  margin: 20px 0;

  h1 {
    font-family: 'montserrat',sans-serif;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 400;
    margin: 0 0 5px;
  }

  span {
    font-size: 15px;
  }

  @media only screen and (max-height: 600px) {
    margin: 15px 0;
  }
`;

export const socialMedia = css`
  margin: 20px 0;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    padding: 0 20px 0 0;
  }

  a {
    color: #555;
  }

  @media only screen and (max-height: 600px) {
    margin: 15px 0;
  }
`;