import React from 'react'

export default class Td extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <td>
        {this.props.content}
      </td>
    )
  }
}
