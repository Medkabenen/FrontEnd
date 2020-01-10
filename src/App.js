/*
 Date: 09.01.2020
 Author: Ashley Dunham, (jffry (dsr))
 Version: 1.0.0 "Swisher"
*/

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

//Utils
import PrivateRoute from "./utils/PrivateRoute";
import store from './store';

//Pages
import Cabinet from "./components/Cabinet/index";
import Library from "./components/Library/index";
import Page from "./components/Page/index";
import Login from "./components/Forms/Login";
import Registration from "./components/Forms/Registration";
import About from "./components/About/index";



export const history = createBrowserHistory()

const App = () => {

    return (
        <Provider store={store}>
            <Router history={history}>
                <Page>
                    <Switch>
                        <Route path="/" component={About} />
                        <Route path="/about" component={About} />
                        <Route path="/login" component={Login} />
                        <Route path="/cabinet" component={Cabinet} />
                        <Route exact path="/" component={Cabinet} />
                        <PrivateRoute exact path="/account" component={Cabinet} />
                    </Switch>
                </Page>
            </Router>
        </Provider>

    )
}

export default App;
