
const cronJob = require("cron").CronJob
const request = require('request')
const fs = require('fs')

const c2 = [
  '2-1.php'
]
const c3 = [
  '1-1.php',
  '1-2.php',
  '2-1.php',
  '2-2.php',
  '2-3.php',
  '2-4.php',
  '2-5.php',
  '2-6.php',
  '2-7.php',
  '2-8.php',
  '2-9.php',
  '2-10.php',
  '2-11.php',
  '2-12.php',
  '3-1.php',
  '3-2.php'
]
const c4 = [
  '1-1.php',
  '1-2.php',
  '1-3.php',
  '1-4.php',
  '1-5.php',
  '1-6.php',
  '1-7.php',
  '1-8.php',
  '1-9.php',
  '1-10.php',
  '1-11.php',
  '1-12.php',
  '1-13.php',
  '1-14.php',
  '1-15.php',
  '1-16.php',
  '1-17.php',
  '1-18.php',
  '1-19.php',
  '2-1.php',
  '2-2.php',
  '2-3.php',
  '2-4.php',
  '3-1.php',
  '3-2.php',
  '3-3.php',
  '3-4.php',
  '3-5.php',
  '4-1.php',
  '4-2.php',
  '4-3.php',
  '4-4.php'
]
const c5 = [
  '1-1.php',
  '2-1.php',
  '2-2.php',
  '2-3.php',
  '2-4.php',
  '2-5.php',
  '2-6.php',
  '3-1.php',
  '3-2.php',
  '3-3.php',
  '3-4.php',
  '3-5.php',
  '3-6.php',
  '3-7.php',
  '3-8.php',
  '3-9.php',
  '3-10.php'
]
const c6 = [
  '1-1.php',
  '1-2.php',
  '2-1.php',
  '2-2.php',
  '4-1.php',
  '4-2.php',
  '4-3.php',
  '5-1.php',
  '5-2.php',
  '5-3.php',
  '5-4.php',
  '5-5.php',
  '5-6.php',
  '5-7.php',
  '5-8.php',
  '5-9.php',
  '5-10.php',
  '5-11.php',
  '5-12.php',
  '6-1.php'
]
const c7 = [
  '5-1.php',
  '5-2.php',
  '6-1.php',
  '6-2.php'
]
const c8 = [
  '1-1.php',
  '2-1.php',
  '5-1.php',
  '6-1.php',
  '6-2.php',
  '6-3.php',
  '6-4.php',
  '6-5.php',
  '6-6.php',
  '6-7.php',
  '6-8.php',
  '6-9.php',
  '7-1.php',
  '7-2.php'
]
const c10 = [
  '2-1.php',
  '2-2.php',
  '2-3.php',
  '2-4.php'
]
const c11 = [
  '1-1.php',
  '1-2.php',
  '2-1.php'
]
const c12 = [
  '1-1.php',
  '1-2.php',
  '1-3.php',
  '1-4.php',
  '2-1.php',
  '2-2.php',
  '2-3.php',
  '2-4.php',
  '2-5.php',
  '2-6.php'
]

const g = [ , , c2, c3, c4, c5, c6, c7, c8, , c10, c11, c12 ]

new cronJob('* * * * * *', () => {
  for (i=0; i<100; i++) req()
}, null, true, '')

function req () {
  let i = Math.floor(Math.random() * 10) // 0 - 9
  if (g[i] !== undefined) {
    let cp = g[i][ Math.floor(Math.random() * g[i].length) ]
    request(`https://.cn/${i}/${cp}`, function (error, response, body) {
      try {
        fs.appendFile(`${__dirname}/zxx.log`, `https://.cn/${i}/${cp} ${!body.match(/404/)}\n`, (err) => {})
      } catch (e) {
        fs.appendFile(`${__dirname}/zxx.log`, e, () => {})
      }
    })
  }
}
