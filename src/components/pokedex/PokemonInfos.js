import React, { Component } from 'react';
import '../../styles/modal.scss';

class PokemonInfos extends Component {
  
  render() {

    const { pokemon, isPokemonActive, handleModal } = this.props;
    const modalActive = isPokemonActive ? 'open' : '';
    const typeColors = require('../../data/type-colors.json');

    return (
      <div className={`modal ${modalActive}`}>
        <div className='modal-container'>
          <span className="close" onClick={handleModal}>&times;</span>

          {
            pokemon &&
            <React.Fragment>
              <div className='modal-header'>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="item-image pokemon-img"/>
                <h2 className='item-name'>#{pokemon.id} {pokemon.name}</h2>
                <div className="pokemon-types">
                  {
                    pokemon.types.map((type) => 
                      <span
                        key={type.type.name}
                        className="type-name"
                        style={{backgroundColor: typeColors[type.type.name]}}
                      >
                        {type.type.name}
                      </span>
                    )
                  }
                </div>
              </div>

              <div className="modal-body">
                <section className="pokemon-basic-infos">
                  <h3>Basic infos</h3>
                  <p className='pokemon-basic'>
                    <b>Height : </b>{pokemon.height}
                  </p>
                  <p className='pokemon-basic'>
                    <b>Weight : </b>{pokemon.weight}
                  </p>
                  <p className='pokemon-basic'>
                    <b>Base experience : </b>{pokemon.base_experience}
                  </p>
                </section>

                <section className="pokemon-stats-infos">
                  <h3>Stats</h3>
                  {
                    pokemon.stats.map((stat) => (
                      <p key={stat.stat.name} className='pokemon-stat'>
                        <b>{stat.stat.name} : </b>
                        {stat.base_stat}
                      </p>
                    ))
                  }
                </section>

                <section className="pokemon-abilities-infos">
                  <h3>Abilities</h3>
                  {
                    pokemon.abilities.map((ability) => (
                      <p
                        key={ability.ability.name}
                        className='pokemon-ability'
                      >
                        <b>{ability.ability.name} {ability.is_hidden && '(hidden)'}</b>
                      </p>
                    ))
                  }
                </section>

                <section className="pokemon-moves-infos">
                  <h3>Moves</h3>
                  <div className="pokemon-moves-list">
                    {
                      pokemon.moves.map((move) => (
                        <span
                          key={move.move.name}
                          className='pokemon-move'
                        >
                          {move.move.name}
                        </span>
                      ))
                    }
                  </div>
                </section>
              </div>
            </React.Fragment>            
          }

        </div>
      </div>
    );
  }
}

export default PokemonInfos;