import { css } from '@emotion/core';

export const slidesWrapper = css`
  position: relative;
  z-index: 0;
  background: none;
  height: 751px;
`;

const quoteTextContent = `
  content: '';
  position: absolute;
  height: 22px;
  width: 22px;
`;

export const quoteText = css`
  margin: 0 auto;
  top: calc(50% - 60px);
  position: relative;
  max-width: 500px;
  z-index: 1;
  text-align: center;

  &:before {
    left: -32px;
    top: -40px;
    border-top: solid 4px #fff;
    border-left: solid 4px #fff;
    ${quoteTextContent}
  }

  &:after {
    right: -30px;
    bottom: -18px;
    border-bottom: solid 4px #fff;
    border-right: solid 4px #fff;
    ${quoteTextContent}
  }

  h2 {
    color: #fff;
    font-family: montserrat,sans-serif;
    font-size: 25px;
    font-weight: 400;
    margin: 0;
    line-height: 1.3em;
  }

  span {
    color: #bdbdbd;
    display: block;
    font-size: 18px;
    margin-top: 10px;
    font-family: roboto slab,serif;
    font-weight: 300;
  }
`;

export const imageOverlay = css`
  background: rgba(12, 12, 12, 0.65);
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  
`;

export const backstrech = css`
  left: 0px;
  top: 0px;
  overflow: hidden;
  margin: 0px;
  padding: 0px;
  height: 751px;
  width: 100%;
  z-index: -10;
  position: absolute;

  img {
    position: absolute;
    margin: 0px;
    padding: 0px;
    border: none;
    width: 1125.88px;
    height: 751px;
    max-height: none;
    max-width: none;
    z-index: -999999;
    left: -343.44px;
    top: 0px;
  }
`;

export const imageTitle = css`
  bottom: 10px;
  left: 10px;
  color: #bebebe;
  font-family: montserrat,sans-serif;
  font-size: 14px;
  position: absolute;
  font-weight: 300;
  letter-spacing: 2px;
`;
