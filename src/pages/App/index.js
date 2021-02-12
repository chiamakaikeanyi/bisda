import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import PrivateRoute from '../../components/PrivateRoute';
import Home from '../Home';
import Signin from '../Signin';
import Listing from '../Listing';
import NotFound from '../NotFound';
import Admin from '../Admin';

function App() {
  const currentToken = localStorage.getItem('token') !== null && JSON.parse(localStorage.getItem('token'));

  const [authToken, setAuthToken] = useState(currentToken);

  const setToken = data => {
    localStorage.setItem('token', JSON.stringify(data));
    setAuthToken(data);
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
      <Router>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Listing} exact path="/listings" />
          <Route component={Signin} exact path="/sign-in" />
          <PrivateRoute component={Admin} exact path="/admin" />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
