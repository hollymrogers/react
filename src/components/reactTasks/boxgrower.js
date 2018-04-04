import React from 'react'

export default class BoxGrower extends React.Component {
  constructor() {
    super()
    this.state = { height: 40 }
  }
  handleClick() {
    this.setState({ height: this.state.height + 20 })
  }
  render() {
    return (
      <div style={{ background: 'pink', height: this.state.height }}>
        <button onClick={this.handleClick.bind(this)}>Grow</button>
      </div>
    )
  }
}
