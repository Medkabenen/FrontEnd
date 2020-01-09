import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Page from "./components/Page/index";
import Routes from './routes'
import './styles/globalStyles.css'
import Nav from "./components/Navigation";
// import {Switch} from "react-router-dom";


render(
<<<<<<< HEAD
  <Page>
    <Provider store={store}>
      <Routes />
    </Provider>
  </Page>
  ,
=======
  <Provider store={store}>
    <Nav/>
    <Routes />
  </Provider>,
>>>>>>> 14d6049c08ce79349e7b060377d66bc293d843b8
  document.getElementById('root'),
)
