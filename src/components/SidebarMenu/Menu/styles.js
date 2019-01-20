import { css } from '@emotion/core';

const BEFORE_EFFECT = `
  content: '';
  position: absolute;
  left: -8px;
  top: -5px;
  height: 7px;
  width: 7px;
  border-top: solid 2px #fff;
  border-left: solid 2px #fff;
`;

const AFTER_EFFECT = `
  content: '';
  position: absolute;
  right: -8px;
  bottom: -5px;
  height: 7px;
  width: 7px;
  border-bottom: solid 2px #fff;
  border-right: solid 2px #fff;
`;

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

    &:hover {
      color: #fff;

      &:before {
        ${BEFORE_EFFECT}
      }

      &:after {
        ${AFTER_EFFECT}
      }
    }

    &.active {
      color: #fff;

      &:before {
        ${BEFORE_EFFECT}
      }

      &:after {
        ${AFTER_EFFECT}
      }
    }
  }

  @media only screen and (max-height: 600px) {
    padding-bottom: 10px;
  }
`;