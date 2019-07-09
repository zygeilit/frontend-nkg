const Promise = require('bluebird')
const execa = require('execa')

Promise.map(
  [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
  (inter) => {

    return execa('npm', ['install'], {
      'stdout': 'inherit',
      'encoding': 'utf8'
    })

    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     console.log(inter)
    //     resolve(true)
    //   }, 2000)
    // })
  },
  { 'concurrency': 3 }
).then(() => {

  console.log('then 2000')
}).catch(err =>
  
  console.log(err)
)
