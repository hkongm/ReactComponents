import React from 'react'
import Router from 'react-router'

import Home from './router/Home.jsx'
import About from './router/About.jsx'

var {
  Route,
  RouteHandler,
  DefaultRoute,
} = Router;

var App = React.createClass({
  render() {
    return (
      <div>
        <RouteHandler/>
      </div>
    )
  }
});

var routes = (
  <Route location="history">
    <Route path="/" handler={App}>
      <Route path="about" name="about" handler={About}/>
      <DefaultRoute handler={Home}/>
    </Route>
  </Route>
);


Router.run(routes,  (Root) => {
  React.render(<Root/>, document.body);
});
