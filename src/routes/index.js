/*
 Date: 07.01.2020
 Author: Ashley Dunham
*/

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Dashboard from "../components/Cabinet/index";

import Registration from "../components/Forms/Registration";
import Login from "../components/Forms/Login";

import PrivateRoute from "../utils/PrivateRoute";





export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>


      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <PrivateRoute exact path="/account" component={Dashboard} />
      </Switch>

    </Router>
  )
}

export default Routes;
