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

import Cabinet from "./components/Cabinet/index";
import Page from "./components/Page/index";


export const history = createBrowserHistory()

const App = () => {

    return (
        <Provider store={store}>
            <Router history={history}>
                <Page />

                <Switch>
                    <Route path="/" component={Cabinet} />
                    <Route path="/library" component={Cabinet} />
                    <Route exact path="/" component={Cabinet} />
                    <PrivateRoute exact path="/account" component={Cabinet} />
                </Switch>

            </Router>
        </Provider>

    )
}

export default App;
