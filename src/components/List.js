import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Pokemon from './pokedex/Pokemon';
import Berry from './berrydex/Berry';
import '../styles/list.scss';

class List extends Component {

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

    const { type } = this.props;

    if (!url) url = `https://pokeapi.ssd1.ovh/api/v2/${type}/?offset=${offset}&limit=${limit}`;
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
    const { parent } = this.props;
    if(!page || page <= 0 ) this.props.history.replace(`/${parent}/page/1`);
    this.getData();
  }

  render() {

    const { data } = this.state;
    const { parent, type } = this.props;
    const { page } = this.props.match.params;

    return (
      <Fragment>
        {
          data &&
          <Fragment>
            <div className='list'>
              {
                !data.results &&
                <h4 className='waiting-msg'>
                  {`Hhmmm... There is no ${type}`}
                </h4>
              }
              {
                data.results.map((item) => {

                  return (
                    type === 'pokemon'
                    ? <Pokemon key={item.name} pokemon={item} />
                    : <Berry key={item.name} berry={item} />
                  )
                })
              }
            </div>
            <div className="pagination">
              {
                data.previous &&
                <NavLink
                  onClick={() => this.handlePageChange(data.previous)}
                  to={`/${parent}/page/${Number(page) - 1}`}
                  className='prev-page'
                >{"<"}</NavLink>
              }

              <span className='curr-page'>{`Page ${page}`}</span>
              
              {
                data.next &&
                <NavLink
                  onClick={() => this.handlePageChange(data.next)}
                  to={`/${parent}/page/${Number(page) + 1}`}
                  className='next-page'
                >{">"}</NavLink>
              }
            </div>
          </Fragment>
        }
      </Fragment>
    );
  }
}

export default List;