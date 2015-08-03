import React from 'react'

export default class Base extends React.Component {

  log(message) {
    console.info('[LOG]:' + message)
  }

  info(message) {
    console.info('[INFO]:' + message)
  }

  warn(message) {
    console.info('[WARN]:' + message)
  }
}

Base.defaultProps = {}
