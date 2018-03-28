import React from 'react'

export default class Text extends React.Component {
  render() {
    return <p style={this.props.style}>{this.props.children}</p>
  }
}
