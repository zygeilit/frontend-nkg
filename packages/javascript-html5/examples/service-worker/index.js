
import React, { Component } from 'react'

export default class extends Component {

  componentDidMount() {

    if ('serviceWorker' in window.navigator) {

       // 接受来自 service worker 的消息
       navigator.serviceWorker.addEventListener('message', function (e) {
        console.log(`PAGE: ${e.data}`)
      })

      navigator.serviceWorker.register('./sw.js', { 'scope': './' })
        .then(function (reg) {
          console.log('success', reg)

          // 发消息给 service worker
          if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage("this message is from page")
          }
        })
        .catch(function (err) {
          console.log('fail', err)
        })
    }

    window.addEventListener('install', function (event) {
      console.log('Service Worker install');
    })
  }

  render () {
    return <div>service-worker</div>
  }
}
