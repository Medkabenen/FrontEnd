import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import styled from '@emotion/styled'
import Login from "../components/Forms/Login";
import PrivateRoute from "../utils/PrivateRoute";
import Cabinet from "../components/Cabinet/index";

const Container = styled.div`
  text-align: center;
`
export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>


      <Switch>
        <Route path="/" component={Cabinet} />
        <Route path="/dashboard" component={Cabinet} />
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/account" component={Cabinet} />
      </Switch>

    </Router>
  )
}

export default Routes
