
import React, { Component } from 'react'
import './index.scss'

export default class extends Component {
  render() {
    return <div className="flex-form">
      <div className="flex-from__row">
        <span className="flex-from__row-column">
          <label>111111111111111111111111111111111111111111111111111111111111111111111</label>
          <span>@</span>
        </span>
        <span className="flex-from__row-column">
          <input></input>
        </span>
      </div>
      <div className="flex-from__row">
        <span className="flex-from__row-column">
          <label>111111111111111111111111111111111111111111111111111111111111111111111</label>
        </span>
        <span className="flex-from__row-column">
          <input></input>
        </span>
      </div>
      <div className="flex-from__row">
        <span className="flex-from__row-column">
          <label>111111111</label>
          <span>@</span>
        </span>
        <span className="flex-from__row-column">
          <input></input>
        </span>
      </div>
    </div>
  }
}
