import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import { Contact, Home, Parents } from "./containers";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <div className="App-logo-block">
              <img src="/logo-img.png" className="App-logo" alt="logo" />
              <img src="/logo-txt.png" className="App-logo-txt" alt="logo" />
            </div>
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/collectif">Les parents</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/collectif">
              <Parents />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
