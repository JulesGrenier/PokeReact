import React, { Component } from 'react';
import '../../styles/berrydex/berry-modal.scss';

class BerryInfos extends Component {

  render() {

    const { berry, isBerryActive, handleModal } = this.props;
    const modalActive = isBerryActive ? 'open' : '';
    const flavorColors = require('../../data/flavor-colors.json');

    return (
      <div id='berry-modal' className={modalActive}>
        <div className='modal'>
          <span className="close" onClick={handleModal}>&times;</span>

          {
            berry &&
            <React.Fragment>
              <div className='modal-header'>
                <img src={require(`../../img/berries/${berry.name}-berry.png`)} alt={berry.name} className="berry-image"/>
                <h2 className='berry-name'>#{berry.id} {berry.name}</h2>

                <div className="berry-flavors">
                  {
                    berry.flavors.filter(flavor => flavor.potency > 0)
                    .map((flavor, idx) =>
                      <span
                        key={idx}
                        className='flavor-name'
                        style={{backgroundColor: flavorColors[flavor.flavor.name]}}
                      >
                        {flavor.flavor.name}
                      </span>
                    )
                  }
                </div>

              </div>

              <div className="modal-body">
                <section className="berry-infos">
                  <p><b>Size :</b> {berry.size}</p>
                  <p><b>Growth time :</b> {berry.growth_time}</p>
                  <p><b>Smoothness :</b> {berry.smoothness}</p>
                  <p><b>Firmness :</b> {berry.firmness.name}</p>
                  <p><b>Soil dryness :</b> {berry.soil_dryness}</p>
                  <p><b>Natural gift power :</b> {berry.natural_gift_power}</p>
                  <p><b>Natural gift type :</b> {berry.natural_gift_type.name}</p>
                  <p><b>Max harvest :</b> {berry.max_harvest}</p>
                </section>                
              </div>
            </React.Fragment>            
          }

        </div>
      </div>
    );
  }
}

export default BerryInfos;