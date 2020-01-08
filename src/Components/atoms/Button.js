
import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div>
    <button onClick={this.props.onClick} style={this.props.style} className={this.props.className} name={this.props.name}>{this.props.title} </button>
            </div>
        )
    }
}