import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import backpack from '../img/backpack.png';
import pokedex from '../img/pokedex.png';
import berry from '../img/berry.png';
import '../styles/navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <nav id='navigation'>
        <NavLink exact to='/'><img src={backpack} alt=""/></NavLink>
        <NavLink to='/pokedex'><img src={pokedex} alt=""/></NavLink>
        <NavLink to='/berrydex'><img src={berry} alt=""/></NavLink>
      </nav>
    );
  }
}

export default Navigation;