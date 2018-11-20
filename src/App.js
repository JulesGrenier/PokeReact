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
            <Route exact path='/pokedex' render={(props) => <Pokedex {...props} />} />
            <Route exact path='/pokedex/page/:page' render={(props) => <Pokedex {...props} />} />
            <Route exact path='/berrydex' render={(props) => <Berrydex {...props} />} />
            <Route exact path='/berrydex/page/:page' render={(props) => <Berrydex {...props} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
