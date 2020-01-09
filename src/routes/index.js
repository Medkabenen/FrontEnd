import React from 'react'
<<<<<<< HEAD
// import CounterContainer from '../containers/CounterContainer'
import Header from '../components/Header'
=======
>>>>>>> jeffrey-desir
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import styled from '@emotion/styled'
import Login from "../components/Login";
import PrivateRoute from "../utils/PrivateRoute";
<<<<<<< HEAD
import Account from "../components/Account"
import FormikForm from "../components/Registration";
import Search from "../components/Search";
// import GetRequest from "../components/GetRequest";
=======
import Dashboard from "../components/Dashboard/index";
>>>>>>> jeffrey-desir

const Container = styled.div`
  text-align: center;
`
export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
<<<<<<< HEAD
      <Container>
        <Header />
        <Switch>
          {/*<Route path="/" component={CounterContainer} />*/}
          <Route path="/search" component={Search} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={FormikForm}/>
          <PrivateRoute exact path="/account" component={Account} />
          {/*<Route exact path="/get" component={GetRequest}/>*/}
        </Switch>
      </Container>
=======


      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/account" component={Dashboard} />
      </Switch>

>>>>>>> jeffrey-desir
    </Router>
  )
}

export default Routes
