import React, { Component } from 'react';
import Pokemon from './Pokemon';
import '../../styles/pokedex/pokemons-list.scss';


class PokemonList extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      data: null,
      currentPage: 1
    }

    this.getData = this.getData.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  getData(url){
    if (!url) url = 'https://pokeapi.ssd1.ovh/api/v2/pokemon/';
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({
        data
      })
    )
  }

  handlePageChange(url, page){
    window.scrollTo(0,0);
    this.setState({
      currentPage: this.state.currentPage + page
    })
    this.setState({data: null, pokemonsList: null})
    this.getData(url);
  }
  
  componentDidMount(){
    this.getData()
  }

  render() {

    const { data, currentPage } = this.state;

    return (
      <React.Fragment>
        {
          data &&
          <React.Fragment>
            <div id="pokemons-list">
              {
                !data.results &&
                <h4 className='waiting-msg'>Please wait, Team Rocket is trying to steal pokemons!</h4>
              }
              {
                data.results.map((pokemon) => (
                  <Pokemon
                    key={pokemon.name}
                    pokemon={pokemon}
                  />
                ))
              }
            </div>
            <div className="pagination">
              {
                data.previous &&
                <a
                  onClick={() => this.handlePageChange(data.previous, -1)}
                  href='#!'
                  className='prev-page'
                >{"<"}</a>
              }

              <span className='curr-page'>{`Page ${currentPage}`}</span>
              
              {
                data.next &&
                <a
                  onClick={() => this.handlePageChange(data.next, 1)}
                  href='#!'
                  className='next-page'
                >{">"}</a>
              }
            </div>
          </React.Fragment>
        }
      </React.Fragment>
    );
  }
}

export default PokemonList;