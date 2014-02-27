#!/usr/bin/env node

var PATH_TO_KEY = "key",
    PATH_TO_CERT = "cert";

var fs = require('fs'),
    httpProxy = require('http-proxy');

var options = {
  ssl: {
    key: fs.readFileSync(PATH_TO_KEY, 'utf8'),
    cert: fs.readFileSync(PATH_TO_CERT, 'utf8')
  },
  target : "http://localhost:3000",
  ws: true,
  xfwd: true
};

var server = httpProxy.createProxyServer(options).listen(443);
