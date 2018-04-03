import _ from 'lodash'
import React from 'react'

export default class RandomNumberGenerator extends React.Component {
  constructor() {
    super()
    this.state = { number: 0 }
  }

  render() {
    return (
      <div>
        <p>{this.state.number}</p>

        <button onClick={() => this.setState({ number: _.random(0, 100, true) })}>Generate</button>
      </div>
    )
  }
}
