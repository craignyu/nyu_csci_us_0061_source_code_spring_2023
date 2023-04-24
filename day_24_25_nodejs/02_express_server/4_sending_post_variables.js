// import the express module
const express = require('express');

// create an express app using the module
const app = express();

// create a bodyParser object which lets use parse incoming POST requests
const bodyParser = require('body-parser');

// define the port number we plan on using for our server
const port = 12345;

// tell the app to use the public 'middleware'
// this will allow us to serve public content to the client
// via the 'public' folder
app.use(express.static('public'));

// Use the body-parser middleware to parse the request body for POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// set our our routes

// when the user issues a 'GET' request to '/'
app.get('/', function(request, result) {
  // tell the client what kind of data we plan on sending
  result.type('html');

  // write some content to the client
  result.write(`<p>This is our landing page</p>`);

  // create a form that the user can fill out
  result.write(`
  
  <form method="POST" action="/processform">
    Username: <input type="text" name="username">
    <input type="submit">  
  </form>
  
  `);

  // signify that we are done sending data
  result.end();
});

// when the user issues a 'POST' request to '/processform'
app.post('/processform', function(request, result) {
  // tell the client what kind of data we plan on sending
  result.type('html');

  // extract the 'username' POST variable
  let username = request.body.username;
  result.write(`<p>The username I received was: ${username}</p>`);

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
