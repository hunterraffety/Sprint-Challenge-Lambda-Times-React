import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      current: 0
    };
    console.log(`coming from before cdm. should be empty`, this.state.images);
  }
  componentDidMount() {
    this.setState({
      images: carouselData
    });
  }

  leftClick = () => {
    this.setState(prevState => ({
      //need prevstate? decrement by one. whoops, need to check if it's at zeroooo
      current: [this.state.images.length - 1]
    }));
  };

  rightClick = () => {
    console.log(`rclick`, this.state.images, this.state.current);
    this.setState(prevState => ({
      //need prevstate? increment by one
      current: [this.state.current + 1]
    }));
  };

  selectedImage = () => {
    console.log(this.state.images[this.state.current]);
    // renders to the page through calling the method.
    return (
      <img
        src={this.state.images[this.state.current]}
        style={{ display: 'block' }}
      />
    );
  };

  render() {
    return (
      <div className='carousel'>
        <div className='left-button' onClick={this.leftClick}>
          {'<'}
        </div>
        {this.selectedImage()}
        <div className='right-button' onClick={this.rightClick}>
          {'>'}
        </div>
      </div>
    );
  }
}
