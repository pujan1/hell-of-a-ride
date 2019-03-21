
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./app.scss"

import Home from "./modules/Home";
import Plan from "./modules/Plan"
import Explore from "./modules/Explore";

import Error from "./components/Error";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/plan" component={Plan} />
            <Route path="/explore" component={Explore} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App; 