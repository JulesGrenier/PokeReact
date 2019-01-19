import React, { Component } from 'react';
import BerryInfos from './BerryInfos';
import Loader from '../Loader';

class Berry extends Component {

  constructor(props){
    super(props);
    this.state = {
      berryInfos: null,
      isBerryActive: false
    }

    this.getBerryInfos = this.getBerryInfos.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  getBerryInfos(){
    const { berry } = this.props;
    fetch(`https://pokeapi.co/api/v2/berry/${berry.name}`, {
      "Access-Control-Allow-Origin": "application/json"
    })
    .then(res => res.json())
    .then(berryInfos => this.setState({
      berryInfos
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
      isBerryActive: !this.state.isBerryActive
    })
  }

  componentDidMount(){
    this.getBerryInfos();
  }

  render() {

    const { berryInfos, isBerryActive } = this.state;

    return (
      <div className='list-item'>
        {
          !berryInfos &&
          <Loader />
        }
        {
          berryInfos &&
          <div className="item" onClick={this.handleModal}>
            <img src={require(`../../img/berries/${berryInfos.name}-berry.png`)} alt={berryInfos.name} className="item-image berry-img"/>
            <h3 className="item-name">
              {berryInfos.name}
              <br />
              <span className="item-id">#{berryInfos.id}</span>
            </h3>
          </div>
        }
        {
          isBerryActive &&          
          <BerryInfos
              berry={berryInfos}
              isBerryActive={isBerryActive}
              handleModal={() => this.handleModal()}
            />
        }
      </div>
    );
  }
}

export default Berry;