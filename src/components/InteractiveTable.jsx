import React from 'react'
import Base from './Base.jsx'
import data from './InteractiveTableData.json'

export default class InteractiveTable extends Base {

  constructor(props) {
    super(props)
    this.state = data
  }

  // 单元格状态切换方法
  toggleCellState(cell) {
    // 从dom node的data-index中计算出行列（二维数组）
    let node = cell.dataset.index.split('-')
    let row = node[0]
    let col = node[1]

    // 拿出state中的数据body
    let body = this.state.body

    // 取到当前状态
    let cellstatus = body[row][col].status
    // 翻转状态
    if (cellstatus === 0) {
      cellstatus = 1
    } else {
      cellstatus = 0
    }
    // 新状态给临时数组
    body[row][col].status = cellstatus

    // 更新状态到State中
    this.setState({
      body : body
    })
  }

  render() {

    let thead = this.state.columns.map((item, index) => {
      return (<td key={index}>{item}</td>)
    })

    let tbody = this.state.body.map((item, index) => {
      return (
        <Row
          toggleCellState={this.toggleCellState.bind(this)}
          rowdata={item}
          row={index}
        />
      )
    })

    return (
      <div className="interactive-table">
        <caption>{this.state.caption}</caption>
        <table>
          <thead>
            {thead}
          </thead>
          <tbody>
            {tbody}
          </tbody>
        </table>
      </div>
    )
  }
}

class Row extends Base {

  onCellClick(e) {
    // debugger
    this.info('onCellClick')
    this.props.toggleCellState(e.target)
  }

  render() {

    let tr = this.props.rowdata.map((item, index) => {
      let className = item.status === 0 ? '' : 'active' + item.status

      return (
        <td
          className={className}
          onClick={this.onCellClick.bind(this)}
          //给当前元素附加行列信息，共父组件更新State中的数组数据
          data-index={this.props.row + '-' + index}
          data-state={this.status}
          >
          {item.text}
        </td>
      )
    })

    return (
      <tr>
        {tr}
      </tr>
    )
  }
}
