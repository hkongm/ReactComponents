import React from 'react'
import Buttons from './SearchBoxButtons.jsx'

export default class SuggestList extends React.Component {

  closeSuggestList() {
    this.props.closeSuggestList()
  }

  render() {
    let stateData = this.props.state
    let result = stateData.listData

    // 过滤出直达和综合搜索的数据，用两个数组分开承载
    let shortcutData = result.filter((item)=>{
      return item.tiptype === 1
    })

    let generalData = result.filter((item)=>{
      return item.tiptype === 2
    })
    // 分类标题
    let categoryName = stateData.category[stateData.activeIndex].name

    // 是否显示结果列表
    let className = stateData.isShowList ? 'suggest-list' : 'suggest-list hidden'

    // 根据列表数据判断两个列表和下面按钮是否出现
    let short, general, btn

    if (shortcutData.length !== 0) {
      short =
        <Shortcut
          list={shortcutData}
          categoryName={categoryName} />
    }

    if (generalData.length !== 0) {
      general =
        <General
          list={generalData}
          categoryName={categoryName} />
    }

    if (shortcutData.length !== 0 || generalData.length !== 0) {
      btn =
        <Buttons
          closeSuggestList={this.closeSuggestList.bind(this)}/>
    }

    return (
      <div className={className}>
        {short}
        {general}
        {btn}
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
    // 如果没有数据传入，返回空
    if (this.props.list.length === 0) return <div/>

    let title = this.props.categoryName
    if (title === '综合' || title === '文章') title = '车系'

    return (
      <div className="shortcut">
        直达{title}
        <ListItem list={this.props.list} />
      </div>
    )
  }
}

class General extends React.Component {

  render() {
    // 如果没有数据传入，返回空
    if (this.props.list.length === 0) return <div/>

    let title = this.props.categoryName

    return (
      <div className="general">
        {title}搜索
        <ListItem list={this.props.list} />
      </div>
    )
  }
}
