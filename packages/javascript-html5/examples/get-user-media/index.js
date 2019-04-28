
import React, { Component } from 'react'

export default class extends Component {

  state = {
    'content': ''
  }

  componentDidMount () {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia

    if (navigator.getUserMedia) {
      navigator.getUserMedia({ 'audio': true, 'video': { 'width': 1280, 'height': 720 } },
          function(stream) {
            var video = document.querySelector('video');
            video.src = window.URL.createObjectURL(stream);
            video.onloadedmetadata = function(e) {
              video.play();
            };
          },
          function(err) {
            this.setState({
              'content': this.state.content + "The following error occurred: " + err.name
            })
          }
      );
    } else {
      this.setState({
        'content': this.state.content + "getUserMedia not supported"
      })
    }
  }

  render () {
    return <div>
      getUserMedia: <br/>
      { this.state.content }
    </div>
  }
}
