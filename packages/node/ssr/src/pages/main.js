import React from 'react'

export default class Main extends React.Component {
  render() {
    return <div onClick={() => alert(1)}>This is main page!!</div>
  }
}
