import React from 'react'
import Base from '../Base.jsx'

export default class TabBar extends Base {

  constructor(props) {
    super(props)
  }

  setCategoryActive(e) {
    this.info('TabBar:setCategoryActive')
    let index = e.target.dataset.index
    this.props.onTabChange(index)
  }

  render() {
    this.info('TabBar:rendered')
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
