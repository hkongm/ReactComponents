import React from 'react'

export default class Option extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <option>
        {this.props.optionname}
      </option>
    )
  }
}
