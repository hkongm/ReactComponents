import React from 'react'

export default class Buttons extends React.Component {

  closeList() {
    this.props.closeSuggestList()
  }

  render() {
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
