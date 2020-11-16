import React from "react";
import Home from './pages/home';
import Character from './pages/character';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; // Biblioteca para gerenciar o 'caminho' entre as páginas

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/char-info/:id"> {/* Página para informações dos personagens */}
            <Character />
          </Route>
          <Route path="/"> {/* É a Página inicial do Projeto */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}