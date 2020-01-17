import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import setAuthToken from './utils/setAuthToken';
// actions
import { loadUser } from './actions/auth'
// components
import Dashboard from './components/dashboard/Dashboard';
import Landing from './components/landing/Landing';
import Navbar from './components/navbar/Navbar';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import PrivateRoute from './components/routing/PrivateRoute';
// redux
import { Provider } from 'react-redux';
import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Switch>
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
