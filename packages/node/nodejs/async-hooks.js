
const async_hooks = require('async_hooks')

const eid = async_hooks.executionAsyncId()
const tid = async_hooks.triggerAsyncId()

const asyncHook = async_hooks.createHook({
  'init': (asyncId, type, triggerAsyncId, resource) => {
    console.log(asyncId, type, triggerAsyncId, resource)
  },
  'before': asyncId => {
    console.log(asyncId)
  },
  'after': asyncId => {
    console.log(asyncId)
  },
  'destroy': asyncId => {
    console.log(asyncId)
  },
  'promiseResolve': asyncId => {
    console.log(asyncId)
  }
})

asyncHook.enable()
asyncHook.disable()
