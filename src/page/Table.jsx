import React from 'react'

import Table from '../components/Table.jsx'

let data = {
  captionName : '表格名字',
  theme : 'business',
  thead : ['head1', 'head2', 'head3'],
  tfoot : ['foot1', 'foot2', 'foot3'],
  result : [
    ['row1c1', 'row1c2', 'row1c3'],
    ['row2c1', 'row2c2', 'row2c3'],
    ['row3c1', 'row3c2', 'row3c3']
  ]
}

export default class Home extends React.Component {
  render() {
    return (
      <dl>
        <dt>Table控件</dt>
        <dd><Table {...data} /></dd>
      </dl>
    )
  }
}
