// load the built-in Node.js 'http' module
// note that the 'require' command only works in the Node.js runtime
// (it is not available in browser-based JavaScript runtimes)
const http = require('http'); 

// create a new http (web) server
const myServer = http.createServer(function(request, response) {

    console.log("A connection to the server was established");
    console.log("The URL being accessed is", request.url);

    // provide different content based on the URL ("/" route)
    if (request.url == '/') {

        // tell the browser everything is OK (Status code 200), and the data being sent is HTML
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });

        // custom content to display for this 'route'
        response.write(`<p>Landing page</p>`);
        response.write(`<a href="about">About this site</a>`);

        // tell the server that all of the response headers and body have been sent
        response.end();        
    }

    // provide different content based on the URL ("/about" route)
    else if (request.url == '/about') {

        // tell the browser everything is OK (Status code 200), and the data being sent is HTML
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });

        // custom content to display for this 'route'
        response.write(`<p>This is a demo site showing how to use the 'http' module to support multiple routes.  It's not the best way to do this, but it works!</p>`);
        response.write(`<a href="/">Back to landing page</a>`);

        // tell the server that all of the response headers and body have been sent
        response.end();        
    }
    
    // otherwise the route is unknown - generate a 404 (file not found) error for the browser
    else {
        // 404 = file not found http status code
        response.writeHead(404, {
            'Content-Type': 'text/html'
        });

        response.write("File not found");
        response.end();
  }

});

// tell the server to listen for connections on a specific port number
myServer.listen(12345);

console.log("The server is running");
