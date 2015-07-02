import React from 'react'
import Router from 'react-router'

import Header from './router/Header.jsx'
import Footer from './router/Footer.jsx'

import Home from './router/Home.jsx'
import Form from './router/Form.jsx'
import About from './router/About.jsx'

var {
  Route,
  RouteHandler,
  DefaultRoute,
} = Router;

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <RouteHandler />
        <Footer />
      </div>
    )
  }
}

var routes = (
  <Route location="history">
    <Route path="/" handler={App}>
      <Route path="form" name="form" handler={Form}/>
      <Route path="about" name="about" handler={About}/>
      <DefaultRoute name="home" handler={Home}/>
    </Route>
  </Route>
);

Router.run(routes,  (Root) => {
  React.render(<Root/>, document.body);
});
