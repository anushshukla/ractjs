import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, Provider } from 'react-redux'
import * as reducers from './reducers'
import App from './components/App'
// import { Router, Route, Switch } from 'react-router'
import './index.css';
console.log(reducers);
const reducersCombined = combineReducers(reducers);
console.log(reducersCombined);
let store = createStore(reducersCombined);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
