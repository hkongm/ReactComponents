import React from 'react'

import Table from '../components/Table.jsx'
import Select from '../components/Select.jsx'

let data = {
  captionName : '表格名字',
  theme: 'normal',
  thead : ['head1', 'head2', 'head3'],
  tfoot : ['foot1', 'foot2', 'foot3'],
  result : [
    ['row1c1', 'row1c2', 'row1c3'],
    ['row2c1', 'row2c2', 'row2c3'],
    ['row3c1', 'row3c2', 'row3c3']
  ]
}

let selectData = {
  labelName : '表格风格选择',
  data : ['normal', 'business']
}

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tableData : data
    }
  }

  /**
   * 改变主题的回调
   * @param  {String} Select的选择值
   * @return {void}
   */
  changeTheme(v) {
    let tmp = this.state.tableData
    tmp.theme = v
    this.setState({
      tableData : tmp
    })
  }
  
  render() {
    return (
      <dl>
        <dt>Table控件</dt>
        <dd>
          <Select {...selectData} change={this.changeTheme.bind(this)} />
          <Table {...this.state.tableData} />
        </dd>
      </dl>
    )
  }
}
