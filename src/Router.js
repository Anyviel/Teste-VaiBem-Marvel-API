import React from "react";
import Home from './pages/home';
import Character from './pages/character';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/char-info/:id">
            <Character />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}