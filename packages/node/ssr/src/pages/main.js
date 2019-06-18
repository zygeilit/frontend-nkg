import React from 'react'
import Header from '../components/header'

export default class Main extends React.Component {
  render() {
    return <div>
      <Header />
      This is main page! <br/>
      <button onClick={() => alert(1)}>alert</button>
    </div>
  }
}
