import JSONP from 'jsonp'
import React from 'react'
import TabBar from './sub/SearchBoxTabBar.jsx'
import InputBox from './sub/SearchBoxInputBox.jsx'
import SuggestList from './sub/SearchBoxSuggestList.jsx'

const SITE_URL = '//sou.m.autohome.com.cn/'
const API_PREFIX = 'api/'
const API_SUFFIX = '/search?q='

export default class SearchBox extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      keyword : '',
      activeIndex : 0,
      isShowList : true,
      category : [
        {
          name : '综合',
          action : 'zonghe',
          api : 'Suggestword'
        },
        {
          name : '文章',
          action : 'wenzhang',
          api : 'Suggestword'
        },
        {
          name : '论坛',
          action : 'luntan',
          api : 'TopicSuggestword'
        },
        {
          name : '视频',
          action : 'shipin',
          api : 'VideoSuggestword'
        },
        {
          name : '找车',
          action : 'zhaoche',
          api : ''
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
    console.info('setKeyword')
    if (text == null) text = ''

    // 拼jsonp的请求串
    let requestURL = SITE_URL + API_PREFIX
    requestURL += this.state.category[this.state.activeIndex].api
    requestURL += API_SUFFIX + text

    JSONP(requestURL, {}, (err, data) => {
      if (data.returncode !== 0) return
      let list = data.result

      // 请求结果塞到state的listData中
      this.setState({
        keyword : text,
        listData : list
      })
    })
  }

  closeSuggestList() {
    this.setState({
      isShowList : false
    })
  }


  // componentDidMount() {
  //   $.get(this.props.source, function(result) {
  //     var lastGist = result[0];
  //     if (this.isMounted()) {
  //       this.setState({
  //         username: lastGist.owner.login,
  //         lastGistUrl: lastGist.html_url
  //       });
  //     }
  //   }.bind(this));
  // }

  render() {
    console.info('SearchBox Rendered.')

    // 计算当前form的action
    let actionURL = SITE_URL + this.state.category[this.state.activeIndex].action

    return (
      <div className="search-box">
        <form method="get" action={actionURL} ref="form">
        <TabBar
          category={this.state.category}
          activeIndex={this.state.activeIndex}
          onTabChange={this.setCategoryActive.bind(this)} />
        <InputBox
          onKeywordChange={this.setKeyword.bind(this)} />
        <SuggestList
          isshow={this.state.isShowList}
          listdata={this.state.listData}
          closeSuggestList={this.closeSuggestList.bind(this)} />
        </form>
      </div>
    )
  }
}
