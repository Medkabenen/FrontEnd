/*
 Date: 07.01.2020
 Author: Ashley Dunham
*/

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Dashboard from "../components/Dashboard/index";

import Registration from "../components/Forms/Registration";
import Login from "../components/Forms/Login";

import PrivateRoute from "../utils/PrivateRoute";
<<<<<<< HEAD





=======
import Account from "../components/Account"
import FormikForm from "../components/Registration";
import Search from "../components/Search";
import Logout from "../components/Logout";
// import Nav from "../components/Navigation";
// import GetRequest from "../components/GetRequest";

const Container = styled.div`
  text-align: center;
`
>>>>>>> 14d6049c08ce79349e7b060377d66bc293d843b8
export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
<<<<<<< HEAD


      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <PrivateRoute exact path="/account" component={Dashboard} />
      </Switch>

=======
      <Container>
        <Header />
        <Switch>
          {/*<Route path="/" component={CounterContainer} />*/}
          <Route path="/search" component={Search} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={FormikForm}/>
          <PrivateRoute exact path="/account" component={Account} />
          <PrivateRoute exact path='/logout' component={Logout} />
          {/*<Route exact path="/get" component={GetRequest}/>*/}
        </Switch>
      </Container>
>>>>>>> 14d6049c08ce79349e7b060377d66bc293d843b8
    </Router>
  )
}

export default Routes;
