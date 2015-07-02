import React from 'react'
import Router from 'react-router'

import Header from './router/Header.jsx'
import Footer from './router/Footer.jsx'

import HomeHandler from './router/Home.jsx'
import FormHandler from './router/Form.jsx'
import TableHandler from './router/Table.jsx'
import AboutHandler from './router/About.jsx'

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
      <Route path="form" name="form" handler={FormHandler}/>
      <Route path="table" name="table" handler={TableHandler}/>
      <Route path="about" name="about" handler={AboutHandler}/>
      <DefaultRoute name="home" handler={HomeHandler}/>
    </Route>
  </Route>
);

Router.run(routes,  (Root) => {
  React.render(<Root/>, document.body);
});
