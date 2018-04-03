import React from 'react'

export default class NextName extends React.Component {
  constructor() {
    super()
    this.state = { i: 0 }
  }

  render() {
    return (
      <div>
        <p>{this.props.names[this.state.i]}</p>
        <button onClick={this._handleClick.bind(this)}>Next</button>
      </div>
    )
  }

  _handleClick() {
    if (this.state.i == this.props.names.length - 1) {
      this.setState({ i: 0 })
    } else if (this.state.i < this.props.names.length) {
      this.setState({ i: this.state.i + 1 })
    }
  }
}
