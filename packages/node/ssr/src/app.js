import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles.css'

class App extends React.Component {
  render() {
    return <div>
      Welcome to React SSR
    </div>
  }
}

export default withStyles(styles)(App)
