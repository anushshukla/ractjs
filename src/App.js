import React from 'react'
import { Provider } from 'react-redux';
import { createStore, combineReducers/*, applyMiddleware */} from 'redux';
import * as reducers from './reducers';
import { BrowserRouter as Router, Route, browserHistory, IndexRoute, Switch } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import {CreateProfilePage1, CreateProfilePage2, CreateProfilePage3, CreateProfilePage4} from './pages/CreateProfile';
import CreateProfilePage from './pages/CreateProfile/CreateProfilePage';
import {NotFound} from './pages/Error';
import RegLayout from './layouts/RegLayout';
import PacticeLayout from './layouts/PacticeLayout';

const reducersCombined=combineReducers(reducers);

let store=createStore(reducersCombined);

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Switch>
        <PacticeLayout>
          <Route path="/practice/home" component={Home} />
          <Route path="/practice/about" component={About} />
          <Route path="/practice/contacts" component={Contact} />
        </PacticeLayout>
        <RegLayout>
          <IndexRoute component={CreateProfilePage} />
          <Route path='/registration/page1' component={CreateProfilePage1} />
          <Route path='/registration/page2' component={CreateProfilePage2} />
          <Route path='/registration/page3' component={CreateProfilePage3} />
          <Route path='/registration/page4' component={CreateProfilePage4} />
        </RegLayout>
        <Route path="*" component={NotFound} error="404" />
        <Route component={NotFound}/>
      </Switch>
    </Router>
  </Provider>
);

export default App;