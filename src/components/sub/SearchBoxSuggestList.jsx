import React from 'react'
import Buttons from './SearchBoxButtons.jsx'

export default class SuggestList extends React.Component {

  closeSuggestList() {
    this.props.closeSuggestList()
  }

  render() {

    let result = this.props.listdata

    // 过滤出直达和综合搜索的数据，用两个数组分开承载
    let shortcutData = result.filter((item)=>{
      return item.tiptype === 1
    })

    let generalData = result.filter((item)=>{
      return item.tiptype === 2
    })

    // 是否显示结果列表
    let className = this.props.isshow ? 'suggest-list' : 'suggest-list hidden'
    return (
      <div className={className}>
        <Shortcut list={shortcutData} />
        <General list={generalData} />
        <Buttons
          closeSuggestList={this.closeSuggestList.bind(this)}/>
      </div>
    )
  }
}

class ListItem extends React.Component {

  render() {
    let lis = this.props.list.map((item, index)=>{
      return (<li key={index}>{item.name}<i>+</i></li>)
    })

    return (
      <ul>
        {lis}
      </ul>
    )
  }
}

class Shortcut extends React.Component {

  render() {

    return (
      <div className="shortcut">
        直达
        <ListItem list={this.props.list} />
      </div>
    )
  }
}

class General extends React.Component {

  render() {
    return (
      <div className="general">
        综合搜索
        <ListItem list={this.props.list} />
      </div>
    )
  }
}
