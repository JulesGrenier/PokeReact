import React, { Component } from 'react';
import Navigation from './Navigation';
import BerryList from './berrydex/BerryList';
import '../styles/berrydex/berrydex.scss';

class Berrydex extends Component {

  componentDidMount(){
    document.title = 'Berrydex';
  }

  render() {
    return (
      <div id='berrydex'>
        <h1>Berrydex</h1>
        <Navigation />
        <BerryList {...this.props} />
      </div>
    );
  }
}

export default Berrydex;