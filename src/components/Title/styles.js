import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: block;
  padding: 16px;
`;

export const TitleStyle = styled.h2`
  color: #1a1a1a;
  display: inline-block;
  font-family: montserrat,sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;
  padding-left: 20px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    background: 0 0;
    bottom: 10px;
    left: 0;
    height: 16px;
    width: 16px;
    border-left: solid 3px #0c0c0c;
    border-top: solid 3px #0c0c0c;
  }

  &:after {
    content: '';
    position: absolute;
    background: 0 0;
    bottom: -10px;
    right: -17px;
    height: 16px;
    width: 16px;
    border-right: solid 3px #0c0c0c;
    border-bottom: solid 3px #0c0c0c;
  }
`;
