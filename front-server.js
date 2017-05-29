var static = require('node-static');
 
// 
// Create a node-static server instance to serve the './public' folder 
// 
var file = new static.Server('./dist'),
    port = 80;

console.info('Front server start:', 'loc.git.io:'+port);

var s = require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        // 
        // Serve files! 
        // 
        file.serve(request, response, function (err, result) {
            if (err) { // There was an error serving the file 
                console.error("Error serving " + request.url + " - " + err.message);
        
                // Respond to the client 
                response.writeHead(err.status, err.headers);
                response.end();
            } else {
                console.log('Req:', request.url);
            }
        });
    }).resume();
}).listen(port);
