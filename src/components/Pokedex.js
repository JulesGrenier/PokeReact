import React, { Component } from 'react';
import List from './List';
import '../styles/dexter.scss';
import Navigation from './Navigation';

class Pokedex extends Component {

  componentDidMount(){
    document.title = 'Pokedex';
  }

  render() {
    return (
      <div className='dexter'>
        <h1>Pokedex</h1>
        <Navigation />
        <List {...this.props} parent='pokedex' type='pokemon' />
      </div>
    );
  }
}

export default Pokedex;