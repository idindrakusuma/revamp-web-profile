import { css } from '@emotion/core';

export const button = css`
  background: #0c0c0c;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  padding: 8px 16px;
  position: relative;

  &:hover {
    background: #1488CC;
    background: -webkit-linear-gradient(to right, #2B32B2, #1488CC);
    background: linear-gradient(to right, #2B32B2, #1488CC);
  }
`;