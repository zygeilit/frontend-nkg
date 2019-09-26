Node.js 中文网 v12.10.0

assert - 断言
async_hooks - 异步钩子
Buffer - 缓冲器
child_process - 子进程
cluster - 集群
console - 控制台
crypto - 加密
debugger - 调试器
dgram - 数据报
dns - 域名服务器
domain - 域
Error - 异常
events - 事件触发器
fs - 文件系统
global - 全局变量
http - HTTP
http2 - HTTP/2
https - HTTPS
inspector - 检查器
module - 模块
net - 网络
os - 操作系统
path - 路径
perf_hooks - 性能钩子
process - 进程
punycode - 域名代码
querystring - 查询字符串
readline - 逐行读取
repl - 交互式解释器
stream - 流
string_decoder - 字符串解码器
timer - 定时器
tls - 安全传输层
trace_events - 跟踪事件
tty - 终端
url - URL
util - 实用工具
v8 - V8引擎
vm - 虚拟机
worker_threads - 工作线程
zlib - 压缩
关于本文档
用法与示例
C++插件
N-API
命令行选项
ECMAScript 模块
安全策略
诊断报表
国际化支持
废弃的 API
Node.js v12.10.0 文档
返回文档首页 搜索
目录
readline（逐行读取）

Interface 类

'close' 事件
'line' 事件
'pause' 事件
'resume' 事件
'SIGCONT' 事件
'SIGINT' 事件
'SIGTSTP' 事件
rl.close()
rl.pause()
rl.prompt([preserveCursor])
rl.question(query, callback)
rl.resume()
rl.setPrompt(prompt)
rl.write(data[, key])
rl[Symbol.asyncIterator]()
readline.clearLine(stream, dir[, callback])
readline.clearScreenDown(stream[, callback])
readline.createInterface(options)

completer 函数的使用
readline.cursorTo(stream, x[, y][, callback])
readline.emitKeypressEvents(stream[, interface])
readline.moveCursor(stream, dx, dy[, callback])
示例：微型 CLI
示例：逐行读取文件流
readline（逐行读取）#
中英对照提交修改

稳定性: 2 - 稳定
readline 模块提供了一个接口，用于一次一行地读取可读流（例如 process.stdin）中的数据。 它可以使用以下方式访问：

const readline = require('readline');
以下的简单示例说明了 readline 模块的基本用法。

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('你如何看待 Node.js 中文网？', (answer) => {
  // TODO：将答案记录在数据库中。
  console.log(`感谢您的宝贵意见：${answer}`);

  rl.close();
});
一旦调用此代码，Node.js 应用程序将不会终止，直到 readline.Interface 关闭，因为接口在 input 流上等待接收数据。

Interface 类#
中英对照提交修改

新增于: v0.1.104
继承自: <EventEmitter>
readline.Interface 类的实例是使用 readline.createInterface() 方法构造的。 每个实例都关联一个 input 可读流和一个 output 可写流。 output 流用于为到达的用户输入打印提示，并从 input 流读取。

'close' 事件#
中英对照提交修改

新增于: v0.1.98
当发生以下任一情况时会触发 'close' 事件：

调用 rl.close() 方法，且 readline.Interface 实例放弃对 input 流和 output 流的控制；
input 流接收到其 'end' 事件；
input 流接收到 <ctrl>-D 以发信号传输结束（EOT）；
input 流接收到 <ctrl>-C 以发信号 SIGINT，并且 readline.Interface 实例上没有注册 'SIGINT' 事件监听器。
调用监听器函数不传入任何参数。

一旦触发 'close' 事件，则 readline.Interface 实例就完成了。

'line' 事件#
中英对照提交修改

新增于: v0.1.98
每当 input 流接收到行尾输入（\n、 \r 或 \r\n）时就会触发 'line' 事件。 这种情况通常发生在当用户按下 <Enter> 键或 <Return> 键。

调用监听器函数时会带上包含接收到的那一行输入的字符串。

rl.on('line', (input) => {
  console.log(`接收到：${input}`);
});
'pause' 事件#
中英对照提交修改

新增于: v0.7.5
当发生以下任一情况时会触发 'pause' 事件：

input 流被暂停。
input 流未暂停，且接收到 'SIGCONT' 事件。（参阅 'SIGTSTP' 事件和 'SIGCONT' 事件）
调用监听器函数时不传入任何参数。

