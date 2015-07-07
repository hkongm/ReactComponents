import React from 'react'

export default class Input extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text : '',
      validState : 1 // 1: 初始状态；2：通过；3：未通过
    }
  }

  /**
   * 输入框失去焦点的回调
   * @param  {Event}
   * @return {void}
   */
  blurHandler(e) {

    let validState = this.state.validState

    if (this.state.text.length > 20) {
      // 通过验证，状态为2
      validState = 2
    } else {
      // 未通过验证，状态为3
      validState = 3
    }

    // 情况值的话，验证状态重置为1
    if (e.target.value === '') {
      validState = 1
    }

    this.setState({
      validState : validState
    })

  }

  /**
   * 输入框内容改变的回调
   * @param  {Event}
   * @return {void}
   */
  changeHandler(e) {
    this.setState({
      text : e.target.value,
    })
  }

  render() {
    return (
      <div className="form-input">
        <input
          placeholder="placeholder"
          value={this.state.text}
          onChange={this.changeHandler.bind(this)}
          onBlur={this.blurHandler.bind(this)} />
        <Tip validState={this.state.validState} />
      </div>
    )
  }
}

class Tip extends React.Component {

  render() {

    let className = ''
    let tipText = ''
    switch (this.props.validState) {
      case 1:
        className = 'tip'
        tipText = 'please input the value'
        break;
      case 2:
        className = 'tip valid'
        tipText = 'yes valid.'
        break;
      case 3:
        className = 'tip unvalid'
        tipText = 'no unvalid'
        break;
    }

    return (
      <div className={className}>
        {tipText}
      </div>
    )
  }
}
