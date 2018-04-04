import React from 'react'

export default class NameList extends React.Component {
  constructor() {
    super()
    this.state = { names: ['Richard'] }
  }

  render() {
    return (
      <div>
        <ul>{this.state.names.map(name => <li>{name}</li>)}</ul>
        <input ref={input => (this.name = input)} />
        <button onClick={this.handleClick.bind(this)}>Add Name</button>
      </div>
    )
  }

  handleClick() {
    if (this.name.value.length > 0) {
      this.setState({ names: this.state.names.concat(this.name.value) })
      this.name.value = ''
    }
  }
}