rl.on('pause', () => {
  console.log('Readline 暂停');
});
'resume' 事件#
中英对照提交修改

新增于: v0.7.5
每当 input 流恢复时，就会触发 'resume' 事件。

调用监听器函数时不传入任何参数。

rl.on('resume', () => {
  console.log('Readline 恢复');
});
'SIGCONT' 事件#
中英对照提交修改

新增于: v0.7.5
当先前使用 <ctrl>-Z（即 SIGTSTP）移入后台的 Node.js 进程使用 fg(1p) 返回到前台时，就会触发 'SIGCONT' 事件。

如果 input 流在 SIGTSTP 请求之前被暂停，则不会触发此事件。

调用监听器函数时不传入任何参数。

rl.on('SIGCONT', () => {
  // `prompt` 将自动恢复流。
  rl.prompt();
});
Windows 上不支持 'SIGCONT' 事件。

'SIGINT' 事件#
中英对照提交修改

新增于: v0.3.0
每当 input 流接收到 <ctrl>-C 输入（通常称为 SIGINT）时，就会触发 'SIGINT' 事件。 如果当 input 流接收到 SIGINT 时没有注册 'SIGINT' 事件监听器，则会触发 'pause' 事件。

调用监听器函数时不传入任何参数。

rl.on('SIGINT', () => {
  rl.question('确定要退出吗？', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});
'SIGTSTP' 事件#
中英对照提交修改

新增于: v0.7.5
每当 input 流接收到 <ctrl>-Z 输入（通常称为 SIGTSTP）时，就会触发 'SIGTSTP' 事件。 如果当 input 流接收到 SIGTSTP 时没有注册 'SIGTSTP' 事件监听器，则 Node.js 进程将被发送到后台。

当使用 fg(1p) 恢复程序时，将触发 'pause' 和 'SIGCONT' 事件。 这可用于恢复 input 流。

如果在将进程发送到后台之前暂停 input，则不会触发 'pause' 和 'SIGCONT' 事件。

调用监听器函数时不传入任何参数。

rl.on('SIGTSTP', () => {
  // 这将覆盖 SIGTSTP 并阻止程序进入后台。
  console.log('捕获 SIGTSTP');
});
Windows 上不支持 'SIGTSTP' 事件。

rl.close()#
中英对照提交修改

新增于: v0.1.98
rl.close() 方法会关闭 readline.Interface 实例，并放弃对 input 和 output 流的控制。 当调用时，将触发 'close' 事件。

调用 rl.close() 不会立即停止 readline.Interface 实例触发的其他事件（包括 'line'）。

rl.pause()#
中英对照提交修改

新增于: v0.3.4
rl.pause() 方法会暂停 input 流，允许稍后在必要时恢复它。

调用 rl.pause() 不会立刻暂停 readline.Interface 实例触发的其他事件（包括 'line'）。

rl.prompt([preserveCursor])#
中英对照提交修改

新增于: v0.1.98
preserveCursor <boolean> 如果为 true，则阻止将光标落点重置为 0。
rl.prompt() 方法将 readline.Interface 实例配置的提示写入 output 中的新一行，以便为用户提供一个可供输入的新位置。

当调用时，如果 input 流已暂停，则 rl.prompt() 将恢复它。

如果 readline.Interface 创建时 output 被设置为 null 或 undefined，则不会写入提示。

rl.question(query, callback)#
中英对照提交修改

新增于: v0.3.3
query <string> 要写入 output 的语句或询问，前置于提示符。
callback <Function> 回调函数，调用时传入用户的输入以响应 query。
rl.question() 方法通过将 query 写入 output 来显示它，并等待用户在 input 上提供输入，然后调用 callback 函数将提供的输入作为第一个参数传入。

当调用时，如果 input 流已暂停，则 rl.question() 将恢复 input 流。

如果 readline.Interface 创建时 output 被设置为 null 或 undefined，则不会写入 query。

用法示例：

rl.question('你最喜欢的食物是什么？', (answer) => {
  console.log(`你最喜欢的食物是 ${answer}`);
});
传给 rl.question() 的 callback 函数不遵循接受 Error 对象或 null 作为第一个参数的经典模式。 调用 callback 时使用提供的答案作为唯一的参数。

rl.resume()#
中英对照提交修改

新增于: v0.3.4
如果 input 流已暂停，则 rl.resume() 方法将恢复它。

rl.setPrompt(prompt)#
中英对照提交修改

新增于: v0.1.98
prompt <string>
rl.setPrompt() 方法设置每当调用 rl.prompt() 时将写入 output 的提示。

rl.write(data[, key])#
中英对照提交修改

新增于: v0.1.98
data <string>
key <Object>

ctrl <boolean> true 表示 <ctrl> 键。
meta <boolean> true 表示 <Meta> 键。
shift <boolean> true 表示 <Shift> 键。
name <string> 按键的名称。
rl.write() 方法将 data 或 key 标识的按键序列写入 output。 仅当 output 是 TTY 文本终端时才支持 key 参数。

如果指定了 key，则忽略 data。

当调用时，如果 input 流已暂停，则 rl.write() 将恢复它。

如果 readline.Interface 创建时 output 被设置为 null 或 undefined，则不会写入 data 和 key。

rl.write('删除这个！');
// 模拟 Ctrl+u 删除先前写入的行。
rl.write(null, { ctrl: true, name: 'u' });
rl.write() 方法将数据写入 readline 的 Interface 的 input，就像它是由用户提供的一样。

rl[Symbol.asyncIterator]()#
中英对照提交修改

版本历史
返回: <AsyncIterator>
创建一个 AsyncIterator 对象，该对象以字符串形式迭代输入流中的每一行。 这个方法允许 readline.Interface 对象使用 for await...of 循环的异步迭代。

输入流中的错误不会被转发。

如果循环以 break， throw 或 return 终止，则 rl.close() 将会被调用。 换句话说，对 readline.Interface 的迭代将会始终完全消费输入流。

性能比不上传统的 'line' 事件的 API。 对于性能敏感的应用程序，请使用 'line'。

async function processLineByLine() {
  const rl = readline.createInterface({
    // ...
  });

  for await (const line of rl) {
    // readline 输入中的每一行将会在此处作为 `line`。
  }
}
readline.clearLine(stream, dir[, callback])#
中英对照提交修改

版本历史
stream <stream.Writable>

dir <number>

-1 - 从光标向左。
1 - 从光标向右
0 - 整行。
callback <Function> 操作完成后调用。

返回: <boolean> 如果 stream 希望调用的代码在继续写入附加的数据之前等待 'drain' 事件触发，则为 false，否则为 true。

readline.clearLine() 方法在由 dir 标识的指定方向上清除给定的 TTY 流的当前行。

readline.clearScreenDown(stream[, callback])#
中英对照提交修改

版本历史
stream <stream.Writable>
callback <Function> 操作完成后调用。
返回: <boolean> 如果 stream 希望调用的代码在继续写入附加的数据之前等待 'drain' 事件触发，则为 false，否则为 true。
readline.clearScreenDown() 方法从光标的当前位置向下清除给定的 TTY 流。

readline.createInterface(options)#
中英对照提交修改

版本历史
options <Object>

input <stream.Readable> 要监听的可读流。此选项是必需的。
output <stream.Writable> 将逐行读取数据写入的可写流。
completer <Function> 用于 Tab 自动补全的可选函数。
terminal <boolean> 如果 input 和 output 应该被视为 TTY，并且写入 ANSI/VT100 转义码，则为 true。 默认值: 实例化时在 output 流上检查 isTTY。
historySize <number> 保留的最大历史记录行数。 要禁用历史记录，请将此值设置为 0。 仅当用户或内部 output 检查将 terminal 设置为 true 时，此选项才有意义，否则根本不会初始化历史记录缓存机制。 默认值: 30。
prompt - 要使用的提示字符串。默认值: '> '。
crlfDelay <number> 如果 \r 与 \n 之间的延迟超过 crlfDelay 毫秒，则 \r 和 \n 将被视为单独的行尾输入。 crlfDelay 将被强制转换为不小于 100 的数字。 可以设置为 Infinity, 这种情况下， \r 后跟 \n 将始终被视为单个换行符（对于使用 \r\n 行分隔符的文件读取可能是合理的）。 默认值: 100。
removeHistoryDuplicates <boolean> 如果为 true, 则当添加到历史列表的新输入行与旧的输入行重复时，将从列表中删除旧行。 默认值: false。
escapeCodeTimeout <number> readline 将会等待一个字符的持续时间（当以毫秒为单位读取模糊键序列时，可以使用输入读取到目前为止形成完整的键序列，并且可以采取额外的输入来完成更长的键序列）。 默认值: 500。
readline.createInterface() 方法创建一个新的 readline.Interface 实例。

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
一旦创建了 readline.Interface 实例，最常见的用例是监听 'line' 事件：

rl.on('line', (line) => {
  console.log(`接收到：${line}`);
});
如果此实例的 terminal 为 true，则若它定义了一个 output.columns 属性则 output 流会获得最佳兼容性，并且如果或当列发生变化时， output 上会触发 'resize' 事件（当它是 TTY 时，process.stdout 会自动执行此操作）。

completer 函数的使用#
中英对照提交修改

completer 函数将用户输入的当前行作为参数，并返回包含以下两个条目的数组：

包含匹配补全输入的数组。
用于匹配的子字符串。
例如：[[substr1, substr2, ...], originalsubstring]。

function completer(line) {
  const completions = '.help .error .exit .quit .q'.split(' ');
  const hits = completions.filter((c) => c.startsWith(line));
  // 如果没有匹配，则显示所有补全。
  return [hits.length ? hits : completions, line];
}
如果 completer 函数接受两个参数，则可以异步地调用：

function completer(linePartial, callback) {
  callback(null, [['123'], linePartial]);
}
readline.cursorTo(stream, x[, y][, callback])#
中英对照提交修改

版本历史
stream <stream.Writable>
x <number>
y <number>
callback <Function> 操作完成后调用。
返回: <boolean> 如果 stream 希望调用的代码在继续写入附加的数据之前等待 'drain' 事件触发，则为 false，否则为 true。
readline.cursorTo() 方法将光标移动到给定的 TTY stream 中的指定位置。

readline.emitKeypressEvents(stream[, interface])#
中英对照提交修改

新增于: v0.7.7
stream <stream.Readable>
interface <readline.Interface>
readline.emitKeypressEvents() 方法使给定的可读流开始触发与接收的输入相对应的 'keypress' 事件。

可选的 interface 指定 readline.Interface 实例，当检测到复制粘贴输入时，将禁用自动补全。

如果 stream 是 TTY，则它必须处于原始模式。

如果 input 是终端，则由其 input 上的任何 readline 实例自动调用。 关闭 readline 实例不会阻止 input 触发 'keypress' 事件。

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY)
  process.stdin.setRawMode(true);
