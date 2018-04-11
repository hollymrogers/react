import React from 'react'

export default class NameList extends React.Component {
  constructor() {
    super(props);
    this.state = { names: [], name: ' '}

    this.handleChange = this.handleChange.bind(this);

  }

handleChange(event) {
    this.setState({name: event.target.value});
  }

handleClick() {
    if (this.state.value.length > 0) {
      this.setState({ names: this.state.names.push(this.state.name) })
      this.state.name = ''
    }
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
