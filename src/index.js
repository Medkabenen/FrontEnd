import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Page from "./components/Page/index";
import Routes from './routes'
import './styles/globalStyles.css'


render(
  <Page>
    <Provider store={store}>
      <Routes />
    </Provider>
  </Page>
  ,
  document.getElementById('root'),
)
