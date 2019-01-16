import React, { Component } from 'react';
import Navigation from './Navigation';
import List from './List';
import '../styles/dexter.scss';

class Berrydex extends Component {

  componentDidMount(){
    document.title = 'Berrydex';
  }

  render() {
    return (
      <div className='dexter'>
        <h1>Berrydex</h1>
        <Navigation />
        <List {...this.props} parent='berrydex' type='berry' />
      </div>
    );
  }
}

export default Berrydex;