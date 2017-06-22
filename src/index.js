import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, combineReducers/*, applyMiddleware */} from 'redux';
import * as reducers from './reducers'
// import App from './components/App'
import LeftSideMenu from './partials/LeftSideMenu'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import { BrowserRouter as Router, Route, Link, browserHistory/*, IndexRoute*//*, Switch*/ } from 'react-router-dom'
import './index.css';
import s from './components/styled'

const reducersCombined=combineReducers(reducers);

let store=createStore(reducersCombined);
// <IndexRoute component={Home} />
// <Route path="*" component={PageNotFound}/>

render((
  <Provider store={store}>
   <Router history={browserHistory}>
     <s.container>
      <s.menuTitle>Menu</s.menuTitle>
      <LeftSideMenu></LeftSideMenu>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contacts" component={Contact}/>
    </s.container>
   </Router>
  </Provider>
), document.getElementById('root'))