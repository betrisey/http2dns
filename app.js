var http = require('http');
var request = require('request');
var port = 53;

http.createServer(function(req, res) {
  console.log(req.url);
  req.pipe(request(req.url)
    .on('error', function(err){
        res.end(err.code);
      }))
      .pipe(res);
}).listen(port, function(){
  console.log('Listening on port ' + port);
});
