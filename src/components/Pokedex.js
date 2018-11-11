import React, { Component } from 'react';
import PokemonList from './pokedex/PokemonList';
import '../styles/pokedex/pokedex.scss';
import Navigation from './Navigation';

class Pokedex extends Component {

  componentDidMount(){
    document.title = 'Pokedex - PokeReact';
  }

  render() {
    return (
      <div id='pokedex'>
        <h1>Pokedex</h1>
        <Navigation />
        <PokemonList />
      </div>
    );
  }
}

export default Pokedex;