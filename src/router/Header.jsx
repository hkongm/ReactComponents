import React from 'react'
import Router from 'react-router'

require('../scss/main.scss')

var {
  Link
} = Router;

export default class Header extends React.Component {
  render() {
    return (
      <header className="site-header">
        <h1 className="logo">
          Logo
        </h1>
        <nav>
          <ul>
            <li><Link to="home">首页</Link></li>
            <li><Link to="about">关于我</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}
