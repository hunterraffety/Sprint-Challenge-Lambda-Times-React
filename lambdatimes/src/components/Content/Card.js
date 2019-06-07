// imports
import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  console.log(`Props from Card.js`, props);
  return (
    <div className='card'>
      <div className='headline'>{props.card.headline}</div>
      <div className='author'>
        <div className='img-container'>
          <img src={props.card.img} alt='alt' />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  cards: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired
  })
};
export default Card;
