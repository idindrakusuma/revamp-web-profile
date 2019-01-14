/***
 * Original by Flexboxgrid.com
 * https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
 * Refactor using emotion/core ***/

import { css } from '@emotion/core';

/* Global variable */
const GUTTER_WIDTH = '1rem';
const OUTER_MARGIN = '2rem';
const GUTTER_COMPENSATION = `calc((var(${GUTTER_WIDTH}) * 0.5) * -1)`;
const HALF_GUTTER_WIDTH = `calc((var(${GUTTER_WIDTH}) * 0.5))`;

const XS_MIN = 30;
const SM_MIN = 48;
const MD_MIN = 64;
const LG_MIN = 75;

const SCREEN_XS_MIN = `var(${XS_MIN})em`;
const SCREEN_SM_MIN = `var(${SM_MIN})em`;
const SCREEN_MD_MIN = `var(${MD_MIN})em`;
const SCREEN_LG_MIN = `var(${LG_MIN})em`;

const CONTAINER_SM = `calc(var(${SM_MIN}) + var(${GUTTER_WIDTH}))`;
const CONTAINER_MD = `calc(var(${MD_MIN}) + var(${GUTTER_WIDTH}))`;
const CONTAINER_LG = `calc(var(${LG_MIN}) + var(${GUTTER_WIDTH}))`;

const CUSTOM_MEDIA_SM_VIEWPORT = `only screen and (min-width: 48em)`;
const CUSTOM_MEDIA_MD_VIEWPORT = `only screen and (min-width: 64em)`;
const CUSTOM_MEDIA_LG_VIEWPORT = `only screen and (min-width: 75em)`;

export const containerFluid = css`
  padding-right: var(${OUTER_MARGIN}, 2rem);
  padding-left: var(${OUTER_MARGIN}, 2em);

  .container {
    margin-right: auto;
    margin-left: auto;
  }
`;

export const row = css`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: var(${GUTTER_COMPENSATION}, -0,5rem);
  margin-left: var(${GUTTER_COMPENSATION}, -0,5rem);
`;

export const rowReverse = css`
  flex-direction: row-reverse;
`;

export const colReverse = css`
  flex-direction: column-reverse;
`;

const colDefaultStyle = `
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: var(${HALF_GUTTER_WIDTH}, 0.5rem);
  padding-left: var(${HALF_GUTTER_WIDTH}, 0.5rem);
`;

export const colXs = css`
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
  ${colDefaultStyle}
`;

export const colXs1 = css`
  flex-basis: 8.33333333%;
  max-width: 8.33333333%;
  ${colDefaultStyle}
`;

export const colXs2 = css`
  flex-basis: 16.66666667%;
  max-width: 16.66666667%;
  ${colDefaultStyle}
`;

export const colXs3 = css`
  flex-basis: 25%;
  max-width: 25%;
  ${colDefaultStyle}
`;

export const colXs4 = css`
  flex-basis: 33.33333333%;
  max-width: 33.33333333%;
  ${colDefaultStyle}
`;

export const colXs5 = css`
  flex-basis: 41.66666667%;
  max-width: 41.66666667%;
  ${colDefaultStyle}
`;

export const colXs6 = css`
  flex-basis: 50%;
  max-width: 50%;
  ${colDefaultStyle}
`;

export const colXs7 = css`
  flex-basis: 58.33333333%;
  max-width: 58.33333333%;
  ${colDefaultStyle}
`;

export const colXs8 = css`
  flex-basis: 66.66666667%;
  max-width: 66.66666667%;
  ${colDefaultStyle}
`;

export const colXs9 = css`
  flex-basis: 75%;
  max-width: 75%;
  ${colDefaultStyle}
`;

export const colXs10 = css`
  flex-basis: 83.33333333%;
  max-width: 83.33333333%;
  ${colDefaultStyle}
`;

export const colXs11 = css`
  flex-basis: 91.66666667%;
  max-width: 91.66666667%;
  ${colDefaultStyle}
`;

export const colXs12 = css`
  flex-basis: 100%;
  max-width: 100%;
  ${colDefaultStyle}
`;