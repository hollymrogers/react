import React from 'react'

export default class Numbers extends React.Component {
  render() {
    return (
      <ul>
        {this.props.numbers.map(n => <li> {n} </li>)}
      </ul>
    )
  }
}
