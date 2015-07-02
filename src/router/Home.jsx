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
        Home page
      </div>
    )
  }
}
