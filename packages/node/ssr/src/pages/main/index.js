import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import Header from '../../components/header'
import styles from './index.css'

class Main extends React.Component {

  componentWillMount() {
    if (styles._getCss) {
      this.props.context.css.push(styles._getCss())
    }
  }
  
  render() {
    return <div>
      <Header />
      <span className={styles.text}>
        This is main page!
      </span>
      <button onClick={() => alert(1)}>alert</button>
    </div>
  }
}

export default withStyles(styles)(Main)