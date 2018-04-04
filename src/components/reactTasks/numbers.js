import React from 'react'

export default class Numbers extends React.Component {
  render() {
    const numbers = _.map(this.props.numbers, n => <li> {n}</li>)
    return <ul>{numbers}</ul>
  }
}
