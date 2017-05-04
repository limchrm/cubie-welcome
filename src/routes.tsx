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
import {
  CoupleteDetail,
  FindaDetail,
  LovedaysDetail,
  DdaomDetail,
} from './screens/Detail';
import App from './App';

const PageNotFound = () => <div>Page Not Found</div>;

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Works} />
      <Route path="about" component={About} />
      <Route path="works">
        <IndexRoute component={Works} />
        <Route path="couplete" component={CoupleteDetail} />
        <Route path="finda" component={FindaDetail} />
        <Route path="lovedays" component={LovedaysDetail} />
        <Route path="ddaom" component={DdaomDetail} />
      </Route>
    </Route>
    <Route path="*" component={PageNotFound} />
  </Router>
);
