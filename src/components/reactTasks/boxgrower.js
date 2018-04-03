import React from 'react'

export default class BoxGrower extends React.Component {
  constructor() {
    super()
    this.state = { height: 40 }
  }

  render() {
    return (
      <div style={{ background: 'pink', height: this.state.height }}>
        <button onClick={this._handleClick.bind(this)}>Grow</button>
      </div>
    )
  }

  _handleClick() {
    this.setState({ height: this.state.height + 20 })
  }
}
