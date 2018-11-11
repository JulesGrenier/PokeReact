import React, { Component } from 'react';
import Berry from './Berry';
import '../../styles/berrydex/berries-list.scss';

class BerryList extends Component {

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
    if (!url) url = 'https://pokeapi.co/api/v2/berry/';
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({
        data
      })
    )
  }

  handlePageChange(url, page){
    this.setState({
      currentPage: this.state.currentPage + page
    })
    this.setState({data: null, pokemonsList: null})
    this.getData(url);
  }

  componentDidMount(){
    this.getData();
  }

  render() {

    const { data } = this.state;

    return (
      <React.Fragment>
        {
          data &&
          <React.Fragment>
            <div id="berries-list">
              {
                !data.results &&
                <h4 className='waiting-msg'>Hhhmm... There is no berry</h4>
              }
              {
                data.results.map((berry) => (
                  <Berry
                    key={berry.name}
                    berry={berry}
                  />
                ))
              }
            </div>
            {/* <div className="pagination">
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
            </div> */}
          </React.Fragment>
        }
      </React.Fragment>
    );
  }
}

export default BerryList;