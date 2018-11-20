import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Pokemon from './Pokemon';
import '../../styles/pokedex/pokemons-list.scss';


class PokemonList extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      data: null
    }

    this.getData = this.getData.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  getData(url){
    const limit = 20;
    let offset = 0;
    let { page } = this.props.match.params;
    if(page){
      offset = (Number(page) -1) * 20;
    }
    else{
      page = 1;
    }

    if (!url) url = `https://pokeapi.ssd1.ovh/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({
        data
      })
    )
  }

  handlePageChange(url){
    window.scrollTo(0,0);
    this.getData(url);
  }
  
  componentDidMount(){
    const { page } = this.props.match.params;
    if(!page || page <= 0 ) this.props.history.replace('/pokedex/page/1');
    this.getData();
  }

  render() {

    const { data } = this.state;
    const { page } = this.props.match.params;

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
                <NavLink
                  onClick={() => this.handlePageChange(data.previous)}
                  to={`/pokedex/page/${Number(page) - 1}`}
                  className='prev-page'
                >{"<"}</NavLink>
              }

              <span className='curr-page'>{`Page ${page}`}</span>
              
              {
                data.next &&
                <NavLink
                  onClick={() => this.handlePageChange(data.next)}
                  to={`/pokedex/page/${Number(page) + 1}`}
                  className='next-page'
                >{">"}</NavLink>
              }
            </div>
          </React.Fragment>
        }
      </React.Fragment>
    );
  }
}

export default PokemonList;