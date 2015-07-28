import React from 'react'

export default class TabBar extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  setCategoryActive(e) {
    let index = e.target.dataset.index
    this.props.onTabChange(index)
  }

  render() {
    // 生成每个标签
    let activeIndex = this.props.activeIndex
    let abc = this.props.category.map((item, index) => {
      return (
        <li className={index == activeIndex ? 'active' : ''}
            key={index}
            data-index={index}
            data-url={item.url}
            onClick={this.setCategoryActive.bind(this)}
            >
          {item.name}
        </li>
      )
    })

    return (
      <div className="tab-bar">
        <ul>
          {abc}
        </ul>
      </div>
    )
  }
}
