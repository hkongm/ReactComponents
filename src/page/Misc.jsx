import React from 'react'

import Tag from '../components/Tag.jsx'

let dataTags = ['测试','标签数据','又一个标签']

export default class Misc extends React.Component {

  render() {
    return (
      <dl>
        <dt>Tag控件</dt>
        <dd><Tag data={dataTags} /></dd>
      </dl>
    )
  }
}
