var port = 53;
if(process.argv[2]) {
	port = process.argv[2];
}

var http2dns = require('./app');
var request = require('request').defaults({'proxy':'http://localhost:' + port});

request('http://google.com/');