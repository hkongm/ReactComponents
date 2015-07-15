import React from 'react'
import Router from 'react-router'

import Header from './page/Header.jsx'
import Footer from './page/Footer.jsx'

import HomeHandler from './page/Home.jsx'
import FormHandler from './page/Form.jsx'
import TableHandler from './page/Table.jsx'
import MiscHandler from './page/Misc.jsx'
import AboutHandler from './page/About.jsx'

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
      <Route path="misc" name="misc" handler={MiscHandler}/>
      <Route path="about" name="about" handler={AboutHandler}/>
      <DefaultRoute name="home" handler={HomeHandler}/>
    </Route>
  </Route>
);

Router.run(routes,  (Root) => {
  React.render(<Root/>, document.body);
});
