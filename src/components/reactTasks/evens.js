import React from 'react'

export default class EvenNumbers extends React.Component {
  render() {
    const evens = _.filter(this.props.numbers, n => n % 2 === 0)
    const numbersToDisplay = _.map(evens, n => <li>{n}</li>)

    return <ul>{numbersToDisplay}</ul>
  }
}
