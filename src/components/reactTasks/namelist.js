import React from 'react'

export default class NameList extends React.Component {
  constructor() {
    super()
    this.state = { names: [] }
  }

handleClick() {
    if (this.name.value.length > 0) {
      this.setState({ names: this.state.names.concat(this.name.value) })
      this.name.value = ''
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
     {this.state.names.map(name => <li>{name}</li>)}
        <input ref={input => (this.name = input)} onChange={this.handleChange} />
        <button onClick={this.handleClick.bind(this)}>Add Name</button>
      </div>
    )
  }
}

