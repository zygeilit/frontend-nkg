import React from 'react'
import { Route } from 'react-router-dom'

import Main from './pages/main'
import Login from './pages/login'

export default (
  <div>
    <Route path='/' exact component={Main}></Route>
    <Route path='/login' exact component={Login}></Route>
  </div>
)
