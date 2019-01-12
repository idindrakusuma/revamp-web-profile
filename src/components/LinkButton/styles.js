import { css } from "@emotion/core";

export const linkButton = css`
  color: #fff;
  background-color: #0c0c0c;
  font-size: 12px;
  font-weigth: 300px;
  padding: 8px 16px;
  position: relative;
  text-decoration: none;

  &:hover {
    background: #1488CC;
    background: -webkit-linear-gradient(to right, #2B32B2, #1488CC);
    background: linear-gradient(to right, #2B32B2, #1488CC);
  }
`;

export const arrowEffect = css`
  &:after {
    background: #0c0c0c;
    content: '\f178';
    font-family: fontawesome;
    font-size: 12px;
    padding: 10px 10px;
    position: absolute;
    right: -34px;
    top: 0;
  }
`;
