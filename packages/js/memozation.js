// 性能优化，纯函数中重复的输入使用memozation可避免多余的性能消耗。已空间换时间

function memozation(fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments)
    fn.cache = fn.cache || {}
    return fn.cache[args] ? fn.cache[args] : (fn.cache[args] = fn.apply(this, args))
  }
}

function test () {
  console.log('exec ones')
  return 123 * 432
}

let memodTest = memozation(test)

memodTest()
memodTest()
memodTest()
memodTest()
