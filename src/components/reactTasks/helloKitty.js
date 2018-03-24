import React from 'react'
import Hello from './hello'
import Kitty from './kitty'

export default class HelloKitty extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Kitty />
      </div>
    )
  }
}
