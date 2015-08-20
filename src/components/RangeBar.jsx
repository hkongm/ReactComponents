import React from 'react'
import Base from './Base.jsx'

export default class RangeBar extends Base {

  constructor(props) {
    super(props)
    this.state = {
      min : 10,
      max : 20,
      step : 1,
      currentValue : 16,
      isDrag : false
    }
    this.barWidth = 0
  }
  // /**
  //  * 输入框内容改变的回调
  //  * @param  {Event}
  //  * @return {void}
  //  */
  // changeHandler(e) {
  //   this.props.change(e.target.value);
  // }

  handleMouseDown() {
    this.setState({
      isDrag: true
    })
  }

  handleMouseUp() {
    this.setState({
      isDrag: false
    })
  }

  handleMouseMove(ev) {
    let x = ev.clientX
    console.log(this.barWidth)
    // this.log('clientx' + ev.clientX)
    // this.log('pagex' + ev.pageX)
    // debugger
  }

  componentDidMount() {
    let bar = React.findDOMNode(this).parentNode
    this.barWidth = Math.floor(bar.getBoundingClientRect().width)
  }

  render() {
    return (
      <div className="range-bar">
        <div className="bar">
          <Pointer data={this.state}
            barWidth={this.barWidth}
            mousedown={this.handleMouseDown.bind(this)}
            mouseup={this.handleMouseUp.bind(this)}
            mousemove={this.handleMouseMove.bind(this)}
           />
          <Scales data={this.state} />
        </div>
        <div className="min">{this.state.min}</div>
        <div className="max">{this.state.max}</div>
      </div>
    )
  }
}

class Scales extends Base {

  render() {

    let scaleNumber = (this.props.data.max - this.props.data.min) / this.props.data.step

    let scales = []

    for (let i = 0; i < scaleNumber; i++) {
      scales.push(<Scale total={scaleNumber} pos={i} />)
    }
    scales.push(<Scale total={scaleNumber} pos={scaleNumber} />)

    return (
      <div>
        {scales}
      </div>
    )
  }
}

class Scale extends Base {
  render() {
    let left = (this.props.pos / this.props.total) * 100 + '%'
    return (
      <div className="scale" style={{left: left}}></div>
    )
  }
}

class Pointer extends Base {

  constructor(props) {
    super(props)
    this.state = {
      left : 0
    }
  }

  handleMouseDown() {
    this.log('handleMouseDown')
    this.props.mousedown()
  }

  handleMouseUp() {
    this.log('handleMouseUp')
    this.props.mouseup()
  }

  handleMouseMove(ev) {
    this.log('handleMouseMove')
    if (this.props.data.isDrag) this.props.mousemove(ev)
  }

  componentDidMount() {
    let data = this.props.data

    this.setState({
      left : ((data.currentValue - data.min) / (data.max - data.min)) * this.props.barWidth + 'px'
    })
  }

  render() {

    return (
      <div className="pointer"
        style={{left: this.state.left}}
        // draggable="true"
        onMouseDown={this.handleMouseDown.bind(this)}
        onMouseMove={this.handleMouseMove.bind(this)}
        onMouseUp={this.handleMouseUp.bind(this)}
        >
        {this.props.data.currentValue}
      </div>
    )
  }
}
