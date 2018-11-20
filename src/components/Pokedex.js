import React, { Component } from 'react';
import PokemonList from './pokedex/PokemonList';
import '../styles/pokedex/pokedex.scss';
import Navigation from './Navigation';

class Pokedex extends Component {

  componentDidMount(){
    document.title = 'Pokedex';
  }

  render() {
    return (
      <div id='pokedex'>
        <h1>Pokedex</h1>
        <Navigation />
        <PokemonList {...this.props} />
      </div>
    );
  }
}

export default Pokedex;