import React from 'react';
import Header from '../components/Header';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from '@emotion/styled';
import Login from "../components/Login";
import Home from "../pages/Home/Home";
import PrivateRoute from "../utils/PrivateRoute";
import Dashboard from "../components/Dashboard/index";


export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>


      <Switch>
        <Route path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registraion} />
        <PrivateRoute exact path="/account" component={Dashboard} />
      </Switch>

    </Router>
  )
}

export default Routes;
