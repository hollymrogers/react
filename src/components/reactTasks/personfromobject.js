import React from 'react'

export default class Person extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.person.name}</p>
        <p>Age: {this.props.person.age}</p>
      </div>
    )
  }
}
