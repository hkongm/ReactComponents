import React from 'react'
import Td from './Td.jsx'

export default class Tr extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {
    // 生成单行若干TD
    let tds = this.props.trData.map((a,b) => {
      return <Td key={b} content={a}/>
    })
    
    return (
      <tr>
        {tds}
      </tr>
    )
  }
}
