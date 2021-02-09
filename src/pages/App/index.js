import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Contact from '../Contact';
import Listing from '../Listing';
import NotFound from '../NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Listing} exact path="/listings" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;