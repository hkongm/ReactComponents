import React from 'react'
import Thead from './sub/Thead.jsx'
import Tfoot from './sub/Tfoot.jsx'
import Tr from './sub/Tr.jsx'

export default class Select extends React.Component {

  render() {
    // 生成表格的主Class，判断风格类型
    let tableClass = 'table '
    if (this.props.theme) {
      tableClass += this.props.theme
    } else {
      tableClass += 'normal'
    }

    // 生成表格的若干TR
    let trs = this.props.result.map((trData, key) => {
      return <Tr key={key} trData={trData} />
    })

    return (
      <table className={tableClass}>
        <caption>{this.props.captionName}</caption>
        <Thead data={this.props.thead}/>
        <tbody>
          {trs}
        </tbody>
        <Tfoot data={this.props.tfoot}/>
      </table>
    )
  }
}
