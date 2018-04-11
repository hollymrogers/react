import React from 'react'

export default class NameList extends React.Component {
  constructor() {
    super()
    this.state = { names: [], name: ' '}
  }

handleClick() {
    if (this.state.value.length > 0) {
      this.setState({ names: this.state.names.concat(this.state.value) })
      this.state.value = ''
    }
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <form>
     {this.state.names.map(name => <li>{name}</li>)}
        <input type="text" name={this.state.name} onChange={this.handleChange}/>
        <button onClick={this.handleClick.bind(this)}>Add Name</button>
      </form>
    )
  }
}

