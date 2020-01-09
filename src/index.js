import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes'
import './styles/globalStyles.css'
import Nav from "./components/Navigation";
// import {Switch} from "react-router-dom";


render(
  <Provider store={store}>
    <Nav/>
    <Routes />
  </Provider>,
  document.getElementById('root'),
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
