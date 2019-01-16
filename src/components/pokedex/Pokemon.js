import React, { Component } from 'react';
import PokemonInfos from './PokemonInfos';
import Loader from '../Loader';

class Pokemon extends Component {

  constructor(props){
    super(props);

    this.state = {
      pokemonInfos: null,
      isPokemonActive: false
    }

    this.getPokemonInfos = this.getPokemonInfos.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  getPokemonInfos(){
    const { pokemon } = this.props;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`, {
      "Access-Control-Allow-Origin": "application/json"
    })
    .then(res => res.json())
    .then(pokemonInfos => this.setState({
      pokemonInfos
    }))
  }

  handleModal(){
    if(document.body.style.overflow === 'hidden') {
      document.body.style.overflow = '';
    }
    else {
      document.body.style.overflow = 'hidden';
    }
    this.setState({
      isPokemonActive: !this.state.isPokemonActive
    })
  }

  componentDidMount(){
    this.getPokemonInfos();
  }
  
  
  render() {

    const { pokemonInfos, isPokemonActive } = this.state;

    return (
      <div className="list-item">
        {
          !pokemonInfos &&
          <Loader />
        }
        {
          pokemonInfos &&
          <div className="item" onClick={this.handleModal}>
            <img src={pokemonInfos.sprites.front_default} alt={pokemonInfos.name} className="item-image pokemon-img"/>
            <h3 className="item-name">
              {pokemonInfos.name}
              <br />
              <span className="item-id">#{pokemonInfos.id}</span>
            </h3>
          </div>
        }
        {
          isPokemonActive &&
          <PokemonInfos
            pokemon={pokemonInfos}
            isPokemonActive={isPokemonActive}
            handleModal={() => this.handleModal()}
          />
        }
      </div>
    );
  }
}

export default Pokemon;