import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, combineReducers/*, applyMiddleware */} from 'redux';
import * as reducers from './reducers'
// import App from './components/App'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom'
import './index.css';
import s from './components/styled'

const reducersCombined = combineReducers(reducers);

let store = createStore(reducersCombined);

render((
  <Provider store={store}>
   <Router history = {browserHistory}>
     <s.Container>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contacts" component={Contact}/>
    </s.Container>
   </Router>
  </Provider>
), document.getElementById('root'))

/*<Route exact path = "/" component = {Home}>
   <IndexRoute component = {Home} />
   <Route exact path = "home" component = {Home} />
   <Route exact path = "about" component = {About} />
   <Route exact path = "contact" component = {Contact} />
</Route>*/