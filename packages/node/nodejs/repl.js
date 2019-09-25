const repl = require('repl')
const msg = 'message'

process.on('uncaughtException', () => console.log('未捕获异常'))

repl.start('> ').context.m = msg