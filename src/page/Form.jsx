import React from 'react'

import Select from '../components/Select.jsx'

let selectData = {
  labelName : 'label名字',
  data : ['normal','pc','m','app','apphd']
}

export default class Home extends React.Component {
  render() {
    return (
      <dl>
        <dt>Select控件</dt>
        <dd><Select {...selectData} /></dd>
      </dl>
    )
  }
}
