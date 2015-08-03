import React from 'react'
import Base from '../Base.jsx'

export default class Buttons extends Base {

  constructor(props) {
    super(props)
  }

  closeList() {
    this.props.closeSuggestList()
  }

  render() {
    this.info('Buttons:rendered')
    return (
      <div className="btn-box clearfix">
        <div className="btn clear-history">清除历史纪录</div>
        <div
          className="btn close-list"
          onClick={this.closeList.bind(this)}>
          关闭
        </div>
      </div>
    )
  }
}
