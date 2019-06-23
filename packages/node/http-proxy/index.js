var fs = require('fs')
var path = require('path')
var http = require('http');
var httpProxy = require('http-proxy');
var dns = require("dns")
var proxyPort = 9000;
// http://stnew03.beisen.com/ux/bscpm/beisen-phoenix-tooltip/1.0.3/iframe.html?selectedKind=beisen-phoenix-tooltip&selectedStory=default
//
// Create your proxy server and set the target in the options.
//
var proxy = httpProxy.createProxyServer({ 'target': `http://localhost:${proxyPort}` }).listen(80); // See (†)

proxy.on('proxyReq', function (proxyReq, req, res, options) {
  proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
});

proxy.on('error', function (err, req, res) {
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end('Something went wrong. And we are reporting a custom error message.');
});

//
// Create your target server
//
http.createServer(function (req, res) {
  const urlPath = req.url.split('?')[0];
  const fileExists = fs.existsSync(urlPath);

  if (fileExists) {
    console.log(213123)
    res.pipe(fs.createReadStream(urlPath));
    return

  } else {

    dns.resolve4('stnew03.beisen.com', function (err, address, family) {
      if (err) {
        return console.log(`dns.resolve4 err, ${err}`);
      }
      console.log(`http://${address[0]}${req.url}`);

      http.get(`http://${address[0]}${req.url}`, function (file) {

        file.setEncoding('utf8');
        let rawData = '';

        file.on('data', (chunk) => { rawData += chunk; });
        file.on('end', () => {
          try {
            const parsedData = JSON.parse(rawData);
            // console.log(parsedData);

            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            // res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
            // res.write(parsedData);
            res.end();
            return 

          } catch (e) {
            console.error(e.message);
          }
        });

      }).on('error', (e) => {
        console.error(`出现错误: ${e.message}`);
      });
    })

  }
}).listen(proxyPort);
