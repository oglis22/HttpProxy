const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();

const proxyServer = http.createServer((req, res) => {
  // Entferne die "X-Forwarded-For" und "X-Forwarded-Host" Header
  //delete req.headers['x-forwarded-for'];
  //delete req.headers['x-forwarded-host'];

  proxy.web(req, res, { target: 'http://www.google.com/' });
});

proxyServer.listen(8080, () => {
  console.log('Proxy-Server läuft auf Port 8080');
});
