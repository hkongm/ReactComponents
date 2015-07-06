import React from 'react'
import Option from './sub/Option.jsx'

export default class Select extends React.Component {
  
  /**
   * 输入框内容改变的回调
   * @param  {Event}
   * @return {void}
   */
  changeHandler(e) {
    this.props.change(e.target.value);
  }

  render() {

    // 拼出options
    let options = this.props.data.map((option, idx) => {
      return <Option key={idx} optionname={option} />
    })

    return (
      <div className="form-select">
        <label>{this.props.labelName}</label>
        <select onChange={this.changeHandler.bind(this)}>
          {options}
        </select>
      </div>
    )
  }
}
