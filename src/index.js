import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, Provider } from 'react-redux'
// import currentPlayer from './reducers'
import App from './components/App'
import { Router, Route, Switch } from 'react-router'
import './index.css';

const reducersCombined = combineReducers({
  currentPlayer: function(state = undefined, action = {}) {
    switch (action.type) {
      case "PLAYED":
        let player = 1;
        if(this.state.player === 1) {
          player = 2;
        }
        this.setState({...state,player})
        return [
          ...state,
          {
            text: action.text,
            completed: false
          }
        ]
        return Object.assign({}, state, {
          visibilityFilter: action.filter
        });   
      default:
        return state
    }
  }
});

let store = createStore(reducersCombined);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
