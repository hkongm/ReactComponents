import React from 'react'

export default class Buttons extends React.Component {

  render() {
    return (
      <div className="btn-box clearfix">
        <div className="btn clear-history">清除历史纪录</div>
        <div className="btn close-list">关闭</div>
      </div>
    )
  }
}
