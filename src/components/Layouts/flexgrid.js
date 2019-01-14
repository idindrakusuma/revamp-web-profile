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

export const container = css`
  @media ${CUSTOM_MEDIA_LG_VIEWPORT} {
    .container {
      width: var(${CONTAINER_LG}, 71rem);
    }
  }

  @media ${CUSTOM_MEDIA_MD_VIEWPORT} {
    .container {
      width: var(${CONTAINER_MD}, 61rem);
    }
  }

  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    .container {
      width: var(${CONTAINER_SM}, 46rem);
    }
  }
`;

export const row = css`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: var(${GUTTER_COMPENSATION}, -0, 5rem);
  margin-left: var(${GUTTER_COMPENSATION}, -0, 5rem);
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

export const colXsOffset0 = css`
  margin-left: 0;
  ${colDefaultStyle}
`;

export const colXsOffset1 = css`
  margin-left: 8.33333333%;
  ${colDefaultStyle}
`;

export const colXsOffset2 = css`
  margin-left: 16.66666667%;
  ${colDefaultStyle}
`;

export const colXsOffset3 = css`
  margin-left: 25%;
  ${colDefaultStyle}
`;

export const colXsOffset4 = css`
  margin-left: 33.33333333%;
  ${colDefaultStyle}
`;

export const colXsOffset5 = css`
  margin-left: 41.66666667%;
  ${colDefaultStyle}
`;

export const colXsOffset6 = css`
  margin-left: 50%;
  ${colDefaultStyle}
`;

export const colXsOffset7 = css`
  margin-left: 58.33333333%;
  ${colDefaultStyle}
`;

export const colXsOffset8 = css`
  margin-left: 66.66666667%;
  ${colDefaultStyle}
`;

export const colXsOffset9 = css`
  margin-left: 75%;
  ${colDefaultStyle}
`;

export const colXsOffset10 = css`
  margin-left: 83.33333333%;
  ${colDefaultStyle}
`;

export const colXsOffset11 = css`
  margin-left: 91.66666667%;
  ${colDefaultStyle}
`;

export const startXs = css`
  justify-content: flex-start;
  text-align: start;
`;

export const centerXs = css`
  justify-content: flex-center;
  text-align: center;
`;

export const endXs = css`
  justify-content: flex-end;
  text-align: end;
`;

export const topXs = css`
  align-items: flex-start;
`;

export const middleXs = css`
  align-items: center;
`;

export const bottomXs = css`
  align-items: flex-end;
`;

export const arroundXs = css`
  justify-content: space-arround;
`;

export const betweenXs = css`
  justify-content: space-betweeen;
`;

export const firstXs = css`
  order: -1;
`;

export const lastXs = css`
  order: 1;
`;

export const colSm = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
    ${colDefaultStyle}
  }
`;

export const colSm1 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    flex-basis: 8.33333333%;
    max-width: 8.33333333%;
    ${colDefaultStyle}
  }
`;

export const colSm2 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
    ${colDefaultStyle}
  }
`;

export const colSm3 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    flex-basis: 25%;
    max-width: 25%;
    ${colDefaultStyle}
  }
`;

export const colSm4 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
    ${colDefaultStyle}
  }
`;

export const colSm5 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    flex-basis: 41.66666667%;
    max-width: 41.66666667%;
    ${colDefaultStyle}
  }
`;

export const colSm6 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    flex-basis: 50%;
    max-width: 50%;
    ${colDefaultStyle}
  }
`;

export const colSm7 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    flex-basis: 58.33333333%;
    max-width: 58.33333333%;
    ${colDefaultStyle}
  }
`;

export const colSm8 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
    ${colDefaultStyle}
  }
`;

export const colSm9 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    flex-basis: 75%;
    max-width: 75%;
    ${colDefaultStyle}
  }
`;

export const colSm10 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    flex-basis: 83.33333333%;
    max-width: 83.33333333%;
    ${colDefaultStyle}
  }
`;

export const colSm11 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    flex-basis: 91.66666667%;
    max-width: 91.66666667%;
    ${colDefaultStyle}
  }
`;

export const colSm12 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    flex-basis: 100%;
    max-width: 100%;
    ${colDefaultStyle}
  }
`;

export const colSmOffset0 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    margin-left: 0;
    ${colDefaultStyle}
  }
`;

export const colSmOffset1 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    margin-left: 8.33333333%;
    ${colDefaultStyle}
  }
`;

export const colSmOffset2 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    margin-left: 16.66666667%;
    ${colDefaultStyle}
  }
`;

export const colSmOffset3 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    margin-left: 25%;
    ${colDefaultStyle}
  }
`;

export const colSmOffset4 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    margin-left: 33.33333333%;
    ${colDefaultStyle}
  }
`;

export const colSmOffset5 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    margin-left: 41.66666667%;
    ${colDefaultStyle}
  }
`;

export const colSmOffset6 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    margin-left: 50%;
    ${colDefaultStyle}
  }
`;

export const colSmOffset7 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    margin-left: 58.33333333%;
    ${colDefaultStyle}
  }
`;

export const colSmOffset8 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    margin-left: 66.66666667%;
    ${colDefaultStyle}
  }
`;

export const colSmOffset9 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    margin-left: 75%;
    ${colDefaultStyle}
  }
`;

export const colSmOffset10 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    margin-left: 83.33333333%;
    ${colDefaultStyle}
  }
`;

export const colSmOffset11 = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    margin-left: 91.66666667%;
    ${colDefaultStyle}
  }
`;

export const startSm = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    justify-content: flex-start;
    text-align: start;
  }
`;

export const centerSm = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    justify-content: flex-center;
    text-align: center;
  }
`;

export const endSm = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    justify-content: flex-end;
    text-align: end;
  }
`;

export const topSm = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    align-items: flex-start;
  }
`;

export const middleSm = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    align-items: center;
  }
`;

export const bottomSm = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    align-items: flex-end;
  }
`;

export const arroundSm = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    justify-content: space-arround;
  }
`;

export const betweenSm = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    justify-content: space-betweeen;
  }
`;

export const firstSm = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    order: -1;
  }
`;

export const lastSm = css`
  @media ${CUSTOM_MEDIA_SM_VIEWPORT} {
    order: 1;
  }
`;
