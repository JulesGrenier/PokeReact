import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pokedex from './components/Pokedex';
import Berrydex from './components/Berrydex';
import Home from './components/Home';
import './styles/app.scss';

class App extends Component {

  render() {

    return (
      <div className="app">
        <BrowserRouter basename="/PokeReact">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/pokedex' component={Pokedex} />
            <Route exact path='/berrydex' component={Berrydex} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
