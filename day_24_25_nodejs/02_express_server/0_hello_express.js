// import the express module
const express = require('express');

// create an express app using the module
const app = express();

// define the port number we plan on using for our server
const port = 12345;

// set our our routes

// when the user issues a 'GET' request to '/'
app.get('/', function(request, result) {
  // tell the client what kind of data we plan on sending
  result.type('html');

  // write some content to the client
  result.write(`<p>This is our landing page</p>`);
  result.write(`<a href="/about">About our site</a>`);

  // signify that we are done sending data
  result.end();
});

// when the user issues a 'GET' request to '/about'
app.get('/about', function(request, result) {
  // tell the client what kind of data we plan on sending
  result.type('html');

  // write some content to the client
  result.write(`<p>This is our about page</p>`);
  result.write(`<a href="/">Back to landing page</a>`);

  // signify that we are done sending data
  result.end();
});


// tell the app to listen on our port (this starts the server)
app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})
