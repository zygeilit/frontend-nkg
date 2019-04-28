this.addEventListener('message', function (event) {
  console.log(`SERVIEWORKER: ${event.data}`)
  // 发消息给页面
  event.source.postMessage('this message is from sw.js, to page');
})

this.clients.matchAll().then(client => {
  client[0].postMessage('this message is from sw.js, to page');
})