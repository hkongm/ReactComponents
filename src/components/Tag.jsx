import React from 'react'

export default class Tag extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tags : ['abc','xyz']
    }
  }

  submitHander(e) {
    let newTags = this.state.tags
    newTags.push(e.target[0].value)
    this.setState({
      tags : newTags
    })
  }

  removeTag(index) {
    let newTags = this.state.tags
    delete newTags[index]
    this.setState({
      tags : newTags
    })
  }

  render() {

    var tags = this.state.tags.map((text, index) => {
      return <SingleTag index={index} text={text} removeTag={this.removeTag.bind(this)} />
    });

    return (
      <div className="tags">
        {tags}
        <form className="input-box"
          onSubmit={this.submitHander.bind(this)} >
          <div className="input-group">
            <input />
            <button className="input-group-addon">添加</button>
          </div>
        </form>
      </div>
    )
  }
}

class SingleTag extends React.Component {

  removeTag() {
    this.props.removeTag(this.props.index)
  }

  render() {
    return (
      <div className="tag"
        key={this.props.index}>
        {this.props.text}
        <span
          className="clear"
          onClick={this.removeTag.bind(this)}>X</span>
      </div>
    )
  }
}
