import React from 'react'
import Option from './sub/Option.jsx'

export default class Select extends React.Component {
  /**
   * 输入框内容改变的回调，使用props.change访问父级组件Editor的changeTemplate方法
   * @param  {Event}
   * @return {void}
   */
  changeHandler(e) {
    // console.info('DemoSelector组件:changeHandler')
    // this.props.change(e.target.selectedIndex)
    console.info('选择了:' + e.target.selectedIndex)
  }

  render() {
    // console.info('DemoSelector组件:render')
    return (
      <div className="form-select">
        <label>{this.props.labelName}</label>
        <select onChange={this.changeHandler.bind(this)}>
          {
            this.props.data.map((option, idx) => {
              return <Option key={idx} optionname={option} />
            })
          }
        </select>
      </div>
    )
  }
}
