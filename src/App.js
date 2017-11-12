import React from 'react'
import { Provider } from 'react-redux';
import { createStore, combineReducers/*, applyMiddleware */} from 'redux';
import * as reducers from './reducers';
import { BrowserRouter as Router, Route, browserHistory, IndexRoute, Switch } from 'react-router-dom';
import './index.css';
import s from './components/styled';
import LeftSideMenu from './partials/LeftSideMenu';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import {CreateProfilePage1, CreateProfilePage2, CreateProfilePage3, CreateProfilePage4} from './pages/CreateProfile';
import CreateProfilePage from './pages/CreateProfile/CreateProfilePage';
import {NotFound} from './pages/Error';
import RegLayout from './layouts/RegLayout';

const reducersCombined=combineReducers(reducers);

let store=createStore(reducersCombined);

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Switch>
        <s.container>
          <s.menuTitle>Menu</s.menuTitle>
          <LeftSideMenu />
          <hr />
          <Route exact path="/practice" component={Home} />
          <Route exact path="/practice/about" component={About} />
          <Route exact path="/practice/contacts" component={Contact} />
        </s.container>
        <Route path='/registration' component={RegLayout}>
          <Route path='/registration/page1' component={CreateProfilePage1} />
          <Route path='/registration/page2' component={CreateProfilePage2} />
          <Route path='/registration/page3' component={CreateProfilePage3} />
          <Route path='/registration/page4' component={CreateProfilePage4} />
        </Route>
        <Route path="*" component={NotFound} error="404" />
        <Route component={NotFound}/>
      </Switch>
    </Router>
  </Provider>
);

export default App;