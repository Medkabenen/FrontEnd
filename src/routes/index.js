import React from 'react'
// import CounterContainer from '../containers/CounterContainer'
import Header from '../components/Header'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import styled from '@emotion/styled'
import Login from "../components/Login";
import PrivateRoute from "../utils/PrivateRoute";
import Account from "../components/Account"
import FormikForm from "../components/Registration";
import GetRequest from "../components/GetRequest";

const Container = styled.div`
  text-align: center;
`
export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
      <Container>
        <Header />
        <Switch>
          {/*<Route path="/" component={CounterContainer} />*/}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={FormikForm}/>
          <PrivateRoute exact path="/account" component={Account} />
          <Route exact path="/get" component={GetRequest}/>
        </Switch>
      </Container>
    </Router>
  )
}

export default Routes
