const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

let num = 0;

const something = function () {
  setTimeout(function() {
    console.log(num++)
  }, 200)
}

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running. numCPUs: ${numCPUs}`);
  something();

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {

  console.log(`Worker ${process.pid} started`);
  something();
}
