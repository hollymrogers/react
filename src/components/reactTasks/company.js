import React from 'react'
import Person from './person'

export default class Company extends React.Component {
  render() {
    return (
      <div>
        <p>Company: {this.props.name}</p>
        {this.props.employees.map(person => <Person person={person} />)}
      </div>
    )
  }
}
