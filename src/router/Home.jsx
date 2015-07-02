import React from 'react'
import Router from 'react-router'

require('../scss/main.scss')

var {
  Link
} = Router;

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home hoho</h2>
        <nav>
          <Link to="about">关于我</Link>
        </nav>
      </div>
    )
  }
}
