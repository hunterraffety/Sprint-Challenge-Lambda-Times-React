import React from 'react';
import styled, { css } from 'styled-components';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const Spans = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &:last-child {
    margin-right: 0;
  }
  ${props =>
    props.Left &&
    css`
      margin-right: 25%;
      font-weight: bold;
    `};
  ${props =>
    props.Center &&
    css`
      cursor: pointer;
      margin-right: 5%;
    `}
  ${props =>
    props.Right &&
    css`
      cursor: pointer;
    `}
`;

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const TopBar = () => {
  return (
    <TopBarContainer>
      <Container>
        <ContainerLeft>
          <Spans Left>TOPICS</Spans>
          <Spans Left>SEARCH</Spans>
        </ContainerLeft>
        <ContainerCenter>
          <Spans Center>GENERAL</Spans>
          <Spans Center>BROWNBAG</Spans>
          <Spans Center>RANDOM</Spans>
          <Spans Center>MUSIC</Spans>
          <Spans Center>ANNOUNCEMENTS</Spans>
        </ContainerCenter>
        <ContainerRight>
          <Spans Right>LOG IN</Spans>
        </ContainerRight>
      </Container>
    </TopBarContainer>
  );
};

/* const TopBar = () => {
  return (
    <div className='top-bar'>
      <div className='container'>
        <div className='container-left'>
          <span>TOPICS</span>
          <span>SEARCH</span>
        </div>
        <div className='container-center'>
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </div>
        <div className='container-right'>
          <span>LOG IN</span>
        </div>
      </div>
    </div>
  );
}; */

export default TopBar;
