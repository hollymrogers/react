import React from 'react'

export default class BoldEvenNumbers extends React.Component {
  render() {
    return (
      <ul>
        {this.props.numbers.map(n => {
          if (n % 2 === 0) {
            return (
              <li>
                <b> {n} </b>
              </li>
            )
          }
          return <li> {n} </li>
        })}
      </ul>
    )
  }
}
