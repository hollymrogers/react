import React from 'react'
import PersonFromObject from './personfromobject'

export default class Company extends React.Component {
  render() {
    return (
      <div>
        <p>Company: {this.props.name}</p>
        {this.props.employees.map(person => <PersonFromObject person={person} />)}
      </div>
    )
  }
}
