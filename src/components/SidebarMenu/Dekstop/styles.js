import { css } from '@emotion/core';

const whiteColor = `#f1f1f1`;

export const avatar = css`
  margin-top: 2em;
  margin-left: 1em;
  overflow: hidden;
  width: 165px;
  height: 165px;
  border-radius: 50%;
`;

export const name = css`
  margin: 20px 0;
  color: ${whiteColor};

  h1 {
    font-family: 'montserrat',sans-serif;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 400;
    margin: 0 0 5px;
  }

  span {
    font-size: 15px;
    font-weight: 200;
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
    color: #bebebe;

    &:hover {
      color: #fff;
    }
  }

  @media only screen and (max-height: 600px) {
    margin: 15px 0;
  }
`;

export const copyright = css`
  bottom: 20px;
  position: absolute;
  letter-spacing: 2px;
  
  span {
    color: ${whiteColor};
    font-family: roboto slab,serif;
    font-weight: 200;
    font-size: 12px;
  }
`;

export const wrapper = css`
  position: fixed;
  height: 100%;
  width: 260px;
  z-index: 8;
  float: left;
  display: block;
`;