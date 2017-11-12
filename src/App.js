import React from 'react'
import { Provider } from 'react-redux';
import { createStore, combineReducers/*, applyMiddleware */} from 'redux';
import * as reducers from './reducers';
import { BrowserRouter as Router, Route, /*Link,*/ browserHistory/*, IndexRoute*/, Switch } from 'react-router-dom';
import './index.css';
import s from './components/styled';
import LeftSideMenu from './partials/LeftSideMenu';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import RegLayout from './layouts/RegLayout';
// import App from './components/App';
// import ErrorPages from './components/ErrorPages';

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
        {/*<IndexRoute component={Home} />*/}
        <Route exact path="/practice" component={Home} />
        <Route exact path="/practice/about" component={About} />
        <Route exact path="/practice/contacts" component={Contact} />
        {/*<Route path="*" component={ErrorPages}/ error=404>*/}
      </s.container>
      <RegLayout>
        <s.menuTitle>Menu</s.menuTitle>
        <LeftSideMenu />
        <hr />
        {/*<IndexRoute component={Home} />*/}
        <Route exact path="/practice" component={Home} />
        <Route exact path="/practice/about" component={About} />
        <Route exact path="/practice/contacts" component={Contact} />
        {/*<Route path="*" component={ErrorPages}/ error=404>*/}
      </RegLayout>
      </Switch>
    </Router>
  </Provider>
);

export default App;