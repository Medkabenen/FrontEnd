import React from 'react'
// import CounterContainer from '../containers/CounterContainer'
import Header from '../components/Header'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import styled from '@emotion/styled'
import Login from "../components/Login";
import PrivateRoute from "../utils/PrivateRoute";
import Dashboard from "../components/Dashboard/index";

const Container = styled.div`
  text-align: center;
`
export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>


      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/account" component={Dashboard} />
      </Switch>

    </Router>
  )
}

export default Routes
