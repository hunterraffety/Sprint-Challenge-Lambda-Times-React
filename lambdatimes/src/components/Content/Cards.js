// imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  console.log(`Props from Cards.js`, props);
  return (
    <div className='cards-container'>
      {props.cards.map(card => (
        <Card card={card} />
      ))}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {};
export default Cards;