readline.moveCursor(stream, dx, dy[, callback])#
中英对照提交修改

版本历史
stream <stream.Writable>
dx <number>
dy <number>
callback <Function> 操作完成后调用。
返回: <boolean> 如果 stream 希望调用的代码在继续写入附加的数据之前等待 'drain' 事件触发，则为 false，否则为 true。
readline.moveCursor() 方法相对于给定的 TTY stream 中的当前位置移动光标。

示例：微型 CLI#
中英对照提交修改

以下示例说明了如何使用 readline.Interface 类来实现一个小型命令行界面：

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '请输入> '
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`你输入的是：'${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('再见!');
  process.exit(0);
});
示例：逐行读取文件流#
中英对照提交修改

readline 的一个常见用例是每次一行地输入文件。 最简单的方法是利用 fs.ReadStream API 以及 for await...of 循环：

const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // 注意：我们使用 crlfDelay 选项将 input.txt 中的所有 CR LF 实例（'\r\n'）识别为单个换行符。

  for await (const line of rl) {
    // input.txt 中的每一行在这里将会被连续地用作 `line`。
    console.log(`Line from file: ${line}`);
  }
}

processLineByLine();
或者，可以使用 'line' 事件：

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('sample.txt'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  console.log(`文件中的每一行: ${line}`);
});
目前， for await...of 循环可能会慢一点。 如果 async / await 流和速度都是必不可少的，可以应用混合方法：

const { once } = require('events');
const { createReadStream } = require('fs');
const { createInterface } = require('readline');

(async function processLineByLine() {
  try {
    const rl = createInterface({
      input: createReadStream('big-file.txt'),
      crlfDelay: Infinity
    });

    rl.on('line', (line) => {
      // 处理行。
    });

    await once(rl, 'close');

    console.log('文件已处理');
  } catch (err) {
    console.error(err);
  }
})();
