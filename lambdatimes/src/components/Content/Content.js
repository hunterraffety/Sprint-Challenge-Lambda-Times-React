import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    });
  }

  // this function should take in the tab and update the state with the new tab.
  // this is going to update my state to swap out the current tab.
  changeSelected = tab => {
    this.setState(() => {
      return {
        selected: tab
      };
    });
    // const newTab = tab => {
    // define the values
    // .. !!!what is this here for?!!! uh. red herring?
    //
    //};
  };

  /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selected
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithm for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
  filterCards = () => {
    if (this.state.selected === 'all') {
      return this.state.cards;
    } else {
      return this.state.cards.filter(
        cardMatch => cardMatch.tab === this.state.selected
      );
    }
  };
  // ask why a ternary won't work here. I tried:
  // this.stateSelected === 'all' ? this.state.cards : this.state.cards.filter(cardMatch => cardMatch.tab === this.state.selected)
  // My guess is that return breaks it the way I was writing/messing with it.

  // this is printing out the name of the tab. in c.
  // selectTabHandler = e => {
  //   console.log(e);
  // };
  // !!!this is useless.!!! why is it here? the functionality to switch active tabs is set in "changeSelected", why would we duplicate state updates?

  render() {
    return (
      <div className='content-container'>
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs
          tabs={this.state.tabs}
          selectTabHandler={this.changeSelected}
          selectedTab={this.state.selected}
        />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
