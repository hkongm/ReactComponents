import React from 'react'
import Base from '../Base.jsx'

export default class InputBox extends Base {

  constructor(props) {
    super(props)
  }

  // 输入事件回调
  inputHandler(e) {
    this.info('InputBox:inputHandler')
    let keyword = e.target.value
    this.props.onKeywordChange(keyword)
  }

  // 清空输入值
  clearInput() {
    this.info('InputBox:clearInput')
    // 在refs中找到input清空
    this.refs.input.getDOMNode().value=''
    this.props.onKeywordChange()
  }

  render() {
    this.info('InputBox:rendered')
    return (
      <div className="input-box">
        <input
           ref="input"
           placeholder="请输入"
           name="q"
           autoComplete="off"
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
