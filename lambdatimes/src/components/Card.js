import React from 'react';
import styled, { css } from 'styled-components';

const CardsContainer = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const Card = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
}; ${props =>
  props.card &&
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

const CardDisplay = () => {
  return <CardsContainer />;
};

export default CardDisplay;
