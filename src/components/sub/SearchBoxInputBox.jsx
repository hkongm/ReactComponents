import React from 'react'

export default class InputBox extends React.Component {

  // 输入事件回调
  inputHandler(e) {
    console.info('Input:inputHandler')
    let keyword = e.target.value
    this.props.onKeywordChange(keyword)
  }

  // 清空输入值
  clearInput() {
    console.info('Input:clearInput')
    // 在refs中找到input清空
    this.refs.input.getDOMNode().value=''
    this.props.onKeywordChange()
  }

  render() {
    return (
      <div className="input-box">
        <input
           ref="input"
           placeholder="请输入"
           onInput={this.inputHandler.bind(this)}
        />
        <i className="clearinput"
            onClick={this.clearInput.bind(this)}>
          X
        </i>
        <button>Go</button>
      </div>
    )
  }
}
