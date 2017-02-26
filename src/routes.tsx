import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  Link,
  IndexLink,
  hashHistory,
} from 'react-router';
import Works from './screens/Works';
import About from './screens/About';
import App from './App';

const A = () => <div>A</div>;
const B = () => <div>B</div>;
const PageNotFound = () => <div>Page Not Found</div>;

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Works} />
      <Route path="/About" component={About} />
    </Route>
    <Route path="*" component={PageNotFound} />
  </Router>
);