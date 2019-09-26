const fs = require('fs')
const readline = require('readline')

async function processLineByLine() {
  const fileStream = fs.createReadStream(`../../tests/long-text.md`)

  const rl = readline.createInterface({
    'input': fileStream,
    // 注意：我们使用 crlfDelay 选项将 input.txt 中的所有 CR LF 实例（'\r\n'）识别为单个换行符
    'crlfDelay': Infinity
  })

  for await (const line of rl) {
    console.log(`Line from file: ${line}`)
  }
}

processLineByLine()
