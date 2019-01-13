import styled from '@emotion/styled';

export const Header = styled.header`
  padding: 20px;
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

export const Main = styled.div`
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

  width: 1000px;
  margin: 0 auto;
`;
