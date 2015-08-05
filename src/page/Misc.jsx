import React from 'react'

import Tag from '../components/Tag.jsx'
import SearchBox from '../components/SearchBox.jsx'
import ATable from '../components/InteractiveTable.jsx'

let dataTags = ['测试','标签数据','又一个标签']

export default class Misc extends React.Component {

  render() {
    return (
      <dl>
        <dt>交互表格</dt>
        <dd><ATable /></dd>
        <dt>搜索窗口</dt>
        <dd><SearchBox /></dd>
        <dt>Tag控件</dt>
        <dd><Tag data={dataTags} /></dd>
      </dl>
    )
  }
}
