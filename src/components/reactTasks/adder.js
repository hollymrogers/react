import React from 'react'

export default class Adder extends React.Component {
  render() {
    return <div>{this.props.number1 + this.props.number2}</div>
  }
}
