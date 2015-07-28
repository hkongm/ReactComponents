import React from 'react'
import TabBar from './sub/SearchBoxTabBar.jsx'
import InputBox from './sub/SearchBoxInputBox.jsx'
import SuggestList from './sub/SearchBoxSuggestList.jsx'

export default class SearchBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      keyword : '',
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
      ],
      listData : [
        {
          name : '直达名字1',
          wordid : 3531,
          tiptype : 1
        },
        {
          name : '直达名字2',
          wordid : 3531,
          tiptype : 1
        },
        {
          name : '综合名字1',
          wordid : 3531,
          tiptype : 2
        },
        {
          name : '综合名字2',
          wordid : 3531,
          tiptype : 2
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

  // 改变State中的搜索关键字
  setKeyword(text) {
    if (text == null) text = ''
    this.setState({
      keyword : text
    })
  }

  render() {
    console.info('SearchBox Rendered.')
    return (
      <div className="search-box">
        <TabBar
          category={this.state.category}
          activeIndex={this.state.activeIndex}
          onTabChange={this.setCategoryActive.bind(this)} />
        <InputBox onKeywordChange={this.setKeyword.bind(this)} />
        <SuggestList listdata={this.state.listData} />
        <Button />
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
