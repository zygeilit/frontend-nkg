import Main from './pages/main'
import Login from './pages/login/index'

export default [
  {
    'path': '/',
    'exact': true,
    'component': Main,
    'loadData': Main.loadData,
    'key': 'home'
  }, {
    'path': '/login',
    'exact': true,
    'component': Login,
    'loadData': Login.loadData,
    'key': 'login'
  }
]
