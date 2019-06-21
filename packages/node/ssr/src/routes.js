import Login from './pages/login'
import App from './app'

export default [
  {
    'path': '/',
    'exact': true,
    'component': App,
    'loadData': App.loadData,
    'key': 'app',
  }, {
    'path': '/login',
    'exact': true,
    'component': Login,
    'loadData': Login.loadData,
    'key': 'login'
  }
]
