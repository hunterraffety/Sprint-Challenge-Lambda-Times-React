import React from 'react';

// imports
import styled, { css } from 'styled-components';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

const Span = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  ${props =>
    props.Date &&
    css`
      margin-left: 25px;
      flex: 1;
    `};
  ${props =>
    props.Temp &&
    css`
      text-align: right;
      margin-right: 25px;
      flex: 1;
    `}
`;

const HeaderH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Span Date>June 7, 2019</Span>
      <HeaderH1>Lambda Times</HeaderH1>
      <Span Temp>102°</Span>
    </HeaderContainer>
  );
};

export default Header;
