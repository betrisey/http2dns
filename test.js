var http2dns = require('./app');
var request = require('request').defaults({'proxy':'http://localhost:53'});

request('http://google.com/');