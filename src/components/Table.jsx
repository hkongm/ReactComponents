import React from 'react'
import Thead from './sub/Thead.jsx'
import Tfoot from './sub/Tfoot.jsx'
import Tr from './sub/Tr.jsx'

export default class Select extends React.Component {

  render() {
    // 生成表格的若干TR
    let trs = this.props.result.map((trData, key) => {
      return <Tr key={key} trData={trData} />
    })

    return (
      <table className="table">
        <caption>{this.props.captionName}</caption>
        <Thead data={this.props.thead}/>
        {trs}
        <Tfoot data={this.props.tfoot}/>
      </table>
    )
  }
}
