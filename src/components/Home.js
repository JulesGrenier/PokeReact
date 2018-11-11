import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import pokedex from '../img/pokedex.png';
import berry from '../img/berry.png';
import pokeball from '../img/pokeball.png';
import '../styles/home.scss';

class Home extends Component {

  componentDidMount(){
    document.title = 'PokeReact';
  }

  render() {
    return (
      <div id='home'>
        <img src={pokeball} alt="" className='pokeball' />
        <h1>PokeReact</h1>
        <div className="navigation">
          <div className="link-group">          
            <NavLink exact to='/pokedex' className='pokedex-link'><img src={pokedex} alt=""/></NavLink>
            <h2>Pokedex</h2>
          </div>
          <div className="link-group">
            <NavLink exact to='/berrydex' className='berrydex-link'><img src={berry} alt=""/></NavLink>
            <h2>Berrydex</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;