import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import routes from '../routes' 

const App = () => {
  return (
    <BrowserRouter>{routes}</BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
