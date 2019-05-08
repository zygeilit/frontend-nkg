
import React, { Component } from 'react'

export default class extends Component {

  componentDidMount() {

    this.receiveTimes = 0

    if ('EventSource' in window) {
      let source = new EventSource(`http://localhost:9010/event-source`)

      source.addEventListener('open', event => {
        console.log(`EventSource open`)
      }, false)

      source.addEventListener('message', event => {
        this.receiveTimes = this.receiveTimes + 1
        console.log(`EventSource message`)
        console.log(event.data)
        console.log(this.receiveTimes)

        if (this.receiveTimes == 5) {
          console.log(`EventSource closed`)
          source.close()
        }
      }, false)

      source.addEventListener('error', event => {
        console.log(`EventSource error`)
      }, false);

      source.addEventListener('customfoo', event => {
        console.log(`EventSource customfoo`)
        console.log(event.data)
      }, false);
    }
  }

  render () {
    return <div>EventSource</div>
  }
}
