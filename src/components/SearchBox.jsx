import React from 'react'
import TabBar from './sub/SearchBoxTabBar.jsx'

export default class SearchBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeIndex : 0,
      category : [
        {
          name : '综合',
          url : ''
        },
        {
          name : '文章',
          url : ''
        },
        {
          name : '论坛',
          url : ''
        },
        {
          name : '视频',
          url : ''
        },
        {
          name : '找车',
          url : ''
        }
      ]
    }
  }

  // 改变State中的激活类别
  setCategoryActive(index) {
    this.setState({
      activeIndex : index
    })
  }

  render() {
    console.info('SearchBox Rendered.')
    return (
      <div className="search-box">
        <TabBar {...this.state} onTabChange={this.setCategoryActive.bind(this)} />
        <InputBox />
        <SuggestList />
        <Button />
      </div>
    )
  }
}



class InputBox extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className="input-box">
        <input placeholder="请输入" />
        <i className="clearinput">X</i>
        <button>Go</button>
      </div>
    )
  }
}

class SuggestList extends React.Component {

  render() {
    return (
      <div className="suggest-list">
        <Shortcut />
        <Result />
      </div>
    )
  }
}

class Shortcut extends React.Component {

  render() {
    return (
      <div className="shortcut">
        shortcut list
      </div>
    )
  }
}

class Result extends React.Component {

  render() {
    return (
      <div className="result">
        result list
      </div>
    )
  }
}

class Button extends React.Component {

  render() {
    return (
      <div className="btn-box">
        <div className="btn">我是按钮</div>
      </div>
    )
  }
}
