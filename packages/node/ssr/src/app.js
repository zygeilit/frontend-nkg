import React from 'react'
import { Router, Link } from 'react-router-dom'
import styles from './styles.css'

import Main from './pages/main'
import Login from './pages/login'

class App extends React.Component {

  // componentWillMount() {
  //   if (styles._getCss) {
  //     this.props.context.css.push(styles._getCss())
  //   }
  // }

  render() {
    return <div>
      <Router>
        <Link to='/' Component={Main}></Link>
        <Link to='/login' Component={Login}></Link>
      </Router>
      Welcome to React SSR
    </div>
  }
}

export default App
