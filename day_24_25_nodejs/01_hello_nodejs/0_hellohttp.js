// load the built-in Node.js 'http' module
// note that the 'require' command only works in the Node.js runtime
// (it is not available in browser-based JavaScript runtimes)
const http = require('http'); 

// create a new http (web) server
const myServer = http.createServer(function(request, response) {

    console.log("A connection to the server was established");
    
    // tell the browser everything is OK (Status code 200), and the data is in plain text
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    // write the announced text to the body of the page
    response.write('Hello, World!\n');

    // tell the server that all of the response headers and body have been sent
    response.end();

});

// tell the server to listen for connections on a specific port number
myServer.listen(12345);

console.log("The server is running");
