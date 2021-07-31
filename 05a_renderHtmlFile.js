var http = require('http');
var fs = require('fs');

// also showing JAVASCRIPT CLIENT SIDE URL FACIMG....

http.createServer(function(req, res){
console.log('req', req.url)
fs.readFile('demoFile.html', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
})
}).listen(8080)