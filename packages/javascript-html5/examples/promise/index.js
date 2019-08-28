
import React, { Component } from 'react'

// for + await
const setdely = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolve')
    }, 1000)
  })
}

const foreach = async (arrs) => {
  for (let i = 0; i < arrs.length; i++) {
    console.log(`for ${i}`)
    await setdely().then(j => console.log(`${j}: ${i}`))
  }
}

export default class extends Component {
  render() {

    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
      }, 1000)
    }).then(res => {
      throw new Error('test1')
      console.log('then1')
      return res
    }).then(res => {
      console.log('then2')
      return res
    }).then(res => {
      console.log(res)
    }).catch(err => {
      throw new Error('test2')
      console.log(err)
    }).catch(err => {
      console.log(err)
    })

    foreach([0, 0, 0, 0, 0])
      .then(() => {
        console.log('foreach done')
      })

    return <div />
  }
}
