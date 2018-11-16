import React, { Component } from 'react';
import BerryInfos from './BerryInfos';
import Loader from '../Loader';
import '../../styles/berrydex/berry.scss';

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
    fetch(berry.url)
    .then(res => res.json())
    .then(berryInfos => this.setState({
      berryInfos
    }))
  }

  handleModal(){
    if(document.body.style.overflow === 'hidden') {
      document.body.style.overflow = '';
      console.log('show');
    }
    else {
      document.body.style.overflow = 'hidden';
      console.log('hide');
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
      <div className='berry-box'>
        {
          !berryInfos &&
          <Loader />
        }
        {
          berryInfos &&
          <div className="berry" onClick={this.handleModal}>
            <img src={require(`../../img/berries/${berryInfos.name}-berry.png`)} alt={berryInfos.name} className="berry-image"/>
            <h3 className="berry-name">
              {berryInfos.name}
              <br />
              <span className="berry-id">#{berryInfos.id}</span>
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