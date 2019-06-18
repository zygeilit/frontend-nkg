import React from 'react'

export default class Main extends React.Component {
  render() {
    return <div>
      This is main page! <br/>
      <button onClick={() => alert(1)}>alert</button>
    </div>
  }
}
