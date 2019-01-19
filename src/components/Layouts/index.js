import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const Wrapper = styled.div`
  * {
    font-family: 'Roboto Slab', serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Montserrat', sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    padding-left: 15px;
  }

  li {
    padding: 0 0 10px;
  }

  box-sizing: border-box;
  width: 1000px;
  margin: 0 auto;
  padding: 0.5rem;

  @media (max-width: 64em) {
    width: 90%;
    margin: 8px 16px;
  }
`;

export const Header = styled.header`
  position: fixed;
  height: 100%;
  width: 260px;
  z-index: 8;
  float: left;
  display: block;
`;

export const Menu = styled.menu`
  display: block;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MainPanel = styled.div`
  background-color: #fff;
  width: 740px;
  float: right;
`;

export const Section = styled.section`
  position: relative;
  z-index: 0;
  height: 751px;
`;

export const FlexGrid = styled.div`
  display: flex;

  @media (max-width: 720px) {
    justify-content: space-between;
  }

  @media (max-width: 540px) {
    display: block;
  }
`;

export const FlexContent = styled.div`
  padding: 8px;
  flex: 1;

  @media (max-width: 540px) {
    padding: 0;
    width: 100%;
  }
`;

/* CSS content base on Flexbox */
const CUSTOM_VIEWPORT_SM_SCREEN = '@media (min-width: 48em)';
const CUSTOM_VIEWPORT_MD_SCREEN = '@media (min-width: 64em)';
const CUSTOM_VIEWPORT_LG_SCREEN = '@media (min-width: 75em)';

export const container = css`
  margin-right: auto;
  margin-left: auto;
  width: calc(100% - 100px;);

  ${CUSTOM_VIEWPORT_LG_SCREEN} {
    width: 76rem;
  }

  ${CUSTOM_VIEWPORT_MD_SCREEN} {
    width: 65rem;
  }

  ${CUSTOM_VIEWPORT_SM_SCREEN} {
    width: 49rem;
  }
`;

export const row = css`
  box-sizing: border-box;
  display: flex;
  -webkit-box-flex: 0;
  flex: 0 1 auto;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  flex-wrap: wrap;
`;

const DEFAULT_COL_STYLE = `
  box-sizing: border-box;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
`;

export const colXs6 = css`
  flex-basis: 50%;
  width: 50%;

  ${DEFAULT_COL_STYLE}
`;
