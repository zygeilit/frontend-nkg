
import React, { Component } from 'react'

export default class extends Component {

  state = {
    'content': ''
  }

  componentDidMount () {
    if ("geolocation" in navigator) {
      
      this.setState({
        'content': this.state.content + '地理位置服务可用;'
      })

      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          'content': this.state.content + JSON.stringify(position)
        })
      })

      navigator.geolocation.watchPosition((position) => {
        this.setState({
          'content': this.state.content + JSON.stringify(position)
        })
      });

    } else {
      this.setState({
        'content': this.state.content + '地理位置服务不可用;'
      })
    }
  }

  render () {
    return <div>
      Geolocation: <br/>
      { this.state.content }
    </div>
  }
}
