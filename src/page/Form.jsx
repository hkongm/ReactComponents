import React from 'react'

import Select from '../components/Select.jsx'
import Input from '../components/Input.jsx'

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
        <dt>Input控件</dt>
        <dd><Input /></dd>
      </dl>
    )
  }
}
