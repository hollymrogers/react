import React from 'react'

export default class NextName extends React.Component {
  constructor() {
    super()
    this.state = { i: 0 }
  }

  handleClick() {
    if (this.state.i == this.props.names.length - 1) {
      this.setState({ i: 0 })
    } else {
      this.setState({ i: this.state.i + 1 })
    }
  }
  render() {
    return (
      <div>
        <p>{this.props.names[this.state.i]}</p>
        <button onClick={this.handleClick.bind(this)}>Next</button>
      </div>
    )
  }
}
