import React from 'react'

export default class SuggestList extends React.Component {

  render() {

    let result = this.props.listdata

    // 过滤出直达和综合搜索的数据，用两个数组分开承载
    let shortcutData = result.filter((item)=>{
      return item.tiptype === 1
    })

    let generalData = result.filter((item)=>{
      return item.tiptype === 2
    })

    return (
      <div className="suggest-list">
        <Shortcut list={shortcutData} />
        <General list={generalData} />
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
