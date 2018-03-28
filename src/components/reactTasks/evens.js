import React from 'react'

export default class EvenNumbers extends React.Component {
  render() {
    const evens = this.props.numbers.filter(n => n % 2 === 0)

    const numbersToDisplay = evens.map(n => <li>{n}</li>)

    return (
      <ul>
        {numbersToDisplay}
      </ul>
    )
  }
}
